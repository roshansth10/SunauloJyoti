import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Jyoti Foods",
  description:
    "Privacy Policy for Jyoti Foods / Sunaulo Jyoti detailing how we collect, use, and protect personal information under applicable laws of Nepal.",
};

const TOC_ITEMS = [
  { id: "section-1", title: "1. Information We Collect" },
  { id: "section-2", title: "2. How We Use Your Information" },
  { id: "section-3", title: "3. Marketing Communications" },
  { id: "section-4", title: "4. WhatsApp, Payments, and Third-Party Services" },
  { id: "section-5", title: "5. When We Share Information" },
  { id: "section-6", title: "6. Data Retention" },
  { id: "section-7", title: "7. Data Security" },
  { id: "section-8", title: "8. Your Privacy Rights" },
  { id: "section-9", title: "9. Children's Privacy" },
  { id: "section-10", title: "10. External Links" },
  { id: "section-11", title: "11. Changes to This Policy" },
  { id: "section-12", title: "12. Contact for Privacy Matters" },
];

export default function PrivacyPolicyPage() {
  const whatsappUrl = `https://wa.me/9869246570?text=${encodeURIComponent(
    "Hello Jyoti Foods, I have an enquiry about your products.",
  )}`;

  return (
    <div className="bg-[#FAF9F5] py-10 sm:py-16 md:py-20">
      <div className="container-px mx-auto max-w-4xl">
        {/* Header Block */}
        <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-10 md:p-12 shadow-sm border border-black/5 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cream border border-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wide uppercase mb-4">
            Legal &amp; Compliance
          </div>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Privacy Policy
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs sm:text-sm font-medium text-neutral-600">
            <span>
              <strong className="text-brand-dark">Effective Date:</strong>{" "}
              2083/04/10 B.S.
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span>
              <strong className="text-brand-dark">Last Updated:</strong>{" "}
              2083/06/26 B.S.
            </span>
          </div>

          <div className="mt-6 text-sm sm:text-base leading-relaxed text-neutral-700 space-y-3 pt-6 border-t border-neutral-100">
            <p>
              Jyoti Foods, operating under the Sunaulo Jyoti brand (&ldquo;Jyoti
              Foods,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;), respects the privacy of visitors, customers,
              retailers, distributors, and other individuals who contact us
              through our website or official communication channels.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, disclose,
              and protect personal information when you visit{" "}
              <a
                href="https://jyotifoodproduct.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline font-medium"
              >
                https://jyotifoodproduct.com.np/
              </a>
              , contact us, submit an enquiry, or place an order.
            </p>
            <p>
              We aim to handle personal information responsibly and in
              accordance with applicable laws of Nepal, including the
              Constitution of Nepal, 2072 (particularly Article 28), and the
              Privacy Act, 2075, as applicable.
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
              1. Information We Collect
            </h2>
            <p>
              Depending on how you interact with us, we may collect the
              following information.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-brand-dark">
                Information you provide:
              </h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Name and contact details, such as telephone number and email
                  address.
                </li>
                <li>
                  Delivery address and order-related information, where
                  applicable.
                </li>
                <li>Product enquiries, feedback, complaints, and messages.</li>
                <li>
                  Business details provided for wholesale, retailer, or
                  distributor enquiries.
                </li>
                <li>
                  Order references, payment confirmations, receipts, and
                  transaction details necessary to verify a purchase.
                </li>
              </ul>
              <div className="rounded-xl bg-amber-50/70 border border-amber-200/60 p-3.5 text-xs sm:text-sm text-amber-900 mt-3">
                <strong>Important notice:</strong> Please do not send passwords,
                banking PINs, one-time passwords, or other confidential
                authentication credentials to us.
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-semibold text-brand-dark">
                Technical information:
              </h3>
              <p>
                Depending on the services enabled, our hosting provider or other
                website service providers may process IP addresses, browser
                type, device information, pages visited, approximate usage data,
                and technical logs.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-semibold text-brand-dark">
                Cookies and similar technologies:
              </h3>
              <p>
                Our website or its service providers may use essential cookies
                or similar technologies to support website functionality,
                security, or user preferences. Analytics or advertising
                technologies may be used only if they are implemented.
              </p>
              <p>
                You can manage available cookie settings through your browser.
                Disabling certain technologies may affect some website
                functions.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              2. How We Use Your Information
            </h2>
            <p>
              We may use personal information for legitimate business purposes,
              including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Responding to questions and customer enquiries.</li>
              <li>Confirming and processing orders, where applicable.</li>
              <li>Arranging delivery and communicating order status.</li>
              <li>
                Responding to product-quality concerns, returns, and complaints.
              </li>
              <li>Managing wholesale and distributor enquiries.</li>
              <li>Maintaining business and transaction records.</li>
              <li>Securing and maintaining our website.</li>
              <li>Preventing fraud, misuse, or unauthorised activity.</li>
              <li>
                Meeting legal, regulatory, accounting, or other applicable
                obligations.
              </li>
              <li>Improving our products, services, and customer support.</li>
            </ul>
            <p>
              We will seek consent where required by applicable law and will not
              use personal information for an incompatible purpose without an
              appropriate legal basis.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              3. Marketing Communications
            </h2>
            <p>
              We may send promotional messages, product announcements, or offers
              where permitted by law and, where required, with your consent.
            </p>
            <p>
              You may ask us to stop sending promotional communications by
              contacting us through our official email or WhatsApp channel.
              Necessary non-promotional communications relating to an existing
              order, a product-safety issue, or a legal obligation may continue.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              4. WhatsApp, Payments, and Third-Party Services
            </h2>
            <p>
              Our website may link to WhatsApp or other third-party platforms
              for customer enquiries and ordering. If you use those services,
              the information you provide may also be processed by the relevant
              service provider under its own privacy terms.
            </p>
            <p>
              If a payment provider is used, payment processing may be subject
              to that provider&apos;s terms and privacy policy. We do not claim
              that a payment service is integrated into our website unless the
              integration is active.
            </p>
            <p>
              We do not intend to collect or store your complete card details,
              banking passwords, wallet PINs, or one-time passwords.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              5. When We Share Information
            </h2>
            <p>
              We may share relevant information, only to the extent reasonably
              necessary, with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Delivery or courier providers, where needed to fulfil an order.
              </li>
              <li>
                Website hosting, maintenance, communication, or technical
                service providers.
              </li>
              <li>Payment service providers, where applicable.</li>
              <li>
                Professional advisers or auditors, where reasonably necessary.
              </li>
              <li>
                Competent authorities where disclosure is required or permitted
                by applicable law.
              </li>
            </ul>
            <p className="font-medium text-brand-dark">
              We do not sell personal information to third parties as a
              commercial product.
            </p>
            <p>
              Where a service provider processes information on our behalf, we
              aim to use appropriate arrangements to protect that information.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              6. Data Retention
            </h2>
            <p>
              We retain personal information for as long as reasonably necessary
              for the purpose for which it was collected, including order
              fulfilment, customer support, dispute resolution, security, and
              legal or accounting obligations.
            </p>
            <p>
              The retention period depends on the type of information and
              applicable legal requirements. When information is no longer
              required, we will take reasonable steps to delete it or remove
              identifying details, subject to applicable law and legitimate
              recordkeeping needs.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              7. Data Security
            </h2>
            <p>
              We take reasonable technical and organisational measures to
              protect personal information against unauthorised access, loss,
              misuse, alteration, or disclosure.
            </p>
            <p>
              However, no internet transmission or electronic storage method can
              be guaranteed to be completely secure. We cannot promise absolute
              security, but we aim to handle personal information responsibly
              and address security concerns appropriately.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              8. Your Privacy Rights
            </h2>
            <p>
              Subject to applicable law and the circumstances of the request,
              you may contact us to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Ask whether we hold personal information about you.</li>
              <li>
                Request access to or correction of inaccurate information.
              </li>
              <li>
                Ask about the purpose for which your information is being used.
              </li>
              <li>
                Request deletion or cessation of use where legally appropriate.
              </li>
              <li>
                Withdraw consent where processing is based on consent, subject
                to applicable legal and operational requirements.
              </li>
              <li>
                Raise a concern about how your information has been handled.
              </li>
            </ul>
            <p>
              We may need to verify your identity before responding. Certain
              records may need to be retained where required by law or necessary
              to resolve a dispute.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our website is intended for general consumers and business
              visitors, not specifically for children. We do not knowingly
              request children&apos;s personal information for unnecessary
              purposes.
            </p>
            <p>
              If you believe a child has provided personal information to us,
              contact us so we can review the matter and take appropriate
              action.
            </p>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              10. External Links
            </h2>
            <p>
              Our website may contain links to third-party websites or services.
              We do not control their privacy practices, security, or content.
              Please review their respective policies before sharing information
              with them.
            </p>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy to reflect changes in our
              website, business practices, services, or applicable law.
            </p>
            <p>
              The revised version will be published on this page with an updated
              revision date. Material changes will be communicated through
              appropriate channels where required by law.
            </p>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
              12. Contact for Privacy Matters
            </h2>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-5 space-y-2">
              <p className="font-semibold text-brand-dark">
                Jyoti Foods / Sunaulo Jyoti
              </p>
              <p>Address: Bharatpur-05, Chitwan, Nepal</p>
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
                  href="https://jyotifoodproduct.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline font-medium"
                >
                  https://jyotifoodproduct.com.np/
                </a>
              </p>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 italic">
              Please include &ldquo;Privacy Request&rdquo; in the subject line
              of your email.
            </p>
            <p className="text-xs sm:text-sm text-neutral-500">
              This policy explains our privacy practices and does not limit any
              rights available to individuals under applicable law.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
