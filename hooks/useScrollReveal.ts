"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGE = {
  from: { autoAlpha: 0, x: 60, scale: 1.04 },
  to: {
    autoAlpha: 1,
    x: 0,
    scale: 1,
    duration: 1,
    ease: "power3.out",
  },
};

const CARD = {
  from: { autoAlpha: 0, y: 32, scale: 0.98 },
  to: {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    duration: 0.9,
    ease: "power3.out",
  },
};

const STAGGER = 0.15;

export function useScrollReveal(scopeRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const images = Array.from(
      scope.querySelectorAll<HTMLElement>('[data-reveal="image"]'),
    );
    const cards = Array.from(
      scope.querySelectorAll<HTMLElement>('[data-reveal="card"]'),
    );
    const targets = [...images, ...cards];
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(targets, { autoAlpha: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (images.length > 0) {
        gsap.set(images, IMAGE.from);
        ScrollTrigger.batch(images, {
          start: "top 85%",
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(batch, IMAGE.from, {
              ...IMAGE.to,
              stagger: STAGGER,
              overwrite: true,
            }),
        });
      }

      if (cards.length > 0) {
        gsap.set(cards, CARD.from);
        ScrollTrigger.batch(cards, {
          start: "top 85%",
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(batch, CARD.from, {
              ...CARD.to,
              stagger: STAGGER,
              overwrite: true,
            }),
        });
      }
    });

    return () => mm.revert();
  }, [scopeRef]);
}
