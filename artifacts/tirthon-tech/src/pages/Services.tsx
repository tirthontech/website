import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Target, Megaphone, Cpu, Handshake, Workflow, Compass, ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Brand & Growth Strategy",
    description: "Understand where you stand before you spend on growth. We look at your market, your customers, and your numbers, then tell you honestly what to fix first.",
    deliverables: [
      "Competitive clarity",
      "Growth diagnostics",
      "Distinctive positioning",
      "Scaling and franchise strategy"
    ],
    icon: Target
  },
  {
    title: "Marketing Execution",
    description: "Build visibility, create demand, and drive growth across the channels that actually matter for your business.",
    deliverables: [
      "SEO",
      "Digital content: blogs, newsletters, reels, social media",
      "Paid advertising: Meta Ads, Google Ads, influencer marketing",
      "Founder personal branding"
    ],
    icon: Megaphone
  },
  {
    title: "Technology",
    description: "The part of the business that runs everything else. We build software that fits how your business actually operates, not the other way around.",
    deliverables: [
      "Custom software",
      "Business dashboards",
      "Mobile apps (Android and iOS)",
      "AI automation",
      "Web applications"
    ],
    icon: Cpu
  },
  {
    title: "Client Partnership",
    description: "One point of contact. No vendor hand offs, and no re explaining your business to a new account manager every quarter.",
    deliverables: [
      "Dedicated point of contact",
      "Regular strategy check ins",
      "Ongoing partnership, not one off projects"
    ],
    icon: Handshake
  },
  {
    title: "Business Operations & Automation",
    description: "Less manual work, more time on what matters. We connect and automate the systems your business already runs on.",
    deliverables: [
      "Workflow automation",
      "Operations software",
      "Process digitization",
      "Systems integration"
    ],
    icon: Workflow
  },
  {
    title: "Consulting for Specific Moments",
    description: "For when you know something needs to change, but not what. We look at your business and tell you honestly what to focus on, and in what order.",
    deliverables: [
      "Direction setting",
      "Priority mapping",
      "Moment specific guidance"
    ],
    icon: Compass
  }
];

// ─── Schema: Service ItemList ────────────────────────────────────────────────
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Tirthon Tech Services",
  "description":
    "Business growth services offered by Tirthon Tech across brand and growth strategy, marketing execution, technology, client partnership, business operations automation, and consulting for specific moments.",
  "url": "https://tirthontech.com/services",
  "numberOfItems": 6,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Brand & Growth Strategy",
        "description":
          "Competitive clarity, growth diagnostics, distinctive positioning, and scaling or franchise strategy for businesses that want direction before they spend on growth.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Brand and Growth Strategy",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Marketing Execution",
        "description":
          "SEO, digital content across blogs and social media, paid advertising on Meta and Google, and founder personal branding to build visibility and demand.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Marketing Execution",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Technology",
        "description":
          "Custom software, business dashboards, mobile apps for Android and iOS, AI automation, and web applications built around your business model.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Software Development",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Client Partnership",
        "description":
          "A dedicated point of contact, regular strategy check ins, and an ongoing partnership rather than a one off project relationship.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Client Partnership",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Business Operations & Automation",
        "description":
          "Workflow automation, operations software, process digitization, and systems integration to cut manual work across the business.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Business Operations Automation",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Consulting for Specific Moments",
        "description":
          "Direction setting, priority mapping, and moment specific guidance for launches, new markets, or growth plateaus.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Business Consulting",
        "url": "https://tirthontech.com/services",
      },
    },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://tirthontech.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://tirthontech.com/services",
    },
  ],
};

const servicesPageSchemas = [servicesSchema, breadcrumbSchema];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Strategy, Marketing, Content & Technology Services | Tirthon Tech"
        description="Brand and growth strategy, marketing execution, technology, client partnership, business operations automation, and consulting for specific moments, built around what your business actually needs. Serving clients in the US, UK, Australia, and worldwide."
        path="/services"
        keywords="business growth strategy, brand strategy consulting, growth diagnostics, marketing execution agency, SEO services, digital content marketing, paid advertising Meta Google Ads, founder personal branding, business operations automation, custom software development, mobile app development India, AI automation services, business consulting India"
        jsonLd={servicesPageSchemas}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Page Hero */}
        <section className="py-12 md:py-20 bg-muted/30 border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 md:mb-6"
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Everything rolls up into four pillars: strategy, marketing, content, and technology.
              Here is the full breakdown of what we do and what you get.
            </motion.p>
          </div>
        </section>

        {/* Detailed Services List */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 group">
                      <CardHeader className="flex flex-row items-start gap-4 pb-2">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg md:text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {service.description}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4 pl-4 md:pl-20">
                        <ul className="space-y-2">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center text-sm font-medium text-foreground/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-12 md:py-20 bg-primary/5 border-y border-primary/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              See something that fits what you need?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Reach out and tell us what your business needs. We will take it from there.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg group">
                Book a Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
