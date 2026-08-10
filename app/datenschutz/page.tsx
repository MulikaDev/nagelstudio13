import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
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

              <Heading>Datenschutzerklärung</Heading>

              <div className="mt-12 space-y-10 leading-8 text-[var(--color-text)]">
                <section>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
                    Allgemeine Hinweise
                  </h2>

                  <p>
                    Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
                    Anliegen. Wir behandeln Ihre personenbezogenen Daten
                    vertraulich und entsprechend den gesetzlichen
                    Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
                    Verantwortliche Stelle
                  </h2>

                  <p>
                    Nagel Studio · 13
                    <br />
                    Inhaberin: Ilona Rieznik - Mulika
                    <br />
                    Kirchwistedter Hauptstraße 9
                    <br />
                    27616 Beverstedt
                    <br />
                    Deutschland
                    <br />
                    E-Mail: ilonarieznik@gmail.com
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
                    Kontaktaufnahme
                  </h2>

                  <p>
                    Wenn Sie uns per Telefon, WhatsApp oder E-Mail kontaktieren,
                    werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer
                    Anfrage verwendet und nicht ohne Ihre Zustimmung
                    weitergegeben.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
                    Ihre Rechte
                  </h2>

                  <p>
                    Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
                    Löschung oder Einschränkung der Verarbeitung Ihrer
                    personenbezogenen Daten sowie das Recht auf
                    Datenübertragbarkeit gemäß den geltenden
                    Datenschutzbestimmungen.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
                    Hosting
                  </h2>

                  <p>
                    Diese Website wird über Vercel bereitgestellt. Beim Besuch
                    der Website können technisch notwendige Daten verarbeitet
                    werden, um einen sicheren und stabilen Betrieb der Website
                    zu gewährleisten.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-[var(--color-primary)]">
                    Stand
                  </h2>

                  <p>Juli 2026</p>
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
