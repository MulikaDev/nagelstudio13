import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="pt-16 pb-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Rechtliches
              </p>

              <Heading>Impressum</Heading>

              <div className="mt-12 space-y-10 text-[var(--color-text)] leading-8">
                <section>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
                    Angaben gemäß § 5 TMG
                  </h2>

                  <p>
                    <strong>Nagel Studio · 13</strong>
                    <br />
                    Inhaberin: Ilona Rieznik - Mulika
                    <br />
                    Kirchwistedter Hauptstraße 9
                    <br />
                    27616 Beverstedt
                    <br />
                    Deutschland
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
                    Kontakt
                  </h2>

                  <p>
                    Telefon:
                    <br />
                    +49 171 2778783
                  </p>

                  <p className="mt-4">
                    E-Mail:
                    <br />
                    ilonarieznik@gmail.com
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
                    Verantwortlich für den Inhalt
                  </h2>

                  <p>
                    Ilona Rieznik - Mulika
                    <br />
                    Kirchwistedter Hauptstraße 9
                    <br />
                    27616 Beverstedt
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
                    Umsatzsteuer
                  </h2>

                  <p>
                    Es liegt derzeit keine Umsatzsteuer-Identifikationsnummer
                    gemäß § 27a UStG vor.
                  </p>
                </section>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
