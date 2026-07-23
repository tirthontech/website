import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Monitor,
  Layers,
  Zap,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  RefreshCw,
  Users,
  AlertTriangle,
  Eye,
  Clock,
  Lock,
  Database,
  Globe,
  TrendingUp,
  Activity,
  Search,
  Settings,
  FileText,
  CreditCard,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const painPoints = [
  {
    icon: AlertTriangle,
    heading: "Logging into 4-5 broker apps every morning",
    body: "It's 8:55 AM. Zerodha is open in one tab, Upstox in another, you're mid-TOTP on Angel One, and Fyers is still loading. The market opens in five minutes and you haven't checked a single position. Every morning is the same race, and you lose two or three minutes of prime market time just authenticating. AKNA auto-refreshes all tokens overnight so you open one app at 9:00 AM and every account is already live.",
  },
  {
    icon: Layers,
    heading: "Placing the same order five times manually",
    body: "You want to buy 50 shares of Reliance across four accounts. So you do it four times. On the third account you type 500 instead of 50. You don't catch it until the order confirms. One account is now wildly out of sync, your risk is blown, and you're scrambling to square it off before the position moves against you. AKNA's bulk execution fires the same order across all selected accounts simultaneously: one configuration, zero repeated entry, zero fat-finger risk.",
  },
  {
    icon: BarChart3,
    heading: "No real picture of your total portfolio",
    body: "It's 3:28 PM. You need to know if today was profitable. So you open Zerodha's P&L: down ₹4,200. Then Upstox: up ₹6,800. Then Fyers: down ₹1,100. Then Angel One. You're doing mental arithmetic with two minutes to close and no clean answer. AKNA consolidates every position, holding, and margin figure across all your broker accounts into one number, updated in real time. You know your P&L at a glance.",
  },
  {
    icon: FileText,
    heading: "No audit trail across accounts",
    body: "Something went wrong on a volatile day: an order that should have been placed wasn't, or one that should have been cancelled wasn't. Now you're trying to reconstruct the timeline: which order went through which account, which one failed, which one got partially filled, which broker's API timed out. You're digging through five separate order books and three inboxes. AKNA keeps a unified, timestamped activity log for every placement, cancellation, token refresh, and error: filterable and searchable in one place.",
  },
];

const brokers = [
  { name: "Zerodha", note: "Kite API + TOTP auto-login" },
  { name: "Upstox", note: "OAuth auto-login" },
  { name: "Fyers", note: "OAuth auto-login" },
  { name: "Angel One", note: "Auto-login supported" },
  { name: "Dhan", note: "Full API integration" },
  { name: "Alice Blue", note: "Auto-login supported" },
  { name: "Finvasia", note: "Shoonya API" },
  { name: "Kotak Neo", note: "Full API integration" },
  { name: "Groww", note: "Full API integration" },
];

const orderFeatures = [
  "Market, Limit, Stop Loss (SL), and Stop Loss Market (SL-M) order types",
  "CNC (Delivery), MIS (Intraday), and NRML (F&O) product types",
  "All segments (NSE, BSE, NFO, MCX, CDS) in one interface",
  "AMO (After Market Orders) for overnight order placement",
  "GTT (Good-Till-Triggered) order creation and management",
  "One-click cancel all open orders across selected accounts",
  "One-click exit all open positions across selected accounts",
  "Bulk square-off across all accounts simultaneously",
];

const portfolioFeatures = [
  {
    icon: BarChart3,
    title: "Consolidated Holdings",
    description: "See all your equity holdings across every broker on one screen: quantity, average price, current value, and P&L. No mental arithmetic.",
  },
  {
    icon: Activity,
    title: "Live Intraday Positions",
    description: "Real-time MTM updates across all intraday positions. Day P&L, Holding P&L, and MTM tracked per account and in aggregate.",
  },
  {
    icon: CreditCard,
    title: "Margin Dashboard",
    description: "Available margin and used margin per account, updated live. Know exactly how much buying power you have across each broker before placing an order.",
  },
  {
    icon: Search,
    title: "500,000+ Instrument Database",
    description: "Search any stock, index, future, or option by name or ticker across NSE, BSE, NFO, MCX, and CDS. Real-time LTP and change % on your personal watchlist.",
  },
];

const securityFeatures = [
  "AES encryption for all broker credentials (API keys, secrets, passwords, and TOTP seeds) stored at rest",
  "JWT-based authentication with per-user data isolation",
  "Runs locally on your machine: no cloud dependency for trade execution",
  "Self-contained SQLite database: your data never leaves your desktop",
  "Optional proxy support per broker account",
  "Enable or disable individual accounts without deleting credentials",
  "Admin panel for operators and resellers: user management, credit/subscription controls, account limits",
];

