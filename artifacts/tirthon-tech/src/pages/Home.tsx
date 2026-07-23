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
import { Products } from "@/components/sections/Products";
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
    "Tirthon Tech helps businesses grow through brand and growth strategy, marketing execution, technology, and business operations automation, founded by IIT alumni and built around what each business actually needs rather than a fixed package.",
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
    "Brand Strategy",
    "Growth Strategy",
    "Marketing Execution",
    "Search Engine Optimization",
    "Paid Advertising",
    "Digital Content Creation",
    "Founder Personal Branding",
    "Custom Software Development",
    "Web App Development",
    "Mobile App Development",
    "AI Integration",
    "Business Operations Automation",
    "Data Annotation",
    "AI Training Data",
    "Shopify App Development",
    "Windows Software Development",
    "Cloud Infrastructure",
    "Business Consulting",
  ],
};

// ─── Schema: WebSite (Sitelinks Searchbox) ───────────────────────────────────
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tirthon Tech",
  "url": "https://tirthontech.com/",
  "description":
    "Tirthon Tech helps businesses grow through brand and growth strategy, marketing execution, content, and technology, built around what each business actually needs.",
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
    "Tirthon Tech helps businesses grow through brand and growth strategy, marketing execution, client partnership, technology, business operations automation, and consulting for specific business moments.",
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
    "name": "Tirthon Tech Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand & Growth Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Execution" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technology" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Client Partnership" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Operations & Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consulting for Specific Moments" } },
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
  "name": "Tirthon Tech | Strategy, Marketing, Content & Technology for Growing Businesses",
  "url": "https://tirthontech.com/",
  "description":
    "Tirthon Tech helps businesses grow through brand and growth strategy, marketing execution, content, and technology, founded by IIT alumni and built around what each business actually needs rather than a fixed package, for clients in the US, UK, Australia, and worldwide.",
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
    { "@type": "Thing", "name": "Brand & Growth Strategy" },
    { "@type": "Thing", "name": "Marketing Execution" },
    { "@type": "Thing", "name": "Business Operations & Automation" },
    { "@type": "Thing", "name": "Custom Software Development" },
    { "@type": "Thing", "name": "IIT Alumni Engineers" },
    { "@type": "Thing", "name": "Outsource Software Development India" },
    { "@type": "Thing", "name": "Web App Development" },
    { "@type": "Thing", "name": "Mobile App Development" },
    { "@type": "Thing", "name": "AI Integration" },
    { "@type": "Thing", "name": "Data Annotation" },
    { "@type": "Thing", "name": "Shopify App Development" },
    { "@type": "SoftwareApplication", "name": "RealtySell", "url": "https://tirthontech.com/products/realtysell", "applicationCategory": "Real Estate CRM" },
    { "@type": "SoftwareApplication", "name": "TradeSathi", "url": "https://tirthontech.com/products/tradesathi", "applicationCategory": "FinTech" },
    { "@type": "SoftwareApplication", "name": "BariQ", "url": "https://tirthontech.com/products/bariq", "applicationCategory": "Queue Management" },
    { "@type": "SoftwareApplication", "name": "AKNA Terminal", "url": "https://tirthontech.com/products/akna-terminal", "applicationCategory": "Trading Software" },
    { "@type": "SoftwareApplication", "name": "topreviewz", "url": "https://tirthontech.com/products/topreviewz", "applicationCategory": "Reputation Management" },
    { "@type": "SoftwareApplication", "name": "TirthonQuant", "url": "https://tirthontech.com/products/tirthonquant", "applicationCategory": "Algorithmic Trading" },
  ],
};

// ─── Schema: HowTo — how to hire Tirthon Tech (GEO/LLM signal) ───────────────
const howToHireSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Work With Tirthon Tech",
  "description":
    "Tirthon Tech helps businesses grow through strategy, marketing, content, and technology, founded by IIT alumni. To start, contact them via email at business@tirthontech.com, book a free strategy session via Calendly, or fill the contact form at tirthontech.com/contact.",
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
        "description": "Tirthon Tech offers brand and growth strategy, marketing execution (SEO, digital content, paid advertising, founder personal branding), technology (custom software, mobile apps, business dashboards, AI automation, web applications), client partnership, business operations automation, and consulting for specific business moments.",
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
        title="Tirthon Tech | Strategy, Marketing, Content & Technology for Growing Businesses"
        description="Tirthon Tech helps businesses grow through strategy, marketing, content, and technology, built around what your business actually needs, not a fixed package. Founded by IIT alumni, serving clients in the US, UK, Australia, and worldwide."
        path="/"
        keywords="business growth strategy, brand strategy consulting, growth diagnostics, marketing execution agency, SEO services, digital content marketing, paid advertising Meta Google Ads, founder personal branding, business operations automation, IIT alumni company, hire software developers India, outsource software development to India, custom web app development, mobile app development India, AI solutions for startups, data annotation services India, fintech app development, ecommerce app development, real estate CRM India, proptech software India, research analyst subscriber app, SEBI RA white label app, queue management system clinics, digital queue management hospital, multi broker trading terminal India, multi account trading software, Google review management software, online reputation management local business, algorithmic trading platform India, algo trading software India, real estate developer software, automated trading strategies India"
        jsonLd={homeSchemas}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <ClientsFrom />
        <Services />
        <Products />
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
