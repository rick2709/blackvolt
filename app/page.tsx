import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectorStrip from "@/components/SectorStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectorStrip />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
