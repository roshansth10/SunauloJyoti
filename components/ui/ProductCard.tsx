import Image from "next/image";
import Button from "./Button";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  ctaHref?: string;
};

export default function ProductCard({
  image,
  title,
  description,
  ctaHref = "/products",
}: ProductCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl2 bg-brand-cream/60 shadow-sm ring-1 ring-black/5">
      <div className="relative aspect-[4/3] w-full bg-white">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-semibold text-brand-dark">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-neutral-500">
          {description}
        </p>
        <Button href={ctaHref} className="self-start px-5 py-2.5 text-xs">
          Order Now
        </Button>
      </div>
    </div>
  );
}
