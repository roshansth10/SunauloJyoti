"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * One shared reveal animation for a whole section.
 *
 * Tag elements inside the section with data-reveal="…" AND the Tailwind class
 * `opacity-0` (so nothing flashes before GSAP starts):
 *
 *   heading → words rise out of a mask (split text)
 *   text    → lines rise out of a mask (split text)
 *   button  → fade in + slide up
 *   card    → fade in + slide up (staggered when several appear together)
 *   image   → slide in from the right + fade (staggered)
 *   fade    → plain fade in, NO movement (stays exactly in its original position)
 *
 * Text inside a data-reveal="card" automatically waits for its card to start
 * appearing, so the description never animates inside an invisible card.
 *
 * Pass { onLoad: true } for content that is visible at the top of the page
 * (e.g. a hero): it plays in order on page load instead of on scroll.
 */

// ---- Tune everything here -------------------------------------------------
const START = "top 88%"; // when an element enters the viewport
const STAGGER = 0.15; // delay between cards / images that appear together
const LOAD_DELAY = 0.2; // onLoad: delay before the first element
const LOAD_STEP = 0.3; // onLoad: delay between elements

const FROM = {
  card: { autoAlpha: 0, y: 32, scale: 0.98 },
  image: { autoAlpha: 0, x: 60, scale: 1.04 },
} as const;

const TO = {
  card: { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
  image: { autoAlpha: 1, x: 0, scale: 1, duration: 1 },
} as const;
// ---------------------------------------------------------------------------

// Devanagari must not be split into words/letters (it would break the script)
const HAS_DEVANAGARI = /[\u0900-\u097F]/;

type Options = { onLoad?: boolean };

export function useReveal(
  scope: { current: HTMLElement | null },
  { onLoad = false }: Options = {},
) {
  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    // Reduced motion: show everything, no animation
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(root.querySelectorAll("[data-reveal]"), { autoAlpha: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const splits: SplitText[] = [];
      const grouped: Record<"card" | "image", HTMLElement[]> = {
        card: [],
        image: [],
      };
      const items = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-reveal]"),
      );

      // Timing: in order on load, or when each element scrolls into view
      const when = (el: HTMLElement, i: number, extra = 0): gsap.TweenVars =>
        onLoad
          ? { delay: LOAD_DELAY + i * LOAD_STEP + extra }
          : {
              delay: extra,
              scrollTrigger: { trigger: el, start: START, once: true },
            };

      items.forEach((el, i) => {
        const kind = el.dataset.reveal;

        // Text inside a card starts a moment after the card itself
        const card = el.closest<HTMLElement>('[data-reveal="card"]');
        const extra =
          card && card !== el
            ? 0.3 +
              Math.min(
                Array.from(card.parentElement?.children ?? []).indexOf(card),
                4,
              ) *
                STAGGER
            : 0;

        if (kind === "heading" || kind === "text") {
          // Nepali text: animate as a whole (never split Devanagari)
          if (HAS_DEVANAGARI.test(el.textContent ?? "")) {
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 14 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                ...when(el, i, extra),
              },
            );
            return;
          }

          const isHeading = kind === "heading";
          splits.push(
            SplitText.create(el, {
              type: isHeading ? "lines,words" : "lines",
              mask: "lines",
              autoSplit: true, // re-splits on resize / font load
              onSplit(self) {
                gsap.set(el, { autoAlpha: 1 });
                // Room for descenders (g, y, p) inside the mask, with no layout shift
                gsap.set(self.masks, {
                  paddingBottom: "0.18em",
                  marginBottom: "-0.18em",
                });
                return gsap.from(isHeading ? self.words : self.lines, {
                  yPercent: isHeading ? 110 : 100,
                  duration: isHeading ? 0.9 : 0.8,
                  stagger: isHeading ? 0.08 : 0.1,
                  ease: "power3.out",
                  ...when(el, i, extra),
                });
              },
            }),
          );
        } else if (kind === "button") {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              ...when(el, i),
            },
          );
        } else if (kind === "fade") {
          // Pure opacity fade: no x / y / scale, so it stays in its original position
          gsap.fromTo(
            el,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 1.2, ease: "power2.out", ...when(el, i) },
          );
        } else if (kind === "card" || kind === "image") {
          if (onLoad) {
            gsap.fromTo(el, FROM[kind], {
              ...TO[kind],
              ease: "power3.out",
              ...when(el, i),
            });
          } else {
            grouped[kind].push(el);
          }
        }
      });

      // Cards / images that appear together are staggered automatically
      (["card", "image"] as const).forEach((kind) => {
        const els = grouped[kind];
        if (els.length === 0) return;
        gsap.set(els, FROM[kind]);
        ScrollTrigger.batch(els, {
          start: START,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              ...TO[kind],
              stagger: STAGGER,
              ease: "power3.out",
              overwrite: true,
            }),
        });
      });

      // Cleanup: put the original text back
      return () => splits.forEach((s) => s.revert());
    });

    return () => mm.revert();
  }, [scope, onLoad]);
}
