"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTextReveal } from "@/hooks/useTextReveal";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);
  useTextReveal(sectionRef, { onLoad: true });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-hero-gradient pt-8 pb-5 sm:pt-12 sm:pb-6 lg:py-0 lg:min-h-[620px] flex items-center [&_h1]:opacity-0 [&_h2]:opacity-0 [&_h3]:opacity-0 [&_p]:opacity-0"
    >
      {/* Main centered container */}
      <div className="container-px relative mx-auto flex flex-col justify-center w-full max-w-7xl lg:min-h-[620px] pt-2 pb-2 lg:py-12">
        {/* Text Content */}
        <div className="relative z-20 flex max-w-xl flex-col gap-4 sm:gap-5 text-left lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
          <h1 className="font-display text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-brand-dark">
            Bringing Authentic Flavor to Every Kitchen
          </h1>

          <p className="text-base sm:text-lg font-medium text-brand-dark/80">
            शुद्ध स्वादका लागि ज्योति फुड्स नै रोजौँ !
          </p>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-brand-dark/70">
            Experience the richness of premium spices crafted from carefully
            selected ingredients.
          </p>

          <div className="pt-1">
            <Button href="/products">Explore Products</Button>
          </div>
        </div>

        {/* Mobile / Tablet Product Image (Positioned nicely above hero bottom) */}
        <div className="relative z-10 mt-6 -mx-4 w-[calc(100%+2rem)] min-[420px]:-mx-6 min-[420px]:w-[calc(100%+3rem)] sm:-mx-10 sm:w-[calc(100%+5rem)] sm:max-w-2xl sm:mx-auto lg:hidden overflow-hidden">
          <Link
            href="/products"
            className="group block relative aspect-[1414/1620] w-full cursor-pointer"
            aria-label="View Products"
          >
            <div data-reveal="image" className="absolute inset-0">
              <Image
                src="/images/Heroproducts1.png"
                alt="Sunaulo Jyoti spice collection"
                fill
                priority
                sizes="(min-width: 640px) 100vw, 100vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] active:scale-95"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop Product Image (Layered on right, flush to section top/bottom) */}
      <div
        className="
          pointer-events-none
          absolute
          top-0
          bottom-0
          right-[-0.75vw]
          z-10
          hidden
          lg:block
          lg:w-[68vw]
          xl:w-[64vw]
          2xl:w-[60vw]
          max-w-none
        "
      >
        <Link
          href="/products"
          className="pointer-events-auto group block relative h-full w-full cursor-pointer overflow-hidden"
          aria-label="View Products"
        >
          <div data-reveal="image" className="absolute inset-0">
            <Image
              src="/images/Heroproducts1.png"
              alt="Sunaulo Jyoti spice collection"
              fill
              priority
              sizes="68vw"
              className="object-contain object-right scale-[1.5] origin-right transition-transform duration-500 ease-out group-hover:scale-[1.54]"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