const targetCustomers = [
  {
    icon: Users,
    title: "Retail Traders with 2+ Brokers",
    description: "You use Zerodha for equity, Upstox for its API features, and maybe a third broker for lower F&O brokerage. Smart strategy, but the fragmentation is a daily tax. AKNA gives you a single terminal for all of them, so you get the brokerage arbitrage without the tab-switching penalty.",
  },
  {
    icon: TrendingUp,
    title: "HNI & Family Office Managers",
    description: "Managing accounts for your spouse, parents, and children across multiple brokers while keeping each account separately tracked for compliance. AKNA centralises execution and reporting without merging accounts. Every family member's portfolio stays distinct, all visible in one place.",
  },
  {
    icon: Globe,
    title: "Sub-Brokers & Authorised Persons",
    description: "Executing across 20 client accounts manually is not just slow, one wrong entry is a liability. AKNA gives authorised persons a structured execution layer: bulk orders per client group, per-account audit logs, and an admin panel to manage users, so every action is traceable and defensible.",
  },
  {
    icon: Activity,
    title: "Options & F&O Traders",
    description: "Running multi-leg strategies across NFO and MCX, tracking greeks-adjacent data (premium, OI, IV) across multiple positions and accounts simultaneously. AKNA normalises F&O positions across all accounts into one dashboard: search by strike and expiry, track NRML and MIS positions, and execute across accounts without losing your place.",
  },
  {
    icon: Zap,
    title: "Semi-Algo / GTT Strategy Traders",
    description: "You're running prop desk or semi-algo strategies: systematic entry/exit logic but with manual oversight at execution. GTT orders, bulk triggers, and one-click square-off across accounts give you the automation layer you need without the cost and complexity of full algo infrastructure.",
  },
];

