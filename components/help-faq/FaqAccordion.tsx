"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface FaqSection {
  title: string;
  items: FaqItem[];
}

export default function FaqAccordion({ sections }: { sections: FaqSection[] }) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      {sections.map((section, sIdx) => (
        <section key={section.title} className="flex flex-col gap-4">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-dark pb-2 border-b border-black/10">
            {section.title}
          </h2>
          <div className="flex flex-col gap-3">
            {section.items.map((item, iIdx) => {
              const itemKey = `${sIdx}-${iIdx}`;
              const isOpen = !!openItems[itemKey];

              return (
                <div
                  key={itemKey}
                  className="rounded-xl border border-neutral-200/80 bg-white transition-all duration-200 hover:border-brand-orange/40 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(itemKey)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${itemKey}`}
                    id={`faq-question-${itemKey}`}
                    className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left font-display text-base sm:text-lg font-semibold text-brand-dark transition-colors hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-brand-cream text-brand-orange" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${itemKey}`}
                      role="region"
                      aria-labelledby={`faq-question-${itemKey}`}
                      className="border-t border-neutral-100 px-4 sm:px-5 pb-5 pt-3 text-sm sm:text-base leading-relaxed text-neutral-700 bg-neutral-50/40"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
