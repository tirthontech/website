import { Megaphone } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "marketing-execution",
  pillarLabel: "Marketing Execution",
  metaTitle: "Marketing Execution Services | Tirthon Tech",
  metaDescription:
    "SEO, performance marketing, influencer marketing, digital marketing, and founder personal branding, built as one coordinated strategy instead of disconnected channels.",
  keywords:
    "marketing execution agency, SEO services, performance marketing, influencer marketing, digital marketing strategy, founder personal branding, marketing agency India",
  icon: Megaphone,
  h1: "Marketing Execution",
  heroSubheading: "Build Visibility. Create Demand. Drive Growth.",
  heroParagraph:
    "Marketing only compounds when the channels work together instead of running as separate, disconnected efforts. We build one coordinated strategy across search, paid, content, influencers, and the founder's own voice, so each channel makes the others work harder.",
  secondaryHeading: "One Strategy, Every Channel",
  secondaryParagraph:
    "We do not sell marketing as a bundle of separate services. Every channel below is chosen and sequenced based on where your actual customers spend their attention, not a generic checklist applied to every client.",
  trustHeading: "What This Includes",
  trustParagraph: "Each of these can stand alone, and most businesses need some combination of them.",
  bullets: [
    { title: "SEO", description: "build long term organic visibility to your customers.", href: "/services/seo" },
    { title: "Performance marketing", description: "Meta Ads, Google Ads, and other paid channels focused on measurable conversions, not just clicks.", href: "/services/performance-marketing" },
    { title: "Influencer marketing", description: "creator partnerships built on genuine audience fit, not follower count.", href: "/services/influencer-marketing" },
    { title: "Digital marketing", description: "one coordinated strategy across content, social, and email instead of disconnected channels.", href: "/services/digital-marketing" },
    { title: "Founder personal branding", description: "a strong personal presence as a founder, so your voice carries as much weight as your brand." },
  ],
  differentHeading: "Why We Do Not Sell Channels in Isolation",
  differentParagraph:
    "A campaign driving traffic to a slow website underperforms no matter how well targeted it is, and a founder with no brand strategy behind them cannot build a distinctive personal presence. Marketing execution works best connected to the strategy and technology work behind it, not sold as a standalone service.",
  faqs: [
    {
      q: "Do we need all of these channels at once?",
      a: "No. We recommend the specific channels that fit where your customers actually are, then expand as each one proves out, rather than starting everything simultaneously.",
    },
    {
      q: "Can you help with just one channel, like SEO or paid ads?",
      a: "Yes. Each channel can be engaged individually, though most clients see stronger results once two or three channels are working together.",
    },
    {
      q: "How is founder personal branding different from company marketing?",
      a: "Company marketing builds trust in the brand. Founder personal branding builds trust in a person, which often compounds faster and carries into hiring, partnerships, and sales conversations, not just customer acquisition.",
    },
    {
      q: "How do you measure success across channels?",
      a: "Every channel is tied back to a real outcome, leads, signups, or revenue, and reported in one place, so you see how the full strategy is performing, not five disconnected dashboards.",
    },
  ],
};

export default function MarketingExecution() {
  return <ServiceDetailPage config={config} />;
}
