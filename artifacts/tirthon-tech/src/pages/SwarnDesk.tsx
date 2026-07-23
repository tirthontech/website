import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Gem,
  Receipt,
  RefreshCw,
  MessageCircle,
  Package,
  Truck,
  FileCheck,
  Users,
  Scale,
  ClipboardList,
  Landmark,
  Percent,
  BarChart3,
  BookOpen,
  Wallet,
  FileText,
  ShieldCheck,
  IndianRupee,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const comparisonPoints = [
  {
    before: "Billing software, Tally, and a karigar notebook: three separate systems that never agree with each other",
    after: "One system. Every sale, purchase, loan, and karigar transaction lands in the same books automatically.",
  },
  {
    before: "GST return prep means exporting data and rebuilding it by hand for your CA every month",
    after: "GSTR-1, GSTR-3B, HSN summary, and both registers generate directly from real transactions: no rebuilding.",
  },
  {
    before: "Karigar wastage disputes because there's no real record of what metal went out and came back",
    after: "Every gram issued and returned is logged, with a correction trail if a mistake needs fixing.",
  },
  {
    before: "Gold loan / pawn business tracked in a separate physical register",
    after: "A full standalone Girvi module: legally numbered vouchers, interest tracking, CA-facing reports.",
  },
  {
    before: "No way to properly reverse a returned sale: you edit numbers by hand and hope the books still add up",
    after: "One-click sale return restocks inventory and reverses the accounting automatically, every time.",
  },
];

const stats = [
  { value: "2,400+", label: "Active Jewellers" },
  { value: "18,000+", label: "Transactions / Day" },
  { value: "₹850 Cr+", label: "Gold Tracked" },
];

const salesBillingFeatures = [
  {
    icon: Receipt,
    title: "Instant Billing & POS",
    description: "Barcode scan or quick-add, live gold/silver rates, GST auto-calculated at your shop's actual rate, not a hardcoded guess.",
  },
  {
    icon: RefreshCw,
    title: "Old Gold Exchange",
    description: "Take gold in exchange on a sale and it lands as real physical stock, not just a number. No more mismatched inventory counts.",
  },
  {
    icon: ArrowRight,
    title: "Sale Returns",
    description: "Return or cancel a sale and everything unwinds automatically: inventory restocked, books reversed, customer balance corrected.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Invoices",
    description: "Send the invoice straight to the customer's WhatsApp the moment the sale is done.",
  },
];

const inventoryFeatures = [
  {
    icon: Package,
    title: "Smart Inventory",
    description: "Track every ornament by weight, purity, HUID, category, and karigar, with low-stock alerts before you run out.",
  },
  {
    icon: Truck,
    title: "Supplier Ledger",
    description: "Full supplier records with GSTIN, editable purchase entries, and a running payable balance per supplier.",
  },
  {
    icon: FileCheck,
    title: "Purchase GST & ITC",
    description: "Record GST paid to bullion dealers and claim it as Input Tax Credit automatically. Most billing software can't do this at all.",
  },
];

const customerKarigarFeatures = [
  {
    icon: Users,
    title: "Customer CRM & Loyalty",
    description: "Birthday and anniversary reminders, purchase history, and an optional loyalty points program.",
  },
  {
    icon: Scale,
    title: "Karigar Metal Tracking",
    description: "Issue gold, get it back, track wastage to the gram, with a correction trail if an entry was made in error.",
  },
  {
    icon: ClipboardList,
    title: "Repairs & Custom Orders",
    description: "Full job lifecycle from intake to delivery, karigar assignment, and payment collection at every stage.",
  },
];

const girviFeatures = [
  {
    icon: Landmark,
    title: "Standalone Loan Ledger",
    description: "Its own customer base, multi-branch support, and legally sequential FY-numbered vouchers.",
  },
  {
    icon: Percent,
    title: "Interest, Renewal & Redemption",
    description: "Auto-splitting interest/principal collection, penalty interest with a configurable grace period, and lender-discretion waivers.",
  },
  {
    icon: BarChart3,
    title: "CA-Facing Reports",
    description: "Pledge register, maturity tracking, returns register, and a cash-compliance flag for high-value cash transactions.",
  },
];

const accountingFeatures = [
  {
    icon: BookOpen,
    title: "Auto-Posting Books",
    description: "Every sale, purchase, loan, repair, and karigar payment posts a balanced journal entry automatically; you never touch a ledger by hand.",
  },
  {
    icon: FileText,
    title: "Chart of Accounts & Vouchers",
    description: "A real chart of accounts, manual journal vouchers for one-off entries, and non-destructive voiding that keeps a full audit trail.",
  },
  {
    icon: BarChart3,
    title: "Trial Balance, P&L, Balance Sheet",
    description: "Generated live from the journal: no month-end reconciliation, no exporting to another tool.",
  },
  {
    icon: Wallet,
    title: "Ledgers & Day Book",
    description: "Running-balance ledgers for any account or party, plus Cash Book, Bank Book, and Day Book views.",
  },
];

