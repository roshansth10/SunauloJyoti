import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Sunaulo Jyoti",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="container-px mx-auto grid max-w-6xl gap-8 sm:gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-3 sm:gap-4">
          <h1 className="font-display text-2xl min-[380px]:text-3xl font-bold text-brand-dark sm:text-4xl">
            Get in Touch
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
            Questions about an order, bulk pricing, or a product you'd like to
            see us make? Send us a message and our team will respond within
            one business day.
          </p>

          <div className="mt-3 sm:mt-4 flex flex-col gap-2.5 sm:gap-3 text-sm text-neutral-600">
            <p>
              <span className="font-semibold text-brand-dark">Email:</span>{" "}
              hello@sunaulojyoti.com
            </p>
            <p>
              <span className="font-semibold text-brand-dark">Phone:</span>{" "}
              +977 1-XXXXXXX
            </p>
            <p>
              <span className="font-semibold text-brand-dark">Address:</span>{" "}
              Narayanpur, Chitwan, Nepal
            </p>
          </div>
        </div>

        <div className="rounded-xl2 bg-brand-cream/40 p-5 sm:p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
