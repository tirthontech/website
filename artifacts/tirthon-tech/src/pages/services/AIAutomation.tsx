import { Bot } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "ai-automation",
  pillarLabel: "Technology",
  metaTitle: "AI Automation Services | Tirthon Tech",
  metaDescription:
    "AI automation for repetitive work: workflow automation, chatbots, document processing, and custom AI agents built around your actual business tasks.",
  keywords:
    "AI automation services, business process automation AI, AI chatbot development, AI workflow automation India, custom AI agents, AI integration services",
  icon: Bot,
  h1: "AI Automation",
  heroSubheading: "Automate the Repetitive Work. Free Your Team for What Needs a Human.",
  heroParagraph:
    "A lot of what eats up your team's time is not actually hard, it is just repetitive: data entry, responding to the same questions, moving information between tools. We build AI automation that handles exactly that, so your team spends time on the decisions that actually need a person.",
  secondaryHeading: "Automation That Fits Into How You Already Work",
  secondaryParagraph:
    "We do not hand you a generic chatbot and call it done. We look at the specific repetitive tasks costing your team time, then build automation around those, connected to the tools you already use.",
  trustHeading: "What We Build",
  trustParagraph: "Depending on your business, this usually includes some combination of the following.",
  bullets: [
    { title: "Workflow and task automation", description: "using AI to handle repetitive steps across your existing tools, not replacing them." },
    { title: "Chatbots and virtual assistants", description: "that actually answer real questions correctly, not generic scripted responses." },
    { title: "AI integration into existing tools", description: "connecting AI capabilities into the software your team already uses daily." },
    { title: "Document and data processing", description: "automatically extracting, structuring, and routing information from documents, forms, and messages." },
    { title: "Custom AI agents", description: "built for specific, repeatable tasks in your business, not a general purpose tool that does everything poorly." },
  ],
  differentHeading: "Why Generic AI Tools Often Disappoint",
  differentParagraph:
    "Most AI automation disappointments come from bolting a generic tool onto a process it was never built for. We start with the specific task, then build or configure the automation around that, with a human checkpoint anywhere the cost of a mistake is high.",
  faqs: [
    {
      q: "Will this replace our team?",
      a: "No. The goal is removing repetitive work, not judgment. Your team ends up spending time on the decisions that actually need a person.",
    },
    {
      q: "What kind of tasks are worth automating?",
      a: "Anything repetitive, rule based, and high volume: data entry, routing requests, answering common questions, and processing documents are common starting points.",
    },
    {
      q: "How do you handle mistakes or edge cases?",
      a: "We build in human checkpoints wherever a mistake would be costly, so automation handles the routine cases and flags anything unusual for a person to review.",
    },
    {
      q: "Do we need our own AI or technical team to maintain this?",
      a: "No. We build, deploy, and maintain the automation, and we stay involved as your processes change.",
    },
  ],
};

export default function AIAutomation() {
  return <ServiceDetailPage config={config} />;
}
