import Image from "next/image";

export default function OurPromise() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2">
          <Image
            src="/images/chicken-masala-bowls.webp"
            alt="Freshly prepared spice blends"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-2xl font-semibold text-brand-dark sm:text-3xl">
            Our Promise
          </h2>
          <p className="text-sm leading-relaxed text-neutral-500 sm:text-base">
            Every pack that leaves our facility carries the same promise: no
            fillers, no shortcuts, and no compromise on the traditional
            methods that give Nepali spices their character.
          </p>
          <p className="text-sm leading-relaxed text-neutral-500 sm:text-base">
            We work directly with growers, test every batch for purity, and
            package fresh to order — so what reaches your kitchen tastes the
            way it should.
          </p>
        </div>
      </div>
    </section>
  );
}