const faqs = [
  {
    q: "What is AKNA Trade Terminal?",
    a: "AKNA Trade Terminal is a native Windows desktop trading application built for Indian traders and operators who manage multiple broker accounts. It connects Zerodha, Upstox, Fyers, Angel One, Dhan, Alice Blue, Finvasia (Shoonya), Kotak Neo, and Groww in a single interface: letting you execute bulk orders across all accounts simultaneously, view consolidated P&L in real time, and auto-refresh broker tokens so every account is live at market open. It runs entirely on your local machine via Electron: no cloud server sits between you and your broker in the trade execution path.",
  },
  {
    q: "Which brokers does AKNA Trade Terminal support?",
    a: "AKNA currently integrates with 9 major Indian brokers: Zerodha (Kite API with TOTP auto-login), Upstox (OAuth auto-login), Fyers (OAuth auto-login), Angel One (auto-login supported), Dhan (full API integration), Alice Blue (auto-login supported), Finvasia via Shoonya API, Kotak Neo (full API integration), and Groww (full API integration). All integrations use each broker's official published API. Additional brokers can be added. Speak to us if yours isn't on the list.",
  },
  {
    q: "Can I place the same order across multiple broker accounts at once?",
    a: "Yes, this is AKNA's core bulk execution feature. You select which accounts to include, configure the order once (instrument, quantity, price, order type, product type), and AKNA fires it simultaneously across all selected accounts in a single click. This eliminates repeated manual entry and the fat-finger risk that comes with it. It's particularly valuable for family account managers placing identical orders across spouse/parent/child accounts, traders spreading risk across brokers, and sub-brokers executing for multiple client accounts at once.",
  },
  {
    q: "How does AKNA help trading desks and family offices?",
    a: "For trading desks (prop desks, semi-algo setups, GTT strategy operators), AKNA provides centralised order management with bulk execution, one-click square-off, and a unified audit log for every action across every account. For family offices, it means managing your spouse's, parents', and children's accounts from a single terminal with consolidated P&L and margin visibility per account, without accounts ever being merged or confused. Every family member's holdings stay distinct. No switching between platforms. No reconciliation at the end of the day.",
  },
  {
    q: "Is AKNA Trade Terminal safe? Where is my broker data stored?",
    a: "Your broker data (API keys, secrets, passwords, and TOTP seeds) is stored exclusively on your own machine, AES-encrypted at rest in a local SQLite database. There is no cloud intermediary in AKNA's architecture. Trade execution goes directly from your terminal to the broker's API servers. Your Zerodha API key stays on your machine, not on a cloud server you don't control, don't audit, and can't take offline if needed. JWT-based authentication provides per-user data isolation for multi-user setups. No credentials are ever transmitted to Tirthon Tech's servers or any external service.",
  },
  {
    q: "Does AKNA support F&O trading across multiple accounts?",
    a: "Yes. AKNA fully supports Futures and Options trading across NSE (NFO), MCX, and CDS segments. You can search options by strike and expiry across 500,000+ instruments, track F&O positions across all your accounts in one consolidated view, and execute NRML (positional) and MIS (intraday) F&O orders. GTT orders are also supported for structured entry and exit strategies. All F&O positions (futures, options, spreads) are tracked live with MTM and Day P&L per account and in aggregate.",
  },
  {
    q: "How does the auto token refresh work for Zerodha, Upstox, and Fyers?",
    a: "AKNA handles daily broker re-authentication automatically for all supported brokers. For Zerodha, it uses the Kite API with your stored TOTP seed to complete the TOTP-based login flow without manual input. For Upstox and Fyers, it uses each broker's OAuth flow. Angel One, Alice Blue, and Finvasia auto-login is also supported. When you open AKNA at market open, all accounts that support auto-login are already authenticated and live. You don't enter a single TOTP code manually.",
  },
  {
    q: "Can I see consolidated P&L across all my broker accounts?",
    a: "Yes. AKNA's portfolio dashboard consolidates holdings (quantity, average price, current value, unrealised P&L), live intraday positions (MTM, Day P&L, Holding P&L), and available margin per account, all updated in real time as the market moves. You see one total P&L number, with the ability to drill down per broker or per account. No more opening five separate dashboards and doing mental arithmetic at 3:28 PM to figure out if the day was profitable.",
  },
  {
    q: "Is AKNA suitable for sub-brokers and authorised persons?",
    a: "Yes. AKNA is built for exactly this use case. Sub-brokers and authorised persons (APs) executing across client accounts can use AKNA's bulk execution to place orders for client groups simultaneously, maintain a per-account audit log of every action for compliance and dispute resolution, and use the admin panel to manage multiple users and their account access. Every order placement, cancellation, and error is timestamped and logged per account, so every action is traceable.",
  },
  {
    q: "What does deployment look like? Do I need technical setup?",
    a: "Tirthon Tech delivers a fully configured Windows installer. We handle the build process, broker API configuration, branding (if required for resellers), and admin panel setup on our end. You install the application on your Windows machine and connect your broker accounts through the guided setup. No cloud infrastructure, no servers, no DevOps required on your end. The entire application runs locally. Most clients are live and trading within a day of receiving the installer.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index}
      className="border border-border/50 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-card hover:bg-muted/30 transition-colors"
      >
        <span className="font-semibold text-foreground text-sm leading-snug">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AKNA Trade Terminal",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Windows",
    description:
      "Multi-broker desktop trading terminal for Indian traders. Supports Zerodha, Upstox, Fyers, Angel One, Dhan, Alice Blue, Finvasia, Kotak Neo, and Groww. Features bulk order execution, consolidated portfolio, auto-login, and live market data.",
    featureList: "Bulk order execution across 9 Indian brokers simultaneously, Consolidated P&L and holdings dashboard across all broker accounts, Auto token refresh for Zerodha TOTP and OAuth-based brokers, F&O trading across NFO and MCX with strike and expiry search, Complete timestamped audit log per account and per user, AES-encrypted local credential storage with no cloud intermediary",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    author: { "@type": "Organization", name: "Tirthon Tech", url: "https://tirthontech.com" },
    keywords: [
      "multi broker trading terminal India",
      "multi account trading software India",
      "unified trading terminal Zerodha Upstox Fyers",
      "bulk order execution multiple brokers India",
      "trading desk software India",
      "family office trading platform India",
      "sub broker trading terminal India",
      "consolidated portfolio tracker multiple brokers",
      "Windows trading terminal India",
      "multi account F&O trading terminal",
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Platform",
        value: "Windows (Electron)",
      },
      {
        "@type": "PropertyValue",
        name: "Brokers",
        value: "9 Indian brokers: Zerodha, Upstox, Fyers, Angel One, Dhan, Alice Blue, Finvasia, Kotak Neo, Groww",
      },
      {
        "@type": "PropertyValue",
        name: "Segments",
        value: "NSE, BSE, NFO, MCX, CDS",
      },
    ],
  },
];

