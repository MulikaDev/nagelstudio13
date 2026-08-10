import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/site";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <Container>
        <div className="border-t border-[var(--color-border)] pt-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-[0.01em] text-[var(--color-primary)]">
              Nagel Studio · 13
            </h2>

            <p className="mt-3 text-[var(--color-muted)]">
              Schönheit beginnt mit Vertrauen.
            </p>

            <div className="mt-8 flex justify-center gap-8">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle
                  size={18}
                  className="text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-primary)]"
                />

                <span className="transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  WhatsApp
                </span>
              </a>

              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                <ArrowUpRight
                  size={18}
                  className="text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-primary)]"
                />

                <span className="transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  Instagram
                </span>
              </a>
            </div>

            <p className="mt-8 text-sm text-[var(--color-muted)]">
              {siteConfig.contact.location}
            </p>

            <div className="mt-10 border-t border-[var(--color-border)] pt-6">
              <p className="text-xs tracking-wide text-[var(--color-muted)]">
                © {new Date().getFullYear()} Nagel Studio · 13
              </p>

              <div className="mt-4 flex justify-center gap-5 text-xs font-medium text-[var(--color-muted)]">
                <Link
                  href="/impressum"
                  className="transition-colors duration-300 hover:text-[var(--color-primary)]"
                >
                  Impressum
                </Link>

                <span>·</span>

                <Link
                  href="/datenschutz"
                  className="transition-colors duration-300 hover:text-[var(--color-primary)]"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
