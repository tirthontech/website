import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, Globe, Cpu, Cloud, 
  LayoutDashboard, Rocket, Lightbulb, Settings,
  Database, Tag, ShoppingBag, Monitor, ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Web, Mobile & Desktop Apps",
    description: "We build the whole thing. From the UI your users see to the backend that powers it. Web, iOS, Android, Windows, whatever you need.",
    deliverables: [
      "React, Next.js & full-stack web apps",
      "iOS & Android apps (React Native / Flutter)",
      "Windows desktop software",
      "SaaS products"
    ],
    icon: Code2
  },
  {
    title: "Websites & Landing Pages",
    description: "A website that's slow or hard to navigate loses you business. We build sites that are fast, clear, and actually do their job.",
    deliverables: [
      "Company & startup websites",
      "Landing pages built to convert",
      "UI/UX design & prototyping",
      "CMS-powered content sites"
    ],
    icon: Globe
  },
  {
    title: "AI & Automation",
    description: "If something in your business is repetitive or slow, there's a good chance we can automate it. We also build AI tools that slot into your workflow.",
    deliverables: [
      "LLM & AI integrations",
      "Workflow automation (Zapier / Make / custom)",
      "Chatbots & virtual assistants",
      "Data pipelines & AI systems"
    ],
    icon: Cpu
  },
  {
    title: "Data for AI Training",
    description: "Training a model? We'll get you the data. We scrape, clean, and structure it in whatever format your pipeline expects.",
    deliverables: [
      "Large-scale web scraping & extraction",
      "Datasets in JSON, CSV, JSONL formats",
      "Domain-specific data collection",
      "Custom pipelines for training workflows"
    ],
    icon: Database
  },
  {
    title: "Data Annotation",
    description: "Good annotations make the difference between a model that works and one that doesn't. We label carefully and consistently.",
    deliverables: [
      "Image & video annotation",
      "Text classification & NLP labeling",
      "Named entity recognition (NER)",
      "Quality-controlled annotation"
    ],
    icon: Tag
  },
  {
    title: "Shopify & E-Commerce",
    description: "We build Shopify apps, customize themes, and set up integrations so your store runs the way you want it to.",
    deliverables: [
      "Custom Shopify app development",
      "Theme builds & customization",
      "Shopify Plus integrations",
      "Payment, inventory & order management"
    ],
    icon: ShoppingBag
  },
  {
    title: "Cloud & Backend",
    description: "APIs, databases, cloud infrastructure. We set it up properly so it doesn't become a headache later.",
    deliverables: [
      "Cloud architecture (AWS / GCP)",
      "REST & GraphQL API development",
      "Database design & optimization",
      "Serverless & microservices"
    ],
    icon: Cloud
  },
  {
    title: "Windows Software",
    description: "We build native Windows apps for businesses that need something that runs locally, integrates with hardware, or handles sensitive data.",
    deliverables: [
      "C# / .NET Windows applications",
      "Internal tools & utilities",
      "System integrations & automation",
      "Legacy software modernization"
    ],
    icon: Monitor
  },
  {
    title: "Internal Tools & Dashboards",
    description: "Stop managing your business through spreadsheets. We build the CRMs, portals, and dashboards that your team will actually use.",
    deliverables: [
      "Custom CRM & ERP systems",
      "Admin dashboards & client portals",
      "Inventory & resource management",
      "Process automation & reporting"
    ],
    icon: LayoutDashboard
  },
  {
    title: "MVPs & Product Scaling",
    description: "Need to validate fast? We help you ship a solid MVP without wasting time. Already growing? We help you scale without things breaking.",
    deliverables: [
      "Fast MVP development",
      "Product strategy & roadmapping",
      "Performance audits & fixes",
      "Scaling architecture"
    ],
    icon: Rocket
  },
  {
    title: "Tech Consulting",
    description: "Sometimes you just need someone to look at what you have and give you an honest opinion. That's something we're good at.",
    deliverables: [
      "Technical due diligence",
      "Architecture reviews",
      "Digital transformation planning",
      "Team augmentation & training"
    ],
    icon: Lightbulb
  },
  {
    title: "Custom Solutions",
    description: "If your problem doesn't fit into a standard category, reach out anyway. Some of our best work has come from unusual requirements.",
    deliverables: [
      "Web scraping & data extraction systems",
      "Third-party API integrations",
      "Real-time analytics platforms",
      "IoT backend & edge systems"
    ],
    icon: Settings
  }
];

