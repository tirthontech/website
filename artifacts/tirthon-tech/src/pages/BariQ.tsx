import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Monitor,
  Users,
  Clock,
  Bell,
  BarChart3,
  FileText,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Smartphone,
  Calendar,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  Layers,
  AlertTriangle,
  ClipboardList,
  Stethoscope,
  Building2,
  Tv,
  Database,
  Globe,
  Zap,
  TrendingUp,
  UserCheck,
  Receipt,
  Send,
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
    heading: "Patients have no idea how long they'll wait",
    body: "So they walk up to the front desk — again and again — to ask \"kitna wait hai?\". The receptionist stops what they're doing, checks the list, gives a rough estimate, and the patient goes back to their seat unconvinced. Fifteen minutes later, they're back. Some get irritated enough to leave. Some leave a one-star review. All of it was avoidable.",
  },
  {
    icon: ClipboardList,
    heading: "Paper tokens and WhatsApp juggling break down fast",
    body: "The WhatsApp group started as a simple way to take appointment requests. Now it has 200 messages a day — booking requests buried between patient queries, prescription photo uploads, and follow-up questions. The receptionist is on the phone half the day just managing this. A paper token goes missing. A walk-in disrupts three booked appointments. There's no system — just one overworked person holding it all together.",
  },
  {
    icon: Stethoscope,
    heading: "Doctors have no visibility into their own queue",
    body: "The doctor finishes a consultation, and there's no way to know who's next without physically walking out or calling reception. That's 2–3 minutes of dead time between every patient — multiplied across 20–30 consultations a day. No screen at the doctor's desk. No signal. No way to see if the 11 AM patient actually showed up or left an hour ago.",
  },
  {
    icon: FileText,
    heading: "Billing, prescriptions, and records are completely disconnected",
    body: "A patient comes back a month later asking about their prescription. It was written on a slip of paper they've already lost. The billing for that visit was noted in a register — or maybe a spreadsheet, nobody's sure — and no one knows if the invoice was ever paid. Patient history lives in a physical file that takes three minutes to find. There is no single source of truth, and it shows every single day.",
  },
];

const queueFeatures = [
  {
    icon: Monitor,
    title: "Live Queue Per Doctor",
    description: "Every doctor has their own real-time queue. Receptionists see all queues on one screen. Doctors see only theirs. Status transitions — Booked → Checked In → In Progress → Completed — update instantly.",
  },
  {
    icon: Smartphone,
    title: "Patient Self-Service — No App Needed",
    description: "Each appointment generates a unique link. Patients open it on their phone to see their queue position, estimated wait, and who's currently being seen. Auto-refreshes every 5 seconds. Zero app download required.",
  },
  {
    icon: Tv,
    title: "Waiting Room TV Display",
    description: "A public 'Now Serving' board — plug any screen or TV into the waiting room display URL, no login needed. Patients watch their token number move in real time. No confusion, no questions to the front desk.",
  },
  {
    icon: UserCheck,
    title: "Walk-In Fast Track",
    description: "Quick Check-In lane for walk-ins — entered separately from booked appointments so they don't disrupt the scheduled queue. Receptionists can drag-and-drop to reorder any patient if needed.",
  },
];

const schedulingFeatures = [
  "Create, reschedule, and cancel appointments from the front desk in seconds",
  "Doctor availability rules — custom weekly schedules with time slots per doctor",
  "Double-booking prevention via real-time availability validation",
  "Appointment reasons, notes, and referral source tracked at time of booking",
  "Estimated wait time calculated automatically based on average consultation duration",
];

const crmFeatures = [
  {
    icon: Users,
    title: "Full Patient Directory",
    description: "Every patient has a complete profile — contact details, appointment history, billing records, prescriptions, medical notes, and referral source. Everything in one place, searchable in seconds.",
  },
  {
    icon: TrendingUp,
    title: "Lead-to-Patient Funnel",
    description: "Track patients through stages: Lead → Contacted → Interested → Booked → Consulted. Know exactly where every prospective patient is in the funnel and which acquisition sources perform best.",
  },
  {
    icon: Send,
    title: "Bulk WhatsApp & SMS Campaigns",
    description: "Segment patients by status or source. Send personalised appointment reminders, health tips, or promotional messages via WhatsApp Business API or Twilio SMS. Track delivery per campaign.",
  },
];

