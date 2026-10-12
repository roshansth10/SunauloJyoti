"use client";

import Image from "next/image";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTextReveal } from "@/hooks/useTextReveal";

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
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);
  useTextReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 lg:py-24 [&_h1]:opacity-0 [&_h2]:opacity-0 [&_h3]:opacity-0 [&_p]:opacity-0"
    >
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          title="Signature Masala Collection"
          subtitle="परम्परागत स्वाद, आधुनिक गुणस्तर"
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-hidden">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              data-reveal="card"
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-[22px] border border-neutral-200 bg-white p-4 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* ── IMAGE ── */}
                <div className="sm-img-wrap relative w-full aspect-[4/5] overflow-hidden rounded-[16px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* ── TEXT ── */}
                <div className="flex flex-1 flex-col gap-5 px-2 pb-2 pt-5">
                  <h3
                    className="
                    font-display font-bold text-brand-dark leading-[1.15]
                    text-[1.5rem] lg:text-[1.625rem]
                  "
                  >
                    {item.title}
                  </h3>

                  <p className="text-neutral-500 text-[0.9375rem] leading-[1.65]">
                    {item.description}
                  </p>

                  <div className="mt-auto">
                    <Button
                      href="/products"
                      className="px-7 py-3.5 text-[0.9375rem] hover:scale-[1.03] transition-transform duration-200"
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 flex justify-center">
          <Button
            href="/products"
            variant="outline"
            className="group px-8 py-3.5"
          >
            <span className="inline-flex items-center gap-2">
              View More
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
