import { motion } from "framer-motion";
import { 
  Code2, Globe, Cpu, Cloud, 
  LayoutDashboard, Rocket, Lightbulb, Settings 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Custom Software Development",
    description: "Scalable web and mobile apps, SaaS products, and enterprise-grade software tailored to your business.",
    icon: Code2
  },
  {
    title: "Web Development & Digital Experience",
    description: "High-performance websites, conversion-focused landing pages, and clean, fast UI/UX design.",
    icon: Globe
  },
  {
    title: "AI & Automation Solutions",
    description: "AI-powered tools, intelligent workflow automation, smart chatbots, and data-driven decision systems.",
    icon: Cpu
  },
  {
    title: "Cloud & Backend Infrastructure",
    description: "Robust cloud architecture on AWS & GCP, scalable APIs, backend systems, and database optimization.",
    icon: Cloud
  },
  {
    title: "Business Systems & Internal Tools",
    description: "Custom CRMs, operational dashboards, process automation, and internal tools that power your team.",
    icon: LayoutDashboard
  },
  {
    title: "Product Development & Scaling",
    description: "MVP builds for startups, architecture design, performance tuning, and scaling infrastructure that grows with you.",
    icon: Rocket
  },
  {
    title: "Technology Consulting",
    description: "Software strategy, architecture consulting, and technology-driven process optimization.",
    icon: Lightbulb
  },
  {
    title: "Specialized Solutions",
    description: "Custom automation systems and advanced data platforms built for unique business requirements.",
    icon: Settings
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-muted/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end engineering excellence. We transform complex problems into elegant, scalable software solutions.
          </p>
        </div>

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
                    <CardTitle className="text-xl group-hover:text-primary transition-colors text-foreground">
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
