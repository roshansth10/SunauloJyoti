import Image from "next/image";
import Link from "next/link";

export default function ProductPromoBanner() {
  const whatsappHref = `https://wa.me/9869246570?text=${encodeURIComponent(
    "Hello Sunaulo Jyoti, I would like to claim 20% off for my first online order!"
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#FDEBA2] via-[#FEF0B2] to-[#FCE89B] py-8 sm:py-11 border-b border-amber-200/60 shadow-xs">
      {/* Decorative Image 10: Bigger, pinned to the very edgest top-left part */}
      <div className="pointer-events-none absolute -top-1 -left-1 z-10">
        <Image
          src="/images/Product Img/image 10.png"
          alt=""
          width={148}
          height={191}
          priority
          className="h-28 w-auto object-contain sm:h-36 md:h-44 lg:h-52 drop-shadow-xs"
          aria-hidden
        />
      </div>

      {/* Decorative Image 26: Spices arrangement on the far right edge */}
      <div className="pointer-events-none absolute -bottom-1 right-0 z-10 flex items-end justify-end">
        <Image
          src="/images/Product Img/image 26.png"
          alt=""
          width={254}
          height={164}
          priority
          className="h-24 w-auto object-contain sm:h-32 md:h-40 lg:h-44 drop-shadow-xs"
          aria-hidden
        />
      </div>

      {/* Centered Promo Content with images 56 & 55 positioned as in design */}
      <div className="container-px relative z-20 mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
        <div className="relative inline-block">
          {/* Decorative Image 56: Leaf sprig placed at the left */}
          <div className="pointer-events-none absolute -left-12 sm:-left-20 md:-left-28 top-1 sm:top-2 z-10">
            <Image
              src="/images/Product Img/image 56.png"
              alt=""
              width={38}
              height={62}
              className="h-7 w-auto object-contain sm:h-9 md:h-11 opacity-90"
              aria-hidden
            />
          </div>

          {/* Decorative Image 55: Small leaf/seed placed a bit down and further to the right */}
          <div className="pointer-events-none absolute -right-20 sm:-right-32 md:-right-44 top-8 sm:top-10 md:top-12 z-10">
            <Image
              src="/images/Product Img/image 55.png"
              alt=""
              width={39}
              height={39}
              className="h-5 w-auto object-contain sm:h-7 md:h-8 opacity-85"
              aria-hidden
            />
          </div>

          {/* Offer text: bold 20% OFF and slightly dimmer FOR FIRST ONLINE ORDER */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl md:text-[34px]">
            20% OFF
          </h2>
          <p className="mt-1 font-display text-xs font-semibold text-black sm:text-sm md:text-base">
            For First Online Order
          </p>
        </div>

        <Link
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3.5 inline-flex items-center justify-center rounded-md bg-brand-orange px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-orange-dark active:scale-95"
        >
          Order Now
        </Link>
      </div>
    </section>
  );
}
