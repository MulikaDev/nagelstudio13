import Image from "next/image";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

import img1 from "@/public/images/galery/gallery1.png";
import img2 from "@/public/images/galery/gallery2.png";
import img3 from "@/public/images/galery/gallery3.png";
import img4 from "@/public/images/galery/gallery4.png";
import img5 from "@/public/images/galery/gallery5.png";
import img6 from "@/public/images/galery/gallery6.png";
import img7 from "@/public/images/galery/gallery7.png";

const galleryImages = [img1, img2, img3, img4, img5, img6, img7];

export default function Gallery() {
  return (
    <Section id="gallery" className="!pt-18 !pb-12">
      <Container>
        <SectionHeader
          eyebrow="Galerie"
          title="Unsere Arbeiten"
          description="Entdecken Sie eine Auswahl unserer schönsten Arbeiten und lassen Sie sich für Ihren nächsten Termin inspirieren."
        />

        <div className="mx-auto mt-20 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
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
