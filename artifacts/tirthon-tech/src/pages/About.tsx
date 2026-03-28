import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Users, CheckCircle, Globe2, ShieldCheck } from "lucide-react";

const values = [
  {
    title: "Straight talk",
    description: "We don't hide behind technical terms or vague timelines. You'll always know where things stand and why.",
    icon: Target
  },
  {
    title: "Curiosity",
    description: "We stay on top of what's new in tech — not to chase trends, but to pick the right tool for the right job.",
    icon: Lightbulb
  },
  {
    title: "We're in it together",
    description: "When you win, we win. We care about what happens after launch, not just what gets shipped.",
    icon: Users
  }
];

const reasons = [
  { text: "Engineers who've shipped real products, not just side projects", icon: ShieldCheck },
  { text: "Clients from across the world — different industries, different problems", icon: Globe2 },
  { text: "We've helped companies go from idea to product to growth", icon: CheckCircle },
  { text: "Clear process, no surprises, and we actually meet deadlines", icon: CheckCircle },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="About Us | Tirthon Tech Software Development"
        description="Learn about Tirthon Tech — a software development company committed to building scalable, intelligent, and future-ready technology for clients worldwide. Clarity. Innovation. Partnership."
        path="/about"
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                About <span className="text-primary">Tirthon Tech</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                We're a small team that builds real software for real businesses. We've worked with clients from different countries and industries — and we take every project seriously.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/30 border-y border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We started Tirthon Tech because we wanted to build software the right way — not the fastest, cheapest, cut-every-corner way. Whether someone comes to us with a rough idea or a detailed spec, we put in the same effort. That hasn't changed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors shadow-sm text-center">
                      <CardHeader className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-foreground">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-24 bg-foreground text-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-background/80 text-lg">Here's the honest version of why people keep coming back to us.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-background/10 p-6 rounded-2xl"
                  >
                    <Icon className="w-8 h-8 text-primary shrink-0" />
                    <span className="text-lg font-medium">{reason.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Have something in mind? Let's talk.</h2>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
