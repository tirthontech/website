import { Workflow } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "business-operations-automation",
  pillarLabel: "Business Operations & Automation",
  metaTitle: "Business Operations & Automation Services | Tirthon Tech",
  metaDescription:
    "CRM setup, workflow automation, and internal dashboards built around how your business actually operates. Less manual work, more time on what actually grows your business.",
  keywords:
    "business process automation, CRM setup and management, workflow automation, internal dashboards, operations software, business automation India",
  icon: Workflow,
  h1: "Business Operations & Automation",
  heroSubheading: "Less Manual Work. More Time On What Matters.",
  heroParagraph:
    "If your team is buried in spreadsheets, manual follow ups, and repetitive admin work, that time is coming directly out of the work that actually grows your business. We connect and automate the systems you already run on, so the busywork runs itself.",
  secondaryHeading: "Automation That Fits How You Already Work",
  secondaryParagraph:
    "We don't hand you a generic automation tool and walk away. We look at how your business actually operates, then build the CRM setup, workflows, and dashboards around that, not the other way around.",
  trustHeading: "What This Actually Looks Like",
  trustParagraph: "Three things tend to make the biggest difference for most businesses we work with.",
  bullets: [
    { title: "CRM setup and management", description: "organizing leads, follow ups, and client data in one system instead of scattered across notebooks, WhatsApp, and spreadsheets." },
    { title: "Workflow automation", description: "connecting the tools you already use so manual, repetitive tasks run themselves." },
    { title: "Internal dashboards", description: "for tracking sales, performance, or operations in real time, so decisions are based on current numbers, not a monthly guess." },
  ],
  differentHeading: "Why This Matters More Than It Seems",
  differentParagraph:
    "Manual processes don't just cost time. They cost leads that fall through the cracks, decisions made on stale information, and a team that spends its energy on admin instead of growth. Fixing this once tends to pay back for years.",
  faqs: [
    {
      q: "Do we need to replace our existing tools?",
      a: "Usually not. Most of the value comes from connecting and automating what you already use, not ripping it all out and starting over.",
    },
    {
      q: "How long does a typical automation project take?",
      a: "A focused CRM or workflow setup usually takes a few weeks. Larger internal systems with multiple dashboards take longer, and we scope this clearly before starting.",
    },
    {
      q: "Is this only useful for larger businesses?",
      a: "No. Some of the biggest time savings we have delivered have been for small teams where one person was doing five jobs manually.",
    },
    {
      q: "What happens after the system is set up?",
      a: "We stay involved. Businesses change, and the systems need to change with them. Ongoing support and adjustments are part of the partnership.",
    },
  ],
};

export default function BusinessOperationsAutomation() {
  return <ServiceDetailPage config={config} />;
}
