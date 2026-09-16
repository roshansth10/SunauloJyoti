import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Main centered container */}
      <div className="container-px relative mx-auto flex flex-col justify-center py-12 sm:py-16 lg:min-h-[740px] lg:py-0 max-w-7xl">
        {/* Text Content */}
        <div className="relative z-10 flex max-w-xl flex-col gap-4 sm:gap-5 text-left lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
          <h1 className="font-display text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-brand-dark">
            Bringing Authentic Flavor to Every Kitchen
          </h1>

          <p className="text-base sm:text-lg font-medium text-brand-dark/80">
            शुद्ध स्वादका लागि ज्योति फुड्स नै रोजौँ !
          </p>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-brand-dark/70">
            Experience the richness of premium spices crafted from carefully
            selected ingredients.
          </p>

          <div className="pt-1">
            <Button href="/products">Explore Products</Button>
          </div>
        </div>

        {/* Mobile / Tablet Product Image (In-flow below text) */}
        <div className="relative z-0 mt-8 w-full max-w-lg mx-auto sm:max-w-xl lg:hidden">
          <div className="relative aspect-[1371/1181] w-full">
            <Image
              src="/images/Heroproducts-cropped.png"
              alt="Sunaulo Jyoti spice collection"
              fill
              priority
              sizes="(min-width: 640px) 70vw, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Desktop Product Image (Layered on right) */}
      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-[-1vw]
          z-0
          hidden
          lg:block
          lg:w-[55vw]
          max-w-none
        "
      >
        <div className="relative aspect-[1371/1181] w-full">
          <Image
            src="/images/Heroproducts-cropped.png"
            alt="Sunaulo Jyoti spice collection"
            fill
            priority
            sizes="55vw"
            className="object-contain object-right-top"
          />
        </div>
      </div>
    </section>
  );
}
