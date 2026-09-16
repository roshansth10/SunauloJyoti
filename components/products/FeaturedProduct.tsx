import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FeaturedProduct() {
  return (
    <section className="bg-brand-cream/40 py-12 sm:py-20">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-6 sm:gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 lg:order-2 shadow-sm">
          <Image
            src="/images/garam-masala-bowl.webp"
            alt="Featured whole spice blend"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 lg:order-1">
          <span className="w-fit rounded-full bg-brand-orange/10 px-3.5 py-1 text-xs font-semibold text-brand-orange">
            Featured Product
          </span>
          <h2 className="font-display text-xl min-[400px]:text-2xl font-semibold text-brand-dark sm:text-3xl">
            Black Pepper Spotlight
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
            Sun-dried and slow-processed to keep every peppercorn sharp,
            aromatic, and full of natural oils — the base note behind our
            best-loved masala blends.
          </p>
          <div>
            <Button href="/contact">Order Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
