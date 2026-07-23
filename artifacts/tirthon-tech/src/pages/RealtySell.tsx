import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  AlertTriangle,
  XCircle,
  IndianRupee,
  BarChart3,
  Shield,
  Calendar,
  FileText,
  Bell,
  Search,
  Layers,
  TrendingUp,
  Home,
  ClipboardList,
  UserCheck,
  Megaphone,
  Clock,
  Star,
  MapPin,
  Settings,
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
    heading: "Leads from 10 sources, none in the same place",
    body: "Your 99acres lead came in at 8:47 AM. Your agent saw it at 11. By then the buyer had already visited three competitors. Meanwhile, the MagicBricks lead from yesterday is still sitting in someone's inbox, and the Housing.com one got forwarded to a group chat nobody checks. Every Indian real estate sales team runs on this exact chaos, and it costs deals every single week.",
  },
  {
    icon: Clock,
    heading: "Two hours is all you get. Most teams waste four.",
    body: "A portal lead has a conversion window. If your agent doesn't call within two hours, that buyer has already spoken to two other brokers and mentally moved on. There's no SLA enforcement, no alert to the manager, and no way to know it's happening until the month-end conversion number is already bad. By then it's too late to fix.",
  },
  {
    icon: XCircle,
    heading: "Units get double-booked over WhatsApp voice notes",
    body: "Two agents block the same flat in the same hour. One is a voice note in the sales group. The other is a message the developer's coordinator missed. One angry client, one refund to process, one developer relationship damaged. There's no formal blocking: just a message in a group chat that everyone read but nobody owned.",
  },
  {
    icon: IndianRupee,
    heading: "Commission disputes every single month-end",
    body: "Agent says they sourced the deal. Broker says they closed it. The channel partner wants a co-mediation cut. The manager is pulling up WhatsApp threads from three weeks ago trying to reconstruct who did what and when. Nobody has a clean ledger. Nobody trusts the spreadsheet. And this argument is word-for-word identical to the one you had last month.",
  },
];

const features = [
  {
    icon: Users,
    title: "Central Lead Inbox",
    description:
      "Every lead (99acres, MagicBricks, Housing.com, Facebook Ads, Google Ads, walk-in, referral, IVR) lands in one central inbox with source tagging and auto-assignment to the right agent. No more copying leads from portals into Excel at end of day.",
  },
  {
    icon: Clock,
    title: "SLA Tracking & Overdue Alerts",
    description:
      "Fresh, Pending, and Overdue statuses update in real time. Any lead untouched for 2+ hours surfaces on the manager dashboard immediately. Sales managers can finally see which leads are bleeding before the conversion number confirms it.",
  },
  {
    icon: Layers,
    title: "Visual Real Estate Sales Pipeline",
    description:
      "New → Contacted → Qualified → Proposal → Negotiation → Closed. One-click stage changes with every transition logged: timestamp, agent name, and notes. The entire deal pipeline is visible to the manager at a glance, no chasing required.",
  },
  {
    icon: Building2,
    title: "Unit-Level Inventory Management",
    description:
      "Track every unit: BHK type, floor, facing, BSP, PLC, parking, premium flag. Unit status flows from Available → Blocked → Booked → Sold with a mandatory manager approval at each step. No informal holds. No double-bookings. Ever.",
  },
  {
    icon: FileText,
    title: "Interactive Cost Sheet Builder",
    description:
      "Base price, floor rise, facing PLC, parking, clubhouse, GST at 5%: auto-calculated and formatted for the buyer. No more seventeen versions of the Excel cost sheet with conflicting formulas. One correct sheet, share-ready in one click.",
  },
  {
    icon: Shield,
    title: "Approval Workflow for Every Exception",
    description:
      "Unit blocks, price discounts, custom payment plans: every exception goes through a formal request and manager sign-off with a mandatory documented reason. Full audit trail. No more verbal commitments that management hears about at closing.",
  },
  {
    icon: Calendar,
    title: "Site Visit Scheduler",
    description:
      "Book viewings with lead, property, agent, date, and time. Check-in, No-Show, and Cancelled statuses tracked automatically. Managers see the daily site visit load across the entire team in real time. No morning WhatsApp roundups needed.",
  },
  {
    icon: IndianRupee,
    title: "Commission Ledger & Tracker",
    description:
      "Rate, earned amount, and payment status per deal. Mark as paid in one click. The built-in calculator handles gross commission, GST at 18%, agent splits, referral fees, franchise fees, and co-mediation. One ledger. Everyone trusts the same number.",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    description:
      "Today\'s site visits, overdue leads, and hot leads at a glance. Source ROI, CPL by channel, agent-wise performance, BHK demand trends, project-wise P&L, and scenario modelling. The numbers your sales head actually needs (without building pivot tables in Excel).",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description:
      "Managers get instant alerts for new unassigned portal leads the moment they land. Agents are notified immediately when a lead is assigned to them. Toast popups during active sessions. Global search across all leads with a single keyboard shortcut.",
  },
];

