"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    title: "Ingredient Selection",
    description:
      "Carefully sourcing 100% natural raw spices from trusted regional suppliers.",
    image: "/images/about1.jpeg",
    side: "left",
  },
  {
    title: "Cleaning & Sorting",
    description:
      "Raw spices are thoroughly cleaned to remove impurities and sorted for quality.",
    image: "/images/about2.jpeg",
    side: "right",
  },
  {
    title: "Roasting & Grinding",
    description:
      "Selected spices are roasted and finely ground using traditional methods for rich flavor.",
    image: "/images/about3.jpeg",
    side: "left",
  },
  {
    title: "Quality Assurance",
    description: "Each batch undergoes strict quality testing.",
    image: "/images/about4.jpeg",
    side: "right",
  },
  {
    title: "Packaging & Delivery",
    description: "Sealed for freshness and delivered to stores.",
    image: "/images/about5.jpeg",
    side: "left",
  },
];

// Dotted path (same route as before) and its viewBox size
const VB_W = 800;
const VB_H = 1450;
const PATH_D =
  "M 240 100 C 520 170, 600 300, 560 380 C 520 460, 200 560, 240 660 C 280 760, 600 840, 560 940 C 520 1040, 200 1140, 240 1220 C 280 1300, 400 1360, 400 1420";

// Distance of an element's top edge from the top of `root`, ignoring any GSAP transforms
function offsetWithin(el: HTMLElement, root: HTMLElement) {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== root) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
}

