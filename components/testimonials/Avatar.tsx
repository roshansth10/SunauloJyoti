import Image from "next/image";

type AvatarProps = {
  name: string;
  src?: string;
  className?: string;
  textClassName?: string;
};

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function Avatar({
  name,
  src,
  className = "h-11 w-11",
  textClassName = "text-sm",
}: AvatarProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={160}
        height={160}
        className={`shrink-0 rounded-full object-cover object-top ring-2 ring-white ${className}`}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-full bg-brand-cream font-display font-bold text-brand-orange-dark ring-2 ring-white ${className} ${textClassName}`}
    >
      {initialsOf(name)}
    </span>
  );
}
