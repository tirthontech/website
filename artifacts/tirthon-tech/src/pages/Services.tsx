import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
    description: "Full-cycle development of custom web apps, native & cross-platform mobile apps, and Windows desktop software — all built to scale.",
    deliverables: [
      "React, Next.js & full-stack web applications",
      "iOS & Android mobile apps (React Native / Flutter)",
      "Windows desktop software development",
      "SaaS product development"
    ],
    icon: Code2
  },
  {
    title: "Web Development & Digital Experience",
    description: "High-performance websites and digital experiences that convert visitors into clients — built fast, clean, and on-brand.",
    deliverables: [
      "Responsive corporate & startup websites",
      "High-conversion landing pages",
      "UI/UX design & prototyping",
      "CMS-powered content sites"
    ],
    icon: Globe
  },
  {
    title: "AI & Automation Solutions",
    description: "AI-powered tools, intelligent workflow automation, smart chatbots, and data-driven decision systems that give your business a real edge.",
    deliverables: [
      "Custom LLM & AI integrations",
      "Workflow automation (Zapier / Make / custom)",
      "Intelligent chatbots & virtual assistants",
      "Data pipelines & AI decision systems"
    ],
    icon: Cpu
  },
  {
    title: "Data for AI Training",
    description: "We source, structure, and deliver high-quality datasets via web scraping and custom data collection — ready for AI and ML model training.",
    deliverables: [
      "Large-scale web scraping & data extraction",
      "Structured dataset delivery (JSON, CSV, JSONL)",
      "Domain-specific data sourcing",
      "Custom data pipelines for training workflows"
    ],
    icon: Database
  },
  {
    title: "Data Annotation",
    description: "Precise, consistent labeling and annotation of text, image, and video datasets for computer vision, NLP, and machine learning pipelines.",
    deliverables: [
      "Image & video annotation (bounding boxes, segmentation)",
      "Text classification & NLP labeling",
      "Named entity recognition (NER) annotation",
      "Quality-controlled annotation workflows"
    ],
    icon: Tag
  },
  {
    title: "Shopify & E-Commerce",
    description: "Custom Shopify app development, storefront builds, and e-commerce integrations that help your store perform and convert.",
    deliverables: [
      "Custom Shopify app development",
      "Theme customization & storefront builds",
      "Shopify Plus integrations",
      "Payment, inventory & order management"
    ],
    icon: ShoppingBag
  },
  {
    title: "Cloud & Backend Infrastructure",
    description: "Robust cloud architecture on AWS & GCP, scalable APIs, backend systems, and database optimization built for long-term growth.",
    deliverables: [
      "Cloud architecture design (AWS / GCP)",
      "REST & GraphQL API development",
      "Database design, migration & optimization",
      "Serverless & microservices architecture"
    ],
    icon: Cloud
  },
  {
    title: "Windows Software Development",
    description: "Native Windows desktop applications built for performance, security, and seamless enterprise-grade integration.",
    deliverables: [
      "C# / .NET Windows applications",
      "Enterprise internal tools & utilities",
      "System integrations & automation software",
      "Legacy Windows software modernization"
    ],
    icon: Monitor
  },
  {
    title: "Business Systems & Internal Tools",
    description: "Custom CRMs, operational dashboards, process automation, and internal tools that power your team and reduce operational overhead.",
    deliverables: [
      "Custom CRM & ERP development",
      "Admin dashboards & client portals",
      "Inventory & resource management systems",
      "Process automation & reporting tools"
    ],
    icon: LayoutDashboard
  },
  {
    title: "Product Development & Scaling",
    description: "MVP builds for startups, architecture design, performance tuning, and scaling infrastructure that grows with your business.",
    deliverables: [
      "Rapid MVP development",
      "Product strategy & roadmapping",
      "Performance auditing & optimization",
      "Scaling architecture for growth"
    ],
    icon: Rocket
  },
  {
    title: "Technology Consulting",
    description: "Software strategy, architecture consulting, and technology-driven process optimization for teams that want to move faster.",
    deliverables: [
      "Technical due diligence",
      "Architecture reviews & design",
      "Digital transformation strategy",
      "Team augmentation & technical training"
    ],
    icon: Lightbulb
  },
  {
    title: "Specialized Solutions",
    description: "Custom automation systems and advanced data platforms built for unique, complex business requirements.",
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
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Page Hero */}
        <section className="py-20 bg-muted/30 border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              End-to-end software solutions designed for modern businesses — from custom apps to AI training data.
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
                      <CardHeader className="flex flex-row items-start gap-5 pb-2">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {service.description}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4 pl-24">
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
        <section className="py-20 bg-primary/5 border-y border-primary/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to build something great?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether it's an app, a dataset, or a full product — let's make it happen.
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
