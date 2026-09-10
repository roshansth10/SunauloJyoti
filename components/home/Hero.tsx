import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Main centered content */}
      <div className="container-px relative mx-auto min-h-[680px] max-w-7xl lg:min-h-[740px]">
        {/* Left Content */}
        <div className="flex max-w-xl flex-col gap-5 py-20 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:py-0">
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Bringing Authentic Flavor to Every Kitchen
          </h1>

          <p className="text-lg font-medium text-brand-dark/80">
            शुद्ध स्वादका लागि ज्योति फुड्स नै रोजौँ !
          </p>

          <p className="max-w-md text-sm text-brand-dark/70 sm:text-base">
            Experience the richness of premium spices crafted from carefully
            selected ingredients.
          </p>

          <div>
            <Button href="/products">Explore Products</Button>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div
        className="
    pointer-events-none
    absolute
    top-0
    right-[-1vw]
    z-0
    w-[85vw]
    max-w-none
    sm:w-[70vw]
    lg:w-[55vw]
  "
      >
        <div className="relative aspect-[1371/1181] w-full">
          <Image
            src="/images/Heroproducts-cropped.png"
            alt="Sunaulo Jyoti spice collection"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, (min-width: 640px) 70vw, 85vw"
            className="object-contain object-right-top"
          />
        </div>
      </div>
    </section>
  );
}
