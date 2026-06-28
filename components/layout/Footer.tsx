import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="pt-8 pb-10">
      <Container>
        <div className="border-t border-[var(--color-border)] pt-10">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold tracking-[0.01em] text-[var(--color-primary)]">
                Nagel Studio · 13
              </h3>

              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Beverstedt · Deutschland
              </p>
            </div>

            {/* Links */}
            <nav className="flex items-center gap-8">
              <a
                href="#contact"
                className="text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--color-primary)]"
              >
                WhatsApp
              </a>

              <a
                href="#contact"
                className="text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--color-primary)]"
              >
                Instagram
              </a>
            </nav>

            {/* Copyright */}
            <p className="text-center text-sm text-[var(--color-muted)] md:text-right">
              © 2026 Nagel Studio · 13
              <br />
              Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
