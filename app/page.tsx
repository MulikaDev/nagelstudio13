import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
