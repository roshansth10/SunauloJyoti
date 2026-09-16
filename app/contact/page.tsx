import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Sunaulo Jyoti",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF9F5] pb-16 sm:pb-24">
      {/* Top Banner Image */}
      <div className="relative w-full h-[260px] sm:h-[380px] md:h-[460px] lg:h-[500px] overflow-hidden">
        <Image
          src="/images/contactus.jpeg"
          alt="Sunaulo Jyoti Spices Collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Floating Contact Us Card */}
      <div className="container-px mx-auto max-w-3xl relative z-10 -mt-16 sm:-mt-28 md:-mt-36 lg:-mt-40">
        <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-10 md:p-12 shadow-xl border border-black/5">
          <h1 className="text-center font-display text-2xl min-[400px]:text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-6 sm:mb-8">
            Contact Us
          </h1>
          <ContactForm />
        </div>
      </div>

      {/* Embedded Google Map Section */}
      <div className="container-px mx-auto max-w-5xl mt-12 sm:mt-16 md:mt-20">
        <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-neutral-200 bg-neutral-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6423.60343108423!2d84.4027007!3d27.6584982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fbb65349f5e7%3A0x597058fb32bab291!2sJyoti%20Food%20Products!5e1!3m2!1sen!2snp!4v1789567644027!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Jyoti Food Products location on Google Maps"
            className="w-full h-[320px] sm:h-[400px] md:h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
