import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Smartphone,
  Users,
  ShieldCheck,
  Bell,
  TrendingUp,
  BarChart3,
  Zap,
  CreditCard,
  Star,
  Bookmark,
  MessageSquare,
  Settings,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Database,
  Lock,
  Globe,
  Layers,
  XCircle,
  AlertTriangle,
  Ban,
  Eye,
  Rocket,
  Clock,
  IndianRupee,
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
    heading: "WhatsApp groups don't scale",
    body: "At 500 subscribers, a WhatsApp group becomes unmanageable. Messages get buried, calls go unread, and subscribers miss entries. Worse — WhatsApp bans accounts that send financial content at scale.",
  },
  {
    icon: CreditCard,
    heading: "Payments are a mess",
    body: "Chasing UTRs over DM, maintaining Excel sheets, manually approving each subscriber — it's a full-time job that has nothing to do with research. And when someone's plan expires, you have no clean way to cut their access.",
  },
  {
    icon: Eye,
    heading: "No proof of your track record",
    body: "Your win rate exists only in your head. You can't show a new subscriber your historical performance, closed calls, or accuracy across market segments. There's no record — which means there's no trust.",
  },
  {
    icon: Ban,
    heading: "No protection against sharing",
    body: "Paid subscribers share your Telegram link with friends. One subscription becomes twenty readers. You do the work, ten people don't pay. There's no way to stop it.",
  },
];

const targetAudience = [
  {
    icon: ShieldCheck,
    title: "SEBI Registered Research Analysts",
    description:
      "Individual or corporate RAs who are tired of WhatsApp groups and want a professional, compliant channel to deliver trading advice to paid subscribers.",
  },
  {
    icon: TrendingUp,
    title: "Trading Educators & Mentors",
    description:
      "Educators with a following who want to convert their audience into paying subscribers — without building software from scratch.",
  },
  {
    icon: Users,
    title: "Portfolio Management Firms",
    description:
      "Firms that want a direct, branded subscriber channel for trade ideas and market commentary — separate from social media noise.",
  },
  {
    icon: Layers,
    title: "Existing Research Firms Scaling Up",
    description:
      "Research businesses that have outgrown Telegram and need subscriber management, payment tracking, and performance analytics in one place.",
  },
];

const subscriberFeatures = [
  {
    icon: BarChart3,
    title: "Stocks, F&O & Commodity — All in One",
    description:
      "Your subscribers access NSE/BSE stock ideas, MCX commodity calls, and F&O ideas in organised tabs — intraday, short-term, medium-term, and long-term. Clean, segmented, easy to follow.",
  },
  {
    icon: Star,
    title: "Full Trade Cards With Every Detail",
    description:
      "Every idea shows the instrument, BUY/SELL direction, entry price range, stop loss, up to 3 targets, risk level, your rationale, a chart image, and live status. Nothing left to guesswork.",
  },
  {
    icon: Zap,
    title: "Live Status — No Refresh Needed",
    description:
      "The moment you mark Target Hit or SL Hit in your app, your subscriber's screen updates instantly. No polling, no delay. They see it the second you update it.",
  },
  {
    icon: Bell,
    title: "Push Alerts That Actually Get Read",
    description:
      "New call, target hit, SL triggered, daily commentary — every event sends a push notification with the key details right in the banner. Tapping it opens the exact call or screen.",
  },
  {
    icon: MessageSquare,
    title: "Daily Market Commentary",
    description:
      "Post your morning market view for Stocks, Commodity, and F&O. Subscribers read it inside the app with your name, segment, and timestamp. A professional touch that builds trust every single day.",
  },
  {
    icon: Bookmark,
    title: "Saved Ideas & In-App Inbox",
    description:
      "Subscribers bookmark calls they want to track and revisit later. The alerts inbox shows the last 50 notifications, filterable by type, with unread indicators and swipe-to-dismiss.",
  },
  {
    icon: IndianRupee,
    title: "UPI Payments — No Gateway Needed",
    description:
      "Subscriber selects a plan, pays to your UPI ID, submits their UTR inside the app. You approve it. Their plan activates instantly with a push notification — no bank integrations, no payment gateway fees.",
  },
  {
    icon: Users,
    title: "Referral Programme Built In",
    description:
      "Every subscriber gets a unique referral code. They share it, someone subscribes, they earn a commission. Referral earnings are tracked inside the app — pending, ready to pay, and paid out.",
  },
];

