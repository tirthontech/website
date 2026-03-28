import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { Marquee } from "@/components/sections/Marquee";
import { SEO } from "@/components/SEO";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Tirthon Tech — Custom Software, AI & Data Solutions",
  "url": "https://tirthontech.com/",
  "description": "Tirthon Tech builds custom web apps, mobile apps, AI solutions, Shopify apps, Windows software, and AI training datasets for US and global clients.",
  "publisher": {
    "@type": "Organization",
    "name": "Tirthon Tech",
    "url": "https://tirthontech.com"
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Tirthon Tech | Custom Software, AI & Data Solutions"
        description="Tirthon Tech builds custom web apps, mobile apps, AI solutions, Shopify apps, Windows software, and AI training datasets for clients worldwide. Scalable. Fast. Built to grow."
        path="/"
        jsonLd={homeJsonLd}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
