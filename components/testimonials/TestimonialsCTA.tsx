"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function TestimonialsCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const founderWrapRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonWrapRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const founderWrap = founderWrapRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const buttonWrap = buttonWrapRef.current;
    const leaf = leafRef.current;
    if (!section || !founderWrap || !heading || !paragraph || !buttonWrap)
      return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([founderWrap, heading, paragraph, buttonWrap, leaf], {
        autoAlpha: 1,
        y: 0,
        x: 0,
      });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const splits: SplitText[] = [];

      // Founder Image (Woman with spice tray):
      // Rises smoothly from below into final position aligned with the bottom
      gsap.fromTo(
        founderWrap,
        {
          autoAlpha: 0,
          y: 70,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        },
      );

      // Heading word reveal
      splits.push(
        SplitText.create(heading, {
          type: "lines,words",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            gsap.set(heading, { autoAlpha: 1 });
            gsap.set(self.masks, {
              paddingBottom: "0.15em",
              marginBottom: "-0.15em",
            });
            return gsap.from(self.words, {
              yPercent: 100,
              duration: 0.85,
              stagger: 0.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                once: true,
              },
            });
          },
        }),
      );

      // Paragraph lines reveal
      splits.push(
        SplitText.create(paragraph, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            gsap.set(paragraph, { autoAlpha: 1 });
            gsap.set(self.masks, {
              paddingBottom: "0.15em",
              marginBottom: "-0.15em",
            });
            return gsap.from(self.lines, {
              yPercent: 100,
              duration: 0.75,
              stagger: 0.08,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                once: true,
              },
            });
          },
        }),
      );

      // Review CTA button: gentle 20px rise + fade
      gsap.fromTo(
        buttonWrap,
        {
          autoAlpha: 0,
          y: 20,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        },
      );

      // Decorative leaf: subtle fade in
      if (leaf) {
        gsap.fromTo(
          leaf,
          {
            autoAlpha: 0,
            y: 15,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          },
        );
      }

      return () => {
        splits.forEach((s) => s.revert());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white pt-12 pb-0 sm:pt-16 sm:pb-0"
    >
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-10 lg:gap-12">
          {/* Founder shot: Woman holding spice tray, aligned at bottom with footer */}
          <div className="md:col-span-5 flex items-end justify-center">
            <div
              ref={founderWrapRef}
              className="w-full max-w-[300px] min-[420px]:max-w-[340px] md:max-w-none flex items-end justify-center will-change-transform"
            >
              <Image
                src="/images/testimonials/kanxiii.png"
                alt="Jyoti Foods founder presenting the masala collection"
                width={494}
                height={575}
                sizes="(min-width: 1024px) 38vw, 80vw"
                className="mx-auto w-full object-contain object-bottom block align-bottom"
              />
            </div>
          </div>

          {/* Copy + review CTA */}
          <div className="text-center md:col-span-7 pb-12 sm:pb-16 md:pb-16 lg:pb-20">
            <h2
              ref={headingRef}
              className="font-display text-2xl font-bold text-brand-dark sm:text-3xl lg:text-4xl"
            >
              Have You Tried Jyoti Foods?
            </h2>
            <p
              ref={paragraphRef}
              className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base"
            >
              Share your experience and let us know how Jyoti brings flavor to
              your kitchen.
            </p>
            <div
              ref={buttonWrapRef}
              className="mt-6 inline-block will-change-transform"
            >
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-orange-dark active:scale-95"
              >
                Share Your Review
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative leaf, matching the design */}
        <div
          ref={leafRef}
          className="pointer-events-none absolute bottom-4 right-4 hidden sm:block will-change-transform"
        >
          <Image
            src="/images/Product Img/image 100.png"
            alt=""
            width={104}
            height={104}
            className="h-12 w-auto object-contain lg:h-16"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
