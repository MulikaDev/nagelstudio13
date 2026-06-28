import { clsx } from "clsx";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={clsx("py-16 sm:py-20 lg:py-28", className)}>
      {children}
    </section>
  );
}
