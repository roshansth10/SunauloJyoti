import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const ITEMS = [
  {
    title: "Garam Masala",
    description:
      "A warm, aromatic blend of spices like cinnamon, cloves, cardamom, and cumin, used to enhance the flavor of curries and stews.",
    image: "/images/garam-masala-bowl.webp",
  },
  {
    title: "Kitchen King Masala",
    description:
      "A versatile all-purpose spice blend that adds rich aroma and balanced flavor to a wide variety of vegetable and curry dishes.",
    image: "/images/kitchen-king-masala.webp",
  },
  {
    title: "Chicken Masala",
    description:
      "A warm, aromatic blend of spices like cinnamon, cloves, cardamom, and cumin, used to enhance the flavor of curries and stews.",
    image: "/images/chicken-masala-bowls.webp",
  },
];

export default function SignatureMasala() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          title="Signature Mix Masala"
          subtitle="परम्परागत स्वाद, आधुनिक गुणस्तर"
        />

        <div className="mt-10 sm:mt-12 flex flex-col gap-10 sm:gap-14">
          {ITEMS.map((item, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={item.title}
                className={`grid items-center gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
                    {item.description}
                  </p>
                  <div>
                    <Button href="/products">Order Now</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/products" variant="outline">
            View More ⌄
          </Button>
        </div>
      </div>
    </section>
  );
}
