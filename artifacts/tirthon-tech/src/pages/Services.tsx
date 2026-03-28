import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, Globe, Cpu, Cloud, 
  LayoutDashboard, Rocket, Lightbulb, Settings, ArrowRight 
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description: "Scalable web and mobile apps, SaaS products, and enterprise-grade software tailored to your business.",
    deliverables: ["Full-stack web applications", "Native & cross-platform mobile apps", "SaaS product development", "Legacy system modernization"],
    icon: Code2
  },
  {
    title: "Web Development & Digital Experience",
    description: "High-performance websites, conversion-focused landing pages, and clean, fast UI/UX design.",
    deliverables: ["Responsive corporate websites", "E-commerce platforms", "High-conversion landing pages", "UI/UX design & prototyping"],
    icon: Globe
  },
  {
    title: "AI & Automation Solutions",
    description: "AI-powered tools, intelligent workflow automation, smart chatbots, and data-driven decision systems.",
    deliverables: ["Custom LLM integrations", "Workflow automation (Zapier/Make)", "Intelligent chatbots", "Data pipelines & processing"],
    icon: Cpu
  },
  {
    title: "Cloud & Backend Infrastructure",
    description: "Robust cloud architecture on AWS & GCP, scalable APIs, backend systems, and database optimization.",
    deliverables: ["Cloud architecture design (AWS/GCP)", "REST & GraphQL APIs", "Database design & migration", "Serverless & microservices"],
    icon: Cloud
  },
  {
    title: "Business Systems & Internal Tools",
    description: "Custom CRMs, operational dashboards, process automation, and internal tools that power your team.",
    deliverables: ["Custom CRM/ERP development", "Admin dashboards & portals", "Inventory & resource management", "Client portals"],
    icon: LayoutDashboard
  },
  {
    title: "Product Development & Scaling",
    description: "MVP builds for startups, architecture design, performance tuning, and scaling infrastructure that grows with you.",
    deliverables: ["Rapid MVP development", "Product strategy & roadmapping", "Performance auditing & tuning", "Scaling architecture"],
    icon: Rocket
  },
  {
    title: "Technology Consulting",
    description: "Software strategy, architecture consulting, and technology-driven process optimization.",
    deliverables: ["Technical due diligence", "Architecture reviews", "Digital transformation strategy", "Team augmentation & training"],
    icon: Lightbulb
  },
  {
    title: "Specialized Solutions",
    description: "Custom automation systems and advanced data platforms built for unique business requirements.",
    deliverables: ["Web scraping & data extraction", "Third-party API integrations", "IoT backend systems", "Real-time analytics platforms"],
    icon: Settings
  }
];

export default function Services() {
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
              End-to-end software solutions designed for modern businesses.
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
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 group">
                      <CardHeader className="flex flex-row items-start gap-5 pb-2">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4 pl-24">
                        <ul className="space-y-2">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center text-sm font-medium text-foreground/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Ready to build something great? Let's talk.</h2>
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
