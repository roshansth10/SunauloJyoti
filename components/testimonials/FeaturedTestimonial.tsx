"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import { FEATURED_TESTIMONIAL } from "./testimonialData";
import Stars from "./Stars";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function FeaturedTestimonial() {
  const testimonial = FEATURED_TESTIMONIAL;
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const quoteWrapRef = useRef<HTMLDivElement>(null);
  const quoteTextRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const quoteWrap = quoteWrapRef.current;
    const quoteText = quoteTextRef.current;
    if (!section || !imageWrap || !quoteWrap || !quoteText) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([imageWrap, quoteWrap, quoteText], { autoAlpha: 1, x: 0, y: 0 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const splits: SplitText[] = [];

      // Image reveal: subtle 25px slide from left + fade
      gsap.fromTo(
        imageWrap,
        {
          autoAlpha: 0,
          x: -25,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Quote author header: gentle slide up
      gsap.fromTo(
        quoteWrap,
        {
          autoAlpha: 0,
          y: 20,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Quote body: natural line reveal with power2.out
      splits.push(
        SplitText.create(quoteText, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            gsap.set(quoteText, { autoAlpha: 1 });
            gsap.set(self.masks, {
              paddingBottom: "0.15em",
              marginBottom: "-0.15em",
            });
            return gsap.from(self.lines, {
              yPercent: 100,
              duration: 0.75,
              stagger: 0.08,
              delay: 0.25,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
              },
            });
          },
        })
      );

      return () => {
        splits.forEach((s) => s.revert());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FCF6D8] py-12 sm:py-16 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <h2 className="sr-only">Featured customer story</h2>

        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-12">
          {/* Product collection */}
          <div ref={imageWrapRef} className="md:col-span-6 will-change-transform">
            <Image
              src="/images/testimonials/jyoti.jpeg"
              alt="Jyoti Foods masala collection"
              width={546}
              height={437}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="w-full rounded-2xl object-cover shadow-md"
            />
          </div>

          {/* Quote */}
          <div className="px-4 sm:px-6 md:col-span-6">
            <div ref={quoteWrapRef} className="flex flex-col will-change-transform">
              <div className="flex items-center gap-4">
                <Avatar
                  name={testimonial.name}
                  src={testimonial.avatar}
                  className="h-16 w-16 sm:h-20 sm:w-20"
                  textClassName="text-lg sm:text-xl"
                />
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-dark sm:text-xl">
                    {testimonial.name}
                  </h3>
                  <Stars rating={testimonial.rating} className="mt-1.5" />
                </div>
              </div>

              <p className="mt-3 text-xs text-neutral-500">{testimonial.date}</p>
            </div>

            <blockquote
              ref={quoteTextRef}
              className="mt-3 text-justify text-sm leading-relaxed text-neutral-700 sm:text-base"
            >
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
