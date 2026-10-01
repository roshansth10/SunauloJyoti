"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const PRODUCT_LIST: ProductItem[] = [
  {
    id: "turmeric-powder",
    title: "Turmeric powder",
    category: "Turmeric Powder",
    image: "/images/Product Img/Turmeric Powder.jpg",
    description: "100% pure turmeric powder made from carefully selected turmeric roots, delivering natural color, freshness, and authentic flavor.",
  },
  {
    id: "pink-salt",
    title: "Pink Salt",
    category: "Himalayan Pink Salt",
    image: "/images/Product Img/Sidhey Nun.jpg",
    description: "Pure Himalayan pink crystal salt rich in natural trace minerals and mild earthy taste.",
  },
  {
    id: "mix-masala",
    title: "Mix Masala",
    category: "Masala Blends",
    image: "/images/Product Img/Mix Masala.png",
    description: "An all-purpose blend of premium spices that adds rich flavor and aroma to curries, vegetables, and everyday meals.",
  },
  {
    id: "cumin",
    title: "Cumin",
    category: "Cumin & Coriander",
    image: "/images/Product Img/Jeera Masala.jpg",
    description: "Finely roasted and ground jeera (cumin) powder with intense savory warmth.",
  },
  {
    id: "chilli-masala",
    title: "Chilli Masala",
    category: "Chilli Powder",
    image: "/images/Product Img/Chilli Masala.png",
    description: "Bright red, fiery chilli powder carefully sun-dried to bring natural heat and color.",
  },
  {
    id: "coriander-masala",
    title: "Coriander Masala",
    category: "Cumin & Coriander",
    image: "/images/Product Img/Coriander masala.jpg",
    description: "Aromatic dhaniya (coriander) powder ground from whole seeds to enhance sauces and stews.",
  },
  {
    id: "rock-salt",
    title: "Rock Salt",
    category: "Himalayan Pink Salt",
    image: "/images/Product Img/BireyNun Masala.jpg",
    description: "Traditional Birey Nun rich in authentic minerals, famous for tang and digestion.",
  },
  {
    id: "chatpat-masala",
    title: "Chatpat Masala",
    category: "Masala Blends",
    image: "/images/Product Img/Chatpat Masala.jpg",
    description: "Zesty street-style chatpat seasoning perfect for snacks, chats, and fruits.",
  },
  {
    id: "timur-masala",
    title: "Timur Masala",
    category: "Szechuan Pepper",
    image: "/images/Product Img/Timur Masala.jpg",
    description: "Authentic Himalayan Timur providing the signature tingling citrus punch.",
  },
  {
    id: "special-meat-masala",
    title: "Special Meat Masala",
    category: "Masala Blends",
    image: "/images/Product Img/Special Meat Masala.jpg",
    description: "Robust masala formulation tailored to infuse rich savoriness into meat curries.",
  },
  {
    id: "sidhey-noon",
    title: "Sidhey Noon",
    category: "Himalayan Pink Salt",
    image: "/images/Product Img/Sidhey noon.jpg",
    description: "Classic pristine Sidhey Noon crystal powder for everyday health and wholesome cooking.",
  },
];

const CATEGORIES = [
  "All",
  "Masala Blends",
  "Himalayan Pink Salt",
  "Turmeric Powder",
  "Chilli Powder",
  "Cumin & Coriander",
  "Szechuan Pepper",
];

const getWhatsAppLink = (title: string) =>
  `https://wa.me/9869246570?text=${encodeURIComponent(
    `Hey, I would like to order ${title} from Sunaulo Jyoti`
  )}`;

type ProductTileProps = {
  product: ProductItem;
  sizes: string;
  className?: string;
};

function ProductTile({ product, sizes, className = "" }: ProductTileProps) {
  return (
    <div
      className={`group flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 sm:p-4 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-md ${className}`}
    >
      {/* Product packet image container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-white p-2">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes={sizes}
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
  );
}

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return PRODUCT_LIST;
    }
    return PRODUCT_LIST.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

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
    // Re-measure once the images and fonts have settled
    const raf = requestAnimationFrame(updateArrows);
    const timer = window.setTimeout(updateArrows, 300);
    window.addEventListener("resize", updateArrows);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, filteredProducts.length]);

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container-px mx-auto max-w-7xl">
        {/* Section Heading matching design */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl lg:text-4xl">
              Product Categories
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Browse our complete range of freshly packed, authentic Jyoti spices and salts
            </p>
          </div>

          {/* Category Filter Pills (Keep Shop by Category) */}
          <div className="flex flex-wrap gap-2 pt-2 sm:pt-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                }}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-orange text-white shadow-sm"
                    : "border border-black/10 bg-brand-cream/40 text-neutral-700 hover:border-brand-orange hover:text-brand-orange"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product cards: one scrollable row, left to right, with arrow controls */}
        <div className="relative mt-8">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            aria-label="Scroll products left"
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
            aria-label="Scroll products right"
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
            aria-label="Product categories"
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 pb-1 scroll-smooth min-[420px]:-mx-6 min-[420px]:scroll-px-6 min-[420px]:px-6 sm:mx-0 sm:scroll-px-0 sm:px-0 sm:gap-5 lg:gap-6"
          >
            {filteredProducts.map((product) => (
              <ProductTile
                key={product.id}
                product={product}
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 31vw, (min-width: 640px) 38vw, (min-width: 480px) 46vw, 62vw"
                className="w-[62%] shrink-0 snap-start min-[480px]:w-[46%] sm:w-[38%] md:w-[31%] lg:w-[calc((100%-6rem)/5)]"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
