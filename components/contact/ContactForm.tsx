"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (accessKey) {
      formData.append("access_key", accessKey);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Could not send your message. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl2 bg-card-blue p-8 text-center">
        <h3 className="font-display text-lg font-semibold text-brand-dark">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          Thank you for reaching out — our team will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
      {!accessKey && (
        <p className="rounded-xl bg-card-yellow px-4 py-2.5 text-xs text-brand-dark text-center">
          Set <code className="font-mono">NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code> in
          your environment to enable form delivery.
        </p>
      )}

      <input type="hidden" name="subject" value="New inquiry from Sunaulo Jyoti website" />
      <input type="hidden" name="from_name" value="Sunaulo Jyoti Website" />
      {/* Honeypot field to reduce spam */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Row 1: First Name & Last Name */}
      <div className="grid gap-3.5 sm:gap-5 sm:grid-cols-2">
        <div>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name *"
            required
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 sm:py-3.5 text-base sm:text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
          />
        </div>
        <div>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name *"
            required
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 sm:py-3.5 text-base sm:text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone Number */}
      <div className="grid gap-3.5 sm:gap-5 sm:grid-cols-2">
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email *"
            required
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 sm:py-3.5 text-base sm:text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
          />
        </div>
        <div>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number *"
            required
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 sm:py-3.5 text-base sm:text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
          />
        </div>
      </div>

      {/* Row 3: How can we help you? dropdown */}
      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="helpTopic" className="text-xs sm:text-sm font-semibold text-[#1E1E1E]">
          How can we help you?
        </label>
        <div className="relative">
          <select
            id="helpTopic"
            name="helpTopic"
            defaultValue=""
            required
            className="w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 sm:py-3.5 text-base sm:text-sm text-neutral-700 outline-none transition-colors focus:border-brand-orange focus:bg-white focus:ring-1 focus:ring-brand-orange cursor-pointer"
          >
            <option value="" disabled>
              Select any option
            </option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Bulk / Wholesale Order">Bulk / Wholesale Order</option>
            <option value="Distributorship Opportunity">Distributorship Opportunity</option>
            <option value="Feedback & Suggestions">Feedback & Suggestions</option>
            <option value="General Support">General Support</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 text-center">{errorMessage}</p>
      )}

      {/* Row 4: Centered Submit Button */}
      <div className="flex justify-center pt-2 sm:pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-64 min-h-[46px] rounded-xl bg-gradient-to-r from-[#EA8C1C] to-[#E07A0B] py-3 sm:py-3.5 px-8 text-center text-sm sm:text-base font-semibold text-white shadow-md transition-all duration-300 hover:from-[#D97706] hover:to-[#B45309] hover:shadow-lg disabled:opacity-60 transform hover:-translate-y-0.5"
        >
          {status === "submitting" ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
