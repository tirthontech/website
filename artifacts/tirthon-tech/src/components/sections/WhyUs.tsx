import { motion } from "framer-motion";
import { Scaling, Target, Layers, MapPin } from "lucide-react";

const points = [
  {
    title: "Built for Scale",
    description: "Every system we build is meticulously designed to handle exponential growth from day one.",
    icon: Scaling
  },
  {
    title: "Outcome-Focused",
    description: "We prioritize tangible business results and ROI, not just shipping lines of code.",
    icon: Target
  },
  {
    title: "Clarity & Structure",
    description: "Clean architecture, transparent communication, and highly structured delivery sprints.",
    icon: Layers
  },
  {
    title: "US-Based, Global Reach",
    description: "Trusted by visionary clients across North America and around the globe.",
    icon: MapPin
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative border-y border-border/30 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Why <br/><span className="text-primary">Tirthon Tech</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just build apps; we engineer foundations for market leaders. Our approach combines elite technical precision with deep business acumen.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1 relative">
                    <div className="w-12 h-12 rounded-full border border-primary/20 bg-background flex items-center justify-center group-hover:border-primary/60 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
