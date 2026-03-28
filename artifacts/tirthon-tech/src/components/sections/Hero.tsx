import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with abstract glow image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background to-background z-20" />
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-glow.png`}
          alt="Abstract background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

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
          Welcome to Tirthon Tech
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground max-w-4xl leading-[1.1]"
        >
          Build. Automate. <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-amber-700 text-glow">Scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
        >
          We help businesses create powerful software, automate complex operations, and grow with absolute confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg hover:-translate-y-1 transition-all duration-300 shadow-[0_0_30px_rgba(212,143,37,0.25)] hover:shadow-[0_0_40px_rgba(212,143,37,0.4)] group"
          >
            Let's Talk
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            variant="outline"
            size="lg"
            className="h-14 px-8 rounded-full border-border bg-background/50 backdrop-blur-sm hover:bg-muted text-foreground font-medium text-lg hover:-translate-y-1 transition-all duration-300"
          >
            Explore Services
          </Button>
        </motion.div>
      </div>

      {/* Decorative subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10 pointer-events-none" />
    </section>
  );
}
