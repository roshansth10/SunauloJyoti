import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Jyoti Foods",
  description:
    "Terms and Conditions governing the use of Sunaulo Jyoti website and ordering services under applicable consumer protection and commerce laws of Nepal.",
};

const TOC_ITEMS = [
  { id: "section-1", title: "1. Business Information" },
  { id: "section-2", title: "2. Website Use" },
  { id: "section-3", title: "3. Product Information" },
  { id: "section-4", title: "4. Prices and Availability" },
  { id: "section-5", title: "5. Orders and Order Confirmation" },
  { id: "section-6", title: "6. Payment" },
  { id: "section-7", title: "7. Delivery" },
  { id: "section-8", title: "8. Order Changes and Cancellations" },
  { id: "section-9", title: "9. Returns, Replacements, and Refunds" },
  { id: "section-10", title: "10. Product Quality and Food Safety" },
  { id: "section-11", title: "11. Wholesale and Distribution Enquiries" },
  { id: "section-12", title: "12. Intellectual Property" },
  { id: "section-13", title: "13. Third-Party Services and Links" },
  { id: "section-14", title: "14. Privacy" },
  { id: "section-15", title: "15. Website Availability and Accuracy" },
  { id: "section-16", title: "16. Limitation of Liability" },
  { id: "section-17", title: "17. Changes to These Terms" },
  { id: "section-18", title: "18. Governing Law and Disputes" },
  { id: "section-19", title: "19. Contact Information" },
];

