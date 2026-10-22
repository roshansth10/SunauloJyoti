"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start music at full volume (1.0), with smooth initial ramp
  const startMusic = (withGentleRamp = true) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    if (withGentleRamp) {
      audio.volume = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            // Smoothly ramp up to 100% full volume over 2 seconds
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
            console.warn("Background music autoplay was blocked:", err);
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
            console.warn("Audio play error:", err);
            setIsPlaying(false);
          });
      }
    }
  };

  // Stop music immediately on toggle OFF
  const stopMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    audio.pause();
    setIsPlaying(false);
  };

  // Direct ON / OFF toggle on click
  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic(false); // Instant full volume ON
    }
  };

  useEffect(() => {
    // Listen for preloader completion event
    const handlePreloaderFinished = (e: Event) => {
      const customEvent = e as CustomEvent<{ withSound?: boolean }>;
      const shouldPlayWithSound = customEvent.detail?.withSound !== false;

      setIsReady(true);

      if (shouldPlayWithSound) {
        // Start slow-time-noir-film music at full volume
        startMusic(true);
      }
    };

    // Preload audio when user interacts with initial screen
    const handleExperienceSelected = (e: Event) => {
      const customEvent = e as CustomEvent<{ withSound?: boolean }>;
      if (customEvent.detail?.withSound && audioRef.current) {
        audioRef.current.load();
      }
    };

    window.addEventListener("sunaulo:preloader-finished", handlePreloaderFinished);
    window.addEventListener("sunaulo:experience-selected", handleExperienceSelected);

    return () => {
      window.removeEventListener("sunaulo:preloader-finished", handlePreloaderFinished);
      window.removeEventListener("sunaulo:experience-selected", handleExperienceSelected);
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, []);

  return (
    <>
      {/* Hidden audio element pointing to slow-time-noir-film */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        aria-hidden="true"
      >
        <source src="/Music/slow-time-noir-film.mp3" type="audio/mpeg" />
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
