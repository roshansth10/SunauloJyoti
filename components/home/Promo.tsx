import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Promo() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <Image
        src="/images/promo-bg-faded.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="max-w-lg">
          <p className="font-display text-2xl min-[400px]:text-3xl sm:text-4xl font-bold text-brand-dark">
            20% OFF
          </p>
          <p className="mt-2 font-display text-xl min-[400px]:text-2xl sm:text-3xl font-semibold text-brand-dark">
            FOR FIRST ONLINE ORDER
          </p>
          <p className="mt-3 sm:mt-4 text-sm text-neutral-600 sm:text-base leading-relaxed">
            Deliver authentic, pure, and high quality spice powders.
          </p>
          <div className="mt-6">
            <Button href="/products">Order Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
