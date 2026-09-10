const CARDS = [
  {
    title: "Our Mission",
    description:
      "To bring pure, authentic, and hygienically processed spices to every kitchen — preserving traditional flavor without compromising on quality.",
    className: "bg-card-blue",
  },
  {
    title: "Our Vision",
    description:
      "To become the most trusted Nepali spice brand, known for consistency, purity, and the taste of home in every product we make.",
    className: "bg-card-pink",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-brand-cream/40 py-16 sm:py-20">
      <div className="container-px mx-auto grid max-w-7xl gap-6 sm:grid-cols-2">
        {CARDS.map((card) => (
          <div key={card.title} className={`rounded-xl2 p-8 ${card.className}`}>
            <h3 className="font-display text-xl font-semibold text-brand-dark">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
