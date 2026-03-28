import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-24 bg-background">
      {/* Background with soft geometric pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary text-sm font-medium tracking-wide"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Hey, we're Tirthon Tech
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground max-w-4xl leading-[1.1]"
        >
          Build. Automate. <span className="text-primary drop-shadow-sm">Scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
        >
          We build software that actually works for your business — whether that's a web app, a mobile product, AI tools, or anything in between. No fluff, just solid work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contact">
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_14px_rgba(212,143,37,0.3)] hover:shadow-[0_6px_20px_rgba(212,143,37,0.4)] group"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-full border-border bg-background/50 backdrop-blur-sm hover:bg-muted text-foreground font-medium text-lg hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10 pointer-events-none" />
    </section>
  );
}
