import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Promo() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
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
          <p className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">
            20% OFF
          </p>
          <p className="mt-2 font-display text-2xl font-semibold text-brand-dark sm:text-3xl">
            FOR FIRST ONLINE ORDER
          </p>
          <p className="mt-4 text-sm text-neutral-600 sm:text-base">
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
