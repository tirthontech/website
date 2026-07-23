import { Target } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "brand-growth-strategy",
  pillarLabel: "Brand & Growth Strategy",
  metaTitle: "Brand & Growth Strategy Services | Tirthon Tech",
  metaDescription:
    "Competitive clarity, growth diagnostics, and distinctive positioning for businesses that want direction before they spend on growth. Understand where you stand first.",
  keywords:
    "brand strategy consulting, growth strategy agency, competitive analysis, growth diagnostics, brand positioning consulting, market positioning strategy India",
  icon: Target,
  h1: "Brand & Growth Strategy",
  heroSubheading: "Know Where You Stand Before You Spend on Growth",
  heroParagraph:
    "Most growth spend gets wasted chasing the wrong problem: more ads on top of weak positioning, more content aimed at nobody in particular. We start by understanding your market, your competitors, and exactly where your business is actually losing ground, then tell you honestly what to fix first.",
  secondaryHeading: "Diagnosis Before Tactics",
  secondaryParagraph:
    "A new marketing channel or a bigger ad budget cannot fix a business that does not know who it is for or why a customer should choose it over a competitor. We build the clarity first, then recommend the tactics that actually follow from it.",
  trustHeading: "What This Includes",
  trustParagraph: "Three things tend to come first, before any marketing spend begins.",
  bullets: [
    { title: "Competitive clarity", description: "understand your market, competitors, and customers before starting any campaign." },
    { title: "Growth diagnostics", description: "identify where your business is losing customers, conversions, or revenue." },
    { title: "Distinctive positioning", description: "build a clear market position that is difficult to copy and easy to remember." },
  ],
  differentHeading: "Why Strategy Comes Before Spend",
  differentParagraph:
    "A business with a vague position pays more for every unit of growth, because none of the marketing actually differentiates it from a competitor saying the same generic things. Getting this right first makes every channel that follows work harder for less.",
  faqs: [
    {
      q: "How is this different from just running a marketing audit?",
      a: "An audit looks at what you are already doing. This looks at your market, your competitors, and your actual customers to figure out what you should be doing, before recommending any specific tactic.",
    },
    {
      q: "Do we need this before starting marketing execution?",
      a: "Not always, but it usually makes marketing spend meaningfully more effective. Businesses with a clear position get more out of the same ad budget than businesses without one.",
    },
    {
      q: "How long does a typical engagement take?",
      a: "A focused growth diagnostic and positioning exercise usually takes two to four weeks, depending on how much existing data is available to work from.",
    },
    {
      q: "Can you help with ongoing growth strategy, not just a one time review?",
      a: "Yes. Many clients start with a one time diagnostic, then bring us on for ongoing strategy work alongside marketing execution and technology.",
    },
  ],
};

export default function BrandGrowthStrategy() {
  return <ServiceDetailPage config={config} />;
}
