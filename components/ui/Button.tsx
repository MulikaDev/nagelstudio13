import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors",
        variant === "primary" &&
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
        variant === "secondary" &&
          "border border-[var(--color-border)] text-[var(--color-primary)] hover:bg-[var(--color-bg-soft)]",
        className
      )}
    >
      {children}
    </Link>
  );
}