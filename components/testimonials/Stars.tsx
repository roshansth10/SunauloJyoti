type StarsProps = {
  rating: number;
  className?: string;
  size?: string;
};

const STAR =
  "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

export default function Stars({
  rating,
  className = "",
  size = "h-3.5 w-3.5",
}: StarsProps) {
  const filled = Math.round(rating);

  return (
    <div
      role="img"
      aria-label={`Rated ${rating} out of 5`}
      className={`flex items-center gap-0.5 ${className}`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className={`${size} ${index < filled ? "text-brand-orange" : "text-neutral-300"}`}
        >
          <path d={STAR} />
        </svg>
      ))}
    </div>
  );
}
