import { Users } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "influencer-marketing",
  pillarLabel: "Marketing Execution",
  metaTitle: "Influencer Marketing Services | Tirthon Tech",
  metaDescription:
    "Influencer marketing built on genuine audience fit and real measurement, not follower count. Creator identification, campaign strategy, outreach, and performance tracking.",
  keywords:
    "influencer marketing agency, creator marketing India, influencer campaign management, brand influencer partnerships, micro influencer marketing, influencer marketing ROI",
  icon: Users,
  h1: "Influencer Marketing",
  heroSubheading: "Borrow Trust That Took Someone Else Years to Build",
  heroParagraph:
    "Your customers trust certain creators more than they trust any ad you could run. Influencer marketing works when the creator is genuinely relevant to your audience and the campaign is actually measured, not just posted and forgotten. We find the right creators, manage the relationship, and track what the campaign actually delivers.",
  secondaryHeading: "Relevance Over Reach",
  secondaryParagraph:
    "A creator with a smaller, genuinely engaged audience that matches your customer will usually outperform a bigger name with the wrong audience. We pick creators based on who actually influences your buyer, not who has the most followers.",
  trustHeading: "What We Handle End to End",
  trustParagraph:
    "Influencer campaigns fall apart in the gaps between creator, brand, and results. We manage all three.",
  bullets: [
    { title: "Creator identification", description: "finding influencers whose audience actually matches your customer, not just follower count." },
    { title: "Campaign strategy and briefing", description: "clear creative direction so content stays authentic and on brand, not scripted." },
    { title: "Outreach and negotiation", description: "managing creator relationships and contracts from first message to final post." },
    { title: "Performance tracking", description: "reach, engagement, and conversion tracked per creator and per post, not just vanity numbers." },
    { title: "Long term partnerships", description: "moving beyond one off posts into creators who genuinely become recurring brand ambassadors." },
  ],
  differentHeading: "Why Most Influencer Campaigns Underperform",
  differentParagraph:
    "Most influencer marketing fails for one reason: nobody measured it properly, so nobody could tell what worked. We treat every campaign like a performance channel, not a one time favor from a creator, and we adjust based on what the numbers actually say.",
  faqs: [
    {
      q: "How do you choose which creators to work with?",
      a: "We start with your actual customer, not a follower count. We look at audience overlap, engagement quality, and past brand fit before reaching out to anyone.",
    },
    {
      q: "Do you only work with large influencers?",
      a: "No. Mid tier and niche creators with a genuinely engaged audience often outperform large influencers for a fraction of the cost.",
    },
    {
      q: "How is success measured?",
      a: "Reach and engagement matter, but we track it back to actual outcomes: clicks, signups, or sales, depending on your goal.",
    },
    {
      q: "Can this work alongside paid advertising?",
      a: "Yes, and it usually works better together. Influencer content often becomes some of the strongest creative for paid campaigns afterward.",
    },
  ],
};

export default function InfluencerMarketing() {
  return <ServiceDetailPage config={config} />;
}
