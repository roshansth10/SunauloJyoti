import Image from "next/image";

export default function Lifestyle() {
  return (
    <section className="bg-brand-cream/40 py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-xl2">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="/images/lifestyle-cooking.jpg"
              alt="A home cook preparing a dish with Sunaulo Jyoti spices"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
