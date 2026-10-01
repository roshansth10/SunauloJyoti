"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface BestSellerItem {
  id: string;
  title: string;
  image: string;
}

const BEST_SELLERS: BestSellerItem[] = [
  {
    id: "mix-masala",
    title: "Mix Masala",
    image: "/images/Product Img/Mix Masala.png",
  },
  {
    id: "rock-salt",
    title: "Rock Salt",
    image: "/images/Product Img/BireyNun Masala.jpg",
  },
  {
    id: "turmeric-powder",
    title: "Turmeric powder",
    image: "/images/Product Img/Turmeric Powder.jpg",
  },
  {
    id: "cumin",
    title: "Cumin",
    image: "/images/Product Img/Jeera Masala.jpg",
  },
  {
    id: "chilli-masala",
    title: "Chilli Masala",
    image: "/images/Product Img/Chilli Masala.png",
  },
];

export default function BestSellingProduct() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Arrow buttons double as scroll indicators: each hides itself at its end of the row
  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(track.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  };

  const getWhatsAppLink = (title: string) => {
    return `https://wa.me/9869246570?text=${encodeURIComponent(
      `Hey, I would like to order ${title} from Sunaulo Jyoti`
    )}`;
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container-px mx-auto max-w-7xl">
        {/* Section Heading matching screenshot */}
        <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl lg:text-4xl">
          Bestselling Product
        </h2>

        {/* Product cards: one scrollable row, left to right, with arrow indicators */}
        <div className="relative mt-8">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            aria-label="Scroll bestsellers left"
            className={`absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-brand-dark shadow-md transition-opacity hover:text-brand-orange sm:h-10 sm:w-10 ${
              canScrollLeft ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scrollByPage(1)}
            aria-label="Scroll bestsellers right"
            className={`absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-brand-dark shadow-md transition-opacity hover:text-brand-orange sm:h-10 sm:w-10 ${
              canScrollRight ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={trackRef}
            onScroll={updateArrows}
            tabIndex={0}
            role="region"
            aria-label="Bestselling products"
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 pb-1 scroll-smooth min-[420px]:-mx-6 min-[420px]:scroll-px-6 min-[420px]:px-6 sm:mx-0 sm:scroll-px-0 sm:px-0 sm:gap-5 lg:gap-6"
          >
            {BEST_SELLERS.map((product) => (
              <div
                key={product.id}
                className="group flex w-[62%] shrink-0 snap-start flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 sm:p-4 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-md min-[480px]:w-[46%] sm:w-[38%] md:w-[31%] lg:w-[calc((100%-6rem)/5)]"
              >
                {/* Product packet image container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-white p-2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 31vw, (min-width: 640px) 38vw, (min-width: 480px) 46vw, 62vw"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Title & Order button */}
                <div className="mt-3 flex flex-col items-center text-center">
                  <h3 className="font-display text-sm font-semibold text-brand-dark sm:text-base line-clamp-1">
                    {product.title}
                  </h3>
                  <a
                    href={getWhatsAppLink(product.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full min-h-[44px] items-center justify-center rounded-lg bg-brand-orange px-2 py-2 text-center text-xs font-semibold text-white shadow-sm transition-all hover:bg-brand-orange-dark active:scale-95 sm:min-h-0"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