const gstFeatures = [
  {
    icon: FileCheck,
    title: "GSTR-1 & GSTR-3B",
    description: "B2B/B2C split with buyer GSTIN, correct CGST/SGST vs IGST based on state code, and a ready-to-file 3B summary with ITC netted off.",
  },
  {
    icon: BarChart3,
    title: "HSN Summary & Registers",
    description: "HSN-wise tax rollup, plus GST-wise Purchase and Sales Registers for the return you actually file.",
  },
  {
    icon: AlertTriangle,
    title: "Cash Compliance",
    description: "Flags same-day high-value cash receipts per customer for TCS / Section 269ST awareness.",
  },
];

const faqs = [
  {
    q: "What exactly is SwarnDesk?",
    a: "SwarnDesk is billing, inventory, accounting, and gold-loan software built specifically for Indian jewellery shops. It replaces separate billing software, Tally, a karigar notebook, and a gold loan register with one system where every transaction posts to real, GST-ready books automatically.",
  },
  {
    q: "Does SwarnDesk actually replace Tally, or do I still need it?",
    a: "SwarnDesk includes full double-entry accounting: a real chart of accounts, auto-posted journal entries for every sale, purchase, loan, and karigar payment, plus a live Trial Balance, P&L, and Balance Sheet. Most jewellers using SwarnDesk stop using Tally entirely, since the books are generated directly from real shop transactions instead of being re-entered.",
  },
  {
    q: "How does GST filing work?",
    a: "GSTR-1, GSTR-3B, HSN Summary, and both GST-wise Purchase and Sales Registers are generated directly from your transactions: no exporting data and rebuilding it by hand. B2B/B2C is split automatically with buyer GSTIN, and CGST/SGST vs IGST is calculated correctly based on state code.",
  },
  {
    q: "What is the Girvi module, and do I need it if I don't do gold loans?",
    a: "Girvi is a standalone gold loan / pawn-broking module with its own customer base, legally sequential FY-numbered vouchers, interest and penalty tracking, and CA-facing reports. It's built in but entirely optional: if your shop doesn't do gold loans, you simply won't use that section.",
  },
  {
    q: "How does karigar metal tracking prevent wastage disputes?",
    a: "Every gram of metal issued to a karigar and every gram returned is logged against that job, so wastage is a real recorded number instead of a verbal claim. If an entry was made in error, it can be corrected with a full correction trail. Nothing is silently overwritten.",
  },
  {
    q: "What happens when a customer returns a sale?",
    a: "One click reverses the entire transaction: inventory is restocked, the accounting entries are reversed, and the customer's balance is corrected automatically. There's no manual number-editing and no risk of the books not adding up afterward.",
  },
  {
    q: "Can I claim Input Tax Credit on gold I purchase from bullion dealers?",
    a: "Yes. SwarnDesk records the GST paid on every purchase from your suppliers and tracks it as Input Tax Credit automatically, something most general billing software for jewellers doesn't handle at all.",
  },
  {
    q: "Does SwarnDesk work for a chain of showrooms, or only a single counter?",
    a: "Both. SwarnDesk is built for everything from a single-counter shop to a multi-branch chain, including multi-branch support inside the Girvi loan ledger.",
  },
  {
    q: "Is there a free trial, and do I need a credit card to start?",
    a: "Yes, SwarnDesk offers a 7-day free trial with no credit card required and no long-term lock-in. You can sign up and start billing immediately.",
  },
  {
    q: "Can I send invoices to customers on WhatsApp?",
    a: "Yes. Once a sale is completed, the invoice can be sent straight to the customer's WhatsApp from within SwarnDesk.",
  },
];

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
    name: "SwarnDesk",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Billing, inventory, double-entry accounting, GST compliance, and a standalone gold loan (Girvi) module built specifically for Indian jewellery shops and chains.",
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

