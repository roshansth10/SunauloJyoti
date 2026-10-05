import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Main centered container */}
      <div className="container-px relative mx-auto flex flex-col justify-center py-12 sm:py-16 lg:min-h-[580px] lg:py-0 max-w-7xl">
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

        {/* Mobile / Tablet Product Image (In-flow below text, right edge aligned perfectly to screen border) */}
        <div className="relative z-0 mt-6 ml-auto -mr-4 min-[420px]:-mr-6 sm:-mr-10 w-[calc(100%+1rem)] min-[420px]:w-[calc(100%+1.5rem)] sm:w-[calc(100%+2.5rem)] max-w-none lg:hidden">
          <div className="relative aspect-[1390/1175] w-full">
            <Image
              src="/images/Heroproducts-cropped.png"
              alt="Sunaulo Jyoti spice collection"
              fill
              priority
              sizes="(min-width: 640px) 100vw, 100vw"
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>

      {/* Desktop Product Image (Layered on right, aligned right to screen edge) */}
      <div
        className="
          pointer-events-none
          absolute
          top-0
          bottom-0
          right-[-0.75vw]
          z-0
          hidden
          lg:block
          lg:w-[62.5vw]
          xl:w-[58.5vw]
          2xl:w-[54.5vw]
          max-w-none
        "
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/Heroproducts-cropped.png"
            alt="Sunaulo Jyoti spice collection"
            fill
            priority
            sizes="62.5vw"
            className="object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
}
