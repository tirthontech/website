import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, TrendingUp, Monitor, Zap, Building2, Star } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
const logoUrl = "/logo-footer.png";

const products = [
  {
    name: "TradeSathi",
    href: "/products/tradesathi",
    icon: TrendingUp,
    description: "White-label subscriber app for SEBI-registered Research Analysts — deliver trading calls & recommendations professionally",
  },
  {
    name: "BariQ",
    href: "/products/bariq",
    icon: Monitor,
    description: "Digital queue management system for private clinics, hospitals & diagnostic centres in India",
  },
  {
    name: "AKNA Terminal",
    href: "/products/akna-terminal",
    icon: Zap,
    description: "Multi-broker multi-account Windows trading terminal for traders, trading desks & family offices",
  },
  {
    name: "RealtySell",
    href: "/products/realtysell",
    icon: Building2,
    description: "Real estate CRM for developers & brokers — lead management, unit inventory, site visits & commission tracking",
  },
  {
    name: "topreviewz",
    href: "/products/topreviewz",
    icon: Star,
    description: "Google review management for restaurants, salons, clinics & retail shops — get more reviews, stop negative ones",
  },
  {
    name: "TirthonQuant",
    href: "/products/tirthonquant",
    icon: TrendingUp,
    description: "Algorithmic trading platform for Indian traders — automate strategies across Zerodha, Upstox & more",
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
          {/* Home */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors no-underline ${
              location === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>

          {/* Services */}
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors no-underline ${
              location.startsWith("/services") ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Services
          </Link>

          {/* Products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                isProductsActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Products
              <motion.span animate={{ rotate: productsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-card border border-border/60 rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="p-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/60 transition-colors no-underline group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                          <product.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{product.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{product.description}</p>
                        </div>
                      </Link>
                    ))}
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
              Let's Talk
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              <div className="flex flex-col items-center gap-3 w-full px-8">
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
                      <div className="flex flex-col gap-2 pt-1">
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            onClick={() => { setMobileMenuOpen(false); setMobileProductsOpen(false); }}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/40 no-underline"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <product.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{product.name}</p>
                              <p className="text-xs text-muted-foreground">{product.description}</p>
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
                  Let's Talk
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
