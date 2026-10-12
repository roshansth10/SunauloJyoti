"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTextReveal } from "@/hooks/useTextReveal";

export default function Lifestyle() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);
  useTextReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="bg-brand-cream/40 py-16 sm:py-20 [&_h1]:opacity-0 [&_h2]:opacity-0 [&_h3]:opacity-0 [&_p]:opacity-0"
    >
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-xl2">
          <div
            data-reveal="image"
            className="relative aspect-[16/9] w-full sm:aspect-[21/9]"
          >
            <Image
              src="/images/lifestyle-cooking.jpg"
              alt="A home cook preparing a dish with Sunaulo Jyoti spices"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
