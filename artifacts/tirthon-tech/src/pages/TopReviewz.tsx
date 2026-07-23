import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Star,
  Shield,
  Mail,
  Users,
  BarChart3,
  QrCode,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  AlertTriangle,
  XCircle,
  Bell,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  TrendingUp,
  Zap,
  Eye,
  Clock,
  Settings,
  Search,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const stats = [
  { value: "3.5×", label: "more Google reviews on average" },
  { value: "68%", label: "of complaints caught privately before going public" },
  { value: "2 min", label: "to get fully set up" },
  { value: "0", label: "technical knowledge required" },
];

const painPoints = [
  {
    icon: Star,
    heading: "Saturday night: 47 covers, everyone happy. Monday morning: a 2-star review.",
    body: "One table waited 20 minutes for dessert. They didn't say anything. They smiled, paid, and left. Then they got home, opened Google, and wrote two sentences that will sit under your restaurant's name for the next three years. You had no idea who they were. You still don't. That's the problem topreviewz solves.",
  },
  {
    icon: AlertTriangle,
    heading: "Your clinic receptionist sees the 1-star before the doctor does.",
    body: "A patient had a billing confusion. Nobody at the front desk heard a complaint. No call the next day, no email. Just a 1-star on Google Maps with the words 'rude staff', and now every new patient searching your clinic name reads that before they ever book an appointment.",
  },
  {
    icon: XCircle,
    heading: "Your stylist gave a bad haircut. The client never said a word, until Google.",
    body: "She sat in the chair, said it looked fine, paid and left. That evening she left a 2-star review and moved to another salon. You found out three days later when your cousin mentioned it. Asking for reviews feels awkward, so your staff doesn't do it consistently, and the customers who complain are always the ones motivated enough to find Google on their own.",
  },
  {
    icon: Eye,
    heading: "You sent review requests last month. You have no idea if anyone opened them.",
    body: "You asked a few customers to leave a review over WhatsApp. Maybe one did. Your retail store's Google rating has been stuck at 3.9 for eight months. You don't know if it's the requests that aren't working, or the emails not being opened, or something else entirely. You're running the whole thing blind.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Smart Rating Gate: Negative Review Prevention",
    description:
      "Customers choose a star rating before reaching Google. 4 and 5 stars go straight to your Google review page. 1, 2, and 3 stars land in your private inbox. Unhappy customers get heard, just not by the entire internet first. This is the core of topreviewz's negative review prevention software.",
  },
  {
    icon: Mail,
    title: "Automated Review Request Campaigns",
    description:
      "Select customers from your list and send branded review request emails in bulk. Your business name, the customer's name, a live preview before you send, and a unique one-time link for each customer. This is review request email software built for owners who don't want to think about it.",
  },
  {
    icon: MessageSquare,
    title: "Private Feedback Inbox",
    description:
      "Every 1, 2, or 3 star response lands here, never on Google. Filter by Open or Resolved. Get an email notification the moment a complaint comes in. Call the customer, sort it out, mark it resolved. This is your early warning system for customer complaints before they become public reviews.",
  },
  {
    icon: Users,
    title: "Customer CRM: All Contacts in One Place",
    description:
      "Add customers manually or import via CSV from your phone, spreadsheet, or POS system. Store name, email, phone, and private notes. See per-customer status at a glance: Sent, Opened, Clicked, or Reviewed. Filter by Uncontacted, Follow-up, or Reviewed. This is customer review tracking software built for busy owners.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard: See What's Working",
    description:
      "Requests sent, reviews posted, complaints intercepted, open rate, conversion rate, all in one view. A weekly bar chart of requests sent versus reviews received. A real-time activity feed of your last 20 customer interactions. No more guessing whether your Google rating improvement efforts are actually working.",
  },
  {
    icon: QrCode,
    title: "Google Review QR Code Generator",
    description:
      "Generate a printable QR code that sends customers directly to your Google review page. Print it on receipts, put it on tables, stick it near the checkout counter. Scan and review. No email needed. Copy the direct Google review URL to send via WhatsApp or SMS in one click.",
  },
];

const whoFor = [
  { icon: Star, label: "Restaurants & cafes" },
  { icon: Star, label: "Salons & spas" },
  { icon: Star, label: "Auto repair shops" },
  { icon: Star, label: "Dental & medical clinics" },
  { icon: Star, label: "Retail stores" },
  { icon: Star, label: "Any local business that relies on Google reviews for new customers" },
];

