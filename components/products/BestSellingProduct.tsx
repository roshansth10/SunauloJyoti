import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";

const BEST_SELLERS = [
  {
    title: "Turmeric Powder",
    description:
      "100% pure turmeric powder made from carefully selected roots, delivering natural color and authentic flavor.",
    image: "/images/turmeric-packet.webp",
  },
  {
    title: "Kitchen King Masala",
    description:
      "A versatile all-purpose spice blend that adds rich aroma to a wide variety of vegetable and curry dishes.",
    image: "/images/kitchen-king-masala.webp",
  },
  {
    title: "Chicken Masala",
    description:
      "A warm, aromatic blend of spices used to enhance the flavor of curries and stews.",
    image: "/images/chicken-masala-bowls.webp",
  },
];

export default function BestSellingProduct() {
  return (
    <section className="bg-brand-cream/40 py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading title="Best Selling Products" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BEST_SELLERS.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