const analystFeatures = [
  "Post any idea — stock, future, option, or commodity — with full details: entry range, SL, up to 3 targets, risk level, rationale, and a chart image from your camera roll",
  "Publish immediately or schedule a call to go live at a specific date and time — useful for pre-market setups",
  "Update live calls in one tap: mark T1, T2, T3 Hit, SL Hit, or Expired — each update triggers a real-time push notification to relevant subscribers",
  "Create Themed Baskets — curated collections of ideas (e.g. 'Diwali Picks 2025') with a validity window and cover image, visible to all subscribers",
  "Post daily market commentary per segment — one entry per segment per day, editable anytime, triggers a push notification on publish",
  "Send manual push notifications to all subscribers or specific plan tiers — useful for market alerts, announcements, or session reminders",
  "Analytics dashboard: win rate, average return, streak, monthly idea count, category breakdown, and recent closed calls — your performance, documented",
];

const adminFeatures = [
  "Invite and manage analysts — set credentials, assign SEBI Reg. No., bio, and specialisation; deactivate without deleting their data",
  "View all subscribers with their active plans — each subscriber can hold multiple simultaneous plans (e.g. Stocks + F&O at the same time)",
  "Review UPI payment submissions — see subscriber name, plan, amount, and UTR; approve or reject with a reason sent as a push notification",
  "Grant or extend subscriptions manually — for renewals, gifts, or trial access; changes reflect instantly in the subscriber's app",
  "Create and manage Seasonal Bundles — platform-level idea collections with publish/archive controls",
  "Full oversight of all ideas across all analysts — force-update any status or delete any call",
  "Analytics: total active subscribers, plan breakdown, total subscriptions issued, referral commission liability and payout status",
];

const techHighlights = [
  { icon: Zap, feature: "Real-time idea delivery", detail: "Server-Sent Events (SSE) push updates to subscribers the instant you update a call — no polling, no delay, no refresh" },
  { icon: Bell, feature: "Firebase push notifications", detail: "FCM via Expo — Android and iOS both covered; tapping any notification opens the exact relevant screen" },
  { icon: Lock, feature: "Single-device sessions", detail: "Every login invalidates all other active sessions — account sharing is blocked at the infrastructure level" },
  { icon: Layers, feature: "Three roles, one APK", detail: "Admin, Analyst, and Subscriber UIs are completely separate inside a single APK/IPA — one build, three apps" },
  { icon: IndianRupee, feature: "UPI with UTR validation", detail: "Subscribers pay to your UPI ID, submit UTR, admin approves — no payment gateway dependency or per-transaction fees" },
  { icon: Database, feature: "Node.js + PostgreSQL backend", detail: "Serverless-ready architecture on NeonDB — built to scale from 100 to 10,000 subscribers without re-engineering" },
  { icon: Globe, feature: "Fully white-label", detail: "App name, icon, colour scheme, UPI ID, and API URL are all configurable per deployment — your brand, completely" },
  { icon: ShieldCheck, feature: "SEBI-aware design", detail: "SEBI Reg. No. displayed on every analyst profile; mandatory disclaimer shown on the F&O section as required" },
];

const subscriptionPlans = [
  { plan: "Commodity", access: "MCX intraday & short-term calls — Gold, Silver, Crude Oil, Natural Gas" },
  { plan: "Stocks", access: "NSE/BSE short-term, medium-term, and long-term equity ideas" },
  { plan: "F&O", access: "Futures & Options intraday and short-term ideas" },
  { plan: "All Markets", access: "Complete access to Stocks, Commodity, and F&O in one subscription" },
];

const deliverables = [
  "Source code deployment branded to your client — app name, icon, colours",
  "UPI ID configured for direct subscriber payment collection",
  "Backend server setup, hosting, and database provisioned",
  "Firebase / FCM configured for push notifications on Android and iOS",
  "First APK build, tested and delivered to your client",
  "Ongoing technical support, bug fixes, and platform updates",
];

