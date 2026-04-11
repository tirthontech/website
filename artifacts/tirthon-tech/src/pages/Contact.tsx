import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Contact as ContactSection } from "@/components/sections/Contact";

const contactSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tirthontech.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://tirthontech.com/contact" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Tirthon Tech",
    "url": "https://tirthontech.com/contact",
    "description":
      "Contact Tirthon Tech for a free project consultation. We respond within 24 hours.",
    "publisher": {
      "@type": "Organization",
      "name": "Tirthon Tech",
      "url": "https://tirthontech.com/",
      "email": "business@tirthontech.com",
      "telephone": "+91-94245-75918",
    },
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Contact Tirthon Tech | Free Project Consultation"
        description="Talk to our team about your project. We respond within 24 hours. Based in India, serving clients in the US, UK, Australia, Canada, UAE, and worldwide. Email: business@tirthontech.com"
        path="/contact"
        keywords="contact Tirthon Tech, hire software developers India, outsource software development consultation, get a quote web app development, software development company India contact"
        jsonLd={contactSchemas}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Page Hero */}
        <section className="py-10 md:py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 md:mb-6"
            >
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Tell us what you're working on and we'll get back to you. No sales pitch, just a real conversation.
            </motion.p>
          </div>
        </section>

        {/* Reuse the comprehensive Contact form section, removing the extra top padding since we have a hero here */}
        <div className="-mt-12">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
