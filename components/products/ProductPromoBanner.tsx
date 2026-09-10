import Button from "@/components/ui/Button";

export default function ProductPromoBanner() {
  return (
    <section className="bg-card-yellow">
      <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-center text-sm font-semibold text-brand-dark sm:text-base">
          Get 20% off your first online order — use code{" "}
          <span className="text-brand-orange">JYOTI20</span>
        </p>
        <Button href="/contact" className="px-6 py-2.5 text-xs">
          Order Now
        </Button>
      </div>
    </section>
  );
}
