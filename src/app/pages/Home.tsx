import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { WhyZentiqTech } from "../components/WhyZentiqTech";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <WhyZentiqTech />
      <Contact />
      <Footer />
    </div>
  );
}
