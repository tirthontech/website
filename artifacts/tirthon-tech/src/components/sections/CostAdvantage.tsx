import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const columns = [
  {
    label: "Traditional IT Agency",
    rate: "$150 – 250/hr",
    rateUnit: "Using AI internally. Charging you pre-AI prices.",
    highlight: false,
    dimmed: true,
    items: [
      { text: "Senior engineers", ok: true },
      { text: "Uses AI tools internally", ok: true },
      { text: "Passes AI savings to you", ok: false },
      { text: "Delivers in weeks, not months", ok: false },
      { text: "Startup-compatible pricing", ok: false },
    ],
  },
  {
    label: "Tirthon Tech",
    rate: "AI-Speed Delivery",
    rateUnit: "IIT engineers + AI tools. You get both.",
    highlight: true,
    dimmed: false,
    badge: "The AI-era choice",
    items: [
      { text: "IIT alumni engineers", ok: true },
      { text: "Claude Code, Lovable, Codex, Replit", ok: true },
      { text: "10x faster than traditional delivery", ok: true },
      { text: "Fraction of traditional agency cost", ok: true },
      { text: "Startup & enterprise ready", ok: true },
    ],
  },
  {
    label: "Cheap Freelancer",
    rate: "$10 – 30/hr",
    rateUnit: "Low cost. No architecture. No process.",
    highlight: false,
    dimmed: true,
    items: [
      { text: "Low upfront cost", ok: true },
      { text: "Production-grade quality", ok: false },
      { text: "Structured delivery process", ok: false },
      { text: "Post-launch support", ok: false },
      { text: "Scalable architecture", ok: false },
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
            The AI era changed everything
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Traditional agencies use AI too.<br />
            <span className="text-primary">They just don't tell you.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every agency is using Claude, Copilot, and Cursor behind the scenes — and still billing you $150–$250/hr.
            We built Tirthon Tech to pass that advantage directly to you.
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
          AI tools compress delivery time. IIT engineers ensure the architecture is right. You get both — without the traditional agency markup.
        </motion.p>

      </div>
    </section>
  );
}
