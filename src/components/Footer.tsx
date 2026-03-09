import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 bg-secondary/30 bg-noise" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <img
                src="/assets/SiriusXMCA.png"
                alt="SiriusXMca"
                className="h-10 w-auto object-contain"
              />
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
              <a href="mailto:help@siriusxmca.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" /> help@siriusxmca.com
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Lethbridge, Alberta</span>
              </div>
            </div>
          </div>
        </div>

        <div className="line-glow mt-12 mb-8" />
        <div className="text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} SiriusXMca. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;