const faqs = [
  {
    q: "What exactly is TradeSathi?",
    a: "TradeSathi is a ready-built, white-label mobile app platform for SEBI Registered Research Analysts. It gives you — or your client — a fully branded subscriber app where paying clients receive trade ideas in real time, manage their subscriptions, and pay via UPI. No app development required from your side.",
  },
  {
    q: "Is this SEBI compliant for Research Analysts?",
    a: "TradeSathi is designed with SEBI compliance in mind. Every analyst profile displays their SEBI Registration Number. The F&O section includes the mandatory risk disclaimer. The platform is built for SEBI Registered Research Analysts (RAs) and is not intended for use by unregistered individuals providing paid trading advice.",
  },
  {
    q: "How is this better than a WhatsApp or Telegram group?",
    a: "A WhatsApp group has no subscription enforcement, no payment tracking, no performance record, and no protection against sharing. TradeSathi gives you a professional branded app where access is gated by subscription, payments are tracked and approved, calls are documented with entry/SL/targets, and account sharing is blocked at the server level. It's the difference between a hobby and a business.",
  },
  {
    q: "Will the app appear on the Play Store under my client's name?",
    a: "Yes. TradeSathi is white-label — the app is built and deployed under your client's brand name. We handle the APK build and can assist with Play Store submission. The app name, icon, splash screen, and colours are all customised to your client's brand.",
  },
  {
    q: "How do subscribers pay? Is there a payment gateway fee?",
    a: "Subscribers pay directly to your client's UPI ID from within the app — no payment gateway is involved. They submit their UTR number after payment. The admin reviews and approves it, and the subscription activates instantly. This means zero per-transaction fees and full control over revenue.",
  },
  {
    q: "Does it support both NSE/BSE stocks and MCX commodities?",
    a: "Yes. The platform supports three market segments: Stocks (NSE/BSE), Commodity (MCX), and Futures & Options (NSE). Each segment has its own sub-categories — intraday, short-term, medium-term, and long-term. Subscribers subscribe to whichever segments they trade.",
  },
  {
    q: "Can multiple analysts post ideas on the same platform?",
    a: "Yes. The admin app supports multiple analysts. Each analyst has their own profile with SEBI Reg. No., specialisation, and bio. Subscribers can follow specific analysts and receive personalised push notifications for their calls.",
  },
  {
    q: "How long does it take to deploy TradeSathi for a client?",
    a: "Deployment typically takes 1–2 weeks from the time we have your branding assets (app name, logo, colour scheme, UPI ID). This includes backend setup, database provisioning, Firebase configuration, branding, and the first APK build.",
  },
  {
    q: "Is the app available on iOS as well?",
    a: "The backend, push notifications, and all app logic are cross-platform (React Native via Expo). Android APK is the primary delivery format. iOS builds can be done separately — reach out to discuss your specific requirement.",
  },
  {
    q: "What ongoing support does Tirthon Tech provide after launch?",
    a: "We provide ongoing technical support, bug fixes, and platform updates. As the platform evolves — new features, stability improvements, or regulatory changes — updates are applied to your deployment.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "TradeSathi — White-Label Subscriber App for SEBI Research Analysts",
    description:
      "TradeSathi is a ready-built, white-label mobile app platform for SEBI Registered Research Analysts. Launch a branded subscriber app with real-time trade idea delivery, push notifications, UPI subscription payments, and multi-role access — without writing a single line of code.",
    brand: { "@type": "Organization", name: "Tirthon Tech" },
    url: "https://tirthontech.com/products/tradesathi",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Tirthon Tech" },
    },
    category: "Financial Technology Software",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "SEBI Registered Research Analysts, Trading Educators, Portfolio Management Firms",
    },
  },
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
    name: "TradeSathi",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android, iOS",
    description:
      "White-label mobile application platform for SEBI Registered Research Analysts. Includes subscriber app, analyst app, and admin app — real-time trade ideas, push notifications, UPI payments, and subscription management.",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    author: { "@type": "Organization", name: "Tirthon Tech", url: "https://tirthontech.com" },
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

