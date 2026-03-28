import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Users, CheckCircle, Globe2, ShieldCheck } from "lucide-react";

const values = [
  {
    title: "Clarity",
    description: "We communicate transparently and deliver with precision. No technical jargon, just clear business outcomes.",
    icon: Target
  },
  {
    title: "Innovation",
    description: "We stay ahead of technology to bring you the best solutions. Building for tomorrow's scale today.",
    icon: Lightbulb
  },
  {
    title: "Partnership",
    description: "We work as an extension of your team, not just a vendor. Your success is inherently our success.",
    icon: Users
  }
];

const reasons = [
  { text: "Highly experienced, senior-level engineering team", icon: ShieldCheck },
  { text: "US-based presence with global delivery capabilities", icon: Globe2 },
  { text: "Proven track record with diverse, high-growth clients", icon: CheckCircle },
  { text: "Structured, agile delivery process ensuring timely results", icon: CheckCircle },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
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
                We are a US-based software development company committed to building scalable, intelligent, and future-ready technology.
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
                To empower businesses through technology that is clear, powerful, and built to grow. We bring the same discipline and craftsmanship to every project — whether it's a startup MVP or a massive enterprise system.
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
              <p className="text-background/80 text-lg">We deliver excellence at every step of the engineering lifecycle.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Ready to accelerate your growth?</h2>
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
