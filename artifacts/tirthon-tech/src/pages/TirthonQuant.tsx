import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Bot,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Clock,
  Layers,
  Bell,
  Server,
  LineChart,
  Settings,
  RefreshCw,
  Lock,
  IndianRupee,
  Activity,
  Database,
  Terminal,
  Users,
  XCircle,
  Eye,
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
    heading: "Your strategy is good. Your execution isn't.",
    body: "You know exactly what to do. Buy when RSI crosses 30, sell when it crosses 70. You've backtested it mentally a hundred times. But when the moment comes, you hesitate — because it's your money, and the last three trades didn't work. Then you override the signal. Then the trade you skipped moves 4%. TirthonQuant doesn't hesitate.",
  },
  {
    icon: Eye,
    heading: "You can't watch 15 charts at 9:20 AM and also hold a job.",
    body: "The opportunity was in the 5-minute NIFTY chart at 9:22 AM. You were in a meeting. By the time you checked, the setup was gone — or worse, you entered late and caught the reversal instead of the move. Your strategy works. Your availability doesn't scale.",
  },
  {
    icon: XCircle,
    heading: "You've tested nothing. You're trading live on instinct.",
    body: "Most retail traders deploy strategies on real capital without a single backtest. The strategy felt right based on a few trades that worked. TirthonQuant's backtesting engine runs your logic across years of historical data before you risk a single rupee — giving you CAGR, Sharpe ratio, max drawdown, and win rate before you go live.",
  },
  {
    icon: Clock,
    heading: "The broker API broke again. Your bot is sitting idle.",
    body: "Zerodha pushed an update. Your Python script stopped working. You spent Saturday debugging access tokens instead of reviewing your weekly P&L. Broker APIs change. Session tokens expire. Our team maintains every integration so your strategy keeps running whether or not you're watching.",
  },
];

const features = [
  {
    icon: Bot,
    title: "Automated Strategy Execution",
    description:
      "Buy and sell orders placed automatically based on technical indicators — RSI, MACD, EMA crossover, Bollinger Bands, and more. Condition stacking lets you combine multiple signals before triggering. No hesitation. No override. Exact execution every time.",
  },
  {
    icon: Shield,
    title: "Automated Risk Management",
    description:
      "Per-trade stop-loss and targets, trailing stop-loss, max daily loss limit, max open positions cap, drawdown circuit breaker. When your daily loss limit is hit, the strategy pauses automatically. Risk discipline is enforced by the system, not by willpower.",
  },
  {
    icon: LineChart,
    title: "Multi-Leg Options Automation",
    description:
      "Straddle, strangle, iron condor, spreads — executed automatically. Auto strike selection by ATM/OTM/ITM rules. Expiry rollover on your schedule. Live Greeks monitoring (Delta, Theta, IV). Theta decay auto-exit when your target is met.",
  },
  {
    icon: Database,
    title: "Backtesting Engine",
    description:
      "Run your strategy against years of historical data across multiple symbols and timeframes. Get CAGR, Sharpe ratio, max drawdown, win rate, and average R:R before deploying live. Walk-forward testing prevents overfitting. Compare two strategies side by side on the same dataset.",
  },
  {
    icon: Layers,
    title: "Multi-Account & Multi-Strategy",
    description:
      "Run one strategy across 5 broker accounts simultaneously, or run 10 independent strategies in parallel. Strategy isolation ensures one strategy's drawdown doesn't touch another's capital. Separate risk profiles per strategy and per account.",
  },
  {
    icon: Zap,
    title: "TradingView & API Integration",
    description:
      "Fire live orders directly from Pine Script alerts via TradingView webhooks. REST API for custom signal sources — Python scripts, external models, proprietary systems. Telegram bot integration: receive signals and trigger trades via message.",
  },
  {
    icon: Activity,
    title: "Live Dashboard & Alerts",
    description:
      "Open positions, real-time P&L, and order status at a glance. Telegram, email, and SMS alerts on trade execution, risk breaches, or strategy errors. Strategy health monitoring flags if a strategy stops firing. System uptime monitoring notifies you if the engine goes offline.",
  },
  {
    icon: RefreshCw,
    title: "Broker API Maintenance",
    description:
      "We handle every broker API update, session token refresh, and reconnection after a drop. Zerodha, Upstox, Angel One, Fyers, Dhan, IIFL — all maintained by our team. Your strategy keeps running whether the broker pushes an update or not.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Audit Trail",
    description:
      "Complete trade log: symbol, time, quantity, price, strategy name, and reason for every order. Daily and monthly P&L reports. CSV/Excel export for ITR-3 filing and CA audit support. Every order is traceable — who triggered it, when, and under what condition.",
  },
];

