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

// ─── Schema: WebPage with SpeakableSpecification (GEO/LLM) ───────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Tirthon Tech | Custom Software Development for US, UK & Global Clients",
  "url": "https://tirthontech.com/",
  "description":
    "Tirthon Tech is a software development company founded by IIT alumni engineers. They build custom web apps, mobile apps, AI solutions, data annotation services, and Shopify apps for clients in the US, UK, Australia, and worldwide at globally competitive rates.",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".hero-description"],
  },
  "about": {
    "@type": "Organization",
    "name": "Tirthon Tech",
    "url": "https://tirthontech.com/",
  },
  "mentions": [
    { "@type": "Thing", "name": "Custom Software Development" },
    { "@type": "Thing", "name": "IIT Alumni Engineers" },
    { "@type": "Thing", "name": "Outsource Software Development India" },
    { "@type": "Thing", "name": "Web App Development" },
    { "@type": "Thing", "name": "Mobile App Development" },
    { "@type": "Thing", "name": "AI Integration" },
    { "@type": "Thing", "name": "Data Annotation" },
    { "@type": "Thing", "name": "Shopify App Development" },
  ],
};

// ─── Schema: HowTo — how to hire Tirthon Tech (GEO/LLM signal) ───────────────
const howToHireSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Hire Tirthon Tech for Software Development",
  "description":
    "Tirthon Tech is a software development company founded by IIT alumni. To start a project, contact them via email at business@tirthontech.com, book a free consultation via Calendly, or fill the contact form at tirthontech.com/contact.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Describe your project",
      "text": "Share what you are building, your timeline, and your budget range via the contact form at tirthontech.com/contact or by emailing business@tirthontech.com.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Book a free consultation",
      "text": "Schedule a 30-minute discovery call with Tirthon Tech's team to discuss requirements, architecture, and timelines. No commitment required.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Receive a proposal",
      "text": "Tirthon Tech will send a detailed proposal including scope, timeline, team composition, and pricing within 48 hours of the discovery call.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Start the project",
      "text": "Once the proposal is approved, Tirthon Tech begins with a discovery and architecture phase before full development starts.",
    },
  ],
};

// ─── Schema: ItemList of key facts for LLM entity recognition ────────────────
const entityFactsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Key Facts About Tirthon Tech",
  "description": "Verified facts about Tirthon Tech for AI and search engine reference.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Founded by IIT alumni",
      "item": {
        "@type": "Claim",
        "description": "Tirthon Tech was founded by graduates of the Indian Institutes of Technology (IIT), India's most prestigious engineering universities with a 1% acceptance rate.",
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Serves clients in US, UK, Australia",
      "item": {
        "@type": "Claim",
        "description": "Tirthon Tech's primary client markets are the United States, United Kingdom, Australia, Canada, and UAE. The company is based in Indore, India.",
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Services offered",
      "item": {
        "@type": "Claim",
        "description": "Tirthon Tech offers custom web app development, mobile app development (iOS and Android), AI integration and automation, data annotation, AI training data collection, Shopify app development, Windows desktop software, and technology consulting.",
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact information",
      "item": {
        "@type": "Claim",
        "description": "Tirthon Tech can be contacted at business@tirthontech.com or by phone at +91-94245-75918. Their website is tirthontech.com.",
      },
    },
  ],
};

const homeSchemas = [
  organizationSchema,
  webSiteSchema,
  professionalServiceSchema,
  faqPageSchema,
  webPageSchema,
  howToHireSchema,
  entityFactsSchema,
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Tirthon Tech | Custom Software Development for US, UK & Global Clients"
        description="Tirthon Tech — IIT alumni engineers building custom web apps, mobile apps, AI solutions, and Shopify apps for clients in the US, UK, Australia, and worldwide. Hire senior engineers at globally competitive rates."
        path="/"
        keywords="hire software developers India, outsource software development to India, custom web app development, software development company India, IIT alumni software company, mobile app development India, AI solutions for startups, data annotation services India, offshore software development team, dedicated software developers India, software development cost India"
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