export default function AKNATerminal() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="AKNA Trade Terminal: Multi-Broker Multi-Account Trading Terminal for Indian Traders"
        description="Stop logging into five broker apps every morning. AKNA Trade Terminal is a Windows desktop trading terminal that connects Zerodha, Upstox, Fyers, Angel One, Dhan, Alice Blue, Finvasia, Kotak Neo, and Groww in one place: bulk order execution across all accounts simultaneously, consolidated P&L dashboard, auto token refresh, and live market data across NSE, BSE, NFO, MCX, and CDS."
        path="/products/akna-terminal"
        keywords="multi broker trading terminal India, multi account trading software India, unified trading terminal Zerodha Upstox Fyers, bulk order execution multiple brokers India, trading desk software India, family office trading platform India, HNI multi account trading software, sub broker trading terminal India, consolidated portfolio tracker multiple brokers, Windows trading terminal India, desktop trading software India, multi account F&O trading terminal, authorised person trading software India, trading terminal for multiple demat accounts, broker aggregator software India, simultaneous order placement multiple brokers India, trading platform multiple accounts India, AKNA trade terminal"
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="flex-grow pt-24">

        {/* ── Hero ── */}
        <section className="relative py-16 md:py-28 overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 -z-10 opacity-[0.045] [background-image:radial-gradient(circle_at_1px_1px,#92400e_1.5px,transparent_0)] [background-size:28px_28px]" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[160px] translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={0}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
              >
                <Monitor className="w-4 h-4" />
                Multi-Broker · Multi-Account · Desktop Trading Terminal · Windows
              </motion.div>

              <motion.h1
                variants={fadeUp} initial="hidden" animate="show" custom={1}
                className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight mb-4"
              >
                One Terminal.{" "}
                <span className="text-primary">Nine Brokers.</span>{" "}
                Zero Tab-Switching.
              </motion.h1>

              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={2}
                className="text-xl text-primary font-semibold mb-5"
              >
                AKNA Trade Terminal
              </motion.p>

              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={3}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-4"
              >
                It's 8:55 AM. You have Zerodha open in one tab, Upstox in another, Fyers in a third,
                and you're still doing TOTP on Angel One. Market opens in five minutes. You have
                positions to check across all four accounts and orders to place before the bell.{" "}
                <strong className="text-foreground">AKNA Trade Terminal</strong> replaces that entire
                morning ritual with one terminal that's ready before you've finished your chai:
                all nine brokers authenticated, all accounts live, all positions visible in one dashboard.
              </motion.p>

              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={4}
                className="text-base text-muted-foreground mb-10"
              >
                Built by Tirthon Tech. Runs locally on Windows: no cloud in the trade execution path.
              </motion.p>

              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={5}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg font-semibold"
                  >
                    Get AKNA Terminal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="#features">
                  <Button size="lg" variant="outline" className="rounded-full px-8 hover:-translate-y-0.5 transition-all">
                    See All Features
                  </Button>
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={6}
                className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-10 border-t border-border/40"
              >
                {[
                  { value: "9", label: "Indian brokers integrated" },
                  { value: "500K+", label: "Instruments in database" },
                  { value: "1-click", label: "Bulk order across all accounts" },
                  { value: "Local", label: "No cloud in execution path" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Pain Points ── */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Every Multi-Broker Trader Knows{" "}
                <span className="text-primary">This Pain</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Managing multiple broker accounts with individual apps isn't just inconvenient:
                it costs you time, accuracy, and money at exactly the moments it matters most.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {painPoints.map((point, i) => (
                <motion.div
                  key={point.heading}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  className="relative flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-red-50/90 to-orange-50/50 border border-red-100 overflow-hidden"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <point.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5">{point.heading}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center"
            >
              <p className="text-foreground font-semibold text-lg">
                AKNA puts all your brokers in one terminal: one login, one dashboard, one click to trade across all of them.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Broker Integrations ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                All Your Brokers,{" "}
                <span className="text-primary">One Terminal</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                9 major Indian brokers integrated via their official APIs,
                with auto-login so you never waste market-open time on authentication.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {brokers.map((broker, i) => (
                <motion.div
                  key={broker.name}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{broker.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{broker.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/40"
            >
              <RefreshCw className="w-5 h-5 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Auto token refresh</strong>: AKNA handles daily TOTP and OAuth re-authentication for all supported brokers automatically. You open the terminal once. All accounts are live.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Order Management ── */}
        <section id="features" className="py-16 md:py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Zap className="w-3.5 h-3.5" />
                  Order Management & Bulk Execution
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Place One Order.{" "}
                  <span className="text-primary">Execute Across All Accounts.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  AKNA's bulk execution engine lets you select which accounts to include, configure the order
                  once, and fire it across all of them simultaneously. No switching tabs, no
                  re-entering the same details, no missed accounts.
                </p>
                <ul className="space-y-3">
                  {orderFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 drop-shadow-sm" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Security */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-medium mb-6">
                  <Lock className="w-3.5 h-3.5" />
                  Security & Local Architecture
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Your Credentials Never{" "}
                  <span className="text-primary">Leave Your Machine</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Think about what it means for your Zerodha API key to sit on a cloud server you don't control,
                  don't audit, and can't take offline. With AKNA, that question never arises. Your API keys,
                  TOTP seeds, and broker passwords are AES-encrypted and stored in a SQLite database on your
                  own machine. Trade execution goes directly from your desktop to the broker's API. There is
                  no intermediate server that can be breached, go down, or be accessed without your knowledge.
                  If you're rightfully paranoid about where your broker credentials live, AKNA is built for you.
                </p>
                <ul className="space-y-3">
                  {securityFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 drop-shadow-sm" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Portfolio & Market Data ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-4">
                <BarChart3 className="w-3.5 h-3.5" />
                Portfolio Dashboard & Market Data
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Your Real P&L:{" "}
                <span className="text-primary">In One Number</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Stop adding up P&L from five separate dashboards. AKNA consolidates every
                position, holding, and margin figure across all your broker accounts in real time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                    <feat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm leading-snug">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Audit log callout */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Complete Audit Log</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every order placement, cancellation, token refresh, and error: logged with timestamp,
                    account, and outcome. Filterable by type. Paginated. Per-user isolated.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Settings className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Admin Panel for Operators</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Create and manage end-user accounts, set subscription and credit limits, enable
                    or disable users, for resellers and operators running AKNA for multiple clients.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="py-16 md:py-20 bg-primary/5 border-y border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Who Is AKNA{" "}
                <span className="text-primary">Built For?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Any Indian trader or operator who manages more than one broker account
                and is done with the friction of switching between platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetCustomers.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Architecture callout ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Built for Speed,{" "}
                <span className="text-primary">Security, and Reliability</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                AKNA is a native Electron application: no browser lag, no server round-trips
                in the execution path, no dependency on a cloud service staying up while you trade.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Monitor, feature: "Native Windows desktop app (Electron)", detail: "Runs as a native desktop application, not a web app in a browser tab. Fast, responsive, and always available locally." },
                { icon: Database, feature: "Self-contained SQLite database", detail: "All your account data, credentials, and logs are stored locally in a SQLite database. Nothing is uploaded to external servers." },
                { icon: Lock, feature: "AES-encrypted credential storage", detail: "API keys, secrets, passwords, and TOTP seeds are encrypted at rest using AES. Decrypted only in memory at runtime." },
                { icon: Activity, feature: "WebSocket / SSE live market data", detail: "Live price feeds via WebSocket or SSE: real-time LTP, bid/ask, and position MTM updated as the market moves." },
                { icon: Globe, feature: "Official broker APIs only", detail: "All integrations use each broker's official published API. No screen scraping, no unofficial endpoints." },
                { icon: Eye, feature: "Multi-user with data isolation", detail: "AKNA supports multiple users on the same installation, with complete data isolation between accounts, suitable for operator/reseller setups." },
              ].map((item, i) => (
                <motion.div
                  key={item.feature}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{item.feature}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked{" "}
                <span className="text-primary">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything traders and operators typically ask about AKNA Trade Terminal.
              </p>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-24 bg-primary/5 border-t border-primary/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Stop Logging Into{" "}
                <span className="text-primary">Five Apps Every Morning</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Imagine your morning instead: one app opens, all nine broker accounts authenticate
                automatically, every position is visible in a single dashboard, and when you're
                ready to place a trade, it fires across every account you select in one click.
                No tab-switching. No repeated TOTP. No mental arithmetic at close. That's a day
                with AKNA.
              </p>
              <p className="text-muted-foreground mb-10">
                If that sounds like the setup you actually want, talk to us. We'll show you the terminal,
                walk through your specific broker setup, and tell you exactly what deployment looks like.
                No pitch deck. Just the product.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full px-10 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg font-semibold text-base"
                  >
                    Get AKNA Terminal: Talk to Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="rounded-full px-8 hover:-translate-y-0.5 transition-all">
                    See All Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
