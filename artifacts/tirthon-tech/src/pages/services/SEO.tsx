import { Search } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "seo",
  pillarLabel: "Marketing Execution",
  metaTitle: "SEO Services | Tirthon Tech",
  metaDescription:
    "SEO built for long term organic visibility: technical SEO, content, on page optimization, and link building, tied to real ranking and traffic outcomes, not vanity metrics.",
  keywords:
    "SEO services, search engine optimization agency, technical SEO, on page SEO, local SEO, SEO company India, organic traffic growth",
  icon: Search,
  h1: "SEO",
  heroSubheading: "Organic Visibility That Compounds Instead of Disappearing",
  heroParagraph:
    "Paid ads stop the moment the budget stops. SEO keeps working long after the initial effort, which makes it one of the highest return channels available, if it is built properly instead of treated as a checklist.",
  secondaryHeading: "Technical Foundation First, Content Second",
  secondaryParagraph:
    "Great content on a technically broken site rarely ranks. We start with the technical foundation, crawlability, site speed, structured data, then layer content and links on top of a site that search engines can actually understand.",
  trustHeading: "What This Includes",
  trustParagraph: "SEO is rarely one thing. Most engagements combine these.",
  bullets: [
    { title: "Technical SEO", description: "site speed, crawlability, indexing, and structured data so search engines can properly understand your site." },
    { title: "On page optimization", description: "titles, headings, and content structured around how your customers actually search." },
    { title: "Content strategy", description: "blog and resource content built to rank and to actually answer what your customers are searching for." },
    { title: "Link building", description: "earning genuine authority signals instead of buying low quality links that risk a penalty." },
    { title: "Local SEO", description: "Google Business Profile optimization and citation consistency for businesses with a physical location or service area." },
  ],
  differentHeading: "Why We Do Not Treat SEO as a Checklist",
  differentParagraph:
    "Generic SEO checklists ignore what actually matters for a specific business and market. We prioritize based on where your traffic and rankings are actually leaking, the same growth diagnostic approach we apply to strategy work, rather than running through a generic audit template.",
  faqs: [
    {
      q: "How long does SEO take to show results?",
      a: "Meaningful ranking movement typically takes three to six months, and compounds from there. Anyone promising overnight rankings is not describing real SEO.",
    },
    {
      q: "Do you write the content too, or just the strategy?",
      a: "Both. SEO strategy without content execution rarely moves rankings, so content production is part of the engagement, not a separate cost.",
    },
    {
      q: "Is SEO still worth it with AI search and chatbots growing?",
      a: "Yes. The fundamentals, technical health, genuine authority, and content that actually answers a question, are exactly what AI search systems reward too. Good SEO and good AI visibility are largely the same work.",
    },
    {
      q: "Can you fix a site that has been penalized or is losing rankings?",
      a: "Yes. We diagnose the specific cause, whether technical, content quality, or link related, before recommending a fix, rather than guessing.",
    },
  ],
};

export default function SEO() {
  return <ServiceDetailPage config={config} />;
}
