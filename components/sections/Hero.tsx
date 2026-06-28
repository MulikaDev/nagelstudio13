import Image from "next/image";

import { siteConfig } from "@/data/site";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section className="pt-6 pb-8 sm:pt-8 sm:pb-4 lg:pt-10 lg:pb-12">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Text */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {siteConfig.hero.eyebrow}
            </p>

            <Heading>{siteConfig.hero.title}</Heading>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[var(--color-muted)]">
              {siteConfig.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={siteConfig.hero.primaryAction.href}>
                {siteConfig.hero.primaryAction.label}
              </Button>

              <Button
                href={siteConfig.hero.secondaryAction.href}
                variant="secondary"
              >
                {siteConfig.hero.secondaryAction.label}
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[32px] shadow-2xl lg:max-w-[440px]">
              <Image
                src="/images/hero/hero-main.jpg"
                alt="Nagel Studio"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
