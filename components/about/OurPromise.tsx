import Image from "next/image";

export default function OurPromise() {
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-24">
      <div className="container-px mx-auto max-w-4xl flex flex-col items-center text-center">
        {/* Section Heading */}
        <h2 className="font-display text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-6 sm:mb-10">
          Our Promise to You
        </h2>

        {/* Founder & Product Image Banner */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-md border border-neutral-100 mb-6 sm:mb-10 group">
          <Image
            src="/images/about-last.jpeg"
            alt="Our Promise to You - Jyoti Foods founder and product selection"
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Description Paragraphs */}
        <div className="flex flex-col gap-4 sm:gap-6 max-w-3xl text-neutral-600 font-normal text-xs sm:text-sm md:text-base leading-relaxed">
          <p>
            At Jyoti Foods, we are committed to delivering premium quality spices made from carefully selected ingredients. Every product is crafted with precision to preserve its natural freshness, rich aroma, and authentic taste.
          </p>
          <p>
            From sourcing to packaging, we maintain strict quality and hygiene standards to ensure every pack brings confidence, flavor, and tradition to your kitchen.
          </p>
        </div>
      </div>
    </section>
  );
}
