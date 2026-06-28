import Image from "next/image";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const galleryImages = [
  "/images/galery/gallery1.png",
  "/images/galery/gallery2.png",
  "/images/galery/gallery3.png",
  "/images/galery/gallery4.png",
  "/images/galery/gallery5.png",
  "/images/galery/gallery6.png",
  "/images/galery/gallery7.png",
];

export default function Gallery() {
  return (
    <Section id="gallery">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Galerie
          </p>

          <Heading className="text-center">Unsere Arbeiten</Heading>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text)]">
            Entdecken Sie eine Auswahl unserer schönsten Arbeiten und lassen Sie
            sich für Ihren nächsten Termin inspirieren.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className="group relative aspect-[3/4] overflow-hidden rounded-[28px] bg-[var(--color-bg-soft)] shadow-sm transition-shadow duration-500 hover:shadow-2xl"
            >
              <Image
                src={image}
                alt={`Nagel Design ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
