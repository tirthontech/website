import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Carter",
    role: "Founder, NexaRetail",
    country: "🇺🇸 United States",
    text: "We needed a Shopify app built fast and built right. Tirthon Tech delivered both. The team asked the right questions upfront, which saved us a lot of back-and-forth. We've since hired them for two more projects.",
    stars: 5
  },
  {
    name: "Priya Nair",
    role: "CTO, FinEdge Solutions",
    country: "🇮🇳 India",
    text: "I was skeptical at first — we'd been burned by developers before. But these guys are different. They flagged problems before they became expensive, kept us in the loop, and shipped on time. Solid team.",
    stars: 5
  },
  {
    name: "Lucas Müller",
    role: "Operations Lead, LogiTrack GmbH",
    country: "🇩🇪 Germany",
    text: "We had a messy internal process that relied entirely on spreadsheets. Tirthon Tech built us a proper dashboard and automation system. Our team saves hours every week now. Worth every penny.",
    stars: 5
  },
  {
    name: "Aisha Okafor",
    role: "Head of AI, DataBridge Africa",
    country: "🇳🇬 Nigeria",
    text: "We needed large-scale annotated datasets for our computer vision model. The quality was excellent and they were flexible with the format requirements. Will definitely work with them again.",
    stars: 5
  },
  {
    name: "Ryan Thompson",
    role: "Product Manager, BuildStack",
    country: "🇨🇦 Canada",
    text: "Our MVP had to go from idea to live product in 6 weeks. Most agencies laughed at that timeline. Tirthon Tech took it seriously, planned it properly, and we launched on day 41. Genuinely impressive.",
    stars: 5
  },
  {
    name: "Sofia Andersen",
    role: "CEO, Nordicware Digital",
    country: "🇩🇰 Denmark",
    text: "The IIT background shows in how they approach problems. There's real engineering thinking behind what they build — not just copy-paste solutions. Our platform has been running without issues for over a year.",
    stars: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            What clients <span className="text-primary">say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We've worked with businesses from different industries and countries. Here's what some of them had to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card border border-border/60 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 hover:shadow-xl transition-shadow duration-300 cursor-default"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">{t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
