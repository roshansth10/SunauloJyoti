"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm">
      <div className="container-px mx-auto flex h-22 sm:h-28 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center py-1">
          <Image
            src="/images/logo.png"
            alt="Sunaulo Jyoti"
            width={240}
            height={110}
            priority
            className="h-16 sm:h-20 md:h-22 w-auto object-contain origin-left"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  isActive
                    ? "border-b-2 border-brand-orange text-brand-orange"
                    : "border-b-2 border-transparent text-neutral-600 hover:text-brand-orange"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark shadow-sm"
          >
            Sign in
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-dark hover:bg-neutral-100 transition-colors lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white shadow-lg lg:hidden transition-all">
          <nav className="container-px mx-auto flex max-w-7xl flex-col gap-1.5 py-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center min-h-[44px] rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "bg-brand-cream text-brand-orange font-bold"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-brand-orange"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center min-h-[44px] w-full rounded-full bg-brand-orange px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-orange-dark transition-colors"
              >
                Sign in
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
