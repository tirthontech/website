import { motion } from "framer-motion";

const countries = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇳🇱", name: "Netherlands" },
];

export function ClientsFrom() {
  return (
    <section className="py-10 md:py-14 bg-background border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-7"
        >
          Trusted by businesses across
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.055 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/60 hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200 cursor-default"
            >
              <span className="text-xl leading-none">{c.flag}</span>
              <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">{c.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground/50 mt-6"
        >
          Clients in 10+ countries · Remote-first · Timezone-flexible
        </motion.p>

      </div>
    </section>
  );
}