const clinicalFeatures = [
  {
    icon: Receipt,
    title: "Auto-Generated Invoices",
    description: "Invoices are generated directly from completed appointments — consultation fee pulled from the doctor's profile. Track paid vs. pending collections. Revenue analytics updated in real time.",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Write prescriptions during consultation — multi-medication with dosage, duration, and instructions. Stored permanently against the patient's record. No more handwritten slips that get lost.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "7-day patient volume, revenue trends, wait time analysis, and acquisition source breakdown — walk-in, referral, online, or social. Real-time KPIs: today's patients, avg wait time, revenue collected.",
  },
];

const roles = [
  {
    role: "Admin",
    icon: ShieldCheck,
    color: "bg-purple-500/10 text-purple-600",
    access: "Full clinic control — all queues, all doctors, billing, CRM, analytics, system settings",
  },
  {
    role: "Doctor",
    icon: Stethoscope,
    color: "bg-primary/10 text-primary",
    access: "Own live queue, their appointments, patient records for consulted patients, prescription writing",
  },
  {
    role: "Receptionist",
    icon: ClipboardList,
    color: "bg-blue-500/10 text-blue-600",
    access: "Front desk — check-ins, appointment scheduling, billing, patient registration",
  },
];

const techStack = [
  { icon: Zap, feature: "React 18 + TypeScript frontend", detail: "Fast, responsive UI with real-time polling — queue updates without page reloads" },
  { icon: Database, feature: "Node.js / Express + PostgreSQL", detail: "Drizzle ORM — structured, type-safe data layer with Postgres reliability" },
  { icon: Globe, feature: "GCP Cloud Run deployment", detail: "Docker containers on Cloud Run — auto-scales to demand, scales to zero when idle (near-zero cost for small clinics)" },
  { icon: Layers, feature: "White-label ready", detail: "Already rebranded once (CareFlow → BariQ) — app name, colours, and domain configurable per clinic" },
  { icon: MessageSquare, feature: "WhatsApp & SMS integration ready", detail: "WhatsApp Business API and Twilio SMS pre-wired for bulk campaigns and reminders" },
  { icon: CreditCard, feature: "Payment gateway ready", detail: "Architecture supports any payment gateway integration — Razorpay, PayU, or custom" },
  { icon: ShieldCheck, feature: "Role-based access control", detail: "Admin, Doctor, and Receptionist roles with completely scoped permissions" },
  { icon: Monitor, feature: "No app download for patients", detail: "Patients use a simple link on any browser — zero friction, zero installation" },
];

const idealCustomers = [
  {
    icon: Building2,
    label: "Private clinics",
    detail: "Single-doctor GP practices or multi-doctor family clinics replacing paper tokens, handwritten registers, and WhatsApp coordination with a proper digital front desk.",
  },
  {
    icon: Stethoscope,
    label: "Specialist practices",
    detail: "Dermatology, orthopaedics, dental, eye care, gynaecology, ENT — any specialty OPD where appointment types, consultation duration, and doctor schedules need to be configured per doctor.",
  },
  {
    icon: BarChart3,
    label: "Diagnostic centers & labs",
    detail: "High-throughput patient facilities where token management, check-in speed, and billing turnaround are the difference between a smooth day and a chaotic one.",
  },
  {
    icon: Users,
    label: "Outpatient facilities",
    detail: "Multi-specialty OPDs, hospital outpatient departments, and day-care centers replacing paper-based front-desk operations — anywhere patients queue, get billed, and need their records kept.",
  },
];

const deliverables = [
  "Production-grade deployment — not a prototype, live CI/CD pipeline",
  "Branded to your clinic — app name, colours, domain",
  "Cloud infrastructure setup on GCP (scales to zero cost when idle)",
  "Database provisioning and initial data migration",
  "Doctor, receptionist, and admin account setup",
  "WhatsApp Business API / Twilio SMS configuration (if required)",
  "Staff training walkthrough",
  "Ongoing technical support and platform updates",
];

