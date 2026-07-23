import { Cpu } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "technology",
  pillarLabel: "Technology",
  metaTitle: "Technology Services | Tirthon Tech",
  metaDescription:
    "Custom software, ERP and CRM development, websites and apps, business dashboards, and AI automation, built around how your business actually operates.",
  keywords:
    "custom software development, ERP CRM development, website and app development, AI automation services, business dashboards, technology partner India",
  icon: Cpu,
  h1: "Technology",
  heroSubheading: "The Part of the Business That Runs Everything Else",
  heroParagraph:
    "Technology is one of the four things we work on, not the whole identity. We build software that fits how your business actually operates, whether that means a website, a mobile app, a CRM, or automating the repetitive work eating into your team's time.",
  secondaryHeading: "Built Around Your Business, Not a Template",
  secondaryParagraph:
    "We do not start from a generic template and force your business to fit it. Every build starts with how your business actually works today, and what would genuinely make it run better.",
  trustHeading: "What This Includes",
  trustParagraph: "Most engagements involve some combination of the following.",
  bullets: [
    { title: "Custom software, ERP & CRM development", description: "software, inventory, billing, and customer systems built around your actual process.", href: "/services/software-erp-crm-development" },
    { title: "Website and app development", description: "fast, clean websites and mobile apps for Android and iOS.", href: "/services/website-app-development" },
    { title: "AI automation", description: "automating repetitive tasks so your team spends time on what actually needs a person.", href: "/services/ai-automation" },
    { title: "Business dashboards", description: "complete visibility into your operations so decisions are based on current numbers, not a monthly guess." },
  ],
  differentHeading: "Why Technology Is a Pillar, Not the Whole Story",
  differentParagraph:
    "A well built product with no strategy behind it, or no marketing driving people to it, underperforms no matter how well engineered it is. We build technology connected to the strategy and marketing work behind it, not as a standalone deliverable disconnected from why the business needs it.",
  faqs: [
    {
      q: "Do you only build software, or also handle strategy and marketing?",
      a: "Technology is one of four pillars we work across, alongside brand and growth strategy, marketing execution, and business operations automation. Many clients start with one pillar and expand into others.",
    },
    {
      q: "What technology do you build with?",
      a: "React and Next.js for most web work, React Native or Flutter for mobile apps, and Node.js or Python for backend systems, chosen based on the specific requirements of the project.",
    },
    {
      q: "Can you take over an existing product or codebase?",
      a: "Yes. We regularly take over existing products, review the current codebase, and continue development or modernize it depending on what the business needs.",
    },
    {
      q: "Do you provide ongoing support after launch?",
      a: "Yes. Retainer support is available for clients who want continuous feature development and maintenance rather than a one time build.",
    },
  ],
};

export default function Technology() {
  return <ServiceDetailPage config={config} />;
}
