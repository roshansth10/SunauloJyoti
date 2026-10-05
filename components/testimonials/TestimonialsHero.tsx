import Image from "next/image";

export default function TestimonialsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-3">
      <h1 className="sr-only">Customer Testimonials</h1>
      {/* Slightly tilted, full-bleed photo as in the design reference */}
      <Image
        src="/images/testimonials/top.jpeg"
        alt="Freshly prepared Jyoti Foods spices in a home kitchen"
        width={1440}
        height={840}
        priority
        sizes="100vw"
        className="h-[190px] w-full object-cover sm:h-[300px] lg:h-[420px]"
      />
    </section>
  );
}
