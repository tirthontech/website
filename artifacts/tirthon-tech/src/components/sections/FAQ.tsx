import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const faqs = [
  {
    question: "What services does Tirthon Tech offer?",
    answer:
      "We build custom web apps, mobile apps (iOS & Android), AI & automation tools, data annotation pipelines, AI training datasets, Shopify apps, Windows desktop software, cloud infrastructure, and internal tools & dashboards. If it's a software problem, we can likely help.",
  },
  {
    question: "How much does a custom web app cost?",
    answer:
      "It depends on scope and complexity. Focused MVPs typically start from $3,000–$8,000. Full-scale SaaS platforms or complex systems can range from $15,000–$60,000+. We share a detailed estimate after a short discovery call once we understand your requirements.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes — a significant portion of our clients are early-stage startups. We help founders ship MVPs quickly, validate ideas with real users, and then scale the product over time. We understand the pace and constraints startups operate under.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across SaaS, e-commerce, fintech, healthtech, logistics, AI/ML, education, and more. Our work is industry-agnostic — we adapt to your domain rather than requiring you to adapt to us.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused MVP typically takes 6–12 weeks. Full-scale web or mobile apps take 3–6 months depending on scope. Data annotation and AI training data projects are scoped per engagement. We'll give you a clear timeline before we start.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes. We offer ongoing bug fixes, feature development, and maintenance after launch. Many clients work with us on a retainer basis for continuous product development. We don't hand off code and disappear.",
  },
  {
    question: "Where are you based, and do you work with international clients?",
    answer:
      "We're based in Indore, India, with clients across the US, UK, Europe, Australia, and the Middle East. We work fully remote and adapt to your timezone for meetings and standups.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out our contact form or email us directly at business@tirthontech.com. We'll get back to you within 24 hours to schedule a free discovery call and talk through your project.",
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
