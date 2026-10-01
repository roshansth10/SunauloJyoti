"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

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

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return PRODUCT_LIST;
    }
    return PRODUCT_LIST.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Initial visible count matches the single row in the mockup (~4 or 5 items), expandable via View More
  const visibleProducts = isExpanded
    ? filteredProducts
    : filteredProducts.slice(0, 5);

  const getWhatsAppLink = (title: string) => {
    return `https://wa.me/9869246570?text=${encodeURIComponent(
      `Hey, I would like to order ${title} from Sunaulo Jyoti`
    )}`;
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
                  setIsExpanded(true);
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

        {/* Product Cards Row / Grid matching design */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 sm:p-4 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-md"
            >
              {/* Product packet image container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-white p-2">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
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

        {/* View More / View Less Toggle matching design */}
        {filteredProducts.length > 5 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 transition-colors hover:text-brand-orange cursor-pointer"
            >
              <span>{isExpanded ? "View Less" : "View More"}</span>
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
