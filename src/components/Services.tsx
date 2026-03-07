import { motion } from "framer-motion";
import { Radio, Laptop, Gamepad2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Radio,
    title: "Satellite Radio Repair",
    description: "Revive your satellite radio with expert repairs. From signal problems to hardware malfunctions, we restore your audio experience.",
    image: "/images/service-radio.jpg",
    tag: "Most Popular",
  },
  {
    icon: Laptop,
    title: "Computer & Laptop Repair",
    description: "Swift solutions for your computer woes. Screen replacements, software troubleshooting, and hardware fixes.",
    image: "/images/service-laptop.jpg",
    tag: "Fast Turnaround",
  },
  {
    icon: Gamepad2,
    title: "Gaming Gadget Repair",
    description: "Expert fixes for your gaming devices. Consoles, controllers, and accessories — we get your gear back in the game.",
    image: "/images/service-gaming.jpg",
    tag: "New Service",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-28 lg:py-36 overflow-hidden">
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
          <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading mt-4 text-foreground tracking-tight">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Fast, reliable tech repairs anytime. We specialize in bringing your devices back to life.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold bg-primary/20 text-primary border border-primary/30 rounded-full px-3 py-1 backdrop-blur-sm">
                    {service.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold font-heading text-foreground mb-3 flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;