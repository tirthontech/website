import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const columns = [
  {
    label: "Typical US / UK Agency",
    rate: "$150 – 250",
    rateUnit: "per hour",
    highlight: false,
    dimmed: true,
    items: [
      { text: "Senior engineers", ok: true },
      { text: "Structured process", ok: true },
      { text: "Strong communication", ok: true },
      { text: "Budget-friendly rates", ok: false },
      { text: "Startup-compatible scope", ok: false },
    ],
  },
  {
    label: "Tirthon Tech",
    rate: "IIT-quality",
    rateUnit: "at a fraction of the cost",
    highlight: true,
    dimmed: false,
    badge: "Best value",
    items: [
      { text: "IIT alumni engineers", ok: true },
      { text: "Clear milestone process", ok: true },
      { text: "Same-day responses", ok: true },
      { text: "Globally competitive rates", ok: true },
      { text: "Startup & enterprise ready", ok: true },
    ],
  },
  {
    label: "Random Offshore Freelancer",
    rate: "$10 – 30",
    rateUnit: "per hour",
    highlight: false,
    dimmed: true,
    items: [
      { text: "Low cost", ok: true },
      { text: "Reliable delivery", ok: false },
      { text: "Clear communication", ok: false },
      { text: "Structured process", ok: false },
      { text: "Post-launch support", ok: false },
    ],
  },
];

export function CostAdvantage() {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why companies choose us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            The best of both worlds
          </h2>
          <p className="text-muted-foreground text-lg">
            IIT-standard engineering quality. Globally competitive rates.
            The combination that makes companies keep coming back.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 items-start">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 md:p-7 flex flex-col gap-5 ${
                col.highlight
                  ? "border-primary bg-foreground text-background shadow-2xl scale-[1.03] md:scale-105 z-10"
                  : "border-border bg-card opacity-70"
              }`}
            >
              {col.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                    {col.badge}
                  </span>
                </div>
              )}

              <div>
                <p
                  className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                    col.highlight ? "text-background/50" : "text-muted-foreground/60"
                  }`}
                >
                  {col.label}
                </p>
                <p
                  className={`text-2xl md:text-3xl font-extrabold leading-none ${
                    col.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {col.rate}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    col.highlight ? "text-background/50" : "text-muted-foreground"
                  }`}
                >
                  {col.rateUnit}
                </p>
              </div>

              <ul className="space-y-2.5">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    {item.ok ? (
                      <Check
                        className={`w-4 h-4 shrink-0 ${
                          col.highlight ? "text-primary" : "text-green-500"
                        }`}
                      />
                    ) : (
                      <X className="w-4 h-4 shrink-0 text-red-400/70" />
                    )}
                    <span
                      className={`text-sm ${
                        col.highlight
                          ? item.ok
                            ? "text-background/90 font-medium"
                            : "text-background/40 line-through"
                          : item.ok
                          ? "text-foreground/80"
                          : "text-muted-foreground/40 line-through"
                      }`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {col.highlight && (
                <Link href="/contact" className="mt-2">
                  <Button
                    className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
                    size="lg"
                  >
                    Start a Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground/50 mt-8"
        >
          Rate ranges are typical industry estimates. We provide exact project quotes after a free discovery call.
        </motion.p>

      </div>
    </section>
  );
}
