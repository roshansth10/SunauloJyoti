"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    const imgWrap = imageWrapRef.current;
    if (!root || !imgWrap) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(imgWrap, { autoAlpha: 1, y: 0, scale: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Subtle, refined entrance on page load
      gsap.fromTo(
        imgWrap,
        {
          autoAlpha: 0,
          y: 20,
          scale: 0.99,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: 0.15,
          ease: "power3.out",
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white py-3">
      <h1 className="sr-only">Customer Testimonials</h1>
      {/* Slightly tilted, full-bleed photo with refined, subtle reveal */}
      <div ref={imageWrapRef} className="w-full will-change-transform">
        <Image
          src="/images/testimonials/top.jpeg"
          alt="Freshly prepared Jyoti Foods spices in a home kitchen"
          width={1440}
          height={840}
          priority
          sizes="100vw"
          className="h-[190px] w-full object-cover sm:h-[300px] lg:h-[420px]"
        />
      </div>
    </section>
  );
}
