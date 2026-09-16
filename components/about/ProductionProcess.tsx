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
      {/* Exact Transparent Leaf Accents matching design locations */}
      {/* Top Left Leaf */}
      <div className="pointer-events-none absolute left-0 top-[4%] w-16 sm:w-28 md:w-48 lg:w-56 opacity-30 md:opacity-90 z-0">
        <Image src="/images/crop4.png" alt="" width={537} height={915} className="object-contain object-left-top" />
      </div>

      {/* Mid Left Leaf */}
      <div className="pointer-events-none absolute left-0 top-[38%] w-16 sm:w-28 md:w-44 lg:w-52 opacity-30 md:opacity-90 z-0">
        <Image src="/images/crop5.png" alt="" width={604} height={725} className="object-contain object-left-center" />
      </div>

      {/* Mid Right Leaf */}
      <div className="pointer-events-none absolute right-0 top-[22%] w-20 sm:w-32 md:w-56 lg:w-64 opacity-30 md:opacity-90 z-0">
        <Image src="/images/crop3.png" alt="" width={881} height={1310} className="object-contain object-right-center" />
      </div>

      {/* Bottom Right Leaf Cluster */}
      <div className="pointer-events-none absolute right-2 sm:right-6 md:right-10 bottom-[8%] w-20 sm:w-32 md:w-52 lg:w-60 opacity-30 md:opacity-90 z-0">
        <Image src="/images/crop6.png" alt="" width={584} height={652} className="object-contain object-right-bottom" />
      </div>

      <div className="container-px mx-auto max-w-5xl relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-20 md:mb-24">
          <h2 className="font-display text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E1E]">
            Our Production Process
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-neutral-500 font-medium max-w-xl mx-auto">
            From carefully selected ingredients to your kitchen.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* SVG Dotted Curved Line — visible on all screens */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
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

          {/* Steps List */}
          <div className="flex flex-col gap-8 sm:gap-16 md:gap-24 relative z-10">
            {STEPS.map((step, idx) => {
              const isLeft = step.side === "left";
              return (
                <div key={step.title} className="flex flex-col items-center">
                  <div
                    className={`w-full flex flex-row items-center justify-between gap-3 sm:gap-8 md:gap-10 ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Circle Image Side */}
                    <div className="w-1/2 flex justify-center">
                      <div className="relative w-28 h-28 min-[400px]:w-36 min-[400px]:h-36 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden shadow-md border-4 border-white ring-1 ring-black/5 group flex-shrink-0 transition-transform duration-500 hover:scale-105">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(min-width: 768px) 240px, (min-width: 400px) 144px, 112px"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Text Description Side */}
                    <div
                      className={`w-1/2 ${
                        isLeft ? "text-left pl-1 sm:pl-4" : "text-left pr-1 sm:pr-4"
                      }`}
                    >
                      <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-orange mb-1">
                        Step 0{idx + 1}
                      </span>
                      <h3 className="font-display text-sm sm:text-xl font-bold text-[#1E1E1E] leading-snug">
                        {step.title}
                      </h3>
                      <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm text-neutral-600 leading-relaxed max-w-xs">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End Point: Home Icon Badge */}
            <div className="flex flex-col items-center justify-center pt-4 md:pt-8">
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
