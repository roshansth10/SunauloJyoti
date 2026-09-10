const PARTNERS = [
  "NIC Asia",
  "eSewa",
  "Khalti",
  "Nabil Bank",
  "connectIPS",
];

export default function PaymentPartners() {
  return (
    <section className="bg-white py-14">
      <div className="container-px mx-auto max-w-7xl">
        <h2 className="font-display text-2xl font-semibold text-brand-dark">
          Our Payment Partners
        </h2>

        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="rounded-md border border-black/10 px-5 py-3 text-sm font-semibold text-neutral-600"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-neutral-400">
          Replace these badges with the official partner logos you have
          licensed to use.
        </p>
      </div>
    </section>
  );
}
