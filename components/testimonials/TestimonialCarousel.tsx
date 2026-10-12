"use client";

import { useEffect, useRef, useState } from "react";
import Avatar from "./Avatar";
import { TESTIMONIALS } from "./testimonialData";
import Stars from "./Stars";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function TestimonialCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const track = trackRef.current;
    if (!section || !heading || !track) return;

    const cards = gsap.utils.toArray<HTMLElement>(track.children);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([heading, ...cards], { autoAlpha: 1, y: 0 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const splits: SplitText[] = [];

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
                trigger: heading,
                start: "top 88%",
                once: true,
              },
            });
          },
        })
      );

      // Cards staggered entrance
      gsap.fromTo(
        cards,
        {
          autoAlpha: 0,
          y: 25,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: track,
            start: "top 85%",
            once: true,
          },
        }
      );

      return () => {
        splits.forEach((s) => s.revert());
      };
    });

    return () => mm.revert();
  }, []);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const target =
      TESTIMONIALS.length > 1
        ? (index / (TESTIMONIALS.length - 1)) * maxScroll
        : 0;

    track.scrollTo({ left: target, behavior: "smooth" });
    setActive(index);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) {
      setActive(0);
      return;
    }

    const progress = track.scrollLeft / maxScroll;
    setActive(Math.round(progress * (TESTIMONIALS.length - 1)));
  };

  return (
    <section ref={sectionRef} className="bg-white py-12 sm:py-16">
      <div className="container-px mx-auto max-w-7xl">
        <h2
          ref={headingRef}
          className="text-center font-display text-xl font-semibold text-brand-dark sm:text-2xl lg:text-3xl"
        >
          What Our Clients Say About Us
        </h2>

        {/* Scrollable card strip */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 min-[420px]:-mx-6 min-[420px]:scroll-px-6 min-[420px]:px-6 sm:mx-0 sm:mt-10 sm:scroll-px-0 sm:px-0"
        >
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="w-[80%] shrink-0 snap-start rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm min-[480px]:w-[65%] sm:w-[calc((100%-1rem)/2)] sm:p-6 lg:w-[calc((100%-2rem)/3)] transition-shadow duration-300 hover:shadow-md will-change-transform"
            >
              {/* Avatar row */}
              <div className="flex items-center gap-3">
                <Avatar
                  name={testimonial.name}
                  src={testimonial.avatar}
                  className="h-12 w-12 sm:h-14 sm:w-14"
                  textClassName="text-sm sm:text-base"
                />
                <figcaption>
                  <p className="font-display text-sm font-semibold text-brand-dark sm:text-base">
                    {testimonial.name}
                  </p>
                  <Stars
                    rating={testimonial.rating}
                    className="mt-1"
                    size="h-3.5 w-3.5"
                  />
                </figcaption>
              </div>

              {/* Location */}
              <p className="mt-1 text-[11px] text-neutral-400">
                {testimonial.location}
              </p>

              {/* Quote */}
              <blockquote className="mt-3 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="mt-5 flex items-center justify-center gap-1 sm:mt-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={active === index ? "true" : undefined}
              className="group flex h-11 w-6 items-center justify-center"
            >
              <span
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  active === index
                    ? "w-4 bg-brand-orange"
                    : "bg-neutral-300 group-hover:bg-neutral-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
