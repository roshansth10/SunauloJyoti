"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger, SplitText);

const PRODUCTS = [
  {
    title: "Chiya Masala",
    description:
      "A fragrant blend of aromatic spices that brings warmth, rich flavor, and authentic taste to every cup of tea.",
    image: "/images/chiya-masala-jar.webp",
  },
  {
    title: "Mix Masala",
    description:
      "An all-purpose blend of premium spices that adds rich flavor and aroma to curries, vegetables, and everyday meals.",
    image: "/images/mix-masala-packet.webp",
  },
  {
    title: "Turmeric Powder",
    description:
      "100% pure turmeric powder made from carefully selected turmeric roots, delivering natural color, freshness, and authentic flavor.",
    image: "/images/turmeric-packet.webp",
  },
];

// Devanagari must not be split letter-by-letter (it would break the script's joins)
const HAS_DEVANAGARI = /[\u0900-\u097F]/;

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);

  useEffect(() => {
    const heading = headingRef.current;
    const grid = gridRef.current;
    if (!heading || !grid) return;

    const mm = gsap.matchMedia();

    // Reduced motion: just show everything, no animation
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(heading.querySelectorAll("h1, h2, h3, p"), { autoAlpha: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const splits: SplitText[] = [];
      const title = heading.querySelector<HTMLElement>("h1, h2, h3");
      const paras = gsap.utils.toArray<HTMLElement>(
        heading.querySelectorAll("p"),
      );
      const headingTrigger = () => ({
        trigger: heading,
        start: "top 85%",
        once: true,
      });

      // 1. Title: words rise out of a mask, one after another
      if (title) {
        splits.push(
          SplitText.create(title, {
            type: "lines,words",
            mask: "lines",
            autoSplit: true, // re-splits automatically on resize / font load
            onSplit(self) {
              gsap.set(title, { autoAlpha: 1 });
              return gsap.from(self.words, {
                yPercent: 110,
                duration: 0.9,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: headingTrigger(),
              });
            },
          }),
        );
      }

      // 2. Paragraphs: Nepali subtitle fades up; the English description reveals line by line
      paras.forEach((p) => {
        if (HAS_DEVANAGARI.test(p.textContent ?? "")) {
          gsap.fromTo(
            p,
            { autoAlpha: 0, y: 14 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              delay: 0.35,
              ease: "power2.out",
              scrollTrigger: headingTrigger(),
            },
          );
        } else {
          splits.push(
            SplitText.create(p, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              onSplit(self) {
                gsap.set(p, { autoAlpha: 1 });
                return gsap.from(self.lines, {
                  yPercent: 100,
                  duration: 0.8,
                  delay: 0.45,
                  stagger: 0.1,
                  ease: "power3.out",
                  scrollTrigger: headingTrigger(),
                });
              },
            }),
          );
        }
      });

      // Cleanup: put the original text back
      return () => splits.forEach((s) => s.revert());
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-cream/40 py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        {/* The [&_…]:opacity-0 classes stop a flash of un-animated text before GSAP starts */}
        <div
          ref={headingRef}
          className="[&_h1]:opacity-0 [&_h2]:opacity-0 [&_h3]:opacity-0 [&_p]:opacity-0"
        >
          <SectionHeading
            title="Products You Will Love"
            subtitle="(ग्राहकहरूको पहिलो रोजाइ)"
            description="Discover Jyoti's best-selling products, loved by customers for their exceptional quality, authentic flavors, and carefully selected ingredients."
          />
        </div>

        <div
          ref={gridRef}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRODUCTS.map((product) => (
            // Outer div is animated by GSAP; the inner div owns the hover lift,
            // so the two transforms never fight each other.
            <div key={product.title} data-reveal="card">
              <div className="h-full transition-transform duration-300 ease-out hover:-translate-y-1 [&>*]:h-full">
                <ProductCard {...product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
