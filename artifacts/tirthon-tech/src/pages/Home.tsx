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
  "@type": "ProfessionalService",
  "name": "Tirthon Tech",
  "url": "https://tirthontech.com/",
  "description": "Tirthon Tech builds custom web apps, mobile apps, AI solutions, Shopify apps, Windows software, and AI training datasets for clients worldwide.",
  "image": "https://tirthontech.com/logo.png",
  "email": "business@tirthontech.com",
  "telephone": "+91-94245-75918",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B56, Tilak Nagar",
    "addressLocality": "Indore",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "452001",
    "addressCountry": "IN"
  },
  "areaServed": "Worldwide",
  "priceRange": "$$",
  "knowsAbout": [
    "Custom Software Development",
    "Web App Development",
    "Mobile App Development",
    "AI Integration",
    "Data Annotation",
    "AI Training Data",
    "Shopify App Development",
    "Cloud Infrastructure",
    "Technology Consulting"
  ],
  "alumni": {
    "@type": "EducationalOrganization",
    "name": "Indian Institute of Technology (IIT)"
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Tirthon Tech | Custom Software, AI & Data Solutions"
        description="Tirthon Tech builds custom web apps, mobile apps, AI solutions, Shopify apps, Windows software, and AI training datasets for clients worldwide. Scalable. Fast. Built to grow."
        path="/"
        keywords="custom software development, web app development India, mobile app development, AI solutions, data annotation, AI training data, Shopify app development, IIT alumni software company, technology consulting India"
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
