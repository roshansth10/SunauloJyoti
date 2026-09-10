import SectionHeading from "@/components/ui/SectionHeading";

const FEATURES = [
  {
    icon: "🏆",
    title: "Premium Quality",
    description: "Carefully selected spices for unmatched freshness and quality.",
    bg: "bg-card-yellow",
  },
  {
    icon: "🌿",
    title: "Authentic Taste",
    description: "Rich, aromatic blends that elevate every meal.",
    bg: "bg-card-blue",
  },
  {
    icon: "🧼",
    title: "Hygienically Processed",
    description: "Packed with care to ensure purity, freshness, and safety.",
    bg: "bg-card-pink",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          title="Why Choose Jyoti Foods?"
          description="Delivering pure, authentic spices crafted with quality, freshness, and tradition in every pack."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-xl2 p-8 ${feature.bg}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                {feature.icon}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-brand-dark">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
