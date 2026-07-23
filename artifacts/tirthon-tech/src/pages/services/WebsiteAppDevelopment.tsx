import { Code2 } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "website-app-development",
  pillarLabel: "Technology",
  metaTitle: "Website and App Development Services | Tirthon Tech",
  metaDescription:
    "Fast, clean websites, web applications, and mobile apps for Android and iOS, built around how your business actually works. Ongoing support after launch.",
  keywords:
    "website development company, web app development India, mobile app development India, custom website design, React Next.js development, iOS Android app development",
  icon: Code2,
  h1: "Website and App Development",
  heroSubheading: "Fast, Clean, and Built to Do Its Job",
  heroParagraph:
    "A slow or confusing website costs you customers before they even get to your product. Whether you need a marketing website, a customer facing web app, or a mobile app for Android and iOS, we build it to be fast and usable, not just visually impressive.",
  secondaryHeading: "Built Around How Your Business Actually Works",
  secondaryParagraph:
    "We do not start from a template and force your business to fit it. We look at how customers actually find you, what they need to do on the site or app, and build around that.",
  trustHeading: "What We Build",
  trustParagraph: "Depending on what your business needs, this usually includes some combination of the following.",
  bullets: [
    { title: "Company and product websites", description: "fast, clear sites that explain what you do and get out of the way." },
    { title: "Landing pages built to convert", description: "pages designed around one specific action, not a generic template." },
    { title: "Web applications and customer portals", description: "tools your customers or team log into and actually use." },
    { title: "Mobile apps for Android and iOS", description: "native or cross platform apps depending on what your product actually needs." },
    { title: "Ongoing maintenance", description: "and new features after launch, not a handoff and disappearance." },
  ],
  differentHeading: "Why We Do Not Just Hand Off Code",
  differentParagraph:
    "A website or app is never really finished. Requirements change, traffic grows, and new features get requested. We stay involved after launch instead of treating it as a one time delivery.",
  faqs: [
    {
      q: "Do you build both websites and mobile apps?",
      a: "Yes. Depending on your product and audience, we will recommend a website, a mobile app, or both, rather than defaulting to whichever is easier for us to build.",
    },
    {
      q: "What technology do you build with?",
      a: "React and Next.js for most web work, React Native or Flutter for mobile apps, depending on the specific requirements of the project.",
    },
    {
      q: "How long does a typical build take?",
      a: "A focused website usually takes two to four weeks. Web and mobile applications vary based on scope, and we give a clear timeline before starting.",
    },
    {
      q: "What happens after launch?",
      a: "We handle hosting, monitoring, and ongoing feature development. Retainer support is available for clients who want continuous improvement rather than a one time build.",
    },
  ],
};

export default function WebsiteAppDevelopment() {
  return <ServiceDetailPage config={config} />;
}
