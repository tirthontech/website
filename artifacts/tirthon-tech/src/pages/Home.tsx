import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { Marquee } from "@/components/sections/Marquee";
import { FAQ, faqs } from "@/components/sections/FAQ";
import { ClientsFrom } from "@/components/sections/ClientsFrom";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { CostAdvantage } from "@/components/sections/CostAdvantage";
import { SEO } from "@/components/SEO";

// ─── Schema: Organization ────────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tirthon Tech",
  "alternateName": "TirthonTech",
  "url": "https://tirthontech.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://tirthontech.com/logo.png",
    "width": 512,
    "height": 512,
  },
  "description":
    "Tirthon Tech is a software development company founded by IIT alumni, building custom web apps, mobile apps, AI solutions, data annotation services, Shopify apps, and Windows software for clients worldwide.",
  "foundingDate": "2024",
  "email": "business@tirthontech.com",
  "telephone": "+91-94245-75918",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B56, Tilak Nagar",
    "addressLocality": "Indore",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "452001",
    "addressCountry": "IN",
  },
  "areaServed": "Worldwide",
  "sameAs": [
    "https://www.linkedin.com/company/113329677/",
    "https://www.instagram.com/tirthon_tech/",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "business@tirthontech.com",
    "telephone": "+91-94245-75918",
    "availableLanguage": ["English"],
    "areaServed": "Worldwide",
  },
  "knowsAbout": [
    "Custom Software Development",
    "Web App Development",
    "Mobile App Development",
    "AI Integration",
    "Data Annotation",
    "AI Training Data",
    "Shopify App Development",
    "Windows Software Development",
    "Cloud Infrastructure",
    "Technology Consulting",
  ],
};

// ─── Schema: WebSite (Sitelinks Searchbox) ───────────────────────────────────
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tirthon Tech",
  "url": "https://tirthontech.com/",
  "description":
    "Custom software development company specializing in web apps, mobile apps, AI solutions, data annotation, and Shopify development.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://tirthontech.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── Schema: ProfessionalService ─────────────────────────────────────────────
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Tirthon Tech",
  "url": "https://tirthontech.com/",
  "description":
    "Tirthon Tech builds custom web apps, mobile apps, AI solutions, Shopify apps, Windows software, and AI training datasets for clients worldwide.",
  "image": "https://tirthontech.com/logo.png",
  "email": "business@tirthontech.com",
  "telephone": "+91-94245-75918",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B56, Tilak Nagar",
    "addressLocality": "Indore",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "452001",
    "addressCountry": "IN",
  },
  "areaServed": "Worldwide",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & Automation Solutions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data for AI Training" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Annotation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Windows Software Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technology Consulting" } },
    ],
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

const homeSchemas = [
  organizationSchema,
  webSiteSchema,
  professionalServiceSchema,
  faqPageSchema,
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Tirthon Tech | Custom Software Development for US, UK & Global Clients"
        description="Tirthon Tech — IIT alumni engineers building custom web apps, mobile apps, AI solutions, and Shopify apps for clients in the US, UK, Australia, and worldwide. Hire senior engineers at globally competitive rates."
        path="/"
        keywords="hire software developers India, outsource software development, custom web app development for US clients, software development company India, IIT alumni software company, mobile app development India, AI solutions for startups"
        jsonLd={homeSchemas}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <ClientsFrom />
        <Services />
        <HowWeWork />
        <CostAdvantage />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
