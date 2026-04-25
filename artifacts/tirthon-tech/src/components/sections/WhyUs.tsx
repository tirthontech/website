import { motion, useReducedMotion } from "framer-motion";
import { Scaling, Target, Layers, MapPin } from "lucide-react";

const points = [
  {
    title: "AI does the heavy lifting",
    description: "We use Claude Code, Lovable, Codex, Cursor, and Replit. AI handles the boilerplate, the repetitive patterns, the scaffolding. Our engineers handle what AI cannot — architecture decisions, edge cases, and product judgment.",
    icon: Scaling
  },
  {
    title: "IIT engineers keep it honest",
    description: "AI output without senior engineering oversight produces fast, broken software. Our IIT alumni engineers review every decision — so you get AI speed with human quality control baked in.",
    icon: Target
  },
  {
    title: "You pay for the outcome, not the hours",
    description: "When AI compresses a 3-month project into 3 weeks, you should not be billed for 3 months. We price on scope and value, and pass the efficiency directly to you.",
    icon: Layers
  },
  {
    title: "Clients from all over the world",
    description: "US, UK, Australia, Canada, UAE. Different industries, different time zones, same outcome — software that ships fast and works correctly.",
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
              IIT Engineers.<br /><span className="text-primary">AI Tools.</span><br />Unfair Advantage.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We saw the gap early: AI tools can do most of the work now — but most companies haven't changed how they price or deliver. We built Tirthon Tech around that insight.
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
