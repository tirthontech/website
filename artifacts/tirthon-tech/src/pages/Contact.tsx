import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Contact as ContactSection } from "@/components/sections/Contact";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Contact Us | Get a Free Project Consultation"
        description="Ready to build something great? Contact Tirthon Tech for a free consultation. We respond within 24 hours. Email: tirthontech@gmail.com"
        path="/contact"
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Page Hero */}
        <section className="py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
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
