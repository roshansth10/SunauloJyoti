import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center py-20 sm:py-28 lg:py-32"
      style={{ backgroundImage: "url('/images/top-about.jpeg')" }}
    >
      <div className="relative container-px mx-auto max-w-3xl text-center flex flex-col items-center">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1B08] mb-3">
          About Jyoti Foods
        </h1>
        <p className="font-display text-base sm:text-lg lg:text-xl font-semibold text-[#3E270E] mb-6">
          Rooted in Tradition. Crafted for Every Kitchen.
        </p>
        <p className="max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-[#4A351E] mb-8 font-medium">
          Since 2008, Jyoti Foods has been committed to bringing pure spices
          and authentic flavors to every household. We carefully source, process,
          and package every product to ensure freshness, quality, and the rich
          taste of tradition.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#EA8C1C] to-[#D97706] text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:from-[#D97706] hover:to-[#B45309] transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Explore Products
        </Link>
      </div>
    </section>
  );
}

