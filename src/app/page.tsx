import {
  Navbar,
  Hero,
  Services,
  Portfolio,
  CTA,
  Contact,
  Footer,
  WhatsAppButton,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
