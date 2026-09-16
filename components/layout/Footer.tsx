import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: "linear-gradient(135deg, #FCE7A6 0%, #F6B94A 55%, #EE9A3C 100%)",
      }}
    >
      {/* Main grid */}
      <div className="container-px mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 sm:gap-10 py-8 sm:py-14">

        {/* Col 1 — Logo + description + socials */}
        <div className="col-span-2 sm:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
          <Link href="/" className="inline-flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Sunaulo Jyoti"
              width={200}
              height={90}
              className="h-12 sm:h-18 w-auto object-contain mix-blend-multiply"
            />
          </Link>
          <p className="text-xs sm:text-sm text-[#3B220A]/80 leading-relaxed max-w-xs mx-auto sm:mx-0">
            Sunaulo Jyoti has been crafting premium quality spices in Chitwan
            since 2008 — pure, natural, and full of authentic Nepali flavor.
          </p>
          {/* Social icons */}
          <div className="flex items-center justify-center sm:justify-start gap-4 mt-0.5">
            <a href="#" aria-label="Instagram" className="text-[#3B220A]/60 hover:text-[#C96F05] transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-[#3B220A]/60 hover:text-[#C96F05] transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok" className="text-[#3B220A]/60 hover:text-[#C96F05] transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Company links */}
        <div className="col-span-1 flex flex-col gap-2.5 sm:gap-4 text-left pl-4 min-[380px]:pl-6 sm:pl-0">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#3B220A]">
            Company
          </h4>
          <ul className="flex flex-col gap-1.5 sm:gap-2.5">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Products", href: "/products" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm text-[#3B220A]/75 hover:text-[#C96F05] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Explore */}
        <div className="col-span-1 flex flex-col gap-2.5 sm:gap-4 text-left">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#3B220A]">
            Explore
          </h4>
          <ul className="flex flex-col gap-1.5 sm:gap-2.5">
            {[
              { label: "Testimonials", href: "/testimonials" },
              { label: "Help & FAQ", href: "/contact" },
              { label: "Privacy Policy", href: "/" },
              { label: "Terms and Condition", href: "/" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm text-[#3B220A]/75 hover:text-[#C96F05] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact / HQ */}
        <div className="col-span-2 sm:col-span-1 flex flex-col gap-2.5 sm:gap-4 text-left pt-1 sm:pt-0 pl-4 min-[380px]:pl-6 sm:pl-0">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#3B220A]">
            Get in Touch
          </h4>
          <ul className="flex flex-col gap-2 sm:gap-3">
            <li className="flex items-center gap-2 text-xs sm:text-sm text-[#3B220A]/75">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#C96F05]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Bharatpur-05, Chitwan, Nepal</span>
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm text-[#3B220A]/75">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#C96F05]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+977-056-XXXXXX</span>
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm text-[#3B220A]/75">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#C96F05]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@sunaulojyoti.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="container-px mx-auto max-w-7xl">
        <div className="border-t border-[#C96F05]/25" />
      </div>

      {/* Bottom bar */}
      <div className="container-px mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 py-3.5 sm:py-4">
        <p className="text-[11px] sm:text-xs text-[#3B220A]/70 font-medium text-center sm:text-left">
          © 2026 Jyoti LLC. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#3B220A]/75 font-medium">
          <span>Made with ❤️ by</span>
          <a
            href="https://dxcreativestudio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center transition-opacity hover:opacity-80"
            title="DX Studio — Digital Creative & Technology Studio"
          >
            <Image
              src="/images/dxstudio.png"
              alt="DX Studio"
              width={140}
              height={46}
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
