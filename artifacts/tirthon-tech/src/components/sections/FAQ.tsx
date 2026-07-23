import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const faqs = [
  {
    question: "What does Tirthon Tech actually do?",
    answer:
      "We help businesses grow through four pillars: brand and growth strategy, marketing execution, technology, and business operations automation. We also offer client partnership and consulting for specific business moments. Pick what your business needs. Skip what it does not.",
  },
  {
    question: "Is this a fixed package, or is it custom?",
    answer:
      "Everything is built around what your business actually needs. We do not sell a one size fits all package. Some clients only need strategy. Others need strategy, marketing, and technology together.",
  },
  {
    question: "How is this different from hiring separate agencies?",
    answer:
      "Most businesses patch together a strategy consultant, a marketing agency, and a dev shop who never talk to each other. We work as one partner across all four pillars, so the strategy, the marketing, and the technology stay consistent.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "For the technology pillar specifically, focused MVPs typically start from $3,000 to $8,000. Full scale SaaS platforms or complex systems can range from $15,000 to $60,000 or more. Pricing for strategy, marketing, and other engagements depends on scope. We share a detailed estimate after a short strategy session.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, a significant portion of our clients are early stage startups. We help founders validate ideas, launch quickly, and then scale over time. We understand the pace and constraints startups operate under.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across SaaS, ecommerce, fintech, healthtech, real estate, retail, and more. We are not tied to one industry. We adapt our approach to your business rather than asking you to adapt to us.",
  },
  {
    question: "Do you offer ongoing support after the engagement starts?",
    answer:
      "Yes. Strategy check ins, campaign optimization, feature development, and maintenance are all available on a retainer basis for clients who want to keep growing. We do not disappear after the first milestone.",
  },
  {
    question: "Where are you based, and do you work with international clients?",
    answer:
      "We are based in Indore, India, with clients across the US, UK, Europe, Australia, and the Middle East. We work fully remote and adapt to your timezone for meetings and check ins.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out our contact form or email us directly at business@tirthontech.com. We will get back to you within 24 hours to schedule a free strategy session and talk through what your business needs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before reaching out.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-foreground leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
