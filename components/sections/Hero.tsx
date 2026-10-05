import Image from "next/image";

import { siteConfig } from "@/data/site";
import Button from "../ui/Button";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

import heroImage from "@/public/images/hero/hero-main.png";

export default function Hero() {
  return (
    <Section className="pt-6 pb-8 sm:pt-8 sm:pb-4 lg:pt-10 lg:pb-12">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            {/* Photo / Logo */}
            <div className="relative mb-8 aspect-[4/5] w-full max-w-[200px] sm:max-w-[250px] lg:mb-12">
              <Image
                src={heroImage}
                alt="Nagel Studio Logo"
                fill
                priority
                className="object-contain mix-blend-multiply"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                {siteConfig.hero.eyebrow}
              </p>

              <div className="max-w-3xl">
                <Heading>{siteConfig.hero.title}</Heading>
              </div>

              <p className="mt-7 max-w-lg text-lg leading-8 text-[var(--color-muted)]">
                {siteConfig.hero.description}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
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
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
