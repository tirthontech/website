import { motion } from "framer-motion";
import { Building2, TrendingUp, Monitor, Zap, Star, Bot, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const products = [
  {
    name: "RealtySell",
    href: "/products/realtysell",
    icon: Building2,
    tag: "PropTech",
    tagline: "Real Estate CRM Built for India",
    description:
      "Manage leads, site visits, unit inventory, and broker commissions in one place. Purpose-built for real estate developers, brokers, and channel partners who are tired of juggling spreadsheets.",
    keywords: ["real estate CRM", "lead management", "unit inventory", "site visit tracking"],
  },
  {
    name: "TradeSathi",
    href: "/products/tradesathi",
    icon: TrendingUp,
    tag: "FinTech",
    tagline: "White-Label App for Research Analysts",
    description:
      "SEBI-registered Research Analysts can launch their own branded subscriber app in days — no dev team needed. Push calls, manage subscribers, and grow your advisory business.",
    keywords: ["SEBI RA app", "research analyst subscriber app", "white-label trading app"],
  },
  {
    name: "BariQ",
    href: "/products/bariq",
    icon: Monitor,
    tag: "HealthTech",
    tagline: "Digital Queue for Clinics & Hospitals",
    description:
      "Replace chaotic waiting rooms with a smart digital queue system. Patients get real-time updates, staff see live dashboards, and clinics run smoother — from OPDs to diagnostic labs.",
    keywords: ["queue management system", "clinic queue", "hospital OPD management"],
  },
  {
    name: "AKNA Terminal",
    href: "/products/akna-terminal",
    icon: Zap,
    tag: "Trading",
    tagline: "Multi-Broker Trading Terminal for Windows",
    description:
      "Trade across multiple brokers and accounts from a single Windows terminal. Designed for active traders, proprietary desks, and family offices managing more than one trading account.",
    keywords: ["multi-broker trading terminal", "multi-account trading software", "Windows trading terminal"],
  },
  {
    name: "topreviewz",
    href: "/products/topreviewz",
    icon: Star,
    tag: "MarTech",
    tagline: "Google Review Management for Local Businesses",
    description:
      "Grow your Google reviews and protect your reputation without spamming customers. Smart review gating that routes happy customers to Google and routes negative feedback to your inbox first.",
    keywords: ["Google review management", "review gating software", "online reputation management"],
  },
  {
    name: "TirthonQuant",
    href: "/products/tirthonquant",
    icon: Bot,
    tag: "AlgoTrading",
    tagline: "Algorithmic Trading Platform for Indian Markets",
    description:
      "Automate your trading strategies on Zerodha, Upstox, Angel One and more — no Python required. Backtest, deploy, and monitor strategies across NSE, BSE, and MCX from one platform.",
    keywords: ["algorithmic trading India", "algo trading platform", "automated trading software India"],
  },
];

export function Products() {
  return (
    <section
      className="py-20 bg-muted/30"
      aria-label="Our Software Products"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Tirthon Tech Software Products" />
      <meta
        itemProp="description"
        content="Industry-specific software products by Tirthon Tech: RealtySell (Real Estate CRM), TradeSathi (RA subscriber app), BariQ (clinic queue management), AKNA Terminal (multi-broker trading), topreviewz (Google review management), TirthonQuant (algo trading platform)."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Software We Built — and Use in the Real World
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Every product here started as a problem we kept seeing in a specific industry. We built
            the solution, put it in front of real users, and kept improving it. These are live
            products — not demos.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              itemScope
              itemType="https://schema.org/SoftwareApplication"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(i + 1)} />
              <meta itemProp="name" content={product.name} />
              <meta itemProp="description" content={product.description} />
              <meta itemProp="applicationCategory" content={product.tag} />
              <Link
                href={product.href}
                className="group flex flex-col h-full bg-card border border-border/60 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 no-underline"
              >
                {/* Icon + tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[11px] font-semibold text-primary/80 bg-primary/8 border border-primary/15 px-2.5 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>

                {/* Name + tagline */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold text-primary/70 mb-3">{product.tagline}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-3">
            Need something built specifically for your business?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline no-underline"
          >
            Talk to us about custom software <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
