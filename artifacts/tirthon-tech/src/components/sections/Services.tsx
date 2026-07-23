import { motion } from "framer-motion";
import { Target, Megaphone, Cpu, Handshake, Workflow, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";

const serviceCategories = [
  {
    category: "Brand & Growth Strategy",
    tagline: "Understand where you stand before you spend on growth.",
    icon: Target,
    items: [
      {
        title: "Competitive clarity",
        description: "Understand your market, competitors, and customers before starting any campaign.",
      },
      {
        title: "Growth diagnostics",
        description: "Identify where your business is losing customers, conversions, or revenue.",
      },
      {
        title: "Distinctive positioning",
        description: "Build a clear market position that is difficult to copy and easy to remember.",
      },
      {
        title: "Scaling and franchise strategy",
        description: "Build the systems, processes, and strategy needed to grow across multiple locations.",
      },
    ],
  },
  {
    category: "Marketing Execution",
    tagline: "Build visibility. Create demand. Drive growth.",
    icon: Megaphone,
    items: [
      {
        title: "SEO",
        description: "Build long term organic visibility to your customers.",
      },
      {
        title: "Digital content",
        description: "Blogs, newsletters, reels, and social media content, planned and produced from start to finish.",
      },
      {
        title: "Paid advertising",
        description: "Smart spending on Meta Ads, Google Ads, and influencer marketing.",
      },
      {
        title: "Founder personal branding",
        description: "A strong personal presence as a founder. Make your voice count in the market.",
      },
    ],
  },
  {
    category: "Technology",
    tagline: "The part of the business that runs everything else.",
    icon: Cpu,
    items: [
      {
        title: "Custom software",
        description: "Simplify operations with software built specifically for your business.",
      },
      {
        title: "Business dashboards",
        description: "Get complete visibility into your operations and make faster decisions.",
      },
      {
        title: "Mobile apps",
        description: "Android and iOS applications built around your business.",
      },
      {
        title: "AI automation",
        description: "Automate repetitive tasks, save time, and improve productivity.",
      },
      {
        title: "Web applications",
        description: "Designed according to your business model.",
      },
    ],
  },
  {
    category: "Client Partnership",
    tagline: "One point of contact. No vendor hand offs.",
    icon: Handshake,
    items: [
      {
        title: "Dedicated point of contact",
        description: "One person who actually knows your business, not a rotating support queue.",
      },
      {
        title: "Regular strategy check ins",
        description: "Scheduled reviews to track progress and adjust direction as your business changes.",
      },
      {
        title: "Ongoing partnership, not one off projects",
        description: "We stay involved after launch, not just until the invoice is paid.",
      },
    ],
  },
  {
    category: "Business Operations & Automation",
    tagline: "Less manual work. More time on what matters.",
    icon: Workflow,
    items: [
      {
        title: "Workflow automation",
        description: "Cut out manual, repetitive steps so your team spends time on work that actually matters.",
      },
      {
        title: "Operations software",
        description: "Custom tools that run the day to day of your business, from inventory to scheduling to approvals.",
      },
      {
        title: "Process digitization",
        description: "Move paper registers, spreadsheets, and WhatsApp coordination into one connected system.",
      },
      {
        title: "Systems integration",
        description: "Connect the tools you already use so data moves automatically instead of manual double entry.",
      },
    ],
  },
  {
    category: "Consulting for Specific Moments",
    tagline: "For when you know something needs to change, but not what.",
    icon: Compass,
    items: [
      {
        title: "Direction setting",
        description: "When you are unsure where to focus next, we look at your business and tell you honestly what matters most right now.",
      },
      {
        title: "Priority mapping",
        description: "Not everything can be first. We help you sequence what to fix, build, or launch, and in what order.",
      },
      {
        title: "Moment specific guidance",
        description: "Launching a product, entering a new market, hitting a plateau. We advise on the specific moment you are in, not a generic playbook.",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.0, 0.0, 0.58, 1.0] } },
};

export function Services() {
  return (
    <section id="services" className="py-14 md:py-24 relative bg-muted/30 border-y border-border/40 section-lazy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything below rolls up into four pillars: strategy, marketing, content, and technology.
            Pick what your business needs. Skip what it does not.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {serviceCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-card border-border shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-7">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                        {cat.category}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{cat.tagline}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="text-primary mt-1.5 shrink-0 text-xs">●</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">{item.title}.</span>{" "}
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