const brokers = [
  "Zerodha (Kite Connect)",
  "Upstox",
  "Angel One",
  "Fyers",
  "Dhan",
  "IIFL",
];

const segments = [
  "NSE Equity",
  "NSE F&O",
  "BSE Equity",
  "Currency Derivatives",
  "MCX Commodities",
];

const managedService = [
  "Infrastructure setup and hosting — cloud or on-premise, fully managed",
  "Strategy onboarding — we translate your logic into a deployable strategy",
  "Regular broker API maintenance — zero downtime from your side",
  "Monthly performance review calls with your strategy report",
  "Priority support via WhatsApp/Telegram during market hours (9:00–15:45)",
];

const whoFor = [
  {
    icon: TrendingUp,
    title: "Retail traders with a tested strategy",
    description: "You know what you want to trade. You just need a system that executes it without you watching the screen all day.",
  },
  {
    icon: Users,
    title: "Trading desks & prop firms",
    description: "Run multiple strategies across multiple accounts simultaneously. Full isolation, separate risk profiles, centralized monitoring.",
  },
  {
    icon: IndianRupee,
    title: "Family offices & HNIs",
    description: "Systematic, rule-based deployment of capital across equity and derivatives. Complete audit trail for every order — down to the second.",
  },
  {
    icon: LineChart,
    title: "Options sellers & premium harvesters",
    description: "Automate your straddles, strangles, and iron condors. Greeks monitoring, Theta decay exits, and expiry rollovers handled without manual intervention.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          {q}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.span>
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
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    q: "Do I need to know coding to use TirthonQuant?",
    a: "No. Our managed service layer handles all the technical infrastructure — broker API setup, server hosting, session management, and strategy deployment. You define the logic in plain language: entry conditions, exit conditions, stop-loss, position size. Our team translates that into a deployable strategy. If you already have a Pine Script or Python strategy, we onboard that directly.",
  },
  {
    q: "Which brokers are supported?",
    a: "Zerodha (Kite Connect), Upstox, Angel One, Fyers, Dhan, and IIFL. We support NSE and BSE for equity and F&O, currency derivatives, and MCX for commodities. If you trade across multiple brokers, TirthonQuant can run the same strategy on all accounts simultaneously.",
  },
  {
    q: "What happens when a broker API breaks or changes?",
    a: "We handle it. Broker API updates, session token expirations, and connection drops are our responsibility — not yours. Our team monitors all active integrations and pushes fixes before market open. Your strategy keeps running without you needing to touch the code or restart anything.",
  },
  {
    q: "Can I run multiple strategies at the same time?",
    a: "Yes. TirthonQuant supports fully parallel strategy execution with complete isolation — one strategy's drawdown or capital allocation does not affect another. Each strategy and each account can have its own risk profile: separate daily loss limits, separate max position sizes, separate stop-loss rules.",
  },
  {
    q: "How does the backtesting engine work?",
    a: "You define your strategy logic and select the symbol, timeframe, and date range. The engine runs it against historical data and returns CAGR, Sharpe ratio, max drawdown, win rate, and average risk-to-reward. Walk-forward testing is available to prevent overfitting. You can also compare two versions of a strategy side by side on the same historical dataset before deciding which to deploy live.",
  },
  {
    q: "Can TirthonQuant execute options strategies automatically?",
    a: "Yes. Multi-leg options strategies — straddles, strangles, iron condors, spreads — are executed automatically. The system selects strikes based on ATM/OTM/ITM rules you define, monitors live Greeks (Delta, Theta, IV) per position, exits when Theta decay targets are met, and rolls positions to the next expiry on your schedule. No manual intervention required.",
  },
  {
    q: "How does TradingView integration work?",
    a: "TirthonQuant accepts webhook alerts from TradingView. When a Pine Script condition triggers an alert, the webhook fires to TirthonQuant, which then places the order with your broker immediately. You write your strategy in Pine Script, set up the alert, point it at TirthonQuant, and the execution is fully automated from that point.",
  },
  {
    q: "What risk controls are built in?",
    a: "Per-trade stop-loss and targets (absolute or percentage), trailing stop-loss, maximum daily loss limit that pauses the strategy automatically, maximum open positions cap, position sizing rules (fixed lot, percentage of capital, or volatility-adjusted), and a drawdown circuit breaker that halts the entire system if portfolio drawdown crosses a threshold you define.",
  },
  {
    q: "Is there an audit trail for tax purposes?",
    a: "Yes. Every order placed by TirthonQuant is logged with the symbol, timestamp, quantity, price, strategy name, and the exact condition that triggered it. Daily and monthly P&L reports are generated automatically. You can export everything to CSV or Excel for ITR-3 filing or CA audit support.",
  },
  {
    q: "What does the managed service include?",
    a: "Full infrastructure setup (cloud or on-premise), strategy onboarding where we translate your logic into a deployed strategy, ongoing broker API maintenance so you never face downtime from an API change, monthly performance review calls with your strategy report, and priority WhatsApp/Telegram support during market hours (9:00 AM to 3:45 PM).",
  },
];

