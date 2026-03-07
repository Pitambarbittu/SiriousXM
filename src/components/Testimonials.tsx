import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James R.",
    role: "Gamer",
    text: "SiriusXMUS saved my gaming console! Their repair service was quick and effective, and now I can enjoy my favorite games without any issues. Highly recommend their expertise!",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Business Owner",
    text: "I was amazed by how efficiently SiriusXMUS repaired my laptop. They diagnosed the problem quickly and had it running like new in no time. Great customer service!",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Music Enthusiast",
    text: "My satellite radio was malfunctioning and I thought it was beyond repair. SiriusXMUS not only fixed it but also improved its performance! I couldn't be happier!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-0 left-0 right-0 line-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading mt-4 text-foreground tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-8 text-sm">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="text-primary font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;