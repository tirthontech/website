import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, TrendingUp, Monitor, Zap, Building2, Star, ArrowRight, Bot } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
const logoUrl = "/logo-footer.png";

const products = [
  {
    name: "RealtySell",
    href: "/products/realtysell",
    icon: Building2,
    description: "Real estate CRM for lead management, unit inventory, site visits and commission tracking",
    tag: "PropTech",
  },
  {
    name: "TradeSathi",
    href: "/products/tradesathi",
    icon: TrendingUp,
    description: "White-label subscriber app for SEBI-registered Research Analysts",
    tag: "FinTech",
  },
  {
    name: "BariQ",
    href: "/products/bariq",
    icon: Monitor,
    description: "Digital queue management for clinics, hospitals & diagnostic centres",
    tag: "HealthTech",
  },
  {
    name: "AKNA Terminal",
    href: "/products/akna-terminal",
    icon: Zap,
    description: "Multi-broker multi-account Windows trading terminal",
    tag: "Trading",
  },
  {
    name: "topreviewz",
    href: "/products/topreviewz",
    icon: Star,
    description: "Google review management for restaurants, salons, clinics & retail shops",
    tag: "MarTech",
  },
  {
    name: "TirthonQuant",
    href: "/products/tirthonquant",
    icon: Bot,
    description: "Algorithmic trading platform to automate strategies across Zerodha, Upstox and more",
    tag: "AlgoTrading",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isProductsActive = location.startsWith("/products");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-white/90 backdrop-blur-xl border-border/50 shadow-sm" : "bg-white/80 backdrop-blur-sm py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group relative z-50 no-underline">
          <img
            src={logoUrl}
            alt="Tirthon Tech Logo"
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-tight text-foreground hidden sm:block">
            Tirthon Tech
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors no-underline ${
              location === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>

          <Link
            href="/services"
            className={`text-sm font-medium transition-colors no-underline ${
              location.startsWith("/services") ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Services
          </Link>

          {/* Products mega-menu dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                isProductsActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-haspopup="true"
              aria-expanded={productsOpen}
            >
              Products
              <motion.span animate={{ rotate: productsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[620px] bg-card border border-border/70 rounded-2xl shadow-2xl overflow-hidden"
                  role="menu"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/50 bg-muted/40">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70">Our Products</p>
                      <p className="text-[11px] text-muted-foreground/50 mt-0.5">Custom-built software for specific industries</p>
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                      6 Products
                    </span>
                  </div>

                  {/* 2-column product grid */}
                  <div className="p-3 grid grid-cols-2 gap-1">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-muted/70 transition-all duration-150 no-underline group"
                        role="menuitem"
                        title={`${product.name} — ${product.description}`}
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                          <product.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                              {product.name}
                            </p>
                            <span className="text-[10px] font-semibold text-primary/70 bg-primary/8 px-1.5 py-0.5 rounded-full whitespace-nowrap hidden lg:block">
                              {product.tag}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="px-5 py-3.5 border-t border-border/50 bg-muted/30 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Need a custom solution? We build from scratch too.
                    </p>
                    <Link
                      href="/contact"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline no-underline whitespace-nowrap ml-3"
                    >
                      Talk to us <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Remaining links */}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors no-underline ${
                location === link.href || (link.href !== "/" && location.startsWith(link.href))
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/contact">
            <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg">
              Let&apos;s Talk
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl md:hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              <Link
                href="/"
                className={`text-lg font-medium transition-colors no-underline ${location === "/" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-lg font-medium transition-colors no-underline ${location.startsWith("/services") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>

              {/* Mobile Products */}
              <div className="flex flex-col items-center gap-3 w-full px-6">
                <button
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  className={`flex items-center gap-1 text-lg font-medium transition-colors ${isProductsActive ? "text-primary" : "text-muted-foreground"}`}
                >
                  Products
                  <motion.span animate={{ rotate: mobileProductsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden w-full"
                    >
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            onClick={() => { setMobileMenuOpen(false); setMobileProductsOpen(false); }}
                            className="flex flex-col gap-2 p-3 rounded-xl bg-muted/40 hover:bg-muted/70 no-underline transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                              <product.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground leading-tight">{product.name}</p>
                              <p className="text-[10px] font-medium text-primary/70 mt-0.5">{product.tag}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium transition-colors no-underline ${
                    location === link.href || (link.href !== "/" && location.startsWith(link.href))
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link href="/contact">
                <Button
                  onClick={() => setMobileMenuOpen(false)}
                  size="lg"
                  className="rounded-full w-[80%] max-w-[250px] bg-primary text-primary-foreground font-semibold"
                >
                  Let&apos;s Talk
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
