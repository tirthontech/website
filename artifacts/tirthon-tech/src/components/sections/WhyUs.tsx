import { motion, useReducedMotion } from "framer-motion";
import { Scaling, Target, Layers, MapPin } from "lucide-react";

const points = [
  {
    title: "Built around your business, not a package",
    description: "No menu of fixed packages to pick from. We look at what your business actually needs across strategy, marketing, content, and technology, then build the plan around that.",
    icon: Target
  },
  {
    title: "One partner, not four vendors",
    description: "Strategy, marketing, content, and technology working as one team, instead of scattered across separate agencies and freelancers who never talk to each other.",
    icon: Layers
  },
  {
    title: "IIT alumni keep the technology honest",
    description: "When the technology pillar kicks in, our IIT alumni engineers make sure it holds up: real architecture, real quality control, not just fast output.",
    icon: Scaling
  },
  {
    title: "Clients from all over the world",
    description: "Different industries, different time zones, same approach: a plan built around your business, not a template.",
    icon: MapPin
  }
];

export function WhyUs() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="why-us" className="py-14 md:py-24 relative bg-background overflow-hidden section-lazy">

      {/* Background orb — static when reduced motion or mobile */}
      {reduceMotion ? (
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      ) : (
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-foreground">
              One Partner.<br /><span className="text-primary">Every Pillar You Need.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Most businesses need strategy, marketing, content, and technology working together, not four different vendors who never talk to each other. We built Tirthon Tech around that insight.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
            />
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex gap-4 group p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-lg transition-shadow duration-300 cursor-default"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1.5">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
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