// ─── Schema: Service ItemList ────────────────────────────────────────────────
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Software Development Services by Tirthon Tech",
  "description":
    "Full range of software development, AI, and data services offered by Tirthon Tech for clients worldwide.",
  "url": "https://tirthontech.com/services",
  "numberOfItems": 12,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Web, Mobile & Desktop Apps",
        "description":
          "Custom web applications, iOS & Android mobile apps, Windows desktop software, and SaaS products built with React, Next.js, React Native, and Flutter.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Software Development",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Websites & Landing Pages",
        "description":
          "Fast, conversion-focused company websites, landing pages, UI/UX design, and CMS-powered content sites.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Web Development",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "AI & Automation",
        "description":
          "LLM & AI integrations, workflow automation, chatbots, virtual assistants, and custom data pipelines to automate repetitive business processes.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "AI & Automation",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Data for AI Training",
        "description":
          "Large-scale web scraping, data extraction, and domain-specific dataset creation in JSON, CSV, and JSONL formats for AI/ML training workflows.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "AI Training Data",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Data Annotation",
        "description":
          "Image & video annotation, text classification, NLP labeling, and named entity recognition (NER) with quality-controlled annotation pipelines.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Data Annotation",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Shopify & E-Commerce",
        "description":
          "Custom Shopify app development, theme builds and customization, Shopify Plus integrations, and payment, inventory & order management solutions.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "E-Commerce Development",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Service",
        "name": "Cloud & Backend",
        "description":
          "Cloud architecture on AWS & GCP, REST & GraphQL API development, database design, and serverless & microservices infrastructure.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Cloud & Backend Development",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Service",
        "name": "Windows Software",
        "description":
          "Native C# / .NET Windows desktop applications, internal tools, system integrations, and legacy software modernization.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Windows Software Development",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 9,
      "item": {
        "@type": "Service",
        "name": "Internal Tools & Dashboards",
        "description":
          "Custom CRM & ERP systems, admin dashboards, client portals, inventory management tools, and process automation & reporting platforms.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Internal Tools Development",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 10,
      "item": {
        "@type": "Service",
        "name": "MVPs & Product Scaling",
        "description":
          "Fast MVP development, product strategy & roadmapping, performance audits, and scaling architecture for growing products.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "MVP Development",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 11,
      "item": {
        "@type": "Service",
        "name": "Tech Consulting",
        "description":
          "Technical due diligence, architecture reviews, digital transformation planning, and team augmentation & training.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Technology Consulting",
        "url": "https://tirthontech.com/services",
      },
    },
    {
      "@type": "ListItem",
      "position": 12,
      "item": {
        "@type": "Service",
        "name": "Custom Solutions",
        "description":
          "Web scraping & data extraction systems, third-party API integrations, real-time analytics platforms, and IoT backend & edge systems.",
        "provider": { "@type": "Organization", "name": "Tirthon Tech", "url": "https://tirthontech.com/" },
        "areaServed": "Worldwide",
        "serviceType": "Custom Software Solutions",
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
        title="Software Development Services for US, UK & Global Clients | Tirthon Tech"
        description="Hire IIT-alumni engineers for custom web apps, mobile apps, AI automation, data annotation, Shopify apps, Windows software, and cloud infrastructure. Trusted by clients in the US, UK, Australia, and 10+ countries."
        path="/services"
        keywords="hire software developers India, outsource web app development, software development services for US clients, mobile app development company India, Shopify app development India, AI automation services, data annotation company, cloud infrastructure India, MVP development company, technology consulting India"
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
              We build a lot of different things. Here's the full breakdown of what we do and what you get.
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
              Reach out and tell us what you're building. We'll take it from there.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg group">
                Start Your Project
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
