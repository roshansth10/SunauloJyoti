import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  { title: "Sourcing", description: "Whole spices selected from trusted regional farms." },
  { title: "Cleaning", description: "Impurities removed through careful hand and machine sorting." },
  { title: "Roasting", description: "Slow-roasted to unlock natural aroma and depth of flavor." },
  { title: "Grinding", description: "Stone-ground to preserve texture, oils, and freshness." },
  { title: "Quality Check", description: "Every batch tested for purity, color, and consistency." },
  { title: "Packing", description: "Sealed fresh to protect flavor until it reaches your kitchen." },
];

export default function ProductionProcess() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          title="Our Production Process"
          description="From farm to jar — six careful steps behind every pack of Jyoti spices."
        />

        <ol className="relative mt-14 flex flex-col gap-10 sm:before:absolute sm:before:left-1/2 sm:before:top-2 sm:before:h-[calc(100%-1rem)] sm:before:w-px sm:before:-translate-x-1/2 sm:before:border-l-2 sm:before:border-dashed sm:before:border-brand-orange/40">
          {STEPS.map((step, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <li
                key={step.title}
                className={`relative flex flex-col gap-2 sm:w-1/2 ${
                  reversed ? "sm:ml-auto sm:pl-10 sm:text-left" : "sm:pr-10 sm:text-right"
                }`}
              >
                <span
                  className={`hidden h-3 w-3 rounded-full bg-brand-orange sm:absolute sm:top-1.5 sm:block ${
                    reversed ? "-left-[7px]" : "-right-[7px]"
                  }`}
                />
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  Step {idx + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-brand-dark">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
