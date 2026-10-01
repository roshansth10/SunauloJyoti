"use client";

import { useRef, useState } from "react";
import Avatar from "./Avatar";
import { TESTIMONIALS } from "./testimonialData";
import Stars from "./Stars";

// Pastel accents from the brand palette, cycled across the cards
const ACCENTS = ["bg-card-pink", "bg-card-yellow", "bg-card-blue"];

export default function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const target =
      TESTIMONIALS.length > 1 ? (index / (TESTIMONIALS.length - 1)) * maxScroll : 0;

    track.scrollTo({ left: target, behavior: "smooth" });
    setActive(index);
  };

  // Keeps the dots in sync when the user swipes / scrolls the strip itself
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
    <section className="bg-white py-12 sm:py-16">
      <div className="container-px mx-auto max-w-7xl">
        <h2 className="text-center font-display text-xl font-semibold text-brand-dark sm:text-2xl lg:text-3xl">
          What Our Clients Say About Us
        </h2>

        {/* Edge-to-edge on phones, contained from `sm` up */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 scroll-smooth min-[420px]:-mx-6 min-[420px]:scroll-px-6 min-[420px]:px-6 sm:mx-0 sm:mt-10 sm:scroll-px-0 sm:px-0"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className="w-[85%] shrink-0 snap-start overflow-hidden rounded-xl2 border border-neutral-200/80 bg-white shadow-sm ring-1 ring-black/[0.03] min-[480px]:w-[70%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
            >
              <div className={`h-1.5 w-full ${ACCENTS[index % ACCENTS.length]}`} />

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <Avatar name={testimonial.name} src={testimonial.avatar} />
                  <figcaption>
                    <p className="font-display text-sm font-semibold text-brand-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-[11px] text-neutral-400">
                      {testimonial.location}
                    </p>
                  </figcaption>
                </div>

                <Stars rating={testimonial.rating} className="mt-3" />

                <blockquote className="mt-3 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            </figure>
          ))}
        </div>

        {/* 24 x 44px hit areas (was 8px) so the dots are tappable on phones */}
        <div className="mt-5 flex items-center justify-center sm:mt-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Show the testimonial from ${testimonial.name}`}
              aria-current={active === index ? "true" : undefined}
              className="group flex h-11 w-6 items-center justify-center"
            >
              <span
                className={`h-2 w-2 rounded-full transition-colors ${
                  active === index
                    ? "bg-neutral-600"
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
