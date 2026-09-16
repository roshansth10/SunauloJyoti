import Image from "next/image";

const PARTNERS = [
  {
    name: "NIC ASIA Bank",
    src: "/images/partners/NIC-logo.png",
    width: 1080,
    height: 1080,
  },
  {
    name: "eSewa",
    src: "/images/partners/esewa.png",
    width: 1969,
    height: 1144,
  },
  {
    name: "Khalti",
    src: "/images/partners/khalti.webp",
    width: 400,
    height: 180,
  },
  {
    name: "N-Bank by Nabil",
    src: "/images/partners/nabil.png",
    width: 750,
    height: 750,
  },
  {
    name: "connectIPS",
    src: "/images/partners/cips_logo.png",
    width: 1200,
    height: 1200,
  },
];

export default function PaymentPartners() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 border-t border-neutral-100">
      {/* Decorative cardamom seeds — top right */}
      <div className="pointer-events-none absolute right-0 top-0 w-24 sm:w-36 md:w-44 opacity-25 z-0">
        <Image src="/images/3.png" alt="" width={200} height={200} className="object-contain" />
      </div>
      {/* Decorative leaf — bottom left */}
      <div className="pointer-events-none absolute -left-4 bottom-0 w-20 sm:w-28 md:w-32 opacity-15 z-0 rotate-[-20deg]">
        <Image src="/images/6.png" alt="" width={160} height={160} className="object-contain" />
      </div>

      <div className="container-px mx-auto max-w-6xl text-center relative z-10">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E1E1E] mb-8 sm:mb-12">
          Our Payment Partners
        </h2>

        {/* Partner Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center transition-all hover:scale-105 duration-300 p-2"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="object-contain h-10 sm:h-12 md:h-16 w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
