type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-brand-orange-dark/80">{subtitle}</p>
      )}
      {description && (
        <p className="max-w-2xl text-sm text-neutral-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
