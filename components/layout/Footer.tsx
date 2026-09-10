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
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg">
              🔥
            </span>
            <span className="font-display text-lg font-bold">SUNAULO JYOTI</span>
          </div>
          <p className="max-w-xs text-sm text-white/85">
            Bringing authentic flavor to every kitchen with pure, hygienically
            processed spices crafted the traditional way.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">
              {col.heading}
            </h4>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 transition-colors hover:text-white"
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
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/80">
            © 2026 Sunaulo Jyoti Foods. All rights reserved.
          </p>
          <div className="flex gap-4">
            {SOCIALS.map((social) => (
              <span
                key={social}
                className="text-xs text-white/80 transition-colors hover:text-white"
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
