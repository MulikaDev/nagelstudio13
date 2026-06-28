import { clsx } from "clsx";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={clsx(
        "text-4xl font-bold leading-[0.95] tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