const steps = [
  { step: "01", title: "Create your account", body: "Sign up and enter your business name, category, and Google listing details. Takes about 60 seconds." },
  { step: "02", title: "Connect your Google listing", body: "Enter your Google Place ID (the only technical step in the whole setup). We link you directly to Google's Place ID lookup tool and walk you through it." },
  { step: "03", title: "Import your customers", body: "Paste in a list or upload a CSV from your phone contacts, your salon software, your POS, or a spreadsheet. Name and email are all you need." },
  { step: "04", title: "Send your first campaign", body: "Select your customers, preview the email exactly as they will see it, and send. Your smart rating gate is live from the moment the first customer clicks." },
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
    q: "Does this actually work with real Google reviews, or is it some kind of workaround?",
    a: "It sends your customers to your actual Google review page: the exact same page they would find by searching your business name on Google Maps. The rating gate is the step before Google, not a replacement for it. Customers who pick 4 or 5 stars click through and leave a real, public Google review. Customers who pick 1, 2, or 3 stars are shown a private feedback form instead. Google only sees the customers who chose to review. Your reviews are completely genuine.",
  },
  {
    q: "Is filtering reviews like this allowed by Google?",
    a: "Yes. Google's review policies prohibit two things: paying or incentivising people to leave reviews, and selectively removing or hiding existing reviews. topreviewz does neither. Routing unhappy customers to a private feedback channel before they post is a standard customer service practice; it's no different from a manager asking a dissatisfied customer to speak privately rather than argue in the dining room. We do not touch, remove, or manipulate any review that has already been posted on Google.",
  },
  {
    q: "What actually happens when a customer picks 1, 2, or 3 stars?",
    a: "They land on a private feedback form asking what went wrong. When they submit it, that response goes directly to your inbox, not to Google. You get an email notification immediately. You can call the customer, address the issue, and mark it resolved inside topreviewz. The customer never posts a public review unless they separately navigate to Google and choose to write one on their own. In our experience, most unhappy customers just want to be heard, and once you contact them, very few bother to post publicly.",
  },
  {
    q: "I am not technical at all. Will I be able to set this up?",
    a: "Yes. The only part that requires any lookup is finding your Google Place ID; we give you a direct link to Google's own Place ID finder and a step-by-step walkthrough. Everything else is your business name, your customer list, and a few clicks. Restaurant owners, clinic managers, and salon owners with no technology background have been up and running in under two minutes. If you can use WhatsApp, you can use topreviewz.",
  },
  {
    q: "My customer contacts are scattered across my phone, a spreadsheet, and my billing software. How do I get them in?",
    a: "Two ways. You can add customers one at a time using a simple form (useful if you want to start with your regulars). Or you can export your contacts from wherever they currently live (your phone contacts, Google Sheets, your salon management software, your POS system) as a CSV file and upload it in one go. All you need is a column for name and a column for email. Phone is optional. Most business owners get their full customer list imported in under five minutes.",
  },
  {
    q: "Can someone game the system by clicking the review link multiple times?",
    a: "No. Every review request email contains a unique one-time link that is generated specifically for that customer for that send. The link expires after it has been used once. This means the same person cannot click through to Google multiple times, and sharing the link with someone else will not generate an extra review. Each review that comes through topreviewz is from a distinct, real customer.",
  },
  {
    q: "What does the analytics dashboard actually show me?",
    a: "It shows you the full picture: how many review requests you have sent, how many resulted in a Google review (4 or 5 star redirects), how many complaints you caught privately (1 to 3 star responses), your open rate (percentage of emails opened), and your conversion rate (percentage of requests that resulted in some action). There is also a weekly bar chart so you can see whether your Google rating is improving over time, and a live activity feed of your last 20 customer interactions. For the first time, you will actually know whether your review efforts are working.",
  },
  {
    q: "How does the QR code work for my restaurant or shop?",
    a: "The QR code links directly to your Google review page. It is designed for in-person use: print it on the back of your receipt, laminate it and place it on each table, or tape it near your checkout. A customer scans it with their phone camera and goes straight to Google: no email, no campaign needed. You can also copy the direct URL from the same page and paste it into a WhatsApp message or SMS if you prefer to send it manually.",
  },
  {
    q: "Will my customers know their feedback is being filtered before it reaches Google?",
    a: "No. Customers see a clean, branded star rating selector followed by either a redirect to Google (for 4 and 5 stars) or a feedback form (for 1 to 3 stars). The experience is branded to your business and looks like a normal review flow. There is no mention of filtering, routing, or topreviewz. Customers simply have two different experiences depending on how satisfied they were: one gets their feedback to Google, the other gets it to you.",
  },
  {
    q: "Which types of businesses get the most value from topreviewz?",
    a: "Any local business where new customers check Google reviews before deciding to visit. That means restaurants and cafes where diners look at your rating before booking a table on a Friday night. Dental and medical clinics where patients read reviews before trusting someone with their health. Salons and spas where a client wants to know what other customers experienced before their first appointment. Retail stores where shoppers compare your rating against the shop down the road. If a stranger looks at your Google rating before walking through your door, topreviewz directly affects whether they come in.",
  },
];

