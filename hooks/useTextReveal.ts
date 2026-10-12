"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type TextRevealOptions = {
  onLoad?: boolean;
};

const HAS_DEVANAGARI = /[\u0900-\u097F]/;
const HEADING_SELECTOR = 'h1, h2, h3, [data-split="heading"]';
const PARAGRAPH_SELECTOR = 'p, [data-split="lines"]';

export function useTextReveal(
  scopeRef: RefObject<HTMLElement>,
  options: TextRevealOptions = {},
) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const targets = Array.from(
      scope.querySelectorAll<HTMLElement>(
        `${HEADING_SELECTOR}, ${PARAGRAPH_SELECTOR}`,
      ),
    ).filter(
      (element) =>
        !element.closest(
          'button, a, nav, [role="button"], [data-no-split]',
        ),
    );

    const headings = new Set(
      Array.from(
        scope.querySelectorAll<HTMLElement>(HEADING_SELECTOR),
      ).filter((element) => targets.includes(element)),
    );
    const scrollTrigger = options.onLoad
      ? undefined
      : { trigger: scope, start: "top 80%", once: true };
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(targets, { autoAlpha: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const splits: SplitText[] = [];

      targets.forEach((target) => {
        const isHeading = headings.has(target);
        const delay = isHeading
          ? options.onLoad
            ? 0.2
            : 0
          : options.onLoad
            ? 0.5
            : 0.3;

        if (HAS_DEVANAGARI.test(target.textContent ?? "")) {
          gsap.set(target, { autoAlpha: 1 });
          gsap.fromTo(
            target,
            { autoAlpha: 0, y: 14 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              delay,
              ease: "power3.out",
              scrollTrigger,
            },
          );
          return;
        }

        splits.push(
          SplitText.create(target, {
            type: isHeading ? "lines,words" : "lines",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
              gsap.set(target, { autoAlpha: 1 });
              gsap.set(self.lines, {
                paddingBottom: "0.12em",
                marginBottom: "-0.12em",
              });

              return gsap.from(isHeading ? self.words : self.lines, {
                yPercent: isHeading ? 110 : 100,
                duration: isHeading ? 0.9 : 0.8,
                stagger: isHeading ? 0.08 : 0.1,
                delay,
                ease: "power3.out",
                scrollTrigger,
              });
            },
          }),
        );
      });

      return () => splits.forEach((split) => split.revert());
    });

    return () => mm.revert();
  }, [options.onLoad, scopeRef]);
}
