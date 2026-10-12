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

type Pt = { x: number; y: number };

// Position of an element inside `root` (ignores GSAP transforms, so it's stable)
function posWithin(el: HTMLElement, root: HTMLElement): Pt {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== root) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

// Smooth curve through the points: leaves each point sideways, enters the next one downward
function buildPath(pts: Pt[]) {
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    d += ` C ${a.x + dx * 0.9} ${a.y + dy * 0.18}, ${b.x} ${b.y - dy * 0.35}, ${b.x} ${b.y}`;
  }
  return d;
}

export default function ProductionProcess() {
  const stepsRef = useRef<HTMLDivElement>(null); // the `relative` container around line + steps
  const svgRef = useRef<SVGSVGElement>(null);
  const revealRef = useRef<SVGPathElement>(null); // mask path that "draws" the line
  const trackRef = useRef<SVGPathElement>(null); // faint full dotted route
  const progressRef = useRef<SVGPathElement>(null); // saffron dotted line (revealed by the mask)
  const dotRef = useRef<HTMLDivElement>(null); // glowing dot at the tip of the line
  const homeRef = useRef<HTMLDivElement>(null); // the Home badge (where the line ends)
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]); // the 5 step images

  useEffect(() => {
    const container = stepsRef.current;
    const svg = svgRef.current;
    const reveal = revealRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    const dot = dotRef.current;
    const home = homeRef.current;
    const circles = circleRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    if (
      !container ||
      !svg ||
      !reveal ||
      !track ||
      !progress ||
      !dot ||
      !home ||
      circles.length === 0
    )
      return;

    let len = 1;
    let thresholds: number[] = [];
    const state = { p: 0 };
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Move the dot to a point along the path (progress 0–1)
    const placeDot = (p: number) => {
      const pt = reveal.getPointAtLength(len * p);
      gsap.set(dot, { x: pt.x, y: pt.y });
    };

    // Progress (0–1) at which the line reaches a given y. The path only moves
    // downward, so a binary search works.
    const progressAtY = (y: number) => {
      let lo = 0;
      let hi = 1;
      for (let i = 0; i < 24; i++) {
        const mid = (lo + hi) / 2;
        if (reveal.getPointAtLength(len * mid).y < y) lo = mid;
        else hi = mid;
      }
      return hi;
    };

    // Build the line from the REAL positions of the circles and the Home badge,
    // so it connects them exactly on every screen size and ends at Home.
    const rebuild = () => {
      const W = container.clientWidth;
      const H = container.clientHeight;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

      const pts: Pt[] = circles.map((el) => {
        const o = posWithin(el, container);
        return { x: o.x + el.offsetWidth / 2, y: o.y + el.offsetHeight / 2 };
      });
      const h = posWithin(home, container);
      pts.push({ x: h.x + home.offsetWidth / 2, y: h.y }); // top-centre of the badge

      const d = buildPath(pts);
      reveal.setAttribute("d", d);
      track.setAttribute("d", d);
      progress.setAttribute("d", d);

      len = reveal.getTotalLength();
      gsap.set(reveal, {
        strokeDasharray: len,
        strokeDashoffset: reduceMotion ? 0 : len * (1 - state.p),
      });

      // For each image: the progress at which the line arrives at it
      thresholds = circles.map((el) => {
        const o = posWithin(el, container);
        return Math.max(progressAtY(o.y + el.offsetHeight * 0.15), 0.002);
      });

      placeDot(state.p);
    };

    rebuild();

    // Reduced motion: finished line, everything visible, no dot, no scroll animation
    if (reduceMotion) {
      gsap.set(dot, { autoAlpha: 0 });
      gsap.set(circles, { autoAlpha: 1 });
      window.addEventListener("resize", rebuild);
      return () => window.removeEventListener("resize", rebuild);
    }

    const shown = circles.map(() => false);

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
          // Functions are re-evaluated on every refresh (rotate / resize).
          // Phones get a longer scroll range + more smoothing = a slower line.
          start: () => (window.innerWidth < 640 ? "top 80%" : "top 55%"),
          end: () => (window.innerWidth < 640 ? "bottom 60%" : "bottom 75%"),
          scrub: window.innerWidth < 640 ? 2.2 : 1.5, // higher = slower, smoother
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

    // Rebuild the line whenever ScrollTrigger refreshes (resize, rotation, fonts…)
    ScrollTrigger.addEventListener("refresh", rebuild);
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      ScrollTrigger.removeEventListener("refresh", rebuild);
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
          {/* Animated dotted curved line. Its path is generated in the effect from the
              real position of each circle and the Home badge, so it always ends at Home. */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 1450"
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
                width="100%"
                height="100%"
              >
                <path
                  ref={revealRef}
                  stroke="#fff"
                  strokeWidth="24"
                  strokeLinecap="round"
                  fill="none"
                />
              </mask>
            </defs>

            {/* 1. Faint track: the full dotted route, always visible */}
            <path
              ref={trackRef}
              stroke="#D3C7B5"
              strokeWidth="2"
              strokeDasharray="6 6"
              vectorEffect="non-scaling-stroke"
            />

            {/* 2. Saffron progress line: same dots, revealed progressively by the mask */}
            <g mask="url(#process-path-reveal)">
              <path
                ref={progressRef}
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

            {/* End Point: Home Icon Badge — the dotted line stops at its top edge */}
            <div className="flex flex-col items-center justify-center pt-4 md:pt-8">
              <div
                ref={homeRef}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-[#A8947C] bg-[#FAF8F5] flex flex-col items-center justify-center shadow-sm text-[#7C6853]"
              >
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
