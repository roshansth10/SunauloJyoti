import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";

const NEW_ARRIVALS = [
  {
    title: "Chiya Masala",
    description:
      "A fragrant blend of aromatic spices that brings warmth and authentic taste to every cup of tea.",
    image: "/images/chiya-masala-jar.webp",
  },
  {
    title: "Mix Masala",
    description:
      "An all-purpose blend of premium spices for curries, vegetables, and everyday meals.",
    image: "/images/mix-masala-packet.webp",
  },
];

export default function NewArrival() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading title="New Arrivals" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {NEW_ARRIVALS.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