export default function TopReviewz() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "topreviewz",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "topreviewz is a Google review management platform for local businesses in India and beyond. It automates review requests via email campaigns, intercepts negative customer feedback privately before it reaches Google through a smart rating gate, and provides a private complaints inbox, customer CRM, and analytics dashboard, all set up in 2 minutes with no technical skills required.",
        url: "https://tirthontech.com/products/topreviewz",
        provider: {
          "@type": "Organization",
          name: "Tirthon Tech",
          url: "https://tirthontech.com",
        },
        featureList: [
          "Smart rating gate: routes 1-3 star feedback to private inbox, 4-5 stars to Google review page",
          "Automated review request email campaigns for restaurants, clinics, salons, and retail stores",
          "Private negative feedback inbox with Open/Resolved tracking and instant email notifications",
          "Customer CRM with CSV import, per-customer review status, and internal notes",
          "Analytics dashboard showing open rate, conversion rate, reviews posted, and complaints caught",
          "Google Review QR code generator for receipts, tables, and in-store displays",
          "Unique one-time review links per customer to prevent duplicate or fake reviews",
          "2-minute onboarding with no technical knowledge required",
          "Negative review prevention software for local businesses",
          "Online reputation management for restaurants, salons, dental clinics, and retail stores",
        ],
        additionalProperty: [
          { "@type": "PropertyValue", name: "Average review increase", value: "3.5x more Google reviews" },
          { "@type": "PropertyValue", name: "Complaints caught privately", value: "68% before going public" },
          { "@type": "PropertyValue", name: "Setup time", value: "2 minutes" },
          { "@type": "PropertyValue", name: "Target market", value: "Local businesses in India relying on Google reviews for new customers" },
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
        title="topreviewz: Google Review Management Software for Restaurants, Clinics & Salons"
        description="topreviewz helps local businesses get more Google reviews automatically and stop negative reviews before they go public. Smart rating gate, automated review request emails, private feedback inbox, and customer CRM, set up in 2 minutes, no tech skills needed. Built for restaurants, clinics, salons, and retail stores across India."
        keywords="Google review management software, get more Google reviews small business, negative review prevention software, review request email software, local business reputation management, Google review automation India, review management for restaurants, review management for dental clinics, salon review management, retail store review management, customer review tracking software, review management platform India, automated review requests India, Google rating improvement software, online reputation management small business, customer feedback management software, Google review QR code generator, reputation management for local businesses, review collection software, private feedback inbox"
        canonical="https://tirthontech.com/products/topreviewz"
        ogTitle="topreviewz: Get More Google Reviews. Stop Bad Ones Before They Go Public."
        ogDescription="A smart rating gate that intercepts unhappy customers privately, automated review request email campaigns, and a customer CRM, all in one dashboard. Built for restaurants, clinics, salons, and retail shops. Set up in 2 minutes, no tech skills needed."
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
                <Star className="w-3.5 h-3.5" />
                Google Review Management · Negative Review Prevention · Private Feedback Inbox
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6"
            >
              Your Happy Customers Don&apos;t Leave Reviews.{" "}
              <span className="text-primary">The Unhappy Ones Do.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              topreviewz automatically asks your customers for Google reviews, catches unhappy ones privately before they post publicly, and shows you exactly what is working, all from one simple dashboard. Set up in 2 minutes. No technical skills needed.
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
                  Talk to Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-14 bg-white border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <p className="text-5xl font-black bg-gradient-to-br from-primary to-amber-600 bg-clip-text text-transparent mb-2 leading-none">{s.value}</p>
                  <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pain Points ── */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sound Familiar?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These are the exact situations topreviewz was built to prevent. Every one of them happens to local business owners every week, and every one of them is avoidable.
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Smart Rating Gate ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Core Feature</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Smart Rating Gate: Negative Review Prevention Built In</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Positive reviews go to Google. Negative ones come to you privately. It happens automatically, every time, for every customer who clicks your review link, whether they came from an email campaign, a QR code scan, or a WhatsApp message.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Customer picks a rating</h3>
                <p className="text-sm text-muted-foreground">They click your review link and see a simple 1 to 5 star selector. Clean, branded to your business name, works on any phone.</p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
                className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">4 or 5 stars → Google</h3>
                <p className="text-sm text-muted-foreground">Instantly redirected to your actual Google review page. They leave a real, public review. Your Google rating goes up.</p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={2}
                className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <ThumbsDown className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">1, 2, or 3 stars → Your inbox</h3>
                <p className="text-sm text-muted-foreground">Shown a private feedback form. You get an email notification immediately. You handle it. It never reaches Google.</p>
              </motion.div>
            </div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center text-sm text-muted-foreground mt-8"
            >
              Every review request email contains a unique one-time link, so the same customer cannot submit more than once, and no fake reviews can be generated.
            </motion.p>
          </div>
        </section>

        {/* ── Features Grid ── */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything Your Google Reputation Needs: in One Dashboard</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                No separate tools to connect. No developers to call. topreviewz handles the complete cycle: from sending your first review request to watching your Google rating climb, all from one place.
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

        {/* ── Feature Deep Dive: Campaigns + CRM ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Automated Review Request Campaigns</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Send to your whole list. Look professional. Know who responded.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Select the customers you want to reach, preview exactly how the email looks before it goes out, and send. Each email is personalised with the customer name, your business name, and a unique review link. No email marketing tools to configure, no HTML to write, no monthly subscription to a separate platform. This is review request email software that works the way a busy restaurant owner or clinic manager actually needs it to.
                </p>
                <ul className="space-y-3">
                  {[
                    "Bulk send to any subset of your customer list",
                    "Customizable email template with your business name",
                    "Template variables: customer name, business name, review link",
                    "Live email preview: see it exactly as the customer will",
                    "Unique one-time link generated per customer, per send",
                    "Per-customer status: Sent → Opened → Clicked → Reviewed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Customer CRM: All Your Contacts in One Place</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Stop managing customers across three different places.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Right now your customer list is split across your phone, a spreadsheet, and your billing software. topreviewz gives you one place for all of them, with private internal notes and a live review status that updates automatically as customers interact with your campaigns. The kind of customer feedback management software that actually fits how a local business works.
                </p>
                <ul className="space-y-3">
                  {[
                    "Add manually or bulk import via CSV from any source",
                    "Store name, email, phone, and private internal notes",
                    "Filter by: All / Uncontacted / Follow-up / Reviewed",
                    "Review request status per customer at a glance",
                    "Last contacted date tracked automatically",
                    "Export your full customer list any time",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Analytics + Feedback Inbox ── */}
        <section className="py-20 bg-gradient-to-b from-muted/40 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Analytics: Google Rating Improvement Tracking</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Finally know whether your Google rating is actually improving.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Most business owners send review requests with no idea what happens next. topreviewz tracks the full funnel: from send to open to click to review, so you can see exactly where customers drop off and whether your Google rating improvement efforts are working. No more guessing. No more running your reputation management blind.
                </p>
                <ul className="space-y-3">
                  {[
                    "Requests Sent: total review request emails delivered",
                    "Reviews Posted: 4 and 5 star redirects that reached Google",
                    "Issues Caught: private complaints intercepted before going public",
                    "Open Rate: percentage of emails opened or clicked",
                    "Conversion Rate: percentage of requests that resulted in action",
                    "Weekly bar chart: requests sent vs. reviews received",
                    "Real-time activity feed of your last 20 customer interactions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Private Feedback Inbox: Handle Complaints Before They Become Reviews</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your unhappy customer is about to post a 2-star review. You have one chance to stop it.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A patient had a confusing experience at your clinic. A diner at your restaurant waited too long. A customer at your retail store got the wrong product. They click your review link, pick 2 stars, and land on your private feedback form. You get an email notification the moment they submit. You call them, sort it out, and mark it resolved. They never go to Google. That is 68 percent of negative experiences handled before the public ever sees them.
                </p>
                <ul className="space-y-3">
                  {[
                    "All 1, 2, and 3 star responses stored privately: never posted to Google",
                    "Instant email notification the moment a complaint comes in",
                    "Filter feedback by Open or Resolved status",
                    "Mark issues resolved and add internal resolution notes",
                    "Track complaint trends over time to identify recurring problems",
                    "Export all private feedback to CSV",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Up and Running in 2 Minutes: No Developer Needed</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                No integrations to configure. No technical knowledge required. If you can send a WhatsApp message, you can set up topreviewz.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <p className="text-3xl font-extrabold text-primary/30 mb-3">{s.step}</p>
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for Local Business Owners Across India</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                If a new customer Googles your business before deciding to walk in, your star rating is one of the most important things you own. topreviewz exists to protect it, and grow it.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                "Restaurants & cafes",
                "Salons & spas",
                "Auto repair shops",
                "Dental & medical clinics",
                "Retail stores",
                "Hotels & guesthouses",
                "Gyms & fitness studios",
                "Any local business relying on Google reviews",
              ].map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground font-medium"
                >
                  <Star className="w-3.5 h-3.5 text-primary" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
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
                More Google reviews. Fewer public surprises. Starting today.
              </h2>
              <p className="text-background/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Businesses running topreviewz do not just collect more Google reviews. They stop finding out about problems from strangers on the internet. They handle complaints before they become public. They watch their rating climb. And they do it all without needing a developer, a marketing agency, or a separate set of tools. That is what 2 minutes of setup actually buys you.
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
