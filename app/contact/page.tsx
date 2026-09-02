import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Black Volt Investments",
  description:
    "Get in touch with Black Volt Investments (Pvt) Ltd in Bulawayo, Zimbabwe. Call or email for a quotation on security, trading, or farm produce services.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Get In Touch"
          heading={
            <>
              CONTACT <span className="text-[var(--accent)]">BLACK VOLT</span> INVESTMENTS
            </>
          }
          wordmark="CONTACT"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />
        <ContactContent />
        <CtaBand
          heading={
            <>
              READY TO WORK WITH <span className="text-[var(--accent)]">BLACK VOLT?</span>
            </>
          }
          paragraph="Call or email J. Khumalo today and we will come back with a quotation. No forms — just a direct conversation."
          // TODO: replace with client photography
          bgSrc="https://images.unsplash.com/photo-1523294557-3637e1db3f33?fm=jpg&q=80&w=1800&auto=format&fit=crop"
          bgAlt="Guarded premises at dusk with a patrol vehicle"
        />
      </main>
      <Footer />
    </>
  );
}
