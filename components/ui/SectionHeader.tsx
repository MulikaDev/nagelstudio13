import Heading from "./Heading";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
        {eyebrow}
      </p>

      <Heading className={centered ? "text-center" : ""}>{title}</Heading>

      {description && (
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text)]">
          {description}
        </p>
      )}
    </div>
  );
}
