import Image from "next/image";
import Link from "next/link";

export default function TestimonialsCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-12">
          {/* Founders shot */}
          <div className="md:col-span-5">
            <Image
              src="/images/testimonials/image 114.png"
              alt="Jyoti Foods founder presenting the masala collection"
              width={494}
              height={575}
              sizes="(min-width: 1024px) 38vw, 80vw"
              className="mx-auto w-full max-w-[300px] rotate-1 object-contain min-[420px]:max-w-[340px] md:max-w-none"
            />
          </div>

          {/* Copy + review CTA */}
          <div className="text-center md:col-span-7">
            <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl lg:text-4xl">
              Have You Tried Jyoti Foods?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              Share your experience and let us know how Jyoti brings flavor to
              your kitchen.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-orange-dark active:scale-95"
            >
              Share Your Review
            </Link>
          </div>
        </div>

        {/* Decorative leaf, matching the design */}
        <div className="pointer-events-none absolute bottom-0 right-4 hidden sm:block">
          <Image
            src="/images/Product Img/image 100.png"
            alt=""
            width={104}
            height={104}
            className="h-12 w-auto object-contain lg:h-16"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
