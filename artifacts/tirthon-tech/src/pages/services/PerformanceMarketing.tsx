import { TrendingUp } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "performance-marketing",
  pillarLabel: "Marketing Execution",
  metaTitle: "Performance Marketing Services | Tirthon Tech",
  metaDescription:
    "Performance marketing built around measurable outcomes: Google Ads, Meta Ads, conversion tracking, and continuous optimization. Every rupee spent tied to real growth, not vanity metrics.",
  keywords:
    "performance marketing agency, Google Ads management, Meta Ads management, paid advertising India, conversion rate optimization, performance marketing India, ROI focused marketing, digital advertising agency",
  icon: TrendingUp,
  h1: "Performance Marketing",
  heroSubheading: "Turn Ad Spend Into Real Growth",
  heroParagraph:
    "If your campaigns are burning budget without bringing in real customers, or if managing them has become its own full time job, that's exactly the problem we solve. We build performance marketing campaigns designed around one outcome: turning attention into actual conversions, not just clicks and impressions.",
  secondaryHeading: "Strategy First. Execution Second. Guesswork Never.",
  secondaryParagraph:
    "Most advertising stops at getting seen. We go further, building campaigns backed by real audience research, sharp creative, and continuous optimization, so every rupee spent is working toward a measurable result. This isn't about running more ads. It's about running the right ones.",
  trustHeading: "A Team You Can Actually Rely On",
  trustParagraph:
    "Performance marketing only works when there's real trust behind it, in the strategy, the reporting, and the people running it. We build that trust through clear communication and honest results, not inflated dashboards.",
  bullets: [
    { title: "Campaigns built around your business", description: "not a recycled template applied to every client." },
    { title: "Conversion focused optimization", description: "because traffic that doesn't convert isn't growth, it's just spend." },
    { title: "Decisions backed by data", description: "every choice tied to real performance, not assumptions." },
    { title: "Multi channel strategy", description: "Meta, Google, and retargeting managed as one coherent plan, not disconnected efforts." },
    { title: "Full visibility, always", description: "clear reporting so you always know what's working and why." },
    { title: "Creative built for your actual customer", description: "not generic ad templates dressed up differently for each client." },
  ],
  differentHeading: "Why We Approach This Differently",
  differentParagraph:
    "Real growth rarely comes from the safe, easy option. We're willing to challenge what isn't working, including our own approach, when the data says to, because that's where actual results come from, not from following a standard playbook.",
  faqs: [
    {
      q: "What do you track in a performance marketing campaign?",
      a: "We track cost per acquisition, return on ad spend, conversion rate, and retention, not just clicks or impressions.",
    },
    {
      q: "Which channels do you typically use?",
      a: "Primarily Meta and Google, often combined with retargeting and influencer channels when they fit the brand. The exact mix depends on where your actual customers are.",
    },
    {
      q: "How do you build ad creative?",
      a: "We have an in house team with experience across many brands, so creative is built around your actual customer rather than a generic template reused for every client.",
    },
    {
      q: "Can offline conversions, like calls or in store visits, be tracked?",
      a: "Yes. We set up call tracking and other integrations so offline conversions are tied back to the campaigns driving them, giving you a complete picture of what is actually working.",
    },
  ],
};

export default function PerformanceMarketing() {
  return <ServiceDetailPage config={config} />;
}
