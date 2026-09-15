export default function MissionVision() {
  return (
    <section className="bg-white py-12 sm:py-16 container-px mx-auto max-w-5xl">
      {/* Container box with warm subtle background */}
      <div className="rounded-3xl bg-[#FFFDF5] border border-[#F3EDDF] p-8 sm:p-12 lg:p-14">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E1E]">
            Mission and Vision
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Driven by quality, rooted in tradition, and committed to bringing authentic flavors to every kitchen.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Our Vision (Mint Green) */}
          <div className="rounded-2xl bg-[#DEF2E4] p-8 sm:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-[#2D6A4F]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1E1E1E] mb-4">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              To deliver high quality, authentic spice products that bring taste and wellness into every household, while supporting sustainable farming practices and staying true to traditional roots.
            </p>
          </div>

          {/* Card 2: Our Mission (Soft Pink) */}
          <div className="rounded-2xl bg-[#FDE7ED] p-8 sm:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-[#C93B5E]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1E1E1E] mb-4">
              Our Mission
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              To be a leading brand in the spice industry, recognized for our commitment to purity, innovation, and customer satisfaction, expanding our reach globally while maintaining quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
