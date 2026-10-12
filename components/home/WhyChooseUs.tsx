"use client";

import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTextReveal } from "@/hooks/useTextReveal";

const FEATURES = [
  {
    icon: "🏆",
    title: "Premium Quality",
    description: "Carefully selected spices for unmatched freshness and quality.",
    bg: "bg-card-yellow",
  },
  {
    icon: "🌿",
    title: "Authentic Taste",
    description: "Rich, aromatic blends that elevate every meal.",
    bg: "bg-card-blue",
  },
  {
    icon: "🧼",
    title: "Hygienically Processed",
    description: "Packed with care to ensure purity, freshness, and safety.",
    bg: "bg-card-pink",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);
  useTextReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 [&_h1]:opacity-0 [&_h2]:opacity-0 [&_h3]:opacity-0 [&_p]:opacity-0"
    >
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          title="Why Choose Jyoti Foods?"
          description="Delivering pure, authentic spices crafted with quality, freshness, and tradition in every pack."
        />

        <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              data-reveal="card"
              className="h-full"
            >
              <div className={`h-full rounded-xl2 p-6 sm:p-7 lg:p-8 transition-transform duration-300 hover:-translate-y-1 ${feature.bg}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                  {feature.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-brand-dark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
