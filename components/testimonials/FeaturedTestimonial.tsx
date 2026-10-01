import Image from "next/image";
import Avatar from "./Avatar";
import { FEATURED_TESTIMONIAL } from "./testimonialData";
import Stars from "./Stars";

export default function FeaturedTestimonial() {
  const testimonial = FEATURED_TESTIMONIAL;

  return (
    <section className="bg-[#FCF6D8] py-12 sm:py-16">
      <div className="container-px mx-auto max-w-7xl">
        <h2 className="sr-only">Featured customer story</h2>

        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-12">
          {/* Product collection */}
          <div className="md:col-span-6">
            <Image
              src="/images/testimonials/jyoti.jpeg"
              alt="Jyoti Foods masala collection"
              width={546}
              height={437}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="w-full rotate-1 rounded-2xl object-cover shadow-md"
            />
          </div>

          {/* Quote */}
          <div className="px-4 sm:px-6 md:col-span-6">
            <div className="flex items-center gap-4">
              <Avatar
                name={testimonial.name}
                src={testimonial.avatar}
                className="h-16 w-16 sm:h-20 sm:w-20"
                textClassName="text-lg sm:text-xl"
              />
              <div>
                <h3 className="font-display text-lg font-bold text-brand-dark sm:text-xl">
                  {testimonial.name}
                </h3>
                <Stars rating={testimonial.rating} className="mt-1.5" />
              </div>
            </div>

            <p className="mt-3 text-xs text-neutral-500">{testimonial.date}</p>

            <blockquote className="mt-3 text-justify text-sm leading-relaxed text-neutral-700 sm:text-base">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
