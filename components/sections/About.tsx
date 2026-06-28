import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Values from "./Values";

export default function About() {
  return (
    <Section id="about" className="!pt-10 !pb-4">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Über uns
          </p>

          <Heading className="text-center">
            Schönheit beginnt mit Vertrauen.
          </Heading>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text)]">
            Bei Nagel Studio ·13 stehen Qualität, Präzision und eine persönliche
            Atmosphäre im Mittelpunkt. Wir nehmen uns Zeit für jede Kundin und
            sorgen dafür, dass jeder Besuch zu einem besonderen Moment wird.
          </p>
        </div>
        <Values />
      </Container>
    </Section>
  );
}