export default function ProductionProcess() {
  const stepsRef = useRef<HTMLDivElement>(null); // the `relative` container around line + steps
  const revealRef = useRef<SVGPathElement>(null); // mask path that "draws" the line
  const dotRef = useRef<HTMLDivElement>(null); // glowing dot at the tip of the line
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]); // the 5 step images

  useEffect(() => {
    const container = stepsRef.current;
    const reveal = revealRef.current;
    const dot = dotRef.current;
    const circles = circleRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    if (!container || !reveal || !dot || circles.length === 0) return;

    const len = reveal.getTotalLength();

    // Reduced motion: show everything immediately, no animation, no dot
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(reveal, { strokeDasharray: len, strokeDashoffset: 0 });
      gsap.set(dot, { autoAlpha: 0 });
      gsap.set(circles, { autoAlpha: 1 });
      return;
    }

    gsap.set(reveal, { strokeDasharray: len, strokeDashoffset: len });

    // Convert a point on the path (viewBox units) to pixels inside the container
    const placeDot = (p: number) => {
      const pt = reveal.getPointAtLength(len * p);
      gsap.set(dot, {
        x: (pt.x / VB_W) * container.clientWidth,
        y: (pt.y / VB_H) * container.clientHeight,
      });
    };

    // Path progress (0–1) at which the line reaches a given viewBox y.
    // The path only ever moves downward, so a binary search works.
    const progressAtY = (vbY: number) => {
      let lo = 0;
      let hi = 1;
      for (let i = 0; i < 24; i++) {
        const mid = (lo + hi) / 2;
        if (reveal.getPointAtLength(len * mid).y < vbY) lo = mid;
        else hi = mid;
      }
      return hi;
    };

    // For each image: the progress at which the line arrives at it
    // (measured from the real layout, so it stays correct on every screen size)
    const computeThresholds = () =>
      circles.map((el) => {
        const top = offsetWithin(el, container);
        const triggerY = top + el.offsetHeight * 0.15;
        const vbY = (triggerY / container.clientHeight) * VB_H;
        return Math.max(progressAtY(vbY), 0.002);
      });

    let thresholds = computeThresholds();
    const shown = circles.map(() => false);
    const state = { p: 0 };
    placeDot(0);

    const ctx = gsap.context(() => {
      // One paused fade-in tween per image; played/reversed as the line passes
      const fades = circles.map((el) =>
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 24, scale: 0.9 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            paused: true,
          },
        ),
      );

      gsap.to(state, {
        p: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          // Functions are re-evaluated on every refresh, so rotating the phone
          // or resizing the window picks the right values automatically.
          start: () => (window.innerWidth < 640 ? "top 75%" : "top 55%"),
          end: () => (window.innerWidth < 640 ? "bottom 80%" : "bottom 75%"),
          scrub: window.innerWidth < 640 ? 1 : 1.5, // higher = slower, smoother (try 2–3)
        },
        onUpdate: () => {
          gsap.set(reveal, { strokeDashoffset: len * (1 - state.p) });
          placeDot(state.p);

          // Fade each image in when the line reaches it (and out if you scroll back up)
          fades.forEach((tween, i) => {
            const reached = state.p >= thresholds[i];
            if (reached !== shown[i]) {
              shown[i] = reached;
              if (reached) tween.play();
              else tween.reverse();
            }
          });
        },
      });
    }, container);

    // Keep everything aligned after resize / layout changes
    const onRefresh = () => {
      thresholds = computeThresholds();
      placeDot(state.p);
    };
    ScrollTrigger.addEventListener("refresh", onRefresh);

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Exact Transparent Leaf Accents matching design locations */}
      {/* Top Left Leaf */}
      <div className="pointer-events-none absolute left-0 top-[4%] w-16 sm:w-28 md:w-48 lg:w-56 opacity-30 md:opacity-90 z-0">
        <Image
          src="/images/crop4.png"
          alt=""
          width={300}
          height={450}
          className="object-contain object-left-top"
        />
      </div>

      {/* Mid Left Leaf */}
      <div className="pointer-events-none absolute left-0 top-[38%] w-16 sm:w-28 md:w-44 lg:w-52 opacity-30 md:opacity-90 z-0">
        <Image
          src="/images/crop5.png"
          alt=""
          width={304}
          height={425}
          className="object-contain object-left-center"
        />
      </div>

      {/* Mid Right Leaf */}
      <div className="pointer-events-none absolute right-0 top-[22%] w-20 sm:w-32 md:w-56 lg:w-64 opacity-30 md:opacity-90 z-0">
        <Image
          src="/images/crop3.png"
          alt=""
          width={80}
          height={100}
          className="object-contain object-right-center"
        />
      </div>

      {/* Bottom Right Leaf Cluster */}
      {/* <div className="pointer-events-none absolute right-2 sm:right-6 md:right-10 bottom-[8%] w-20 sm:w-32 md:w-52 lg:w-60 opacity-30 md:opacity-90 z-0">
        <Image
          src="/images/crop6.png"
          alt=""
          width={100}
          height={150}
          className="object-contain object-right-bottom"
        />
      </div> */}

      <div className="container-px mx-auto max-w-5xl relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-20 md:mb-24">
          <h2 className="font-display text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E1E]">
            Our Production Process
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-neutral-500 font-medium max-w-xl mx-auto">
            From carefully selected ingredients to your kitchen.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative" ref={stepsRef}>
          {/* Animated dotted curved line — draws step 1 → 5 → Home as you scroll */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {/* The mask is what gets "drawn" by scroll. Its stroke is thick so it
                  fully covers the dotted line underneath. */}
              <mask
                id="process-path-reveal"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width={VB_W}
                height={VB_H}
              >
                <path
                  ref={revealRef}
                  d={PATH_D}
                  stroke="#fff"
                  strokeWidth="24"
                  strokeLinecap="round"
                  fill="none"
                />
              </mask>
            </defs>

            {/* 1. Faint track: the full dotted route, always visible */}
            <path
              d={PATH_D}
              stroke="#D3C7B5"
              strokeWidth="2"
              strokeDasharray="6 6"
              vectorEffect="non-scaling-stroke"
            />

            {/* 2. Saffron progress line: same dots, revealed progressively by the mask */}
            <g mask="url(#process-path-reveal)">
              <path
                d={PATH_D}
                stroke="#E08A12"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>

          {/* 3. Travelling dot at the tip of the line */}
          <div
            ref={dotRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 -ml-1.5 -mt-1.5 h-3 w-3 sm:-ml-2 sm:-mt-2 sm:h-4 sm:w-4 rounded-full bg-[#E08A12] shadow-[0_0_0_3px_rgba(224,138,18,0.25),0_0_12px_3px_rgba(224,138,18,0.45)] sm:shadow-[0_0_0_4px_rgba(224,138,18,0.25),0_0_16px_4px_rgba(224,138,18,0.45)]"
          />

          {/* Steps List */}
          <div className="flex flex-col gap-8 sm:gap-16 md:gap-24 relative z-10">
            {STEPS.map((step, idx) => {
              const isLeft = step.side === "left";
              return (
                <div key={step.title} className="flex flex-col items-center">
                  <div
                    className={`w-full flex flex-row items-center justify-between gap-3 sm:gap-8 md:gap-10 ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Circle Image Side — fades in when the dotted line reaches it.
                        opacity-0 prevents a flash before GSAP takes over. */}
                    <div
                      ref={(el) => {
                        circleRefs.current[idx] = el;
                      }}
                      className="w-1/2 flex justify-center opacity-0"
                    >
                      <div className="relative w-28 h-28 min-[400px]:w-36 min-[400px]:h-36 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden shadow-md border-4 border-white ring-1 ring-black/5 group flex-shrink-0 transition-transform duration-500 hover:scale-105">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(min-width: 768px) 240px, (min-width: 400px) 144px, 112px"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Text Description Side */}
                    <div
                      className={`w-1/2 rounded-lg bg-white/75 py-1 sm:bg-transparent sm:py-0 ${
                        isLeft
                          ? "text-left pl-1 sm:pl-4"
                          : "text-left pr-1 sm:pr-4"
                      }`}
                    >
                      <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-orange mb-1">
                        Step 0{idx + 1}
                      </span>
                      <h3 className="font-display text-base sm:text-xl font-bold text-[#1E1E1E] leading-snug">
                        {step.title}
                      </h3>
                      <p className="mt-1 sm:mt-2 text-[13px] sm:text-sm text-neutral-600 leading-relaxed max-w-xs">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End Point: Home Icon Badge */}
            <div className="flex flex-col items-center justify-center pt-4 md:pt-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-[#A8947C] bg-[#FAF8F5] flex flex-col items-center justify-center shadow-sm text-[#7C6853]">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span className="mt-3 font-display text-xs sm:text-sm font-bold tracking-widest text-[#7C6853] uppercase">
                HOME
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
