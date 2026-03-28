import { motion } from "framer-motion";
import { Scaling, Target, Layers, MapPin } from "lucide-react";

const points = [
  {
    title: "We think about growth upfront",
    description: "We don't build things that fall apart the moment you get more users. Scale is something we plan for from the start, not bolt on later.",
    icon: Scaling
  },
  {
    title: "We care about your results",
    description: "Shipping code is easy. Shipping code that actually moves the needle for your business is what we're focused on.",
    icon: Target
  },
  {
    title: "You always know what's happening",
    description: "No radio silence, no surprise delays. We keep you in the loop throughout and flag problems early.",
    icon: Layers
  },
  {
    title: "Clients from all over the world",
    description: "We've worked with businesses from different industries and countries. Different time zones, no problem.",
    icon: MapPin
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative bg-background overflow-hidden">

      {/* Background orb */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Why <br /><span className="text-primary">Tirthon Tech</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Honestly, a lot of dev shops will take your money and disappear. We're not that. We ask the right questions, give you straight answers, and build things that last.
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
