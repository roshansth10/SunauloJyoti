import type { Metadata } from "next";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialCarousel from "@/components/testimonials/TestimonialCarousel";
import FeaturedTestimonial from "@/components/testimonials/FeaturedTestimonial";
import TestimonialsCTA from "@/components/testimonials/TestimonialsCTA";

export const metadata: Metadata = {
  title: "Testimonials | Sunaulo Jyoti",
  description:
    "Read what customers across Nepal say about Jyoti Foods spices, salts and masala blends, and share your own experience.",
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialCarousel />
      <FeaturedTestimonial />
      <TestimonialsCTA />
    </>
  );
}
