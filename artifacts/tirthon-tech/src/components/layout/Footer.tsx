import logoUrl from "@assets/tirthontech_logo_1774692162566.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <img 
          src={logoUrl} 
          alt="Tirthon Tech Logo" 
          className="h-12 w-auto object-contain mb-6 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
        />
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">Tirthon Tech</h3>
        <p className="text-muted-foreground font-medium tracking-wide">Software that scales.</p>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent my-8" />
        
        <div className="flex flex-col md:flex-row justify-between w-full items-center text-sm text-muted-foreground/60 gap-4">
          <p>© {currentYear} Tirthon Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
