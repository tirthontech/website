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
    <section id="why-us" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Why <br/><span className="text-primary">Tirthon Tech</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Honestly, a lot of dev shops will take your money and disappear. We're not that. We ask the right questions, give you straight answers, and build things that last.
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
                  className="flex gap-4 group p-4 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                >
                  <div className="flex-shrink-0 mt-1 relative">
                    <div className="w-12 h-12 rounded-full border border-primary/20 bg-card shadow-sm flex items-center justify-center group-hover:border-primary/60 transition-colors">
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
