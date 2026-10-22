"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type PreloaderState = "prompt" | "playing" | "fading" | "closed";

export default function Preloader() {
  const [state, setState] = useState<PreloaderState>("prompt");
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Lock scroll while preloader is active
  useEffect(() => {
    if (state !== "closed") {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [state]);

  // Safety fallback: once playing, dismiss after 11 seconds if not already finished
  useEffect(() => {
    if (state === "playing") {
      timerRef.current = setTimeout(() => {
        handleDismiss();
      }, 11000);

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [state]);

  const handleStart = (withSound: boolean) => {
    setIsMuted(!withSound);
    setState("playing");

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("sunaulo:experience-selected", {
          detail: { withSound },
        })
      );
    }

    if (videoRef.current) {
      videoRef.current.muted = !withSound;
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay blocked or failed:", err);
          if (withSound && videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => handleDismiss());
          }
        });
      }
    }

    if (bgVideoRef.current) {
      bgVideoRef.current.currentTime = 0;
      bgVideoRef.current.play().catch(() => {});
    }
  };

  const handleDismiss = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setState("fading");

    // Softly fade down video audio if unmuted
    if (videoRef.current && !videoRef.current.muted) {
      const v = videoRef.current;
      const fadeStep = v.volume / 8;
      const vInt = setInterval(() => {
        if (!v) {
          clearInterval(vInt);
          return;
        }
        if (v.volume - fadeStep <= 0.05) {
          v.volume = 0;
          clearInterval(vInt);
        } else {
          v.volume -= fadeStep;
        }
      }, 40);
    }

    // Trigger background music (slow-time-noir-film) to start at full volume
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("sunaulo:preloader-finished", {
          detail: { withSound: !isMuted },
        })
      );
    }

    setTimeout(() => {
      setState("closed");
    }, 700);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress(Math.min(100, (current / duration) * 100));

      if (bgVideoRef.current && Math.abs(bgVideoRef.current.currentTime - current) > 0.3) {
        bgVideoRef.current.currentTime = current;
      }
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  if (state === "closed") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sunaulo Jyoti Preloader"
      className={`fixed inset-0 z-[99999] w-full h-[100dvh] overflow-hidden bg-[#0d0905] select-none transition-all duration-700 ease-out ${
        state === "fading" ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Background ambient video mirror: fills whole screen on mobile and desktop without black letterboxing */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={bgVideoRef}
          src="/Pre%20Loader/trial%204.mp4"
          autoPlay
          muted
          playsInline
          loop={false}
          aria-hidden="true"
          tabIndex={-1}
          className="w-full h-full object-cover blur-2xl opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/75" />
      </div>

      {/* Main Video presentation: properly responsive across mobile portrait and desktop screens */}
      <div className="relative z-20 w-full h-full flex items-center justify-center p-0">
        <video
          ref={videoRef}
          playsInline
          preload="auto"
          muted={isMuted}
          onEnded={handleDismiss}
          onError={handleDismiss}
          onTimeUpdate={handleTimeUpdate}
          className={`w-full h-full object-contain md:object-cover max-w-full max-h-[100dvh] transition-opacity duration-700 drop-shadow-2xl ${
            state === "playing" ? "opacity-100" : "opacity-25"
          }`}
        >
          <source src="/Pre%20Loader/trial%204.mp4" type="video/mp4" />
          <source src="/Pre Loader/trial 4.mp4" type="video/mp4" />
        </video>
      </div>

      {/* STEP 1: WELCOME & SOUND PREFERENCE PROMPT (Mobile-optimized) */}
      {state === "prompt" && (
        <div className="absolute inset-0 z-40 flex items-center justify-center p-4 sm:p-6 bg-[#0d0905]/80 backdrop-blur-md overflow-y-auto">
          <div className="relative max-w-sm sm:max-w-md w-full flex flex-col items-center text-center my-auto animate-preloader-in">
            {/* Brand Logo */}
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 mb-3.5 sm:mb-5 drop-shadow-[0_10px_25px_rgba(232,137,12,0.4)]">
              <Image
                src="/images/logo.png"
                alt="Sunaulo Jyoti Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Brand Titles */}
            <h1 className="font-display text-xl min-[380px]:text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100 tracking-wide mb-1.5 drop-shadow-md">
              SUNAULO JYOTI
            </h1>
            <p className="text-amber-200/75 text-[11px] sm:text-xs tracking-widest uppercase mb-6 sm:mb-8 font-medium">
              Authentic Nepali Spices • Est. 2008
            </p>

            {/* Prompt Buttons - Stacked on mobile, side-by-side on tablet/desktop */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-3.5">
              {/* Button 1: Enter with experience */}
              <button
                onClick={() => handleStart(true)}
                type="button"
                className="group relative flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:via-amber-500 hover:to-amber-600 text-white font-semibold text-sm sm:text-base tracking-wide shadow-[0_8px_25px_rgba(232,137,12,0.45)] hover:shadow-[0_10px_30px_rgba(232,137,12,0.6)] border border-amber-300/40 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <svg className="w-5 h-5 text-amber-100 group-hover:scale-110 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <span>Enter with experience</span>
              </button>

              {/* Button 2: Enter without Sound */}
              <button
                onClick={() => handleStart(false)}
                type="button"
                className="group flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white font-semibold text-sm sm:text-base tracking-wide border border-white/20 hover:border-white/35 backdrop-blur-md shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <svg className="w-5 h-5 text-stone-300 group-hover:scale-110 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                <span>Enter without Sound</span>
              </button>
            </div>

            {/* Direct Skip option */}
            <button
              onClick={handleDismiss}
              type="button"
              className="mt-5 sm:mt-6 text-xs text-amber-200/60 hover:text-amber-200 transition-colors underline underline-offset-4 cursor-pointer py-1"
            >
              Skip directly to website
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: ACTIVE LOADER CONTROLS (Mobile responsive touch buttons) */}
      {state === "playing" && (
        <>
          {/* Top Floating Controls */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 flex items-center gap-2 sm:gap-3">
            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
              className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-black/65 hover:bg-black/85 border border-amber-500/30 hover:border-amber-500/60 text-white/90 text-xs sm:text-sm font-medium backdrop-blur-md transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              {isMuted ? (
                <>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                  <span>Sound Off</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <span className="text-amber-300">Sound On</span>
                </>
              )}
            </button>

            {/* Skip Button */}
            <button
              onClick={handleDismiss}
              type="button"
              aria-label="Skip preloader intro"
              className="group flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-600/90 to-amber-700/90 hover:from-amber-500 hover:to-amber-600 text-white text-xs sm:text-sm font-semibold tracking-wide border border-amber-400/40 backdrop-blur-md shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <span>Skip</span>
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Golden Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-white/10 z-30">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      )}
    </div>
  );
}
