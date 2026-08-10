import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center transition-opacity duration-300 hover:opacity-80"
      aria-label="Zur Startseite"
    >
      <span className="text-[22px] font-semibold tracking-[0.04em] text-[var(--color-primary)]">
        Nagel Studio <span className="font-bold tracking-normal">· 13</span>
      </span>
    </Link>
  );
}