export default function TirthonQuant() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TirthonQuant",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web, Cloud",
        description:
          "TirthonQuant is an algorithmic trading platform for Indian retail traders, trading desks, and family offices. It automates strategy execution across Zerodha, Upstox, Angel One, and other brokers — with backtesting, risk management, options automation, and a fully managed IT service layer. No coding required.",
        url: "https://tirthontech.com/products/tirthonquant",
        provider: {
          "@type": "Organization",
          name: "Tirthon Tech",
          url: "https://tirthontech.com",
        },
        featureList: [
          "Automated buy/sell order execution based on RSI, MACD, EMA, Bollinger Bands",
          "Multi-leg options strategy automation — straddle, strangle, iron condor",
          "Backtesting engine with CAGR, Sharpe ratio, max drawdown, win rate",
          "Multi-account and multi-strategy parallel execution with isolation",
          "TradingView webhook integration — Pine Script alert to live order",
          "Automated risk management — stop-loss, trailing stop, daily loss limit, drawdown circuit breaker",
          "Broker API maintenance — Zerodha, Upstox, Angel One, Fyers, Dhan, IIFL",
          "Live P&L dashboard and Telegram/email/SMS alerts",
          "Complete trade audit trail with CSV export for ITR-3 filing",
          "Fully managed infrastructure — cloud or on-premise",
        ],
        additionalProperty: [
          { "@type": "PropertyValue", name: "Supported Brokers", value: "Zerodha, Upstox, Angel One, Fyers, Dhan, IIFL" },
          { "@type": "PropertyValue", name: "Segments", value: "NSE Equity, NSE F&O, BSE, Currency, MCX Commodities" },
          { "@type": "PropertyValue", name: "Target Users", value: "Retail traders, trading desks, family offices, HNIs, options sellers" },
          { "@type": "PropertyValue", name: "Coding Required", value: "No — fully managed service with strategy onboarding" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <SEO
        title="TirthonQuant — Algorithmic Trading Platform for Indian Traders | Algo Trading Software India"
        description="TirthonQuant automates your trading strategy across Zerodha, Upstox, Angel One and more — with backtesting, risk management, options automation, and zero coding required. Built for retail traders, trading desks, and family offices in India."
        keywords="algo trading software India, algorithmic trading platform India, automated trading software India, trading bot India, algo trading without coding, backtesting software India, options trading automation India, TradingView webhook trading India, multi-account trading automation, trading strategy automation, Zerodha algo trading, Upstox algo trading, systematic trading India, quant trading platform India, F&O automation software, options algo trading India, automated stop loss trading, risk management algo trading, NSE algo trading software, retail algo trading India"
        canonical="https://tirthontech.com/products/tirthonquant"
        ogTitle="TirthonQuant — Automate Your Trading Strategy Across Zerodha, Upstox & More"
        ogDescription="Backtesting, risk management, options automation, and fully managed broker API maintenance. No coding required. Built for Indian traders who trade seriously."
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pt-20">

        {/* ── Hero ── */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-white">
          <div className="absolute inset-0 -z-10 opacity-[0.045] [background-image:radial-gradient(circle_at_1px_1px,#92400e_1.5px,transparent_0)] [background-size:28px_28px]" />
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-300/15 blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-6 border border-primary/20">
                <Bot className="w-3.5 h-3.5" />
                Algo Trading · Strategy Automation · Backtesting · Options · NSE · BSE · MCX
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6"
            >
              Your Strategy Is Good.{" "}
              <span className="text-primary">Your Execution Isn&apos;t.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              TirthonQuant is an algorithmic trading platform built for Indian retail traders, trading desks, and family offices. Automate your strategy across Zerodha, Upstox, Angel One, and more — with built-in backtesting, automated risk management, options lifecycle automation, and a fully managed service so you never touch a broker API again.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-base font-semibold">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-semibold border-border hover:bg-muted/50">
                  Talk to the Team
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Pain Points ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Manual Trading Doesn&apos;t Scale</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The strategy isn&apos;t the problem. Emotion, availability, and inconsistent execution are. TirthonQuant removes all three.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((pt, i) => (
                <motion.div
                  key={pt.heading}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="relative flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-red-50/90 to-orange-50/50 border border-red-100 overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <pt.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{pt.heading}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pt.body}</p>
                  </div>
                  <span className="absolute bottom-2 right-4 text-7xl font-black text-red-100/80 select-none leading-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features Grid ── */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything a Systematic Trader Needs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Strategy execution, risk enforcement, options automation, backtesting, broker maintenance, and reporting — all in one platform, fully managed.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-card border border-border border-t-2 border-t-primary/50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Strategy Execution Deep Dive ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Strategy Execution</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your rules. Executed in milliseconds. Every time.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  You spent months identifying a setup that works. Now it needs to execute at exactly the right moment — not when you notice the signal, not after you second-guess it, not after you check Telegram first. TirthonQuant places the order the instant the condition is met, with the exact quantity, at the exact price, on the exact account you configured.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Run strategies on 1-minute, 5-minute, 15-minute, or daily timeframes. Stack multiple conditions before a trigger fires. Schedule execution to specific sessions — pre-market, opening range, only between 10 AM and 2 PM. Event-based triggers on price levels, volume spikes, or external signals.
                </p>
                <ul className="space-y-3">
                  {[
                    "RSI, MACD, EMA crossover, Bollinger Bands, and custom indicators",
                    "Multi-timeframe signal analysis: 1min, 5min, 15min, daily",
                    "Condition stacking — require multiple signals before triggering",
                    "Scheduled execution — run only during specific market sessions",
                    "Event-based triggers — price level, volume spike, time, external signal",
                    "TradingView Pine Script webhook → live order in one step",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 drop-shadow-sm" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Automated Risk Management</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">You know your stop-loss. Now it actually gets honoured.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every trader knows their max daily loss. Most traders have overridden it at least once — telling themselves the position will recover. It usually doesn&apos;t. TirthonQuant doesn&apos;t ask your permission when the limit is hit. It pauses the strategy. The decision was already made when you configured the system, and it stays made.
                </p>
                <ul className="space-y-3">
                  {[
                    "Per-trade stop-loss and target — absolute or percentage-based",
                    "Trailing stop-loss automation — locks in profits as the trade moves",
                    "Max daily loss limit — strategy pauses automatically when breached",
                    "Max open positions cap — prevents overexposure across instruments",
                    "Position sizing — fixed lot, % of capital, or volatility-adjusted",
                    "Drawdown circuit breaker — system halts if portfolio drawdown crosses threshold",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 drop-shadow-sm" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Options + Backtesting ── */}
        <section className="py-20 bg-gradient-to-b from-muted/40 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Options Trading Automation</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Automate the entire options lifecycle — not just the entry.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Selling a straddle manually means picking the strikes, placing two legs, watching the Greeks, deciding when Theta decay is enough, and remembering to roll before expiry. Miss one step and the trade is wrong. TirthonQuant handles the full lifecycle — from strike selection to Greeks monitoring to expiry rollover — without you touching anything.
                </p>
                <ul className="space-y-3">
                  {[
                    "Multi-leg execution — straddle, strangle, iron condor, spreads",
                    "Auto strike selection: ATM / OTM / ITM rules you define",
                    "Live Greeks monitoring: Delta, Theta, IV per position",
                    "Theta decay management — auto-exit when decay target is met",
                    "Expiry rollover automation — rolls to next expiry on your schedule",
                    "Full NSE F&O and currency derivatives support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 drop-shadow-sm" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Backtesting Engine</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Test before you trade. Know the numbers before you risk the capital.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Most retail traders&apos; idea of backtesting is looking at a chart and saying &quot;yes, that setup would have worked.&quot; That is not backtesting. TirthonQuant runs your strategy logic mechanically across years of historical tick data, across multiple symbols and timeframes simultaneously, and gives you hard numbers — not a feeling.
                </p>
                <ul className="space-y-3">
                  {[
                    "Historical backtesting across multiple symbols and timeframes",
                    "CAGR, Sharpe ratio, max drawdown, win rate, average R:R",
                    "Walk-forward testing — prevents overfitting to historical data",
                    "Side-by-side comparison of two strategy versions on the same dataset",
                    "Test on NSE equity, F&O, and currency historical data",
                    "Deploy the same strategy live after validation — one click",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 drop-shadow-sm" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Broker Integrations ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Works With Your Broker. All of Them.</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                TirthonQuant integrates with all major Indian brokers. Switch brokers without rebuilding your strategy. Run the same logic across multiple broker accounts simultaneously.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest text-primary">Supported Brokers</h3>
                <ul className="space-y-3">
                  {brokers.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest text-primary">Supported Segments</h3>
                <ul className="space-y-3">
                  {segments.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-xs text-muted-foreground">Auto-reconnect on session expiry or connection drop. All API maintenance handled by our team — zero downtime from broker-side updates.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Managed Service ── */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Managed Service</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">You define the strategy. We handle everything else.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Setting up servers, configuring broker APIs, managing session tokens, handling downtime, debugging broken connections — none of that should be your job. It&apos;s ours. TirthonQuant&apos;s managed service layer means the only thing you focus on is whether the strategy is performing.
                </p>
                <ul className="space-y-4">
                  {managedService.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 drop-shadow-sm" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} className="space-y-4">
                {[
                  { icon: Server, title: "Cloud or on-premise", body: "Your infrastructure, your preference. We set it up, monitor it, and keep it running." },
                  { icon: RefreshCw, title: "Zero API downtime", body: "Every broker API update, session refresh, and reconnection is handled before market open." },
                  { icon: Bell, title: "Market-hours support", body: "Priority WhatsApp and Telegram support from 9:00 AM to 3:45 PM on trading days." },
                  { icon: BarChart3, title: "Monthly performance review", body: "Detailed strategy report with trade log, P&L, and optimisation recommendations." },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who Uses TirthonQuant</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoFor.map((w, i) => (
                <motion.div
                  key={w.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                    <w.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Questions Traders Ask Before Starting</h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl px-6 md:px-8 divide-y divide-border"
            >
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden py-20 bg-foreground text-background">
          <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#ffffff_1.5px,transparent_0)] [background-size:28px_28px]" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stop trading manually. Start trading systematically.
              </h2>
              <p className="text-background/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                TirthonQuant traders don&apos;t miss setups because they were in a meeting. They don&apos;t override stop-losses because the position felt like it would recover. They don&apos;t spend weekends debugging broker APIs. The strategy runs. The risk is enforced. The audit trail is automatic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-base font-semibold">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-semibold border-background/30 text-background hover:bg-background/10">
                    Talk to the Team
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
