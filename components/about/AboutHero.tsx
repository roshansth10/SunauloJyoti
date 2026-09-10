import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">
            About Jyoti Foods
          </h1>
          <p className="max-w-md text-sm text-brand-dark/70 sm:text-base">
            For generations, Sunaulo Jyoti has sourced, roasted, and ground
            spices the traditional way — bringing the pure, textured taste of
            real Nepali kitchens to every household we serve.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl2">
          <Image
            src="/images/garam-masala-bowl.webp"
            alt="Whole spices used in Jyoti Foods masala blends"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
