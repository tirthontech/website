import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

const logoUrl = "/logo-footer.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 — Menus */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-background/50 mb-6">Menus</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-background/50 mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Web & Mobile Apps",
                "AI & Automation",
                "Data Annotation",
                "Shopify & E-Commerce",
                "Cloud & Backend",
                "Windows Software",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-background/70 hover:text-primary transition-colors text-sm">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-background/50 mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact & Logo */}
          <div>
            <img
              src={logoUrl}
              alt="Tirthon Tech"
              className="h-10 w-auto object-contain mb-6 opacity-90"
            />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm leading-relaxed">
                  B56, Tilak Nagar, Indore, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919424575918" className="text-background/70 hover:text-primary transition-colors text-sm">
                  +91 94245 75918
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:tirthontech@gmail.com" className="text-background/70 hover:text-primary transition-colors text-sm">
                  tirthontech@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/40">
          <p>© {currentYear} Tirthon Tech. All rights reserved.</p>
          <p>Built in Indore, India · Clients worldwide</p>
        </div>
      </div>
    </footer>
  );
}
