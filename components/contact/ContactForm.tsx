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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {!accessKey && (
        <p className="rounded-md bg-card-yellow px-4 py-3 text-xs text-brand-dark">
          Set <code className="font-mono">NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code> in
          your environment to enable form delivery. Get a free key at{" "}
          <a
            href="https://web3forms.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            web3forms.com
          </a>
          .
        </p>
      )}

      <input type="hidden" name="subject" value="New message from Sunaulo Jyoti website" />
      <input type="hidden" name="from_name" value="Sunaulo Jyoti Website" />
      {/* Honeypot field to reduce spam */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-brand-dark">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-lg border border-black/10 px-4 py-2.5 text-base sm:text-sm outline-none focus:border-brand-orange"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-brand-dark">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-lg border border-black/10 px-4 py-2.5 text-base sm:text-sm outline-none focus:border-brand-orange"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-brand-dark">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="rounded-lg border border-black/10 px-4 py-2.5 text-base sm:text-sm outline-none focus:border-brand-orange"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-brand-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-lg border border-black/10 px-4 py-2.5 text-base sm:text-sm outline-none focus:border-brand-orange"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark disabled:opacity-60 shadow-sm"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