const faqs = [
  {
    q: "What is a digital queue management system for clinics?",
    a: "A digital queue management system replaces physical paper tokens and manual front-desk coordination with a real-time digital system. BariQ specifically does this: when a patient is registered or books an appointment, they receive a unique link. They open that link on their phone — no app download — and can see their queue position, estimated wait time, and who is currently being seen by the doctor. The receptionist manages everything from a dashboard: checking patients in, reordering the queue, adding walk-ins. The doctor has their own live queue view at their desk. The waiting room TV display shows the 'Now Serving' status for everyone in the room. No phone calls, no paper tokens, no confusion at the front desk.",
  },
  {
    q: "How does BariQ help reduce patient waiting time at a clinic?",
    a: "BariQ reduces perceived and actual waiting time in several ways. First, patients can track their queue position from their phone via a self-service link — they stop crowding the front desk asking 'kitna wait hai?' and can wait comfortably. Second, the system shows an estimated wait time calculated from the average consultation duration per doctor, so patients have a realistic expectation. Third, the waiting room TV display shows real-time 'Now Serving' status, so patients pay attention to their number rather than anxiously checking with reception. Fourth, receptionists can reorder the queue on the fly — if a patient stepped out, they can be moved without disrupting everyone else. All of this together reduces both the actual bottlenecks and the frustration of not knowing.",
  },
  {
    q: "Can BariQ manage appointments for multiple doctors in one clinic?",
    a: "Yes. BariQ is built for multi-doctor clinics from the ground up. Each doctor has their own queue, their own availability schedule, their own consultation duration settings, and their own live queue view. The receptionist sees all doctors' queues on a single screen and can manage check-ins and scheduling across all of them simultaneously. There is no confusion between queues — a patient booked for Dr. Sharma appears only in Dr. Sharma's queue, not Dr. Mehta's. Double-booking prevention is enforced per doctor based on their individual availability rules.",
  },
  {
    q: "Is BariQ suitable for a small single-doctor clinic?",
    a: "Yes, and the infrastructure is specifically designed to keep costs minimal for smaller practices. BariQ runs on GCP Cloud Run, which scales to zero when the clinic is not active — you are not paying for a server running 24/7 when the clinic is closed. For a small single-doctor practice with moderate patient volume, the monthly infrastructure cost is very low. The interface is also simple enough for non-technical front-desk staff to use confidently after a single training session. You do not need an IT team, a technical co-founder, or any ongoing technical staff to run it.",
  },
  {
    q: "Does BariQ work for specialist clinics like dental, dermatology, orthopaedic, or eye care?",
    a: "Yes — BariQ is designed for any outpatient specialty practice. Appointment types, consultation duration, and doctor schedules are fully configurable per doctor, so a dental clinic with 30-minute slots and an orthopaedic clinic with 15-minute slots can both run on the same platform with appropriate settings. Specialist practices typically have specific needs around appointment reasons, referral tracking, and patient history — all of which are supported. The platform has been designed so that any clinic where patients queue, get seen by a doctor, receive a prescription, and get billed can run on it without customisation.",
  },
  {
    q: "How does clinic billing work in BariQ?",
    a: "Billing in BariQ is tied directly to the consultation workflow. When an appointment moves to 'Completed' status, an invoice is auto-generated using the consultation fee from the doctor's profile — the receptionist does not need to manually enter a fee for every patient. The receptionist can review the invoice, apply any adjustments, and mark it as paid. All invoices are stored against the patient's record, so you can see the full billing history for any patient at any time. Pending collections — invoices not yet marked paid — are visible in the billing dashboard. Revenue analytics update in real time, showing daily and weekly revenue, average revenue per patient, and collection trends.",
  },
  {
    q: "Can I send WhatsApp appointment reminders to patients?",
    a: "Yes. BariQ's CRM module integrates with WhatsApp Business API for bulk and individual messaging. You can send appointment reminders personalised with the patient's name and appointment details, health tips, follow-up messages, or promotional campaigns. Patients can be segmented by status — for example, send a reminder only to patients with upcoming appointments, or a re-engagement message to patients who haven't visited in 90 days. Each campaign tracks delivery status per patient. Twilio SMS is also supported for patients not on WhatsApp or as a fallback channel.",
  },
  {
    q: "Does BariQ store digital prescriptions?",
    a: "Yes. Prescriptions are written during the consultation from the doctor's queue view. A prescription can include multiple medications, each with dosage, duration, frequency, and special instructions. Once saved, the prescription is permanently stored against the patient's record in BariQ — it cannot be lost, unlike a paper slip. The patient can be given a link to view or save it, and the doctor or receptionist can retrieve it at any future visit. This also means when a patient comes back asking 'what did the doctor prescribe last time?', the answer is available in seconds.",
  },
  {
    q: "How is patient data stored? Is it secure?",
    a: "BariQ is cloud-hosted on Google Cloud Platform, which provides enterprise-grade infrastructure security including data encryption at rest and in transit. Within the application, access is controlled by role-based permissions: a receptionist can only see the information relevant to front-desk operations; a doctor can only access records of patients they have consulted; only the admin has full visibility. Patient data is isolated per clinic — there is no cross-clinic data sharing. Staff cannot access another clinic's data. We follow responsible data handling practices appropriate for healthcare applications in India.",
  },
  {
    q: "How long does it take to set up BariQ for our clinic?",
    a: "A standard deployment typically takes 1–2 weeks from the day you share your clinic's branding, doctor information, and configuration requirements with us. This includes cloud infrastructure setup on GCP, database provisioning, clinic branding (app name, colours, domain), doctor and staff account creation, WhatsApp Business API or Twilio SMS configuration if needed, and a staff training walkthrough for your receptionist team and doctors. Most clinics are fully operational within one day of going live — the interface is straightforward enough that staff are confident after a single training session.",
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
    "@type": "Product",
    name: "BariQ — Clinic & Hospital Queue Management Platform",
    description:
      "BariQ is a full-stack digital queue management system for private clinics, hospitals, and specialist practices in India. Covers real-time OPD patient queue, patient self-service tracking, appointment scheduling, patient CRM, digital billing, digital prescriptions, and analytics — replacing paper tokens and WhatsApp coordination.",
    brand: { "@type": "Organization", name: "Tirthon Tech" },
    url: "https://tirthontech.com/products/bariq",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Tirthon Tech" },
    },
    category: "Healthcare Technology Software",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Private Clinics, Hospitals, Diagnostic Centers, Specialist Practices, OPD Facilities",
    },
    keywords: [
      "clinic queue management system India",
      "hospital queue management software India",
      "OPD queue management system",
      "digital token system for clinic",
      "patient queue management app India",
      "clinic management software India",
      "smart queue system hospital India",
      "clinic appointment scheduling software India",
      "digital prescription software India",
      "clinic CRM software India",
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Deployment",
        value: "Web (cloud)",
      },
      {
        "@type": "PropertyValue",
        name: "Users",
        value: "Clinic staff & patients",
      },
      {
        "@type": "PropertyValue",
        name: "Integration",
        value: "WhatsApp Business API, Twilio SMS",
      },
    ],
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
    name: "BariQ",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    description:
      "Digital queue management and clinic management platform for private clinics and hospitals in India. Includes real-time OPD patient queue, self-service token tracking, appointment scheduling, patient CRM, billing, digital prescriptions, and analytics. No patient app download needed.",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    author: { "@type": "Organization", name: "Tirthon Tech", url: "https://tirthontech.com" },
  },
];