const differentiators = [
  {
    icon: Home,
    title: "Built specifically for Indian real estate",
    body: "IVR, WhatsApp, 99acres, MagicBricks, Housing.com are first-class lead sources, not afterthoughts mapped to a generic CRM field. PLC, BSP, floor rise, RERA compliance: the software speaks the same language your sales team does.",
  },
  {
    icon: Shield,
    title: "Role-aware from day one: no setup required",
    body: "Agents physically cannot see other agents\' leads. No configuration needed. No hoping they don\'t look at the wrong data. Owner, Manager, CFO, Agent, Broker: each has a pre-defined permission set that works the moment the account is created.",
  },
  {
    icon: ClipboardList,
    title: "Every exception leaves a paper trail",
    body: "Discounts, unit blocks, custom payment plans: every exception goes through an approval workflow, not a WhatsApp message. Every rejection has a documented reason on record. Auditors, developers, and CFOs all see the same trail.",
  },
  {
    icon: Building2,
    title: "Unit-level inventory, not just property listings",
    body: "Track every individual unit\'s status down to floor and facing direction. No double-bookings. No informal blocks that create disputes. A unit can only move status with explicit manager sign-off; it\'s structurally enforced, not policy-dependent.",
  },
  {
    icon: IndianRupee,
    title: "Commission clarity that ends month-end disputes",
    body: "Agents know exactly what they\'ve earned. Managers know exactly what\'s outstanding. No month-end reconstruction from WhatsApp threads. One commission ledger with one set of numbers that every role in the organization can trust.",
  },
];

const whoFor = [
  {
    icon: Building2,
    title: "Real Estate Developers",
    description: "Running 1-5 active projects with an in-house sales team. Need formal structure around lead assignment, site visit tracking, unit blocking approvals, and project-wise sales analytics (without hiring a CRM administrator).",
  },
  {
    icon: Users,
    title: "Real Estate Brokerage Firms",
    description: "Managing 5-50 agents across multiple developer projects. Need visibility into agent activity, SLA enforcement on lead follow-up, accurate commission tracking, and role-based access so agents only see their own pipeline.",
  },
  {
    icon: MapPin,
    title: "Builder Sales Offices",
    description: "Ready to replace the Excel + WhatsApp workflow with a system built for how a builder\'s sales office actually operates (especially when the site visit team, back-office, and channel partners are all separate roles).",
  },
  {
    icon: TrendingUp,
    title: "Franchise Real Estate Brands",
    description: "Multiple agents, multiple developer projects, commission splits across direct agents and channel partners. Need role-based access, central commission tracking, and a record that every stakeholder can trust (without managing it in spreadsheets).",
  },
];

