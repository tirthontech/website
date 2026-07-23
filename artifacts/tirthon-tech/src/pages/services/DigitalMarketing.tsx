import { Globe2 } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "digital-marketing",
  pillarLabel: "Marketing Execution",
  metaTitle: "Digital Marketing Services | Tirthon Tech",
  metaDescription:
    "Digital marketing that ties SEO, content, paid ads, social, and email together around one strategy instead of running each channel in isolation.",
  keywords:
    "digital marketing agency, SEO and content marketing, social media management, email marketing services, digital marketing strategy India, online marketing agency",
  icon: Globe2,
  h1: "Digital Marketing",
  heroSubheading: "One Strategy, Not Five Disconnected Channels",
  heroParagraph:
    "Most businesses end up running SEO, social media, email, and ads as separate efforts that never talk to each other. Digital marketing done properly ties all of it together around one strategy, so each channel makes the others work harder.",
  secondaryHeading: "The Channels That Matter for Your Business, Not All of Them",
  secondaryParagraph:
    "Not every channel deserves your budget. We start by figuring out where your actual customers spend their attention, then commit real effort there instead of spreading thin across everything.",
  trustHeading: "What This Includes",
  trustParagraph: "A coordinated digital presence usually comes down to five things.",
  bullets: [
    { title: "Channel strategy", description: "deciding which digital channels deserve budget and attention for your specific business, not a generic checklist." },
    { title: "SEO and content", description: "building organic visibility that keeps compounding long after a campaign ends." },
    { title: "Social media management", description: "consistent presence and posting across the platforms your customers actually use." },
    { title: "Email marketing", description: "nurture sequences and campaigns that turn subscribers into customers, not just a monthly newsletter." },
    { title: "Analytics and reporting", description: "a single, clear view of what is working across every channel, not five separate dashboards." },
  ],
  differentHeading: "Why Channels in Isolation Underperform",
  differentParagraph:
    "SEO without content falls flat. Social without a funnel behind it drives likes, not customers. Every channel we run is built to support the others, so the whole strategy compounds instead of several efforts each working alone.",
  faqs: [
    {
      q: "Do we need to be active on every platform?",
      a: "No. We recommend the two or three channels where your actual customers spend time, and do those properly, rather than spreading effort thin across everything.",
    },
    {
      q: "How is this different from just running ads?",
      a: "Paid ads are one channel inside a broader strategy. Digital marketing ties organic, paid, social, and email together so they reinforce each other instead of competing for the same budget.",
    },
    {
      q: "How soon will we see results?",
      a: "Paid channels can show results within weeks. Organic channels like SEO typically take a few months to build momentum, but the results tend to last much longer.",
    },
    {
      q: "Do you create the content too?",
      a: "Yes. Strategy without execution does not move numbers, so content creation is part of the engagement, not a separate cost.",
    },
  ],
};

export default function DigitalMarketing() {
  return <ServiceDetailPage config={config} />;
}