export default function BariQ() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="BariQ — Digital Queue Management System for Private Clinics & Hospitals in India"
        description="Tired of paper tokens, missed appointments, and WhatsApp chaos at your clinic? BariQ is a complete digital queue management and clinic management system for private clinics, hospitals, and specialist practices in India — real-time OPD queue, patient self-service, appointment scheduling, digital billing, prescriptions, and CRM. No patient app download needed."
        path="/products/bariq"
        keywords="clinic queue management system India, hospital queue management software India, OPD queue management system, digital token system for clinic, patient queue management app India, clinic management software India, smart queue system hospital India, clinic appointment scheduling software India, digital prescription software India, clinic CRM software India, patient management system India, hospital waiting room management, paperless clinic management India, online appointment booking clinic India, multi-doctor clinic software, specialist clinic management system, dermatology clinic software, dental clinic management system, orthopaedic clinic software, private hospital management software India, outpatient department management system, digital health record clinic India"
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
                <Monitor className="w-4 h-4" />
                Clinic & Hospital Queue Management Platform
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight mb-3"
              >
                Your Clinic Deserves Better Than{" "}
                <span className="text-primary">Paper Tokens and WhatsApp</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className="text-xl text-primary font-semibold mb-5"
              >
                BariQ — "Your Turn, Simplified"
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={3}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-4"
              >
                Every day in your clinic: patients calling reception asking{" "}
                <em>"kitna wait hai?"</em>, the receptionist juggling a WhatsApp group
                that was never meant to be an appointment system, the doctor walking out
                between every consultation to find out who's next, prescriptions written
                on slips of paper that patients lose before they even reach the pharmacy.{" "}
                <strong className="text-foreground">BariQ fixes all of it.</strong> Digital
                queue management, appointment scheduling, billing, digital prescriptions,
                and patient CRM — in one connected platform, built for Indian clinics.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={4}
                className="text-base text-muted-foreground mb-10"
              >
                Built by Tirthon Tech. Production-grade. White-label ready.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={5}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg font-semibold"
                  >
                    Get BariQ for Your Clinic
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
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={6}
                className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-10 border-t border-border/40"
              >
                {[
                  { value: "5", label: "Modules in one platform" },
                  { value: "3", label: "Role-based access levels" },
                  { value: "Zero", label: "Patient app download needed" },
                  { value: "Real-time", label: "Queue updates, no refresh" },
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
                If This Sounds Like Your{" "}
                <span className="text-primary">Clinic…</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Most private clinics and specialist practices run on infrastructure that
                was never designed for a growing patient load.
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
                  <span className="absolute bottom-2 right-4 text-7xl font-black text-red-100/80 select-none leading-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
                BariQ replaces all of this with one connected digital system — queue, scheduling, billing, CRM, and prescriptions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Smart Queue ── */}
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
                <Monitor className="w-3.5 h-3.5" />
                Smart Queue Management
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Every Patient Knows{" "}
                <span className="text-primary">Exactly Where They Stand</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Real-time queue visibility for patients, receptionists, and doctors — no
                phone calls, no paper, no confusion at the front desk.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {queueFeatures.map((feat, i) => (
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

        {/* ── Scheduling ── */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Calendar className="w-3.5 h-3.5" />
                  Appointment Scheduling
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  No More Double Bookings.{" "}
                  <span className="text-primary">No More Missed Slots.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Doctor availability is configured once — weekly schedules, time slots, consultation
                  duration. From there, every booking is validated against real-time availability.
                  Double-booking is impossible. Gaps are visible at a glance.
                </p>
                <ul className="space-y-4">
                  {schedulingFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Role-based access */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-medium mb-6">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Role-Based Access Control
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Everyone Sees{" "}
                  <span className="text-primary">Only What They Need</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Three roles, completely scoped. Doctors don't see billing. Receptionists
                  don't see another doctor's full patient notes. Admins have full control.
                </p>
                <div className="space-y-4">
                  {roles.map((role, i) => (
                    <motion.div
                      key={role.role}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      custom={i}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${role.color}`}>
                        <role.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-0.5">{role.role}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{role.access}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CRM ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Users className="w-3.5 h-3.5" />
                Patient CRM
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Know Your Patients.{" "}
                <span className="text-primary">Grow Your Practice.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                BariQ's CRM module turns a patient directory into a growth engine — tracking
                every lead, every referral source, and every stage of the patient journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {crmFeatures.map((feat, i) => (
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
                  <h3 className="font-semibold text-foreground mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Billing, Prescriptions, Analytics ── */}
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
                Billing, Prescriptions &{" "}
                <span className="text-primary">Analytics</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The operational back-end of your clinic — invoicing, prescriptions, and
                performance data — all connected to the same patient record.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clinicalFeatures.map((feat, i) => (
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
                  <h3 className="font-semibold text-foreground mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who Is It For ── */}
        <section className="py-16 md:py-20 bg-primary/5 border-y border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Who Is BariQ <span className="text-primary">Built For?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Any outpatient facility in India that wants to stop managing patients on paper
                and WhatsApp and start running a properly digital practice.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {idealCustomers.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ── */}
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
                Production-Grade Infrastructure,{" "}
                <span className="text-primary">Not a Prototype</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                BariQ runs on a scalable, serverless-ready stack built for real clinical
                operations — not a demo that collapses under load.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {techStack.map((item, i) => (
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

        {/* ── Deliverables ── */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  We Deploy It.{" "}
                  <span className="text-primary">You Run Your Clinic.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                  You don't need any technical knowledge to get BariQ running — that's our job.
                  Tirthon Tech handles everything: cloud infrastructure, clinic branding,
                  configuration, and a hands-on staff training walkthrough so your
                  receptionists and doctors are confident from day one.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Most clinics are live in{" "}
                  <strong className="text-foreground">under 2 weeks</strong>. We stay with
                  you after launch — platform updates, technical support, and any changes
                  your clinic needs as it grows. You focus on your patients. We handle the system.
                </p>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm text-foreground font-medium">
                    Most clinics are fully operational within one day of going live.
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
                Frequently Asked{" "}
                <span className="text-primary">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything clinic owners and practice managers typically ask before getting started.
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
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Run a{" "}
                <span className="text-primary">Paperless Clinic?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Picture this: patients who stop calling reception because they already know
                their position. Front-desk staff who aren't drowning in a WhatsApp group
                at 9 AM. Doctors who check their queue on a screen at their desk instead
                of stepping out. Prescriptions and billing records that are findable in
                three seconds, not three minutes. A clinic where every piece of
                information is exactly where it should be.
              </p>
              <p className="text-muted-foreground mb-10">
                That's what BariQ looks like in a clinic that's running it.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full px-10 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg font-semibold text-base"
                  >
                    Get BariQ — Talk to Us
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
