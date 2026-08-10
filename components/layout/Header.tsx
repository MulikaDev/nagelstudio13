"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Container from "../ui/Container";
import Logo from "../ui/Logo";

const navItems = [
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getHref = (href: string) => {
    return pathname === "/" ? href : `/${href}`;
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/50 backdrop-blur-xl">
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={getHref(item.href)}
                className="group relative text-sm font-medium text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-primary)]"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="border-t border-[var(--color-border)] bg-white md:hidden">
          <Container>
            <nav className="flex flex-col gap-6 py-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={getHref(item.href)}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[var(--color-primary)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
