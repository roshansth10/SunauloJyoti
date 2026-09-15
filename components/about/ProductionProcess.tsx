import Image from "next/image";

const STEPS = [
  {
    title: "Ingredient Selection",
    description:
      "Carefully sourcing 100% natural raw spices from trusted regional suppliers.",
    image: "/images/about1.jpeg",
    side: "left",
  },
  {
    title: "Cleaning & Sorting",
    description:
      "Raw spices are thoroughly cleaned to remove impurities and sorted for quality.",
    image: "/images/about2.jpeg",
    side: "right",
  },
  {
    title: "Roasting & Grinding",
    description:
      "Selected spices are roasted and finely ground using traditional methods for rich flavor.",
    image: "/images/about3.jpeg",
    side: "left",
  },
  {
    title: "Quality Assurance",
    description: "Each batch undergoes strict quality testing.",
    image: "/images/about4.jpeg",
    side: "right",
  },
  {
    title: "Packaging & Delivery",
    description: "Sealed for freshness and delivered to stores.",
    image: "/images/about5.jpeg",
    side: "left",
  },
];

export default function ProductionProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Floating Leaf Accents */}
      <div className="pointer-events-none absolute left-4 sm:left-12 top-16 w-10 sm:w-16 opacity-80">
        <Image src="/images/a1.jpeg" alt="" width={64} height={64} className="object-contain" />
      </div>
      <div className="pointer-events-none absolute left-4 sm:left-8 top-[38%] w-10 sm:w-14 opacity-75">
        <Image src="/images/a2.jpeg" alt="" width={56} height={56} className="object-contain" />
      </div>
      <div className="pointer-events-none absolute right-4 sm:right-10 top-[58%] w-12 sm:w-16 opacity-80">
        <Image src="/images/a3.jpeg" alt="" width={64} height={64} className="object-contain" />
      </div>
      <div className="pointer-events-none absolute right-6 sm:right-12 bottom-32 w-12 sm:w-20 opacity-80">
        <Image src="/images/a4.jpeg" alt="" width={80} height={80} className="object-contain" />
      </div>

      <div className="container-px mx-auto max-w-5xl relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E1E]">
            Our Production Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 font-medium max-w-xl mx-auto">
            From carefully selected ingredients to your kitchen.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop SVG Dotted Curved Line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 800 1450"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 240 100 C 520 170, 600 300, 560 380 C 520 460, 200 560, 240 660 C 280 760, 600 840, 560 940 C 520 1040, 200 1140, 240 1220 C 280 1300, 400 1360, 400 1420"
              stroke="#D3C7B5"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Mobile Vertical Dotted Line */}
          <div className="absolute left-1/2 top-0 bottom-24 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[#D3C7B5] md:hidden" />

          {/* Steps List */}
          <div className="flex flex-col gap-16 sm:gap-24 relative z-10">
            {STEPS.map((step) => {
              const isLeft = step.side === "left";
              return (
                <div
                  key={step.title}
                  className={`flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Circle Image Side */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4 border-white ring-1 ring-black/5 group flex-shrink-0 transition-transform duration-500 hover:scale-105">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(min-width: 768px) 240px, 176px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Text Description Side */}
                  <div
                    className={`w-full md:w-1/2 text-center ${
                      isLeft ? "md:text-left md:pl-4" : "md:text-left md:pr-4"
                    }`}
                  >
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#1E1E1E]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xs mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* End Point: Home Icon Badge */}
            <div className="flex flex-col items-center justify-center pt-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-[#A8947C] bg-[#FAF8F5] flex flex-col items-center justify-center shadow-sm text-[#7C6853]">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span className="mt-3 font-display text-xs sm:text-sm font-bold tracking-widest text-[#7C6853] uppercase">
                HOME
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
