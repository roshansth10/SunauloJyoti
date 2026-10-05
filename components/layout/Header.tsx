"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current + 4) {
        setVisible(false);
        setOpen(false);
      } else if (currentScrollY < lastScrollY.current - 4) {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-px mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between">
        {/* Far Left: Logo */}
        <div className="flex items-center justify-start shrink-0">
          <Link href="/" className="inline-flex items-center py-1">
            <Image
              src="/images/logo.png"
              alt="Sunaulo Jyoti"
              width={240}
              height={110}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain origin-left"
            />
          </Link>
        </div>

        {/* Center: Nav links (Single line, whitespace-nowrap, centered as a group) */}
        <nav className="hidden items-center justify-center gap-4 min-[1150px]:gap-6 xl:gap-8 lg:flex whitespace-nowrap px-4">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
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

        {/* Far Right: Shop Now & Mobile Hamburger */}
        <div className="flex items-center justify-end shrink-0 gap-3">
          <Link
            href="/products"
            className="hidden rounded-full bg-brand-orange px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark shadow-sm whitespace-nowrap lg:inline-flex"
          >
            Shop Now
          </Link>

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
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="border-t border-black/5 bg-white shadow-lg lg:hidden">
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
          </nav>
        </div>
      )}
    </header>
  );
}
