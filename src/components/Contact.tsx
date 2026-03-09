import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const hours = [
  { day: "Monday", time: "09:00 – 22:00" },
  { day: "Tuesday", time: "09:00 – 22:00" },
  { day: "Wednesday", time: "09:00 – 22:00" },
  { day: "Thursday", time: "09:00 – 22:00" },
  { day: "Friday", time: "09:00 – 22:00" },
  { day: "Saturday", time: "10:00 – 18:00" },
  { day: "Sunday", time: "Closed" },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50 bg-noise" />
      <div className="absolute top-0 left-0 right-0 line-glow" />

      {/* Background orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading mt-4 text-foreground tracking-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            We're here to help you! Reach out anytime.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold font-heading text-foreground mb-8">Reach Us Anytime</h3>
            <div className="space-y-6">
              <a href="tel:8254026694" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-accent border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors">(825) 402-6694</p>
                </div>
              </a>
              <a href="mailto:help@siriusxmus.com" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-accent border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors">help@siriusxmus.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent border border-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Address</p>
                  <p className="text-foreground font-semibold leading-relaxed">
                    Lethbridge, Alberta
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold font-heading text-foreground">Business Hours</h3>
            </div>
            <div className="space-y-1">
              {hours.map((h) => {
                const isWeekend = h.day === "Saturday" || h.day === "Sunday";
                return (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-3 border-b border-border/30 last:border-0"
                  >
                    <span className={`text-sm font-medium ${isWeekend ? "text-muted-foreground" : "text-foreground"}`}>
                      {h.day}
                    </span>
                    <span className={`text-sm font-mono ${isWeekend ? "text-muted-foreground" : "text-primary"}`}>
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-emerald-600" />
            <div className="absolute inset-0 bg-noise opacity-50" />
            <div className="relative p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-heading text-primary-foreground mb-4 leading-tight">
                  Ready to Fix<br />Your Device?
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed text-sm mb-8">
                  Don't let a broken device slow you down. Our team is ready to diagnose and repair any issue
                  with precision and care.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="tel:8254026694"
                  className="flex items-center justify-between w-full bg-primary-foreground text-primary px-6 py-4 rounded-xl font-bold hover:bg-primary-foreground/90 transition-all group/btn"
                >
                  <span>Call Now</span>
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
                <a
                  href="mailto:help@siriusxmus.com"
                  className="flex items-center justify-between w-full border-2 border-primary-foreground/30 text-primary-foreground px-6 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-all group/btn"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;