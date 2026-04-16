import { motion } from "framer-motion";
import { 
  Code2, Globe, Cpu, Cloud, 
  LayoutDashboard, Rocket, Lightbulb, Settings,
  Database, Tag, ShoppingBag, Monitor
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Web, Mobile & Desktop Apps",
    description: "Got an idea for an app? We build it. Web, iOS, Android, or Windows. We handle the full thing from design to deployment.",
    icon: Code2
  },
  {
    title: "Websites & Landing Pages",
    description: "Fast, clean websites that look good and actually load. Whether you need a company site or a page that converts, we've got it.",
    icon: Globe
  },
  {
    title: "AI & Automation",
    description: "We hook up AI tools, automate the boring stuff, and build chatbots that don't make your customers want to close the tab.",
    icon: Cpu
  },
  {
    title: "Data for AI Training",
    description: "Need data to train your model? We scrape, structure, and package it exactly how you need it, ready to feed into your pipeline.",
    icon: Database
  },
  {
    title: "Data Annotation",
    description: "We label your images, text, and video datasets carefully. Clean annotations, consistent quality, no shortcuts.",
    icon: Tag
  },
  {
    title: "Cloud & Backend",
    description: "APIs, databases, cloud setup on AWS or GCP. We build backend systems that hold up when things get busy.",
    icon: Cloud
  },
  {
    title: "Internal Tools & Dashboards",
    description: "Tired of spreadsheets? We build the CRMs, dashboards, and admin panels your team actually needs to get work done.",
    icon: LayoutDashboard
  },
  {
    title: "Shopify & E-Commerce",
    description: "Custom Shopify apps, store builds, and integrations. We make your store work better and look the part.",
    icon: ShoppingBag
  },
  {
    title: "MVPs & Product Scaling",
    description: "Starting from scratch or growing fast? We help you ship quickly without cutting corners, and scale without breaking things.",
    icon: Rocket
  },
  {
    title: "Tech Consulting",
    description: "Not sure which direction to go? We sit down with you, look at what you have, and tell you honestly what makes sense.",
    icon: Lightbulb
  },
  {
    title: "Windows Software",
    description: "Need a desktop app for Windows? We build native apps that run reliably, integrate with your systems, and don't crash.",
    icon: Monitor
  },
  {
    title: "Custom Solutions",
    description: "If it doesn't fit a neat category, that's fine. We figure it out. Weird requirements are usually the most interesting ones.",
    icon: Settings
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.0, 0.0, 0.58, 1.0] } }
};

export function Services() {
  return (
    <section id="services" className="py-14 md:py-24 relative bg-muted/30 border-y border-border/40 section-lazy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From apps to AI, here's what we actually do, and what you can expect when you work with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-card border-border shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
