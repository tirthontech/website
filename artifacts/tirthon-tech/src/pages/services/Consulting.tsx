import { Compass } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "consulting",
  pillarLabel: "Consulting",
  metaTitle: "Consulting Services | Tirthon Tech",
  metaDescription:
    "Direction setting for new launches, fundraising, franchise and multi location setup, partner network design, and SOP creation. Honest guidance for your specific business moment, not a generic playbook.",
  keywords:
    "startup consulting, go to market strategy, fundraising pitch deck help, business launch strategy, franchise setup consulting, partner and channel network design, SOP creation for business, multi location business setup",
  icon: Compass,
  h1: "Consulting",
  heroSubheading: "For When You Know Something Needs to Change, But Not What",
  heroParagraph:
    "Some moments in a business need more than day to day execution. Launching something new, raising capital, setting up a franchise or partner network, or documenting how the business actually runs all call for a specific kind of thinking. We step in for exactly those moments, then step back.",
  secondaryHeading: "Direction, Not a Generic Playbook",
  secondaryParagraph:
    "We don't hand over a template deck or a one size fits all framework. We look at your specific business, your specific moment, and tell you honestly what to focus on and in what order.",
  trustHeading: "Moments We Help With",
  trustParagraph: "A few specific situations we are regularly brought in for.",
  bullets: [
    { title: "New business launch strategy", description: "positioning and go to market planning for businesses just starting out." },
    { title: "Fundraising support", description: "pitch decks and narrative building for businesses raising capital. Having raised funding for our own products, we know what investors actually look for." },
    { title: "Franchise and multi location setup", description: "the systems, processes, and agreements needed to replicate a business across new locations." },
    { title: "Partner and channel network design", description: "helping businesses find and set up their own referral, reseller, or franchise partners." },
    { title: "SOP creation", description: "documenting exactly how the business runs, so it does not depend entirely on one person's memory." },
  ],
  differentHeading: "Why This Is Different From Generic Consulting",
  differentParagraph:
    "Most consulting engagements end with a slide deck or a document nobody opens again. Ours end with a plan, or a system, you can actually run, and if you want, a team that can help execute it with you across strategy, marketing, and technology. We are not just advising from the outside.",
  faqs: [
    {
      q: "How long does a consulting engagement typically last?",
      a: "It depends on the moment. Some engagements are a focused two to three week sprint, like preparing a fundraising narrative. Others run longer when they involve setting up an entire franchise or partner program.",
    },
    {
      q: "Do you only advise, or can you also help execute?",
      a: "Both. Many clients start with consulting for a specific moment, then bring us in for the marketing or technology work that follows.",
    },
    {
      q: "We are a very early stage business. Is this still useful for us?",
      a: "Yes. Go to market and positioning guidance tends to matter most before you have spent real money on the wrong approach, not after.",
    },
    {
      q: "Can you help us prepare for a specific investor conversation?",
      a: "Yes. We help build the narrative, the pitch deck, and the numbers story behind it, drawing on our own experience raising capital for our products.",
    },
    {
      q: "Can you help us set up a franchise or partner network?",
      a: "Yes. We help design the operating model, the partner or franchise agreement structure, and the SOPs needed to replicate what already works in one location or team across others.",
    },
  ],
};

export default function Consulting() {
  return <ServiceDetailPage config={config} />;
}
