"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const ITEMS = [
  {
    title: "Chilli Masala",
    description:
      "A fiery and bold spice blend crafted with premium red chillis and aromatic herbs. It brings a vibrant heat and rich color to your curries, marinades, and everyday dishes — perfect for those who love a spicy kick in every bite.",
    image: "/images/Product Img/Chilli Masala.png",
  },
  {
    title: "Chatpat Masala",
    description:
      "A tangy, zesty, and perfectly balanced spice mix that delivers a burst of chatpata flavor in every sprinkle. Ideal for snacks, chaats, fruits, and street-style dishes — it transforms simple ingredients into an irresistible treat.",
    image: "/images/Product Img/Chatpat Masala.jpg",
  },
  {
    title: "Special Meat Masala",
    description:
      "A rich and aromatic masala specially crafted for meat lovers. Blended with premium whole spices, it infuses your chicken, mutton, and pork dishes with deep, authentic flavor — making every meal a hearty celebration.",
    image: "/images/Product Img/Special Meat Masala.jpg",
  },
];

export default function SignatureMasala() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lightweight IntersectionObserver-based fade-in; no GSAP dependency added
    const rows = sectionRef.current?.querySelectorAll<HTMLElement>(".sm-row");
    if (!rows) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const row = entry.target as HTMLElement;
            const img = row.querySelector<HTMLElement>(".sm-img-wrap");
            const txt = row.querySelector<HTMLElement>(".sm-text-wrap");

            if (img) {
              img.style.transition =
                "opacity 0.75s ease, transform 0.75s ease";
              img.style.opacity = "1";
              img.style.transform = "scale(1)";
            }
            if (txt) {
              txt.style.transition =
                "opacity 0.75s ease 0.18s, transform 0.75s ease 0.18s";
              txt.style.opacity = "1";
              txt.style.transform = "translateY(0)";
            }
            observer.unobserve(row);
          }
        });
      },
      { threshold: 0.12 }
    );

    rows.forEach((row) => {
      const img = row.querySelector<HTMLElement>(".sm-img-wrap");
      const txt = row.querySelector<HTMLElement>(".sm-text-wrap");
      if (img) {
        img.style.opacity = "0";
        img.style.transform = "scale(1.04)";
      }
      if (txt) {
        txt.style.opacity = "0";
        txt.style.transform = "translateY(20px)";
      }
      observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-px mx-auto max-w-7xl" ref={sectionRef}>
        <SectionHeading
          title="Signature Masala Collection"
          subtitle="परम्परागत स्वाद, आधुनिक गुणस्तर"
        />

        {/* Product rows — 80–120px gap between rows on desktop */}
        <div className="mt-12 sm:mt-16 flex flex-col gap-16 sm:gap-20 lg:gap-24">
          {ITEMS.map((item, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={item.title}
                className={`sm-row flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[72px] ${
                  reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* ── IMAGE ── */}
                <div className="sm-img-wrap w-full lg:w-[45%] shrink-0">
                  {/* contain so packaging never gets cropped */}
                  <div className="relative w-full aspect-[4/3] rounded-[22px] overflow-hidden bg-neutral-50 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-contain p-4"
                    />
                  </div>
                </div>

                {/* ── TEXT ── */}
                <div className="sm-text-wrap flex flex-col gap-5 lg:w-[55%]">
                  {/* Title ~36–38px desktop, ~28–30px mobile */}
                  <h3
                    className="
                      font-display font-bold text-brand-dark leading-[1.15]
                      text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description ~17–18px desktop, 16px mobile */}
                  <p
                    className="
                      text-neutral-500 leading-[1.65]
                      text-[1rem] lg:text-[1.0625rem]
                      max-w-[520px]
                    "
                  >
                    {item.description}
                  </p>

                  {/* Order Now button — slightly more padding than base */}
                  <div className="mt-1">
                    <Button
                      href="/products"
                      className="px-7 py-3.5 text-[0.9375rem] hover:scale-[1.03] transition-transform duration-200"
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 sm:mt-16 flex justify-center">
          <Button href="/products" variant="outline">
            View More ⌄
          </Button>
        </div>
      </div>
    </section>
  );
}
