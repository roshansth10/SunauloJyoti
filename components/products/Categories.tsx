import SectionHeading from "@/components/ui/SectionHeading";

const CATEGORIES = [
  "Masala Blends",
  "Chiya Masala",
  "Turmeric Powder",
  "Chilli Powder",
  "Cumin & Coriander",
  "Himalayan Pink Salt",
  "Szechuan Pepper",
  "Biryani Masala",
  "Panch Phoron",
  "Asafoetida",
  "Whole Spices",
];

export default function Categories() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading title="Shop by Category" />

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
          {CATEGORIES.map((category) => (
            <span
              key={category}
              className="shrink-0 rounded-full border border-black/10 bg-brand-cream/50 px-5 py-2.5 text-sm font-medium text-brand-dark transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
