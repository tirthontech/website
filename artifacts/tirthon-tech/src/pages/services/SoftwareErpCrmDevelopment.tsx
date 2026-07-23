import { Database } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "software-erp-crm-development",
  pillarLabel: "Technology",
  metaTitle: "Software, ERP & CRM Development Services | Tirthon Tech",
  metaDescription:
    "Custom CRM, ERP, and internal software built around your actual business process instead of a generic template. Stop running your business through spreadsheets.",
  keywords:
    "custom CRM development, ERP software development India, internal tools development, business software development, custom ERP CRM India, admin dashboard development",
  icon: Database,
  h1: "Software, ERP & CRM Development",
  heroSubheading: "Stop Running Your Business Through Spreadsheets",
  heroParagraph:
    "If your team is tracking leads in one spreadsheet, inventory in another, and billing somewhere else entirely, that gap is where mistakes and lost revenue happen. We build the CRMs, ERPs, and custom internal software your business actually needs, matched to how you already operate.",
  secondaryHeading: "Built Around Your Process, Not a Generic Template",
  secondaryParagraph:
    "Off the shelf CRM and ERP tools force your business to adapt to their workflow. We build software around your actual process, so your team adopts it instead of working around it.",
  trustHeading: "What We Build",
  trustParagraph: "Most engagements in this area involve some combination of the following.",
  bullets: [
    { title: "Custom CRM systems", description: "lead management, pipelines, and customer data built around your actual sales process." },
    { title: "ERP systems", description: "inventory, orders, billing, and operations connected in one system instead of five." },
    { title: "Internal dashboards and admin panels", description: "a clear, real time view into the parts of the business that matter most." },
    { title: "Integrations", description: "connecting the tools you already use so data moves automatically instead of manual entry." },
    { title: "Ongoing support", description: "as your business and requirements change, we keep the system changing with it." },
  ],
  differentHeading: "Why Off the Shelf Software Often Falls Short",
  differentParagraph:
    "Generic CRM and ERP platforms are built for the average business, which means they are built for nobody in particular. Once your workflow gets specific enough, you either pay for endless customization or you build around your actual process from day one.",
  faqs: [
    {
      q: "Why not just use an off the shelf CRM or ERP?",
      a: "For simple, generic workflows, an off the shelf tool can work fine. Once your process has real specifics, like unit inventory, multi step approvals, or industry specific compliance, custom software tends to pay for itself quickly.",
    },
    {
      q: "How long does this typically take?",
      a: "A focused CRM build usually takes four to eight weeks. Full ERP systems take longer, and we scope this in detail before starting so there are no surprises.",
    },
    {
      q: "Can this replace multiple tools we currently use?",
      a: "Often, yes. Consolidating billing, inventory, and customer data into one system is one of the most common reasons clients come to us.",
    },
    {
      q: "Do you provide training for our team?",
      a: "Yes. Documentation and hands on training are part of every handoff, so your team is confident using the system from day one.",
    },
  ],
};

export default function SoftwareErpCrmDevelopment() {
  return <ServiceDetailPage config={config} />;
}
