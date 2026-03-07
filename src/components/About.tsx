import { motion } from "framer-motion";
import { Shield, Clock, Wrench, Award, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Shield, title: "Certified Technicians", desc: "Fully certified and trained on the latest technologies." },
  { icon: Clock, title: "Quick Turnaround", desc: "Most repairs completed within 24-48 hours." },
  { icon: Wrench, title: "Quality Parts", desc: "Only genuine and high-quality replacement parts." },
  { icon: Award, title: "Warranty Backed", desc: "Satisfaction guarantee and warranty coverage." },
];

const highlights = [
  "Signal & connectivity diagnostics",
  "Screen & hardware replacements",
  "Software troubleshooting",
  "Gaming console deep cleaning",
  "Data recovery services",
  "Performance optimization",
];

const About = () => {
  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50 bg-noise" />
      <div className="absolute top-0 left-0 right-0 line-glow" />

      {/* Background orb */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading mt-4 text-foreground leading-[1.1] tracking-tight">
              Revamp Your
              <br />
              Devices <span className="text-gradient">Today</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-lg">
              We're passionate about technology. Our experienced technicians handle everything with precision,
              care, and a commitment to getting it right the first time.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="tel:8254026694"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition-all mt-10 glow-green hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Free Quote
            </a>
          </motion.div>

          {/* Right - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-accent border border-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold font-heading text-foreground mb-2 text-sm">{feature.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;