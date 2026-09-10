import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Testimonials | Sunaulo Jyoti",
};

const TESTIMONIALS = [
  {
    name: "Sabina R.",
    location: "Kathmandu",
    quote:
      "The Chiya Masala tastes exactly like my grandmother used to make. It's become a daily ritual in our house.",
  },
  {
    name: "Prakash T.",
    location: "Pokhara",
    quote:
      "Kitchen King Masala has replaced three separate spice jars for me. Consistent flavor every single time.",
  },
  {
    name: "Anita G.",
    location: "Lalitpur",
    quote:
      "You can really taste the difference in the turmeric powder — bright color, and none of the chalky aftertaste.",
  },
  {
    name: "Bishal K.",
    location: "Biratnagar",
    quote:
      "Ordered the spice collection box as a gift and ended up reordering it for my own kitchen. Excellent packaging too.",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          title="What Our Customers Say"
          description="Real feedback from home cooks who have made Jyoti spices part of their kitchen."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl2 bg-brand-cream/40 p-8 ring-1 ring-black/5"
            >
              <blockquote className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-brand-dark">
                {t.name}
                <span className="ml-2 font-normal text-neutral-400">
                  {t.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
