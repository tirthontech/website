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

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Our Services | Web, Mobile, AI & Data Solutions"
        description="Explore Tirthon Tech's full range of services: custom web & mobile apps, Shopify apps, Windows software, AI automation, AI training datasets, data annotation, cloud infrastructure, and technology consulting."
        path="/services"
        keywords="web app development, mobile app development, Shopify app development, AI automation, data annotation services, AI training datasets, Windows software development, cloud infrastructure, MVP development, technology consulting"
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