function FeatureGrid({
  items,
  cols = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  items: { icon: any; title: string; description: string }[];
  cols?: string;
}) {
  return (
    <div className={`grid grid-cols-1 ${cols} gap-6`}>
      {items.map((feat, i) => (
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
  );
}

export default function SwarnDesk() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="SwarnDesk: Billing, Accounting & Gold Loan Software for Jewellers"
        description="SwarnDesk replaces billing software, Tally, a karigar notebook, and a gold loan register with one system for Indian jewellery shops. Sales, purchases, karigar metal tracking, gold loans (Girvi), and GST-ready double-entry accounting: all in one place. 7-day free trial, no credit card needed."
        path="/products/swarndesk"
        keywords="jewellery billing software India, gold shop accounting software, jewellery shop management software, jewellers software India, karigar metal tracking software, gold loan software, Girvi software, jewellery GST software, jewellery ERP India, gold and silver billing software, jewellery inventory software, jewellery POS software India"
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
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
              >
                <Gem className="w-4 h-4" />
                Built for Indian Jewellery Shops & Chains
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight mb-4"
              >
                Stop Running Your Shop on{" "}
                <span className="text-primary">Three Different Tools</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              >
                Billing software for sales, Tally for accounts, a notebook for karigars, a
                register for gold loans. <strong className="text-foreground">SwarnDesk</strong> replaces
                all four: every transaction posts to real, GST-ready books automatically.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={3}
                className="flex flex-wrap gap-4 items-center"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg font-semibold"
                  >
                    Sign Up Now: 7 Day Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 hover:-translate-y-0.5 transition-all"
                  >
                    See a Live Demo
                  </Button>
                </Link>
              </motion.div>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={4}
                className="text-sm text-muted-foreground mt-4"
              >
                7-day free trial, no credit card needed · no long-term lock-in
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={5}
                className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-10 border-t border-border/40"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Why Jewellers Are Switching ── */}
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
                Why Jewellers Are <span className="text-primary">Switching</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Not another billing app. SwarnDesk is built to replace the pile of disconnected
                tools most jewellery shops run on.
              </p>
            </motion.div>

            <div className="hidden md:grid grid-cols-2 gap-6 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 px-1">
                What you deal with today
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-primary px-1">
                With SwarnDesk
              </p>
            </div>

            <div className="space-y-4">
              {comparisonPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="flex gap-3 p-5 rounded-2xl bg-gradient-to-br from-red-50/90 to-orange-50/50 border border-red-100">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.before}</p>
                  </div>
                  <div className="flex gap-3 p-5 rounded-2xl bg-primary/5 border border-primary/20">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground leading-relaxed">{point.after}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sales & Billing ── */}
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
                <Receipt className="w-3.5 h-3.5" />
                Sales & Billing
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                From Scan to Invoice in{" "}
                <span className="text-primary">Under a Minute</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Everything a jeweller actually needs, built from the ground up for Indian
                jewellers, whether you run a small counter or a chain of showrooms.
              </p>
            </motion.div>

            <FeatureGrid items={salesBillingFeatures} cols="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </section>

        {/* ── Inventory & Purchases ── */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Package className="w-3.5 h-3.5" />
                Inventory & Purchases
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Know Exactly What You Have:{" "}
                <span className="text-primary">And What You Owe For It</span>
              </h2>
            </motion.div>

            <FeatureGrid items={inventoryFeatures} />
          </div>
        </section>

        {/* ── Customers & Karigars ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-medium mb-4">
                <Users className="w-3.5 h-3.5" />
                Customers & Karigars
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Relationships and Workshop Tracking:{" "}
                <span className="text-primary">Not Spreadsheets</span>
              </h2>
            </motion.div>

            <FeatureGrid items={customerKarigarFeatures} />
          </div>
        </section>

        {/* ── Girvi ── */}
        <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Landmark className="w-3.5 h-3.5" />
                Girvi: Gold Loan / Pawn
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                A Complete Pawn-Broking Module{" "}
                <span className="text-primary">Most Jewellery Software Doesn't Even Attempt</span>
              </h2>
            </motion.div>

            <FeatureGrid items={girviFeatures} />
          </div>
        </section>

        {/* ── Full Double-Entry Accounting ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                Full Double-Entry Accounting
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                The Feature That{" "}
                <span className="text-primary">Actually Replaces Tally</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Every transaction posts itself; you never touch a ledger by hand.
              </p>
            </motion.div>

            <FeatureGrid items={accountingFeatures} cols="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </section>

        {/* ── GST Compliance Suite ── */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-sm font-medium mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                GST Compliance Suite
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                What You Hand Your CA Every Month:{" "}
                <span className="text-primary">Generated in One Click</span>
              </h2>
            </motion.div>

            <FeatureGrid items={gstFeatures} />
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
                Everything a jeweller typically asks before switching to SwarnDesk.
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
                <IndianRupee className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Books That Stay Correct:{" "}
                <span className="text-primary">Automatically</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Every sale, purchase, loan, and karigar transaction lands in the same
                GST-ready books, every time. Start your 7-day free trial: no credit card,
                no long-term lock-in.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full px-10 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg font-semibold text-base"
                  >
                    Sign Up Now: 7 Day Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 hover:-translate-y-0.5 transition-all"
                  >
                    See a Live Demo
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
