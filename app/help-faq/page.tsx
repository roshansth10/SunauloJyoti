import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqSection } from "@/components/help-faq/FaqAccordion";

export const metadata: Metadata = {
  title: "Help & FAQ | Jyoti Foods",
  description:
    "Find answers to frequently asked questions about Jyoti Foods spices, masala blends, orders, delivery, storage, and customer support in Nepal.",
};

const FAQ_SECTIONS: FaqSection[] = [
  {
    title: "About Jyoti Foods",
    items: [
      {
        question: "What is Jyoti Foods?",
        answer: (
          <p>
            Jyoti Foods is a Nepali spice and masala brand offering products for everyday cooking,
            traditional recipes, snacks, and beverages. Our product range includes Chilli Masala,
            Chatpat Masala, Special Meat Masala, Chiya Masala, Mix Masala, Turmeric Powder, and other
            products listed on our website.
          </p>
        ),
      },
      {
        question: "Where is Jyoti Foods located?",
        answer: (
          <p>
            Our website lists our location as Bharatpur-05, Chitwan, Nepal. Please contact us before
            visiting the manufacturing facility to confirm visitor access and business hours.
          </p>
        ),
      },
      {
        question: "What products do you offer?",
        answer: (
          <div className="space-y-2">
            <p>Our product range may include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Chilli Masala</li>
              <li>Chatpat Masala</li>
              <li>Special Meat Masala</li>
              <li>Chiya Masala</li>
              <li>Mix Masala</li>
              <li>Turmeric Powder</li>
              <li>Other spices and masala products announced on our website</li>
            </ul>
            <p className="pt-1">
              Availability, packaging sizes, and product specifications may vary. Check the relevant{" "}
              <Link href="/products" className="text-brand-orange hover:underline font-medium">
                product page
              </Link>{" "}
              or contact us for current information.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Products and Ingredients",
    items: [
      {
        question: "How can I find the ingredients of a product?",
        answer: (
          <p>
            Check the product packaging and product-specific information published on our website.
            If you need clarification about ingredients, contact us with the product name and
            packaging details.
          </p>
        ),
      },
      {
        question: "Are Jyoti Foods products suitable for vegetarians or vegans?",
        answer: (
          <p>
            Suitability depends on the specific product and its ingredients. Check the ingredient
            declaration and relevant product-specific information rather than assuming that every
            masala blend is suitable for every diet.
          </p>
        ),
      },
      {
        question: "Do your products contain allergens?",
        answer: (
          <p>
            Review the ingredient and allergen information on the product label. If you have a food
            allergy or sensitivity, contact us before consuming the product. Do not consume a
            product if its ingredients are unclear or the label indicates an ingredient you need to
            avoid.
          </p>
        ),
      },
      {
        question: "How should I store masala products?",
        answer: (
          <p>
            Unless the product label provides different instructions, store spices in a cool, dry
            place away from direct sunlight, heat, moisture, and strong odours. Keep the package
            tightly closed after opening and use a clean, dry spoon.
          </p>
        ),
      },
      {
        question: "How long do your products remain fresh?",
        answer: (
          <p>
            Check the best-before or expiry information printed on the individual package. Shelf
            life depends on the particular product and packaging. Do not consume products beyond
            their stated expiry date or if their packaging appears damaged, contaminated, or tampered
            with.
          </p>
        ),
      },
      {
        question: "How can I identify an authentic Jyoti Foods product?",
        answer: (
          <p>
            Purchase from authorised or trusted sellers where possible. Check the brand name,
            packaging integrity, product label, batch details, manufacturing information, and
            applicable dates. If you suspect a counterfeit or tampered product, contact us with
            photographs and purchase details.
          </p>
        ),
      },
    ],
  },
  {
    title: "Orders and Payments",
    items: [
      {
        question: "How can I place an order?",
        answer: (
          <p>
            Use the ordering link provided on the relevant product page or contact us through our
            official WhatsApp number. Confirm the product, quantity, total price, delivery charge,
            delivery address, and expected delivery time before finalising your order.
          </p>
        ),
      },
      {
        question: "Can I place a bulk or wholesale order?",
        answer: (
          <p>
            You may contact us to enquire about bulk purchases, retailer supply, distribution, or
            business partnerships. Pricing, minimum order quantities, availability, and delivery
            arrangements must be confirmed directly with our team.
          </p>
        ),
      },
      {
        question: "Which payment methods are accepted?",
        answer: (
          <p>
            Confirm the payment methods currently available when placing your order. Do not send
            money to an account or wallet unless the payment instructions have been verified
            through our official contact channels.
          </p>
        ),
      },
      {
        question: "Will I receive an order confirmation?",
        answer: (
          <p>
            Where applicable, our team will confirm the order details through the communication
            channel used to place the order. Keep your order confirmation, receipt, or transaction
            reference for future enquiries.
          </p>
        ),
      },
      {
        question: "Can I change or cancel an order?",
        answer: (
          <p>
            Contact us as soon as possible with your order details. We will confirm whether a
            change or cancellation is possible based on the order's preparation, dispatch, and
            delivery status, subject to applicable consumer law.
          </p>
        ),
      },
    ],
  },
  {
    title: "Delivery and Returns",
    items: [
      {
        question: "Do you deliver outside Chitwan?",
        answer: (
          <p>
            Delivery availability depends on the destination, order size, and current delivery
            arrangements. Contact us to confirm availability and applicable charges.
          </p>
        ),
      },
      {
        question: "How long does delivery take?",
        answer: (
          <p>
            Delivery time depends on the delivery location, product availability, order
            confirmation, and transport arrangements. Our team will provide an estimated delivery
            time when confirming your order.
          </p>
        ),
      },
      {
        question: "What should I do if I receive a damaged, incorrect, or defective product?",
        answer: (
          <p>
            Contact us promptly. Provide your order details, photographs of the product and
            packaging, and the batch number or other relevant label information. We will review the
            complaint and explain the appropriate remedy in accordance with the circumstances and
            applicable law.
          </p>
        ),
      },
      {
        question: "Can I return a product?",
        answer: (
          <p>
            Contact our team before returning an item. Return, replacement, and refund requests will
            be assessed under applicable consumer protection laws and the circumstances of the
            purchase. Food-safety and hygiene considerations may affect how a return is handled, but
            they do not remove any remedy that the law provides.
          </p>
        ),
      },
      {
        question: "What if I receive an expired product?",
        answer: (
          <p>
            Do not consume it. Keep the packaging and purchase evidence, and contact us with the
            product name, batch number, expiry date, and photographs.
          </p>
        ),
      },
    ],
  },
  {
    title: "Quality and Customer Support",
    items: [
      {
        question: "What should I do if I notice an unusual smell, colour, or texture?",
        answer: (
          <p>
            Stop using the product and contact us. Keep the original package and batch information
            so that we can investigate the concern. Do not consume a product that you suspect may be
            contaminated or unsafe.
          </p>
        ),
      },
      {
        question: "How can I provide feedback or make a complaint?",
        answer: (
          <p>
            Contact us through our official contact details. Include the product name, purchase date,
            batch number where available, and a clear description of your concern.
          </p>
        ),
      },
      {
        question: "How can I become a distributor or retail partner?",
        answer: (
          <p>
            Contact us with your business name, location, contact details, and the type of
            partnership you are interested in. Our team will discuss availability, commercial terms,
            and applicable requirements.
          </p>
        ),
      },
    ],
  },
];

export default function HelpFaqPage() {
  const whatsappUrl = `https://wa.me/9869246570?text=${encodeURIComponent(
    "Hello Jyoti Foods, I have an enquiry about your products."
  )}`;

  return (
    <div className="bg-[#FAF9F5] py-10 sm:py-16 md:py-20">
      <div className="container-px mx-auto max-w-4xl">
        {/* Header Block */}
        <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-10 md:p-12 shadow-sm border border-black/5 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cream border border-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wide uppercase mb-4">
            Customer Support
          </div>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Help &amp; Frequently Asked Questions
          </h1>
          <p className="mt-3 text-xs sm:text-sm font-medium text-neutral-500">
            Last Updated: 2083/06/26 B.S.
          </p>
          <div className="mt-6 text-sm sm:text-base leading-relaxed text-neutral-700 space-y-3">
            <p>
              Welcome to Jyoti Foods, Sunaulo Jyoti&apos;s home for spices and masala products. We
              are here to help you learn about our products, place an order, understand storage
              instructions, and get assistance with your purchase.
            </p>
            <p>
              For product enquiries, orders, wholesale enquiries, or feedback, please contact our
              team using the details provided below.
            </p>
          </div>
        </div>

        {/* Accordions */}
        <FaqAccordion sections={FAQ_SECTIONS} />

        {/* Contact Support Section */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-50 via-white to-orange-50/40 p-6 sm:p-10 border border-brand-orange/20 shadow-sm">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark mb-2">
            Contact Us
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mb-6">
            For product safety complaints, please clearly mention &ldquo;Product Quality Complaint&rdquo; in your message. We appreciate your trust in Jyoti Foods and welcome your questions, feedback, and suggestions.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 text-sm text-neutral-800 mb-8">
            <div className="space-y-1">
              <p className="font-semibold text-brand-dark">Jyoti Foods / Sunaulo Jyoti</p>
              <p className="text-neutral-600">Bharatpur-05, Chitwan, Nepal</p>
              <p>
                <span className="text-neutral-500">Website: </span>
                <a
                  href="https://sunaulojyoti.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline font-medium"
                >
                  https://jyotifoodproduct.com.np/
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-neutral-500 block text-xs">WhatsApp Enquiries</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-dark hover:text-brand-orange transition-colors inline-flex items-center gap-1.5"
                >
                  +977-9869246570
                </a>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs">Email</span>
                <a
                  href="mailto:jyotifoodproduct2083@gmail.com"
                  className="font-medium text-brand-dark hover:text-brand-orange transition-colors"
                >
                  jyotifoodproduct2083@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-brand-orange/15">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark shadow-xs"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:jyotifoodproduct2083@gmail.com"
              className="inline-flex items-center justify-center rounded-xl border border-brand-orange/40 bg-white px-5 py-2.5 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-cream"
            >
              Send an Email
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:text-brand-orange"
            >
              Go to Contact Form →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
