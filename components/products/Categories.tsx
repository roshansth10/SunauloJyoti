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
    <section className="bg-white py-12 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading title="Shop by Category" />

        <div className="mt-6 sm:mt-8 -mx-4 px-4 sm:mx-0 sm:px-0 flex gap-2.5 sm:gap-3 overflow-x-auto pb-2 no-scrollbar sm:flex-wrap sm:overflow-visible">
          {CATEGORIES.map((category) => (
            <span
              key={category}
              className="shrink-0 cursor-pointer rounded-full border border-black/10 bg-brand-cream/50 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-brand-dark transition-colors hover:border-brand-orange hover:text-brand-orange shadow-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
