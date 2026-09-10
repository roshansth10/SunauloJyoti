import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

const variants = {
  solid: "bg-brand-orange text-white hover:bg-brand-orange-dark",
  outline:
    "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
};

export default function Button({
  href,
  variant = "solid",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
