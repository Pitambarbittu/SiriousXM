import { motion } from "framer-motion";
import { Phone, ArrowDown, Zap, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Zap, value: "500+", label: "Devices Fixed" },
  { icon: Shield, value: "100%", label: "Satisfaction" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Layered backgrounds */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Tech repair workshop"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-muted-foreground text-sm font-medium">24/7 Support Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold font-heading leading-[0.95] mb-6 tracking-tight"
          >
            Expert
            <br />
            <span className="text-gradient">Repair</span>
            <br />
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-xl leading-relaxed"
          >
            Revive your devices today. Fast, reliable tech repairs for satellite radios,
            computers, laptops, and gaming gadgets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:8254026694"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:brightness-110 transition-all glow-green hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              (825) 402-6694
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 glass px-8 py-4 rounded-full text-lg font-semibold text-foreground hover:bg-secondary transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-lg"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="text-center sm:text-left"
            >
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <stat.icon className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold font-heading text-foreground">{stat.value}</span>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;