const roles = [
  { role: "Owner", access: "Everything: admin, delete, approvals, financials, user management" },
  { role: "Manager", access: "All leads, deals, properties, viewings, activities, approvals for the full team" },
  { role: "CFO", access: "Dashboard, commission ledger, project financials, settings" },
  { role: "Agent", access: "Only their own leads, deals, viewings, and activities" },
  { role: "Broker", access: "Only their own leads, deals, and commission records" },
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
    q: "We already use a generic CRM. Why would we switch to RealtySell?",
    a: "Generic CRMs are built for SaaS or e-commerce sales cycles. They have no concept of unit-level inventory, no idea what a PLC is, no native integrations with 99acres or MagicBricks, and absolutely no notion of a blocking approval or a commission split between an agent and a channel partner. You end up spending two months configuring the CRM and another month training your team, then reverting to Excel anyway. RealtySell ships on day one with everything a real estate sales team in India actually needs, with zero configuration required.",
  },
  {
    q: "Can we capture leads directly from 99acres, MagicBricks, and Housing.com?",
    a: "Yes. RealtySell integrates with all major Indian property portals so leads auto-populate in your central inbox with source tagging the moment they come in. Walk-ins, referrals, Facebook Ads, Google Ads, IVR, WhatsApp, website, email: every source is supported. Every lead carries a source tag so you know your exact CPL by channel and can make data-driven decisions about where to spend your marketing budget.",
  },
  {
    q: "How does the unit blocking approval work, and does it actually prevent double-bookings?",
    a: "When an agent wants to hold a unit for a client, they submit a Block Request inside RealtySell. The unit stays in Available status until a manager or owner approves that request. No WhatsApp message, no voice note, no informal hold changes the unit\'s status in the system. The same formal approval applies to the Booked and Sold transitions. Every status change is timestamped and linked to the approving manager. Double-bookings are structurally impossible; it\'s not a policy, it\'s how the system works.",
  },
  {
    q: "What happens when an agent promises a buyer a discount we haven\'t approved?",
    a: "They can\'t promise what the system won\'t allow. Any price exception, floor-rise waiver, custom payment plan, or discount requires an approval request that goes to the manager before anything is communicated to the buyer. The manager approves or rejects it with a mandatory documented reason. The trail is permanent. No more verbal commitments showing up at the signing table that management is hearing about for the first time.",
  },
  {
    q: "How does commission tracking work across agents, brokers, and channel partners?",
    a: "Every closed deal has a commission record with the agent or broker name, deal value, brokerage rate, earned amount, and payment status. Managers mark commissions as paid in one click. The built-in calculator handles the full chain: gross commission, 18% GST, direct agent split, referral fee, franchise fee, and co-mediation amount. Agents and brokers see their own ledger in real time: they always know exactly what they\'re owed, and managers always know what\'s outstanding. Month-end disputes about who did what are a problem from a previous era.",
  },
  {
    q: "Can different agents on the team see each other\'s leads?",
    a: "No. Agents see only the leads assigned to them. Brokers see only their own leads and commission records. Managers see the full team\'s pipeline. Owners see everything across all projects. These permissions are pre-configured by role; there is no manual setup and agents cannot escalate their own access. You don\'t need to trust your agents to be discreet. The system handles it.",
  },
  {
    q: "We have multiple projects running simultaneously. Can RealtySell handle inventory across all of them?",
    a: "Yes. You can set up multiple projects, each with its own independent unit inventory. Units are tracked at the floor, BHK type, and facing direction level across every project. The dashboard shows a portfolio summary across all active projects: total units, status breakdown by project, and total portfolio value. Managers switch between project views without any reconfiguration.",
  },
  {
    q: "Our team does 15-20 site visits per week. How does the site visit management work?",
    a: "The site visit scheduler lets you book viewings for a specific lead, property, agent, date, and time (all linked together). Agents check in when they arrive or mark a No-Show if the buyer doesn\'t turn up. Managers see the daily visit load across the entire team in one view. No-shows get flagged for follow-up. Site visit conversion rate by agent is tracked in the analytics dashboard so you can see which agents are turning visits into deals.",
  },
  {
    q: "What analytics does the dashboard provide for a real estate sales head?",
    a: "The manager dashboard gives you today\'s focus view: site visits scheduled, overdue leads, hot leads. The analytics section covers: lead conversion funnel by pipeline stage, source ROI with CPL by channel so you know which portals are worth the spend, sales team performance per agent, lost lead reasons breakdown, BHK demand from active leads, buyer budget range distribution, project-wise P&L with invested vs. collected vs. outstanding, and scenario modelling where you can adjust price or cost assumptions to see margin impact in real time.",
  },
  {
    q: "How is RealtySell deployed and what does onboarding look like?",
    a: "RealtySell is a web-based platform: no installation on individual machines, no IT department required. It runs on secure cloud infrastructure and each client gets a dedicated environment. We handle the full setup, including onboarding your team and migrating your existing data from Excel sheets or your previous CRM. Ongoing support is included. Most teams are fully operational within a week of signing up.",
  },
];

