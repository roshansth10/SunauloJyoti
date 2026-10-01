import Image from "next/image";

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
          Bestselling product.
        </h2>

        {/* Product Cards Row matching screenshot */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6">
          {BEST_SELLERS.map((product) => (
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
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
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
                  className="mt-3 w-full rounded-lg bg-brand-orange py-2 text-center text-xs font-semibold text-white shadow-sm transition-all hover:bg-brand-orange-dark active:scale-95"
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
