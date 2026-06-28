import { siteConfig } from "@/data/site";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
} from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function Contact() {
  return (
    <Section id="contact" className="!pt-12 !pb-12">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Kontakt
          </p>

          <Heading className="text-center">
            Bereit für Ihren nächsten Termin?
          </Heading>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text)]">
            Schreiben Sie uns über WhatsApp oder besuchen Sie unser Instagram.
            Wir freuen uns darauf, Sie im Nagel Studio ·13 willkommen zu heißen.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.contact.whatsapp}>
              <span className="flex items-center gap-2">
                <MessageCircle size={18} />
                WhatsApp
              </span>
            </Button>

            <Button href={siteConfig.contact.instagram} variant="secondary">
              <span className="flex items-center gap-2">
                <ArrowUpRight size={18} />
                Instagram
              </span>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="group rounded-[28px] border border-[var(--color-border)] bg-white px-8 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex items-center justify-center gap-2">
              <MapPin
                size={20}
                className="text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-primary)]"
              />
              <h3 className="text-lg font-semibold">Adresse</h3>
            </div>

            <p className="text-[var(--color-muted)]">
              {siteConfig.contact.address}
            </p>
          </div>

          <div className="group rounded-[28px] border border-[var(--color-border)] bg-white px-8 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex items-center justify-center gap-2">
              <Clock3
                size={20}
                className="text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-primary)]"
              />
              <h3 className="text-lg font-semibold">Öffnungszeiten</h3>
            </div>

            <div className="space-y-2 text-[var(--color-muted)]">
              {siteConfig.contact.openingHours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="group rounded-[28px] border border-[var(--color-border)] bg-white px-8 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex items-center justify-center gap-2">
              <Navigation
                size={20}
                className="text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-primary)]"
              />
              <h3 className="text-lg font-semibold">Standort</h3>
            </div>

            <p className="text-[var(--color-muted)]">Google Maps</p>

            <a
              href={siteConfig.contact.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-medium text-[var(--color-primary)] transition-opacity hover:opacity-75"
            >
              Route öffnen
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
