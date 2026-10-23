"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Web Audio API refs for seamless, gapless looping
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const isWebAudioLoadedRef = useRef(false);
  const shouldPlayOnLoadRef = useRef(false);

  // Fallback HTML5 Audio element ref
  const fallbackAudioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize Web Audio Context and load ambient-passing.mp3
  const initWebAudio = useCallback(async () => {
    if (typeof window === "undefined") return;

    try {
      if (!audioCtxRef.current) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextClass) return;

        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.connect(ctx.destination);
        gainNodeRef.current = gainNode;
      }

      if (audioCtxRef.current.state === "suspended") {
        await audioCtxRef.current.resume();
      }

      if (!audioBufferRef.current && !isWebAudioLoadedRef.current) {
        const res = await fetch("/Music/ambient-passing.mp3");
        const arrayBuffer = await res.arrayBuffer();
        const decodedBuffer = await audioCtxRef.current.decodeAudioData(arrayBuffer);
        audioBufferRef.current = decodedBuffer;
        isWebAudioLoadedRef.current = true;

        // If music was requested while loading buffer, start now
        if (shouldPlayOnLoadRef.current) {
          shouldPlayOnLoadRef.current = false;
          playWebAudio(true);
        }
      }
    } catch (err) {
      console.warn("Web Audio API init / decode failed, falling back to HTML5 audio:", err);
    }
  }, []);

  // Web Audio playback with sample-accurate seamless looping
  const playWebAudio = (withGentleRamp = true) => {
    const ctx = audioCtxRef.current;
    const buffer = audioBufferRef.current;
    const gainNode = gainNodeRef.current;

    if (!ctx || !buffer || !gainNode) return false;

    try {
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Stop previous source if playing
      if (sourceNodeRef.current) {
        try {
          sourceNodeRef.current.stop();
          sourceNodeRef.current.disconnect();
        } catch {
          // ignore already stopped
        }
        sourceNodeRef.current = null;
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true; // 100% gapless, sample-accurate loop
      source.connect(gainNode);

      const now = ctx.currentTime;
      gainNode.gain.cancelScheduledValues(now);

      if (withGentleRamp) {
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(1.0, now + 2.0); // smooth 2s ramp
      } else {
        gainNode.gain.setValueAtTime(1.0, now);
      }

      source.start(0);
      sourceNodeRef.current = source;
      setIsPlaying(true);
      return true;
    } catch (err) {
      console.warn("Error starting Web Audio source:", err);
      return false;
    }
  };

  const stopWebAudio = () => {
    const ctx = audioCtxRef.current;
    const gainNode = gainNodeRef.current;

    if (gainNode && ctx) {
      try {
        const now = ctx.currentTime;
        gainNode.gain.cancelScheduledValues(now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.15);
        setTimeout(() => {
          if (sourceNodeRef.current) {
            try {
              sourceNodeRef.current.stop();
              sourceNodeRef.current.disconnect();
            } catch {
              // ignore
            }
            sourceNodeRef.current = null;
          }
        }, 160);
      } catch {
        // ignore
      }
    }
    setIsPlaying(false);
  };

  // Fallback playback via HTML5 Audio element
  const playFallbackAudio = (withGentleRamp = true) => {
    const audio = fallbackAudioRef.current;
    if (!audio) return;

    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    if (withGentleRamp) {
      audio.volume = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            let currentVol = 0;
            fadeIntervalRef.current = setInterval(() => {
              if (!audio) {
                if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
                return;
              }
              currentVol += 0.05;
              if (currentVol >= 1.0) {
                audio.volume = 1.0;
                if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
              } else {
                audio.volume = Math.min(1.0, currentVol);
              }
            }, 80);
          })
          .catch((err) => {
            console.warn("Fallback background music autoplay blocked:", err);
            setIsPlaying(false);
          });
      }
    } else {
      audio.volume = 1.0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn("Fallback audio play error:", err);
            setIsPlaying(false);
          });
      }
    }
  };

  const stopFallbackAudio = () => {
    const audio = fallbackAudioRef.current;
    if (!audio) return;

    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    audio.pause();
    setIsPlaying(false);
  };

  // Unified start/stop controllers
  const startMusic = (withGentleRamp = true) => {
    // If Web Audio buffer is ready, use high-fidelity seamless engine
    if (isWebAudioLoadedRef.current && audioBufferRef.current) {
      const ok = playWebAudio(withGentleRamp);
      if (ok) return;
    }

    // If Web Audio is currently fetching/decoding, flag to start as soon as it's decoded
    if (audioCtxRef.current && !isWebAudioLoadedRef.current) {
      shouldPlayOnLoadRef.current = true;
    }

    // Also start fallback HTML5 audio in parallel if Web Audio isn't ready
    playFallbackAudio(withGentleRamp);
  };

  const stopMusic = () => {
    shouldPlayOnLoadRef.current = false;
    stopWebAudio();
    stopFallbackAudio();
  };

  // Toggle button handler
  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      // Ensure audio context is initialized / resumed on user click
      initWebAudio();
      startMusic(false); // Immediate full-volume ON when user manually clicks toggle
    }
  };

  useEffect(() => {
    // Preload audio and initialize AudioContext on user first interaction in preloader
    const handleExperienceSelected = (e: Event) => {
      const customEvent = e as CustomEvent<{ withSound?: boolean }>;
      if (customEvent.detail?.withSound !== false) {
        initWebAudio();
        if (fallbackAudioRef.current) {
          fallbackAudioRef.current.load();
        }
      }
    };

    // When preloader finishes, begin seamless background ambient music
    const handlePreloaderFinished = (e: Event) => {
      const customEvent = e as CustomEvent<{ withSound?: boolean }>;
      const shouldPlayWithSound = customEvent.detail?.withSound !== false;

      setIsReady(true);

      if (shouldPlayWithSound) {
        startMusic(true);
      }
    };

    window.addEventListener("sunaulo:experience-selected", handleExperienceSelected);
    window.addEventListener("sunaulo:preloader-finished", handlePreloaderFinished);

    return () => {
      window.removeEventListener("sunaulo:experience-selected", handleExperienceSelected);
      window.removeEventListener("sunaulo:preloader-finished", handlePreloaderFinished);
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      if (sourceNodeRef.current) {
        try {
          sourceNodeRef.current.stop();
          sourceNodeRef.current.disconnect();
        } catch {
          // ignore
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, [initWebAudio]);

  return (
    <>
      {/* Fallback hidden HTML5 audio element pointing to ambient-passing.mp3 */}
      <audio
        ref={fallbackAudioRef}
        loop
        preload="auto"
        aria-hidden="true"
      >
        <source src="/Music/ambient-passing.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Music Toggle (ON / OFF) at bottom-left */}
      {isReady && (
        <div className="fixed bottom-5 left-4 sm:left-5 z-40 select-none animate-preloader-in">
          <button
            onClick={toggleMusic}
            type="button"
            aria-label={isPlaying ? "Turn background music OFF" : "Turn background music ON"}
            title={isPlaying ? "Music: ON (Click to turn OFF)" : "Music: OFF (Click to turn ON)"}
            className={`group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-2 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer active:scale-95 ${
              isPlaying
                ? "bg-black/80 border border-amber-500/70 hover:border-amber-400 text-white shadow-amber-900/40 ring-1 ring-amber-500/30"
                : "bg-black/65 border border-white/20 hover:border-white/40 text-stone-300 hover:text-white"
            }`}
          >
            {/* Visual Equalizer when ON / Muted Speaker when OFF */}
            {isPlaying ? (
              <div className="flex items-end gap-0.5 h-3.5 w-3.5 py-0.5" aria-hidden="true">
                <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-duration:700ms]" style={{ height: "60%" }} />
                <span className="w-1 bg-amber-300 rounded-full animate-bounce [animation-duration:550ms] [animation-delay:150ms]" style={{ height: "100%" }} />
                <span className="w-1 bg-amber-500 rounded-full animate-bounce [animation-duration:850ms] [animation-delay:300ms]" style={{ height: "45%" }} />
              </div>
            ) : (
              <svg className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            )}

            {/* Clear Toggle ON / OFF Label */}
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide">
              <span>Music:</span>
              <span className={isPlaying ? "text-amber-400 font-bold" : "text-stone-400"}>
                {isPlaying ? "ON" : "OFF"}
              </span>
            </div>
          </button>
        </div>
      )}
    </>
  );
}