export default function TermsAndConditionsPage() {
  const whatsappUrl = `https://wa.me/9869246570?text=${encodeURIComponent(
    "Hello Jyoti Foods, I have an enquiry about your products."
  )}`;

  return (
    <div className="bg-[#FAF9F5] py-10 sm:py-16 md:py-20">
      <div className="container-px mx-auto max-w-4xl">
        {/* Header Block */}
        <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-10 md:p-12 shadow-sm border border-black/5 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cream border border-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wide uppercase mb-4">
            Legal &amp; Terms
          </div>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Terms &amp; Conditions
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs sm:text-sm font-medium text-neutral-600">
            <span>
              <strong className="text-brand-dark">Effective Date:</strong> 2083/04/10 B.S.
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span>
              <strong className="text-brand-dark">Last Updated:</strong> 2083/06/26 B.S.
            </span>
          </div>

          <div className="mt-6 text-sm sm:text-base leading-relaxed text-neutral-700 space-y-3 pt-6 border-t border-neutral-100">
            <p>
              Welcome to Jyoti Foods, operating under the Sunaulo Jyoti brand. These Terms &amp;
              Conditions govern your access to and use of{" "}
              <a
                href="https://sunaulojyoti.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline font-medium"
              >
                https://sunaulojyoti.vercel.app/
              </a>{" "}
              and any enquiries or purchases made through the ordering channels offered by us.
            </p>
            <p>
              By using this website, you agree to comply with these terms to the extent applicable
              to your use. Any statutory consumer rights remain unaffected.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <nav
          aria-label="Table of contents"
          className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-black/5 mb-8"
        >
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-dark mb-3">
            Table of Contents
          </h2>
          <ol className="grid gap-2 sm:grid-cols-2 text-xs sm:text-sm text-neutral-700">
            {TOC_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-brand-orange transition-colors inline-block py-0.5"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Content Body */}
        <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-10 md:p-12 shadow-sm border border-black/5 space-y-10 text-neutral-700 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              1. Business Information
            </h2>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-5 space-y-2">
              <p>
                <strong className="text-brand-dark">Business/brand:</strong> Jyoti Foods / Sunaulo Jyoti
              </p>
              <p>
                <strong className="text-brand-dark">Address:</strong> Bharatpur-05, Chitwan, Nepal
              </p>
              <p>
                <strong className="text-brand-dark">Email:</strong>{" "}
                <a
                  href="mailto:jyotifoodproduct2083@gmail.com"
                  className="text-brand-orange hover:underline font-medium"
                >
                  jyotifoodproduct2083@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-brand-dark">WhatsApp:</strong>{" "}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline font-medium"
                >
                  +977-9869246570
                </a>
              </p>
              <p>
                <strong className="text-brand-dark">Website:</strong>{" "}
                <a
                  href="https://sunaulojyoti.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline font-medium"
                >
                  https://sunaulojyoti.vercel.app/
                </a>
              </p>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500">
              The registered legal name, registration number, PAN/VAT details, and other legally
              required business particulars should be added once verified.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              2. Website Use
            </h2>
            <p>
              You may use this website to learn about our products, contact our team, make
              enquiries, and access available ordering services.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Use the website for an unlawful purpose.</li>
              <li>Submit false, misleading, or fraudulent information.</li>
              <li>Attempt to disrupt, damage, or gain unauthorised access to the website.</li>
              <li>Interfere with website security or other users&apos; access.</li>
              <li>
                Copy or misuse protected branding, product photographs, text, or other materials
                without permission, except where permitted by law.
              </li>
            </ul>
            <p>
              We may take reasonable steps to protect the website and investigate suspected
              misuse, subject to applicable law.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              3. Product Information
            </h2>
            <p>
              We aim to provide clear and accurate product descriptions, photographs, packaging
              information, and usage guidance.
            </p>
            <p>
              Product photographs are illustrative and may differ slightly from actual packaging
              due to printing, display settings, or packaging updates. Such differences do not
              excuse material misrepresentation.
            </p>
            <p>
              Ingredients, net quantity, batch details, manufacturing date, expiry or best-before
              information, applicable prices, and other mandatory product particulars should be
              checked on the relevant packaging and product information.
            </p>
            <p>
              Where website information conflicts with mandatory product labelling or applicable
              law, the law and legally required product information prevail.
            </p>
            <p>
              We do not claim that every product is suitable for every dietary requirement.
              Customers with allergies or food sensitivities should review the ingredient and
              allergen information.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              4. Prices and Availability
            </h2>
            <p>
              Prices, packaging sizes, offers, and product availability may change from time to
              time.
            </p>
            <p>
              The applicable price, quantity, delivery charge, and other order conditions will be
              communicated through the relevant ordering channel before the order is finalised, as
              required by law.
            </p>
            <p>
              We will not knowingly use inaccurate pricing or product information to mislead
              customers. If a genuine error is identified before an order is completed, we will
              explain the issue and seek the customer&apos;s agreement to any revised terms rather than
              silently changing the agreed price.
            </p>
            <p>
              Promotional offers are subject to the specific conditions disclosed with the offer
              and applicable law.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              5. Orders and Order Confirmation
            </h2>
            <p>
              Orders may be placed through the ordering methods currently offered on our website,
              including WhatsApp where available.
            </p>
            <p>When placing an order, customers should verify:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Product name and packaging size.</li>
              <li>Quantity ordered.</li>
              <li>Applicable product price and total amount.</li>
              <li>Delivery address and contact number.</li>
              <li>Delivery charge and estimated delivery time.</li>
              <li>Payment method and relevant order conditions.</li>
            </ul>
            <p>
              An enquiry or message expressing interest does not, by itself, guarantee that an order
              has been accepted.
            </p>
            <p>
              Where an order is accepted, we will confirm its relevant details through the
              applicable communication channel. Required electronic-commerce disclosures,
              transaction records, or confirmations will be handled in accordance with applicable
              law.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              6. Payment
            </h2>
            <p>
              Payment methods and instructions will be communicated through our official ordering
              channels.
            </p>
            <p>
              Customers should verify the recipient and payment details before making a payment. Do
              not share your banking password, wallet PIN, or one-time password with anyone claiming
              to represent Jyoti Foods.
            </p>
            <p>
              Where applicable, retain your receipt, payment confirmation, and order reference.
            </p>
            <p>
              Any refund due will be handled in accordance with applicable law and the
              circumstances of the transaction.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              7. Delivery
            </h2>
            <p>
              Delivery availability, charges, and estimated delivery times depend on the
              destination, order size, stock availability, and transport arrangements.
            </p>
            <p>
              We will communicate applicable delivery arrangements when confirming an order.
              Delivery estimates are not guaranteed arrival times unless expressly confirmed as
              such.
            </p>
            <p>
              If a delay, delivery failure, or other problem occurs, contact our team with your
              order reference. We will review the issue and discuss an appropriate solution in
              accordance with applicable law.
            </p>
            <p className="font-medium text-brand-dark">
              Nothing in this section excludes any remedy that a customer is legally entitled to
              receive.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              8. Order Changes and Cancellations
            </h2>
            <p>
              If you need to change or cancel an order, contact us as soon as possible with your
              order reference.
            </p>
            <p>
              We will explain whether the requested change is possible, considering whether the
              order has been confirmed, prepared, dispatched, or delivered.
            </p>
            <p>
              Any cancellation restrictions must be consistent with applicable consumer and
              electronic-commerce law. This section does not remove a consumer&apos;s statutory
              rights.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              9. Returns, Replacements, and Refunds
            </h2>
            <p>
              If you receive an incorrect, damaged, defective, expired, or otherwise non-conforming
              product, contact us promptly and provide the available purchase and product details.
            </p>
            <p>
              Depending on the circumstances and applicable law, an appropriate remedy may include a
              replacement, refund, or other legally required resolution.
            </p>
            <p>
              Please retain the original packaging and relevant batch information where possible,
              particularly for food-quality or safety complaints.
            </p>
            <p>
              For food hygiene and safety reasons, customers should contact us before returning a
              food product. This procedure does not restrict any return, refund, compensation, or
              other remedy required by law.
            </p>
            <p>
              We will assess complaints fairly and will not use a blanket &ldquo;no refunds under any
              circumstances&rdquo; rule to override statutory consumer protections.
            </p>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              10. Product Quality and Food Safety
            </h2>
            <p>
              We aim to supply products that meet applicable requirements for food safety, hygiene,
              quality, and labelling.
            </p>
            <p>Customers should:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Follow storage and usage instructions on the product packaging.</li>
              <li>Check the relevant expiry or best-before date.</li>
              <li>Keep products away from moisture and contamination.</li>
              <li>Avoid consuming products with damaged packaging or suspected contamination.</li>
              <li>Contact us promptly if a product appears unsafe or does not match its description.</li>
            </ul>
            <p>
              If a product-quality or safety issue is reported, we may request the product name,
              batch number, packaging photographs, purchase details, and a description of the
              concern to investigate the matter.
            </p>
            <p className="font-medium text-brand-dark">
              Nothing in these terms excludes legal responsibility that cannot lawfully be
              excluded.
            </p>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              11. Wholesale and Distribution Enquiries
            </h2>
            <p>
              Retailers, wholesalers, and prospective distributors may contact us to discuss
              business opportunities.
            </p>
            <p>
              Wholesale prices, minimum quantities, credit terms, distribution arrangements,
              delivery schedules, and other commercial terms will be communicated separately and
              confirmed where appropriate.
            </p>
            <p>
              A general enquiry does not constitute a distribution agreement, agency appointment,
              or guarantee of supply.
            </p>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              12. Intellectual Property
            </h2>
            <p>
              Unless otherwise stated, website text, logos, branding, product photographs,
              graphics, and other original materials are owned by Jyoti Foods or used with
              appropriate permission.
            </p>
            <p>
              You may view and use the website for personal, informational, or legitimate
              business-enquiry purposes.
            </p>
            <p>
              You may not reproduce, commercially exploit, modify, or distribute protected
              materials without permission, except as allowed by applicable law.
            </p>
          </section>

          {/* Section 13 */}
          <section id="section-13" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              13. Third-Party Services and Links
            </h2>
            <p>
              Our website may link to WhatsApp, payment services, social media platforms, delivery
              services, or other external websites.
            </p>
            <p>
              Those services may operate under separate terms, privacy policies, and security
              arrangements. We do not control their independent operations.
            </p>
            <p>
              Any transaction involving a third-party service remains subject to the applicable
              arrangements, without removing any responsibility that Jyoti Foods has under
              applicable law.
            </p>
          </section>

          {/* Section 14 */}
          <section id="section-14" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              14. Privacy
            </h2>
            <p>
              Personal information collected through the website or our ordering channels will be
              handled in accordance with our{" "}
              <Link
                href="/privacy-policy"
                className="text-brand-orange hover:underline font-medium"
              >
                Privacy Policy
              </Link>{" "}
              and applicable Nepalese law.
            </p>
            <p>
              Please review the Privacy Policy to understand what information we may collect, how
              we use it, and how you may contact us regarding privacy matters.
            </p>
          </section>

          {/* Section 15 */}
          <section id="section-15" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              15. Website Availability and Accuracy
            </h2>
            <p>
              We aim to keep the website available and its information accurate. However,
              interruptions, technical errors, maintenance, or outdated information may
              occasionally occur.
            </p>
            <p>
              We may update, modify, or discontinue website features where reasonably necessary.
            </p>
            <p>
              This section does not permit us to avoid legal obligations concerning product quality,
              consumer rights, misleading representations, or any other liability that cannot
              lawfully be excluded.
            </p>
          </section>

          {/* Section 16 */}
          <section id="section-16" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              16. Limitation of Liability
            </h2>
            <p>
              To the extent permitted by applicable law, we are not responsible for losses caused
              solely by circumstances outside our reasonable control, such as independent
              third-party service interruptions.
            </p>
            <p>
              Nothing in these terms excludes or limits liability for fraud, deliberate misconduct,
              statutory consumer remedies, or other liability that cannot lawfully be excluded or
              limited.
            </p>
            <p>Any assessment of responsibility will depend on the facts and applicable law.</p>
          </section>

          {/* Section 17 */}
          <section id="section-17" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              17. Changes to These Terms
            </h2>
            <p>
              We may update these Terms &amp; Conditions when our website, business operations,
              services, or applicable legal requirements change.
            </p>
            <p>
              The updated terms will be published on this page with a revised date. Changes will
              apply as permitted by law, and any separate agreement or completed transaction will be
              treated in accordance with its applicable terms and legal requirements.
            </p>
          </section>

          {/* Section 18 */}
          <section id="section-18" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              18. Governing Law and Disputes
            </h2>
            <p>
              These terms are governed by the applicable laws of Nepal, including the Constitution
              of Nepal, 2072 (Article 44 on Consumer Rights), the Consumer Protection Act, 2075,
              Food Hygiene and Quality Act, 2081, Electronic Transactions Act, 2063, and Electronic
              Commerce Act, 2081, where applicable.
            </p>
            <p>
              If a concern arises, customers are encouraged to contact us first so that we can
              attempt to resolve the issue fairly.
            </p>
            <p>
              Nothing in these terms prevents a consumer from approaching a competent authority,
              consumer protection body, court, or other forum available under applicable Nepalese
              law.
            </p>
            <p>
              Any dispute will be handled by the competent forum under the applicable legal
              framework.
            </p>
          </section>

          {/* Section 19 */}
          <section id="section-19" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              19. Contact Information
            </h2>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-5 space-y-2">
              <p className="font-semibold text-brand-dark">Jyoti Foods / Sunaulo Jyoti</p>
              <p>Bharatpur-05, Chitwan, Nepal</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:jyotifoodproduct2083@gmail.com"
                  className="text-brand-orange hover:underline font-medium"
                >
                  jyotifoodproduct2083@gmail.com
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline font-medium"
                >
                  +977-9869246570
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://sunaulojyoti.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline font-medium"
                >
                  https://sunaulojyoti.vercel.app/
                </a>
              </p>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 pt-2">
              We appreciate your interest in Jyoti Foods and aim to provide clear product information
              and responsible customer service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
