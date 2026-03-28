const items = [
  "React", "Next.js", "TypeScript", "Python", "Node.js",
  "AWS", "GCP", "Flutter", "React Native", "Shopify",
  "PostgreSQL", "MongoDB", "LLMs", "OpenAI", "TensorFlow",
  "Docker", "Kubernetes", "FastAPI", "GraphQL", "Tailwind CSS",
  "C# / .NET", "Windows Apps", "Web Scraping", "Data Annotation", "AI Automation",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative py-5 bg-foreground overflow-hidden border-y border-background/10 select-none">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-6 text-sm font-medium text-background/60 hover:text-primary transition-colors cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
