import { motion } from "framer-motion";
import { PhoneCall, FileText, Hammer, Rocket, HeartHandshake, Clock, ArrowRight, Calendar } from "lucide-react";
import { openCalendly } from "@/lib/calendly";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Free Discovery Call",
    description:
      "20 minutes. Tell us what you're building. We ask the right questions, give you an honest read, and tell you upfront whether we're the right fit.",
    tag: "No commitment",
  },
  {
    icon: FileText,
    step: "02",
    title: "Proposal in 24 Hours",
    description:
      "You get a detailed written proposal — scope, timeline, and price broken into milestones. No vague estimates, no hidden costs.",
    tag: "Clear pricing",
  },
  {
    icon: Hammer,
    step: "03",
    title: "We Build in Phases",
    description:
      "Work is delivered in milestones with demos after each one. You see real progress regularly, not just a finished product months later.",
    tag: "Milestone-based",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Handoff",
    description:
      "We handle deployment, do thorough testing, and make sure your team can confidently take over. Documentation included.",
    tag: "Full handoff",
  },
  {
    icon: HeartHandshake,
    step: "05",
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Bug fixes, feature additions, and retainer arrangements are available for clients who want to keep building.",
    tag: "Long-term partner",
  },
];

const timezones = [
  { label: "US East Coast", time: "EST / EDT", overlap: "Morning overlap" },
  { label: "US West Coast", time: "PST / PDT", overlap: "Afternoon overlap" },
  { label: "United Kingdom", time: "GMT / BST", overlap: "Full overlap" },
  { label: "Australia (AEST)", time: "AEST", overlap: "Early morning overlap" },
];

export function HowWeWork() {
  return (
    <section className="py-20 md:py-28 bg-muted/30 border-y border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            From first message to <span className="text-primary">live product</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A predictable, transparent process so you always know where things stand.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[calc(10%+28px)] right-[calc(10%+28px)] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isFirst = i === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={isFirst ? openCalendly : undefined}
                  className={`relative flex flex-col items-center text-center group ${isFirst ? "cursor-pointer" : ""}`}
                >
                  {/* Icon circle */}
                  <div className={`relative z-10 w-20 h-20 rounded-2xl bg-card border-2 transition-colors duration-300 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md ${isFirst ? "border-primary/40 bg-primary/5 group-hover:border-primary group-hover:bg-primary/10" : "border-border group-hover:border-primary/50"}`}>
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center leading-none">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-1.5">
                    {step.tag}
                  </span>
                  <h3 className={`text-base font-bold mb-2 leading-snug transition-colors ${isFirst ? "text-primary" : "text-foreground"}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {isFirst && (
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                      Pick a time <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Book a Call CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={openCalendly}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Book a Free Discovery Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Timezone Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 rounded-2xl bg-foreground text-background p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-background">Timezone coverage</p>
                <p className="text-xs text-background/60">We work across your hours</p>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
              {timezones.map((tz, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold text-background leading-tight">{tz.label}</p>
                  <p className="text-xs text-background/50">{tz.time}</p>
                  <span className="mt-1 inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary w-fit">
                    {tz.overlap}
                  </span>
                </div>
              ))}
            </div>

            <div className="shrink-0 text-right hidden md:block">
              <p className="text-xs text-background/40 max-w-[160px] leading-relaxed">
                Same-day responses guaranteed during your business hours.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