export default function RealtySell() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "RealtySell",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "RealtySell is a purpose-built real estate CRM for developers, builders, and brokerage firms in India. Manage leads from 99acres, MagicBricks, and Housing.com in one central inbox. Track unit-level inventory with approval workflows, manage site visits, enforce commission accountability, and get real-time analytics, all designed for the way Indian real estate sales actually works.",
        url: "https://tirthontech.com/products/realtysell",
        provider: {
          "@type": "Organization",
          name: "Tirthon Tech",
          url: "https://tirthontech.com",
        },
        featureList: [
          "Lead capture from 99acres, MagicBricks, Housing.com, Facebook Ads, Google Ads, Walk-in, Referral, IVR, WhatsApp, Website, Email",
          "SLA tracking with real-time overdue alerts for sales managers",
          "Unit-level inventory management with formal blocking approval workflow",
          "Interactive cost sheet builder with GST and PLC auto-calculation",
          "Site visit scheduling and no-show tracking for real estate teams",
          "Commission ledger with built-in calculator for agents, brokers, and channel partners",
          "Role-based access control pre-configured for Owner, Manager, CFO, Agent, and Broker",
          "Approval workflow for discounts, unit blocks, and custom payment plans",
          "Real estate deal pipeline with Kanban view and stage-transition audit trail",
          "Dashboard with source ROI, CPL by channel, and project-wise P&L analytics",
          "RERA-compliant audit trails for all approvals and unit status changes",
        ],
        additionalProperty: [
          { "@type": "PropertyValue", name: "Target Market", value: "Real estate developers, builders, and brokerage firms in India" },
          { "@type": "PropertyValue", name: "Deployment", value: "Web-based, cloud-hosted, no installation required" },
          { "@type": "PropertyValue", name: "Lead Sources", value: "99acres, MagicBricks, Housing.com, Facebook Ads, Google Ads, WhatsApp, Walk-in, Referral, IVR, Email, Phone, Website" },
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
        title="RealtySell: Real Estate CRM for Developers, Builders & Brokers in India"
        description="RealtySell is a purpose-built real estate CRM for Indian developers, builders, and brokerage firms. Manage leads from 99acres and MagicBricks, track unit inventory with approval workflows, schedule site visits, log commissions, and run your entire property sales pipeline. All from one platform built for Indian real estate."
        keywords="real estate CRM India, CRM for real estate developers, real estate broker CRM, property sales CRM India, lead management software real estate, real estate sales pipeline software, CRM for builders India, real estate agent CRM, property CRM software, builder CRM India, real estate sales management software, CRM for real estate brokerage, real estate lead tracking software, property developer CRM India, site visit management software, commission tracking real estate CRM, unit inventory management software, real estate deal pipeline, RERA compliant CRM India, 99acres lead management CRM"
        canonical="https://tirthontech.com/products/realtysell"
        ogTitle="RealtySell: Real Estate CRM Built for Indian Developers, Builders & Brokers"
        ogDescription="Capture leads from 99acres, MagicBricks, and Housing.com into one inbox. Track unit inventory with approval workflows. Manage site visits, commissions, and your full sales pipeline, built specifically for how real estate teams in India actually work."
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
                <Building2 className="w-3.5 h-3.5" />
                Real Estate CRM India · Lead Management · Unit Inventory · Commission Tracking
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6"
            >
              Your Real Estate Sales Team Deserves Better Than{" "}
              <span className="text-primary">Excel and WhatsApp</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              RealtySell is the complete real estate CRM built exclusively for developers, builders, and brokerage firms in India. Leads from 99acres, MagicBricks, Housing.com, Facebook, and walk-ins, all in one place. Units tracked with approval workflows, site visits managed, commissions logged accurately, and every exception on the record. Built for the way Indian property sales actually happens.
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
                  Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
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

        {/* ── Pain Points ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">If Any of This Sounds Familiar, Keep Reading</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every real estate sales team in India runs on some version of this workflow. The people aren&apos;t the problem. The tools are.
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

        {/* ── Features Grid ── */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything a Real Estate Sales Team in India Actually Needs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Not a generic CRM configured for real estate. A property sales CRM built from the ground up for how Indian developers, builders, and brokerage firms close deals.
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

        {/* ── Lead Management Deep Dive ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Real Estate Lead Management</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">One inbox. Every portal. No lead left behind.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A lead comes in from 99acres at 7:43 AM. Another from a Facebook campaign at 8:12 AM. A walk-in at 10:30. All three are in the same dashboard, tagged by source, auto-assigned to the right agent, and on an SLA timer the manager can see in real time (without sending a single WhatsApp message to ask for a status update).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Hot / Warm / Cold lead scoring. Full-text search across name, phone, and email. Tab views for Follow Ups, Site Visits, Negotiation, Won, and Lost (each with live counts). Structured lost lead capture with documented reasons: budget mismatch, location preference, competitor project, project delay, configuration unavailable, or no response. Every lost lead teaches you something.
                </p>
                <ul className="space-y-3">
                  {[
                    "99acres, MagicBricks, Housing.com, Facebook, Google, WhatsApp, Walk-in, Referral, IVR, Website, Phone, Email",
                    "Lead score 0-100 with Hot / Warm / Cold color coding",
                    "SLA timer: Fresh (<1hr), Pending (1-2hr), Overdue (>2hr)",
                    "Unassigned lead alert banner: assign in bulk from one popup",
                    "Full pipeline: New → Contacted → Qualified → Proposal → Negotiation → Closed",
                    "CSV export of any filtered view",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Activity & Follow-up Tracking</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Every call, visit, and follow-up: on record, not in memory.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Managers currently ask agents what happened with a lead. Agents give a verbal summary. None of it is documented anywhere. RealtySell logs every interaction (Phone Call, Site Visit, Negotiation Follow-up) with date, time, property, and the agent&apos;s remarks. If a deal goes sideways, there is a complete activity trail to review, not a gap where the information should be.
                </p>
                <ul className="space-y-3">
                  {[
                    "Log: Phone Call, Site Visit, Site Visit Follow-up, Negotiation, Negotiation Follow-up, Sale",
                    "Overdue activities highlighted in red",
                    "Today / Tomorrow / Pending / Future / Completed tabs",
                    "Inline remark editing without opening a form",
                    "Inline status: Pending / Done / Cancelled",
                    "Full CSV export of activity log",
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

        {/* ── Inventory & Cost Sheet ── */}
        <section className="py-20 bg-gradient-to-b from-muted/40 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Unit Inventory Management Software</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">No unit moves without a manager&apos;s sign-off. Not one.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every unit is tracked by project, floor, BHK type (Studio to 4BHK, Penthouse, Commercial), and facing direction. BSP, PLC, parking charges, and premium flags are stored per unit. When an agent wants to block a unit for a buyer, they raise a formal Block Request. The unit stays Available in the system until a manager approves. Double-bookings become structurally impossible, not a policy your team has to remember, but a constraint the software enforces automatically.
                </p>
                <ul className="space-y-3">
                  {[
                    "Unit statuses: Available → Blocked → Booked → Sold",
                    "Blocking raises a formal approval request: no informal holds",
                    "Portfolio summary: total value, units by status, value by category",
                    "Filter by project, BHK type, facing, floor, status",
                    "Release blocked units back to available if deal falls through",
                    "BSP (₹/sqft), PLC, parking, and premium tracked per unit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Cost Sheet Builder</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">One correct cost sheet. Not seventeen Excel versions.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every agent has their own version of the cost sheet Excel. Every version has slightly different formulas. Every third one has a GST calculation error. RealtySell calculates it once, correctly, every time: floor rise, facing PLC, parking, clubhouse, maintenance, GST at 5%, stamp duty reminder included. Formatted for the buyer, not for internal use. Ready to share in one click, from any device.
                </p>
                <ul className="space-y-3">
                  {[
                    "Inputs: base sale price, floor rise, facing PLC, parking, clubhouse, maintenance",
                    "Floor premium: ₹50/sqft/floor auto-applied",
                    "Facing premium: garden / pool / corner / east / north (auto-applied)",
                    "GST at 5%: correctly calculated, not an afterthought",
                    "Stamp duty reminder included in the output",
                    "Print/share-ready: formatted for the buyer, not for internal use",
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

        {/* ── Commission & Approvals ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Commission Tracking Real Estate CRM</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Agents know what they&apos;re owed. Managers know what&apos;s outstanding. No more month-end arguments.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The built-in commission calculator handles the entire chain: sale price → brokerage percentage → direct agent split → referral fee → franchise fee → co-mediation amount → GST at 18% → agent take-home. One ledger. Everyone trusts the same number. The month-end argument about who sourced the deal and who closed it is a problem from your previous era.
                </p>
                <ul className="space-y-3">
                  {[
                    "Commission ledger: agent/broker, deal, value, rate, earned, status",
                    "Mark as Paid with one click (manager+ only)",
                    "Outstanding liability and total paid summary cards",
                    "Calculator: gross, GST, net, agent take-home, brokerage net",
                    "Quick-fill: ₹50L, ₹1Cr, ₹2Cr, ₹5Cr, ₹10Cr",
                    "Supports agent and broker commission types separately",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 block">Approval Workflow</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Every exception documented. Every decision auditable. No more surprises at closing.</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When an agent promises a buyer a 3% discount or a deferred payment schedule, that promise needs to go through someone with authority to make it. RealtySell formalizes every exception: the agent submits an approval request, the manager reviews it and either approves or rejects with a documented reason, and the entire trail is permanent. No more verbal commitments that management hears about for the first time at the signing table.
                </p>
                <ul className="space-y-3">
                  {[
                    "Approval types: Unit Block, Price Discount, Custom Payment Plan, Other",
                    "Requests created by agents, reviewed by Owner, Manager, or CFO",
                    "Mandatory reason for every rejection",
                    "Full trail: who requested, when, who reviewed, review note",
                    "Stats: pending count, type breakdown, total approved",
                    "Toggle to view full history including reviewed requests",
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

        {/* ── Role-Based Access ── */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Role-Based Access. Pre-Configured. No Setup Required.</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Adding a new agent doesn&apos;t mean sharing a password and hoping they don&apos;t look at the wrong data. Every role has exactly the access it needs, and no more. The moment the account is created, the permissions are already right.
              </p>
            </motion.div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Role</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">What They Can Access</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((r, i) => (
                    <tr key={r.role} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                      <td className="px-6 py-4 font-semibold text-foreground whitespace-nowrap">{r.role}</td>
                      <td className="px-6 py-4 text-muted-foreground">{r.access}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who Uses RealtySell</h2>
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

        {/* ── Differentiators ── */}
        <section className="py-20 bg-gradient-to-b from-amber-50/40 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Real Estate Teams in India Choose RealtySell Over Generic CRMs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                You could spend two months configuring Salesforce or Zoho for real estate. Teams have tried. They end up back on Excel. RealtySell ships ready to use on day one for Indian property sales: no configuration required.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <d.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{d.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Questions Real Estate Teams Ask Before Switching</h2>
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
                Your leads, units, and commissions: in one place, finally.
              </h2>
              <p className="text-background/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Real estate teams that switch to RealtySell stop losing leads to slow follow-up, stop arguing about commission splits at month-end, and stop double-booking units over WhatsApp voice notes. That&apos;s what it looks like when the CRM was actually built for the way Indian real estate works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-base font-semibold">
                    Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
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
