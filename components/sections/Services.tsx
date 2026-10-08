import { Clock3 } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const serviceGroups = [
  {
    title: "Maniküre",
    services: [
      {
        set: "Set 1",
        title: "Klassische Maniküre",
        duration: "ca. 40 Minuten",
        price: "30 €",
        description:
          "Nägel kürzen und formen, Nagelhautpflege, Reinigung sowie pflegende Anwendungen.",
      },
      {
        set: "Set 2",
        title: "Maniküre mit Shellac",
        duration: "ca. 60 Minuten",
        price: "45 €",
        description:
          "Klassische Maniküre ergänzt durch eine langanhaltende UV-Lackierung.",
      },
      {
        set: "Set 3",
        title: "Modellage (Verstärkung / Verlängerung)",
        duration: "ca. 120 Minuten",
        price: "80 €",
        description:
          "Aufbau und Formgebung der Nägel mit Gel oder Polygel, ggf. Verlängerung, Farbgestaltung und Versiegelung.",
      },
      {
        set: "Set 4",
        title: "Auffüllen / Reparatur",
        duration: "ca. 90 Minuten",
        price: "55 €",
        description:
          "Erneuerung bestehender Modellagen, Reparatur beschädigter Nägel sowie Formgebung und Versiegelung.",
      },
    ],
  },
  {
    title: "Pediküre",
    services: [
      {
        set: "Set 5",
        title: "Klassische Fußpflege",
        duration: "ca. 60 Minuten",
        price: "35 €",
        description:
          "Kürzen und Formen der Nägel, Nagelhautpflege, kosmetische Hornhautentfernung sowie abschließende Pflege.",
      },
      {
        set: "Set 6",
        title: "Fußpflege mit Shellac",
        duration: "ca. 75 Minuten",
        price: "50 €",
        description:
          "Klassische Fußpflege ergänzt durch eine langanhaltende Lackierung.",
      },
      {
        set: "Set 7",
        title: "Nagelpflege mit Shellac",
        duration: "ca. 45 Minuten",
        price: "35 €",
        description: "Kürzen, Formen und Lackieren der Fußnägel.",
      },
    ],
  },
];

export default function Services() {
  return (
    <Section id="services" className="!pt-18 !pb-12">
      <Container>
        <SectionHeader
          eyebrow="Leistungen"
          title="Pflege für Hände und Füße."
          description="Wählen Sie aus klar strukturierten Sets für Maniküre, Modellage und Pediküre."
        />

        <div className="mx-auto mt-20 max-w-4xl space-y-16">
          {serviceGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                {group.title}
              </h3>

              <div className="space-y-6">
                {group.services.map((service) => (
                  <article
                    key={service.set}
                    className="group rounded-[28px] border border-[var(--color-border)] bg-white px-8 py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-2xl">
                        <span className="inline-flex rounded-full bg-[var(--color-primary)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                          {service.set}
                        </span>

                        <h4 className="mt-5 text-2xl font-semibold text-[var(--color-primary)]">
                          {service.title}
                        </h4>

                        <p className="mt-4 leading-7 text-[var(--color-muted)]">
                          {service.description}
                        </p>
                      </div>

                      <div className="shrink-0 border-t border-[var(--color-border)] pt-5 text-left sm:border-t-0 sm:pt-0 sm:text-right">
                        <p className="text-xl font-bold text-[var(--color-primary)]">
                          {service.price}
                        </p>

                        <p className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--color-muted)]">
                          <Clock3 size={16} />
                          {service.duration}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