export default function TradeSathi() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="TradeSathi — Subscriber App Platform for SEBI Research Analysts"
        description="Stop managing subscribers on WhatsApp. TradeSathi is a white-label mobile app platform built for SEBI Registered Research Analysts in India — real-time trade idea delivery, push notifications, UPI payments, and subscription management. Launch your own branded app without writing code."
        path="/products/tradesathi"
        keywords="SEBI research analyst app, subscriber app for research analyst, stock tips app India, trading advice app, white label trading platform India, research analyst subscription platform, replace WhatsApp for trading tips, SEBI RA app, trade ideas delivery app, stock tips delivery platform, MCX NSE trading app, research analyst subscriber management, professional trading tips app, SEBI registered analyst platform, trading research platform India"
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="flex-grow pt-24">

        {/* ── Hero ── */}
        <section className="relative py-16 md:py-28 overflow-hidden border-b border-border/40">
          {/* Improvement 1: dot grid background */}
          <div className="absolute inset-0 -z-10 opacity-[0.045] [background-image:radial-gradient(circle_at_1px_1px,#92400e_1.5px,transparent_0)] [background-size:28px_28px]" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[160px] translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
              >
                <Smartphone className="w-4 h-4" />
                White-Label Platform · Built for SEBI Registered Research Analysts
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight mb-4"
              >
                Your Research Deserves Better Than a{" "}
                <span className="text-primary">WhatsApp Group</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-4"
              >
                <strong className="text-foreground">TradeSathi</strong> is a fully-built,
                white-label mobile app platform that lets any SEBI Registered Research
                Analyst launch their own branded subscriber app — without writing a single
                line of code. Your subscribers download your app, pay for a plan, and
                receive your trade ideas in real time on their phones.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={3}
                className="text-base text-muted-foreground mb-10"
              >
                Tirthon Tech handles the technology. You focus on your research.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={4}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg font-semibold"
                  >
                    Get Your Branded App
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="#features">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 hover:-translate-y-0.5 transition-all"
                  >
                    See All Features
                  </Button>
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={5}
                className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-10 border-t border-border/40"
              >
                {[
                  { value: "3", label: "Role-based apps in one APK" },
                  { value: "4", label: "Subscription plan tiers" },
                  { value: "Real-time", label: "Idea delivery via SSE" },
                  { value: "Zero", label: "Code required from you" },
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
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sound <span className="text-primary">Familiar?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Most SEBI Research Analysts are running a serious business on infrastructure
                that was never designed for it.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {painPoints.map((point, i) => (
                <motion.div
                  key={point.heading}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
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
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center"
            >
              <p className="text-foreground font-semibold text-lg">
                TradeSathi solves all of this — with a professional, branded app that runs on your terms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── What Is It / Three Apps ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  One Platform,{" "}
                  <span className="text-primary">Three Apps</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                  Every TradeSathi deployment ships with three separate role-based apps
                  inside a single APK — a subscriber-facing app, an analyst-facing
                  app, and an admin app. Three completely separate UIs. One codebase. Your brand.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                  Your subscribers download <strong className="text-foreground">your</strong> app from the Play Store.
                  Your SEBI Reg. No. is on every analyst profile. Your UPI ID collects every rupee.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Tirthon Tech builds and maintains the technology in the background.
                  To your subscribers, it's entirely yours.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: Users,
                    label: "Subscriber App",
                    who: "Your paying clients",
                    purpose: "Browse trade ideas, get real-time push alerts, track performance, manage subscription, pay via UPI",
                    color: "bg-blue-500/10 text-blue-600",
                  },
                  {
                    icon: TrendingUp,
                    label: "Analyst App",
                    who: "You and your research team",
                    purpose: "Post trade ideas, schedule calls, write market commentary, track win rate, send notifications",
                    color: "bg-primary/10 text-primary",
                  },
                  {
                    icon: Settings,
                    label: "Admin App",
                    who: "Tirthon Tech (your ops support)",
                    purpose: "Manage analysts and subscribers, approve UPI payments, handle subscriptions, platform analytics",
                    color: "bg-purple-500/10 text-purple-600",
                  },
                ].map((app, i) => (
                  <motion.div
                    key={app.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${app.color}`}>
                      <app.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <p className="font-semibold text-foreground">{app.label}</p>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{app.who}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{app.purpose}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Who Is It For ── */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Who Is TradeSathi <span className="text-primary">Built For?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                If you give paid trading advice and you want a professional platform to
                deliver it — this is for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Subscriber App Features ── */}
        <section id="features" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-4">
                <Users className="w-3.5 h-3.5" />
                Subscriber App — What Your Clients Get
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                A Subscriber Experience That Builds{" "}
                <span className="text-primary">Loyalty</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                When your subscriber opens the app and sees a clean trade card with entry,
                SL, targets, and your rationale — they feel like they're with a professional.
                That trust keeps them renewing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subscriberFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border border-t-2 border-t-primary/50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                    <feat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm leading-snug">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Analyst & Admin Features ── */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Tools Built for How{" "}
                <span className="text-primary">You Actually Work</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The analyst app is designed around a research analyst's workflow — post a
                call, update its status, track your performance. No overhead, no complexity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Analyst App — For You, the Research Analyst
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Post. Update. Track. Repeat.
                </h3>
                <ul className="space-y-4">
                  {analystFeatures.map((feat, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      custom={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-medium mb-6">
                  <Settings className="w-3.5 h-3.5" />
                  Admin App — Platform Control
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Every Subscriber, Every Rupee, Under Control
                </h3>
                <ul className="space-y-4">
                  {adminFeatures.map((feat, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      custom={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Subscription Plans ── */}
        <section className="py-16 md:py-20 bg-primary/5 border-y border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Four Plans — One for{" "}
                  <span className="text-primary">Every Type of Trader</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Your subscribers pay for the market segment they actually trade. A commodity
                  trader doesn't need an F&O subscription — and shouldn't pay for one.
                  You monetise each vertical independently.
                </p>
                <p className="text-muted-foreground">
                  Every plan is available in Monthly and Annual billing.
                  Annual subscribers save up to{" "}
                  <span className="text-primary font-semibold">44%</span> — giving you
                  better retention and predictable annual revenue.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subscriptionPlans.map((item, i) => (
                  <motion.div
                    key={item.plan}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i}
                    className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <p className="font-bold text-foreground text-lg mb-1">{item.plan}</p>
                    <p className="text-sm text-muted-foreground">{item.access}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Technical Highlights ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Infrastructure Built for a{" "}
                <span className="text-primary">Real-Money Platform</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                This isn't a demo app. TradeSathi is built on production-grade architecture
                that handles real subscribers, real payments, and real-time data —
                without cutting corners.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {techHighlights.map((item, i) => (
                <motion.div
                  key={item.feature}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
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

        {/* ── What Tirthon Provides ── */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Rocket className="w-3.5 h-3.5" />
                  What You Get from Tirthon Tech
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  We Build It. You Launch It.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  You don't need to hire developers, manage servers, or learn anything
                  technical. Tirthon Tech handles the entire deployment — from branding
                  to backend to the first APK in your hands.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Typical deployment takes <strong className="text-foreground">1–2 weeks</strong> from
                  the day you share your branding assets with us.
                </p>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm text-foreground font-medium">
                    From briefing to working APK in your hands — typically 1 to 2 weeks.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {deliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything a SEBI Research Analyst typically asks before getting started.
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
        <section className="relative overflow-hidden py-16 md:py-24 bg-primary/5 border-t border-primary/10">
          <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#ffffff_1.5px,transparent_0)] [background-size:28px_28px]" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Stop Running a Research Business on{" "}
                <span className="text-primary">WhatsApp</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Your subscribers deserve a professional experience. You deserve a platform
                that runs your subscription business properly — with real payments, real
                analytics, and real control.
              </p>
              <p className="text-muted-foreground mb-10">
                Talk to us. We'll show you exactly what your branded app would look like.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full px-10 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg font-semibold text-base"
                  >
                    Get Your App — Talk to Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 hover:-translate-y-0.5 transition-all"
                  >
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
