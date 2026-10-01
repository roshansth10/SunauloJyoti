import Image from "next/image";

export default function NewArrival() {
  const whatsappHref = `https://wa.me/9869246570?text=${encodeURIComponent(
    "Hello Sunaulo Jyoti, I would like to order the New Arrival Jyoti Special Black Pepper!"
  )}`;

  return (
    <section className="bg-white py-6 sm:py-10">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#FCF6D8] shadow-xs">
          {/* Top-left: image 15 (nudged up by the asset's 28.75% transparent top padding
              so the branch starts flush with the top edge of the banner) */}
          <div className="pointer-events-none absolute top-0 left-0 z-10">
            <Image
              src="/images/Product Img/image 15.png"
              alt=""
              width={137}
              height={240}
              priority
              className="h-24 w-auto -translate-y-[28.75%] object-contain sm:h-32 md:h-40 lg:h-48 drop-shadow-xs"
              aria-hidden
            />
          </div>

          {/* Mid-left: image 100 */}
          <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-3 z-10 sm:left-5 md:left-8 lg:left-10">
            <Image
              src="/images/Product Img/image 100.png"
              alt=""
              width={104}
              height={104}
              className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28 drop-shadow-xs opacity-90"
              aria-hidden
            />
          </div>

          <div className="relative z-20 grid min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] items-center lg:grid-cols-12">
            {/* Center Content: Centered text and Order Now button */}
            <div className="flex flex-col items-center justify-center px-6 py-12 text-center lg:col-span-7 lg:pl-16 lg:pr-8">
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#1F140A] sm:text-4xl md:text-5xl">
                New Arrival
              </h2>

              <h3 className="mt-3 sm:mt-4 font-display text-base font-bold text-[#1F140A] sm:text-xl md:text-[22px]">
                Introducing Jyoti&apos;s Special Black Pepper
              </h3>

              <p className="mt-2 max-w-md text-xs sm:text-sm md:text-base text-[#6B5E52] leading-relaxed">
                Crafted with premium spices to make every cup warm, flavorful, and refreshing.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-2xl bg-[#E2872E] px-8 py-2.5 sm:px-10 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-sm transition-all hover:bg-[#C96F05] active:scale-95"
              >
                Order Now
              </a>
            </div>

            {/* Right side: floating pods (image 100) and woman with spice tray (sasu) */}
            <div className="relative flex h-full items-end justify-center lg:col-span-5 lg:justify-end">
              {/* Image 100: floating between center content and sasu's tray */}
              <div className="pointer-events-none absolute -left-4 sm:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-20">
                <Image
                  src="/images/Product Img/image 100.png"
                  alt=""
                  width={104}
                  height={104}
                  className="h-20 w-auto object-contain sm:h-28 md:h-32 lg:h-40 drop-shadow-xs opacity-90"
                  aria-hidden
                />
              </div>

              {/* Sasu image */}
              <div className="relative aspect-[449/511] w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] pt-4 sm:pt-6">
                <Image
                  src="/images/Product Img/sasu.png"
                  alt="Introducing Jyoti's Special Black Pepper with spice collection"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 90vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
