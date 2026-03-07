import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 bg-secondary/30 bg-noise" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center glow-green-sm">
                <span className="text-primary-foreground font-bold text-xs font-heading">SX</span>
              </div>
              <span className="text-lg font-bold font-heading text-foreground">
                Sirius<span className="text-gradient">XMus</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Expert repair solutions for all your devices. Fast, reliable, and professional service you can trust.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-bold font-heading text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <div className="space-y-3">
              {["Services", "About", "Testimonials", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-bold font-heading text-sm uppercase tracking-wider mb-5">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:8254026694" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" /> (825) 402-6694
              </a>
              <a href="mailto:help@siriusxmus.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" /> help@siriusxmus.com
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>101-75 Fairmont Blvd S, Lethbridge, AB T1K 6Z2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="line-glow mt-12 mb-8" />
        <div className="text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} SiriusXMus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;