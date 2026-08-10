import SectionHeader from "../ui/SectionHeader";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Values from "./Values";

export default function About() {
  return (
    <Section id="about" className="!pt-18 !pb-12">
      <Container>
        <SectionHeader
          eyebrow="Über uns"
          title="Schönheit beginnt mit Vertrauen."
          description="Bei Nagel Studio · 13 stehen Qualität, Präzision und eine persönliche Atmosphäre im Mittelpunkt. Wir nehmen uns Zeit für jede Kundin und sorgen dafür, dass jeder Besuch zu einem besonderen Moment wird."
        />

        <Values />
      </Container>
    </Section>
  );
}
