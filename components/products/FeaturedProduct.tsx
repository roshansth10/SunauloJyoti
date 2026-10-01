import Image from "next/image";

interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const FEATURED_ITEMS: FeaturedItem[] = [
  {
    id: "chiya-masala",
    title: "Chiya Masala",
    description:
      "A fragrant blend of aromatic spices that brings warmth, rich flavor, and authentic taste to every cup of tea.",
    image: "/images/chiya-masala-jar.webp",
  },
  {
    id: "mix-masala",
    title: "Mix Masala",
    description:
      "An all-purpose blend of premium spices that adds rich flavor and aroma to curries, vegetables, and everyday meals.",
    image: "/images/mix-masala-packet.webp",
  },
  {
    id: "turmeric-powder",
    title: "Turmeric Powder",
    description:
      "100% pure turmeric powder made from carefully selected turmeric roots, delivering natural color, freshness, and authentic flavor.",
    image: "/images/turmeric-packet.webp",
  },
];

export default function FeaturedProduct() {
  const getWhatsAppLink = (title: string) => {
    return `https://wa.me/9869246570?text=${encodeURIComponent(
      `Hey, I would like to order ${title} from Sunaulo Jyoti`
    )}`;
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container-px mx-auto max-w-7xl">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl lg:text-4xl">
            Featured Product
          </h2>
          <p className="mt-2 text-sm text-neutral-600 sm:text-base leading-relaxed">
            Mix Masala is one of our most-loved spice blends, known for its rich
            aroma and authentic taste that enhances every meal.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border border-amber-100/90 bg-[#FDF9F0] p-4 sm:p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white shadow-xs">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-dark sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-600 sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5">
                <a
                  href={getWhatsAppLink(item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-brand-orange px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-brand-orange-dark active:scale-95"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
