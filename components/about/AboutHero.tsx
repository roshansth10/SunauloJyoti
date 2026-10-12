"use client";

import { useRef } from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, { onLoad: true }); // hero is visible immediately → plays on page load

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/top-about.jpeg')" }}
    >
      {/* Overlay so text is readable */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container-px mx-auto max-w-3xl text-center flex flex-col items-center py-20 sm:py-28 lg:py-36 min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] justify-center">
        <h1
          data-reveal="heading"
          className="opacity-0 font-display text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1B08] mb-3"
        >
          About Jyoti Foods
        </h1>
        <p
          data-reveal="text"
          className="opacity-0 font-display text-sm min-[380px]:text-base sm:text-lg lg:text-xl font-semibold text-[#3E270E] mb-4 sm:mb-6"
        >
          Rooted in Tradition. Crafted for Every Kitchen.
        </p>
        <p
          data-reveal="text"
          className="opacity-0 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-[#4A351E] mb-6 sm:mb-8 font-medium"
        >
          Since 2008, Jyoti Foods has been committed to bringing pure spices and
          authentic flavors to every household. We carefully source, process,
          and package every product to ensure freshness, quality, and the rich
          taste of tradition.
        </p>

        {/* GSAP animates this wrapper, so the button's own hover lift keeps working */}
        <div data-reveal="button" className="opacity-0">
          <Link
            href="/products"
            className="inline-flex min-h-[44px] items-center justify-center px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#EA8C1C] to-[#D97706] text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:from-[#D97706] hover:to-[#B45309] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
