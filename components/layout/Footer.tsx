import Link from "next/link";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Site Map", href: "/" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Products", href: "/products" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Help & FAQ", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/" },
      { label: "Terms and Condition", href: "/" },
    ],
  },
];

const SOCIALS = ["Instagram", "YouTube", "TikTok", "Twitter"];

export default function Footer() {
  return (
    <footer className="bg-footer-gradient text-white">
      <div className="container-px mx-auto grid max-w-7xl gap-8 py-10 sm:gap-10 sm:py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg flex-shrink-0">
              🔥
            </span>
            <span className="font-display text-lg font-bold">SUNAULO JYOTI</span>
          </div>
          <p className="max-w-xs text-sm text-white/85 leading-relaxed">
            Bringing authentic flavor to every kitchen with pure, hygienically
            processed spices crafted the traditional way.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              {col.heading}
            </h4>
            <ul className="flex flex-col gap-1.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/20">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/80">
            © 2026 Sunaulo Jyoti Foods. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {SOCIALS.map((social) => (
              <span
                key={social}
                className="cursor-pointer py-1 text-xs text-white/80 transition-colors hover:text-white"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
