import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";

const PRODUCTS = [
  {
    title: "Chiya Masala",
    description:
      "A fragrant blend of aromatic spices that brings warmth, rich flavor, and authentic taste to every cup of tea.",
    image: "/images/chiya-masala-jar.webp",
  },
  {
    title: "Mix Masala",
    description:
      "An all-purpose blend of premium spices that adds rich flavor and aroma to curries, vegetables, and everyday meals.",
    image: "/images/mix-masala-packet.webp",
  },
  {
    title: "Turmeric Powder",
    description:
      "100% pure turmeric powder made from carefully selected turmeric roots, delivering natural color, freshness, and authentic flavor.",
    image: "/images/turmeric-packet.webp",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-brand-cream/40 py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          title="Products You Will Love"
          subtitle="(ग्राहकहरूको पहिलो रोजाइ)"
          description="Discover Jyoti's best-selling products, loved by customers for their exceptional quality, authentic flavors, and carefully selected ingredients."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
