import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const columns = [
  {
    label: "Juggling Multiple Vendors",
    rate: "3+ Vendors",
    rateUnit: "A strategy consultant, a marketing agency, and a dev shop, none of whom talk to each other.",
    highlight: false,
    dimmed: true,
    items: [
      { text: "Some expertise in each area", ok: true },
      { text: "Coordination between vendors", ok: false },
      { text: "One consistent strategy", ok: false },
      { text: "Single point of accountability", ok: false },
      { text: "Built around your actual needs", ok: false },
    ],
  },
  {
    label: "Tirthon Tech",
    rate: "One Partner",
    rateUnit: "Strategy, marketing, content, and technology, under one roof.",
    highlight: true,
    dimmed: false,
    badge: "Built around you",
    items: [
      { text: "Strategy, marketing, content, and technology", ok: true },
      { text: "One point of contact", ok: true },
      { text: "Consistent strategy across every pillar", ok: true },
      { text: "Built around what you need, not a fixed package", ok: true },
      { text: "IIT alumni keep the technology honest", ok: true },
    ],
  },
  {
    label: "DIY or Cheap Freelancers",
    rate: "Patchwork",
    rateUnit: "Low cost upfront. No strategy. No one owns the outcome.",
    highlight: false,
    dimmed: true,
    items: [
      { text: "Low upfront cost", ok: true },
      { text: "Coordinated strategy", ok: false },
      { text: "Production grade execution", ok: false },
      { text: "Ongoing partnership", ok: false },
      { text: "Accountability for results", ok: false },
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
            Growth needs more than one specialist
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Most businesses patch together<br />
            <span className="text-primary">a strategist, a marketer, and a dev shop.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            None of them talk to each other, and no one owns the outcome.
            We built Tirthon Tech to be the one partner that does.
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
                    Book a Strategy Session
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
          Strategy, marketing, content, and technology, working as one team instead of three separate invoices.
        </motion.p>

      </div>
    </section>
  );
}
