import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Icon = {
  Phone: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>,
  Mail: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  MapPin: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Star: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Menu: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Check: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Zap: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Shield: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Tool: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  Award: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  Cpu: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
  Radio: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/></svg>,
  Gamepad: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="8" width="20" height="12" rx="2"/><path d="M6 8V5a2 2 0 012-2h8a2 2 0 012 2v3"/></svg>,
};

export const G = "#00d68f";
export const G2 = "#00b377";
export const BG = "#080c0a";
export const CARD = "rgba(255,255,255,0.035)";
export const BORDER = "rgba(255,255,255,0.08)";
export const BORDER_G = "rgba(0,214,143,0.2)";

const NAV = ["Services","About","Process","Testimonials","Contact"];
const SERVICES = [
  { icon: Icon.Radio, title: "Satellite Radio Repair", tag: "Most Popular", tc: "#10b981", desc: "Full diagnostics and repair of all satellite radio systems. We restore signal quality, fix hardware faults, and optimize performance so you never miss a beat.", bullets: ["Signal diagnostics & restoration","Antenna & receiver repair","Firmware & software updates","Hardware component replacement"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" },
  { icon: Icon.Cpu, title: "Computer & Laptop Repair", tag: "Fast Turnaround", tc: "#3b82f6", desc: "From broken screens to virus-infected systems, we handle it all. Most repairs are completed same day with a 90-day parts and labour warranty.", bullets: ["Screen & keyboard replacement","Data recovery & backup","Virus & malware removal","RAM, SSD & hardware upgrades"], img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&q=80" },
  { icon: Icon.Gamepad, title: "Gaming Console Repair", tag: "New Service", tc: "#a855f7", desc: "Expert fixes for all major consoles and peripherals. We get your setup back in peak condition — fast, reliable, and backed by warranty.", bullets: ["Console diagnostics & repair","Controller & joystick fixes","HDMI & power port repair","Deep cleaning & thermal paste"], img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=700&q=80" },
];
const WHY = [
  { icon: Icon.Shield, title: "Certified Technicians", desc: "Every repair handled by fully certified pros with years of hands-on experience." },
  { icon: Icon.Zap, title: "Same-Day Service", desc: "Walk in, walk out. Most repairs completed within hours, not days." },
  { icon: Icon.Tool, title: "OEM Quality Parts", desc: "We use only genuine, high-grade replacement parts on every repair." },
  { icon: Icon.Award, title: "90-Day Warranty", desc: "Every single repair is backed by our 90-day parts and labour guarantee." },
];
const PROCESS = [
  { n: "01", title: "Drop It Off", desc: "Bring your device to our Lethbridge location — no appointment needed. We are open 7 days a week." },
  { n: "02", title: "Free Diagnosis", desc: "Our certified technician runs a full diagnostic check at no charge and explains exactly what is wrong." },
  { n: "03", title: "Swift Repair", desc: "We repair your device using OEM-grade parts, usually within the same day or within 24 hours." },
  { n: "04", title: "Pick It Up", desc: "You are notified the moment it is ready. Collect your device with a 90-day warranty in hand." },
];
const TESTIMONIALS = [
  { name: "James R.", role: "Gamer, Lethbridge", initials: "JR", rating: 5, text: "Quick Teq fixed my PS5 in under 3 hours. I thought it was dead — they had it running perfectly same day. Best repair shop in the city, hands down." },
  { name: "Sarah M.", role: "Business Owner", initials: "SM", rating: 5, text: "Laptop crashed before a major client presentation. They recovered all my files and had everything working in 2 hours. Absolute lifesavers — highly recommend." },
  { name: "David L.", role: "Music Enthusiast", initials: "DL", rating: 5, text: "My satellite radio was completely dead. Not only did they fix it, they improved the signal quality too. Professional, fast, and great value." },
  { name: "Priya K.", role: "Student", initials: "PK", rating: 5, text: "Cracked my MacBook screen during exams. Quick Teq had it replaced in a few hours at a fair price. Staff was super friendly and explained everything clearly." },
  { name: "Mike T.", role: "Small Business", initials: "MT", rating: 5, text: "We send all our office laptops here for maintenance. Always fast, always reliable. They have saved us thousands in replacement costs over the years." },
  { name: "Lisa C.", role: "Homeowner", initials: "LC", rating: 5, text: "Water damaged my laptop. Did not think there was any hope, but Quick Teq recovered everything and got it working again. Incredible work!" },
];
const HOURS = [
  { day: "Monday", time: "9:00 AM – 10:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 10:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 10:00 PM" },
  { day: "Thursday", time: "9:00 AM – 10:00 PM" },
  { day: "Friday", time: "9:00 AM – 10:00 PM" },
  { day: "Saturday", time: "10:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const LogoSVG = ({ height = 48 }: { height?: number }) => {
  const aspectRatio = 138 / 24;
  const width = height * aspectRatio;
  return (
    <svg height={height} width={width} viewBox="0 0 138 24" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      <path fill="#ffffff" d="m23.633 6.0604h6.3603v16.026h-6.3603v-16.026zm0-4.3656h6.3603v3.0593h-6.3603v-3.0593zm20.99 0h6.3619v3.0593h-6.3619v-3.0593zm0 4.3656h6.3619v16.026h-6.3619v-16.026zm18.994 7.7e-4h6.3619v16.026h-5.905v-2.3554c-1.5883 2.2007-3.1487 2.813-5.7791 2.813-3.4875 0-5.7495-2.1392-5.7495-6.7286v-9.7546h6.3603v8.655c0 2.2022 0.7662 2.9055 2.2947 2.9055 1.8346 0 2.4159-1.377 2.4159-3.8535v-7.707h8e-4zm23.704 10.888c0 3.3337-2.7532 5.5957-8.6255 5.5957-3.6694 0-7.707-1.1298-8.0427-5.4434h6.0557c0 0.6419 0.2448 1.133 0.6722 1.4679 0.3986 0.3062 0.948 0.4896 1.5588 0.4896 0.9791 0 2.0188-0.3062 2.0188-1.4376 0-2.5682-9.8183-0.5199-9.8183-6.7279 0-4.0983 4.2522-5.2926 7.585-5.2926 3.3329 0 7.5858 0.79572 7.9533 5.0463h-5.7806c-0.0629-0.5191-0.2759-0.88667-0.6139-1.1618-0.3357-0.27431-0.7942-0.39553-1.2837-0.39553-1.1019 0-1.8036 0.3357-1.8036 1.1314 0 2.2318 10.123 0.7344 10.123 6.7287l0.0016-8e-4zm-65.555-4.04c0.4834 0.739 0.7717 1.6397 0.7717 2.7485-0.0335 4.103-3.4269 6.8872-10.734 6.8872-4.5676 0-9.593-1.3925-10.01-6.6983v-0.2666h6.8491l-1.5153 4.4674 4.9942-3.4743 4.9935 3.4743-1.3009-3.8364c-0.2043-0.3986-0.725-0.617-0.725-0.617-2.7306-1.5129-12.686-0.6885-12.686-7.3868 0-5.044 5.2903-6.5126 9.4391-6.5126 4.1487 0 9.4414 0.97989 9.8983 6.2104v0.20049h-7.7101l-1.9108-5.6299-1.9101 5.6291h-6.1816l3.4494 2.3786c1.0094-0.4064 2.0934-0.5859 3.1721-0.69935 1.1578-0.12123 2.3265-0.14609 3.4882-0.06839 0.9791 0.06605 1.9544 0.20437 2.9094 0.42894 0.8618 0.2028 1.7422 0.4305 2.5247 0.8525 0.8975 0.4841 1.6684 1.1011 2.1999 1.9123h-0.0047zm20.677-7.3076c0.3956 0 0.8261 0.09247 0.8261 0.09247v6.3604s-0.3357-0.1834-1.3156-0.1834c-2.6009 0-3.9141 1.2231-3.9141 4.6787v5.5374h-6.3635v-16.027h5.7814v3.2412h0.0599c0.8882-2.5068 2.4353-3.6996 4.9243-3.6996h0.0015zm83.066-3.4494h10.718v19.934h-6.776v-5.6556c0-2.7438 0.052-5.2817 0.154-7.6153-0.205 0.95192-0.431 1.8572-0.677 2.7159l-2.772 10.555h-5.667l-2.834-10.555c-0.103-0.3917-0.2-0.7654-0.292-1.1198-0.093-0.3543-0.17-0.67215-0.231-0.95189-0.062-0.27975-0.104-0.43827-0.124-0.47635 0.103 2.2776 0.154 4.7595 0.154 7.4474v5.6556h-6.775v-19.934h10.717l1.724 7.5594c0.185 0.84002 0.359 1.6334 0.524 2.3801 0.226-1.1943 0.39-1.9877 0.493-2.3801l1.663-7.5594h1e-3zm-23.622 9.2954 7.853 10.639h-8.161l-1.202-1.82-2.3403-3.6118c-0.6364 0.9519-1.4888 2.1556-2.5565 3.6118l-1.3242 1.82h-7.7303l8.0691-10.219-7.2065-9.715h8.0691l1.2013 1.736c0.7802 1.1384 1.3654 1.9971 1.7554 2.576 0.0412-0.0746 0.3179-0.48489 0.8315-1.2317 0.4103-0.59679 0.7188-1.0452 0.9244-1.3436l1.201-1.736h7.514l-6.899 9.2953 1e-3 -7e-4z"/>
    </svg>
  );
};

export function Reveal({ children, delay = 0, x = 0, y = 28 }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y, x }} animate={inView ? { opacity: 1, y: 0, x: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function SectionHead({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <span style={{ display: "inline-block", background: G + "18", border: "1px solid " + G + "40", color: G, fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.18em", padding: "6px 16px", borderRadius: 40, marginBottom: 14 }}>{label}</span>
      <h2 style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: "clamp(30px,5vw,52px)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px" }}>{title}</h2>
      {sub && <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, maxWidth: 460, margin: "14px auto 0", lineHeight: 1.7 }}>{sub}</p>}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 900);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      {/* ── Top bar ── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 9000,
          height: 64,
          background: scrolled ? "rgba(8,12,10,0.96)" : "rgba(8,12,10,0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex", alignItems: "center",
        }}
      >
        <div style={{ width: "100%", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="/#" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <LogoSVG height={38} />
          </a>

          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {NAV.map(n => (
                <a key={n} href={"#" + n.toLowerCase()}
                  style={{ fontFamily: "var(--fb)", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none", padding: "8px 14px", borderRadius: 8, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = G)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >{n}</a>
              ))}
              <a href="tel:8254026694" style={{ marginLeft: 8, display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg," + G + "," + G2 + ")", color: "#fff", padding: "10px 18px", borderRadius: 40, fontWeight: 700, fontSize: 13, textDecoration: "none", boxShadow: "0 0 20px " + G + "40", fontFamily: "var(--fb)", whiteSpace: "nowrap" }}>
                <Icon.Phone /> (825) 402-6694
              </a>
            </div>
          )}

          {/* Mobile hamburger button */}
          {isMobile && (
            <button
              onClick={() => setOpen(true)}
              style={{
                background: "none",
                border: "1.5px solid rgba(255,255,255,0.22)",
                color: "#fff", cursor: "pointer",
                width: 42, height: 42, borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon.Menu />
            </button>
          )}
        </div>
      </motion.header>

      {/* ── Mobile slide-in sidebar ── */}
      <AnimatePresence>
        {open && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 9998,
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(4px)",
              }}
            />
            {/* Sidebar panel */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: "78%", maxWidth: 320,
                zIndex: 9999,
                background: "#0c110e",
                borderLeft: "1px solid rgba(0,214,143,0.15)",
                display: "flex", flexDirection: "column",
                boxShadow: "-20px 0 60px rgba(0,0,0,0.6)",
              }}
            >
              {/* Sidebar header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <LogoSVG height={28} />
                </div>
                <button
                  onClick={() => setOpen(false)}
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", cursor: "pointer", width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <Icon.X />
                </button>
              </div>

              {/* Nav links */}
              <div style={{ flex: 1, padding: "12px 0", overflowY: "auto" }}>
                {NAV.map((n, i) => (
                  <motion.a
                    key={n}
                    href={"#" + n.toLowerCase()}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07 }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "16px 22px",
                      fontFamily: "var(--fb)", fontSize: 16, fontWeight: 600,
                      color: "rgba(255,255,255,0.78)", textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = G + "12"; (e.currentTarget as HTMLElement).style.color = G; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.78)"; }}
                  >
                    {n}
                    <span style={{ color: G, fontSize: 14, fontWeight: 400 }}>→</span>
                  </motion.a>
                ))}
              </div>

              {/* Bottom CTA */}
              <div style={{ padding: "20px" }}>
                <a href="tel:8254026694"
                  onClick={() => setOpen(false)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "linear-gradient(135deg," + G + "," + G2 + ")", color: "#fff", padding: "16px", borderRadius: 14, fontWeight: 700, textDecoration: "none", fontFamily: "var(--fb)", fontSize: 15, boxShadow: "0 0 28px " + G + "40" }}>
                  <Icon.Phone /> (825) 402-6694
                </a>
                <p style={{ textAlign: "center", fontFamily: "var(--fb)", fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 12 }}>Free diagnosis · Same-day service</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


export function Hero() {
  return (
    <section style={{
      position: "relative", width: "100%", minHeight: "100vh",
      display: "flex", flexDirection: "column" as const,
      overflow: "hidden", background: "#060a07",
    }}>

      {/* ── Full-bleed background image with cinematic overlay ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=2000&q=80"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.18 }}
        />
        {/* dark left vignette */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, #060a07 38%, rgba(6,10,7,0.82) 62%, rgba(6,10,7,0.35) 100%)" }} />
        {/* bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, #060a07, transparent)" }} />
      </div>

      {/* ── Animated glow orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "-10%", right: "5%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, #00d68f30, transparent 68%)", filter: "blur(50px)", pointerEvents: "none", zIndex: 1 }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 14, repeat: Infinity }}
        style={{ position: "absolute", bottom: "10%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #00d68f22, transparent 70%)", filter: "blur(70px)", pointerEvents: "none", zIndex: 1 }}
      />
      {/* fine grid */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.028, backgroundImage: "linear-gradient(#00d68f 1px,transparent 1px),linear-gradient(90deg,#00d68f 1px,transparent 1px)", backgroundSize: "72px 72px" }} />

      {/* ── MAIN CONTENT — two-column split ── */}
      <div style={{
        position: "relative", zIndex: 10, flex: 1,
        display: "flex", alignItems: "center",
        maxWidth: 1400, width: "100%", margin: "0 auto",
        padding: "140px 60px 80px",
        gap: 64,
      }} className="hero-inner">

        {/* LEFT — text content */}
        <div style={{ flex: "0 0 auto", maxWidth: 620 }} className="hero-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 9, border: "1px solid #00d68f30", borderRadius: 40, padding: "8px 18px", marginBottom: 32, background: "#00d68f0a" }}
          >
            <motion.span animate={{ opacity: [1, 0.25, 1] }} transition={{ duration: 1.8, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#00d68f", boxShadow: "0 0 10px #00d68f", display: "inline-block", flexShrink: 0 }} />
            <span style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, fontFamily: "var(--fb)", fontWeight: 500, letterSpacing: "0.02em" }}>Lethbridge's #1 Trusted Tech Repair Shop</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--fh)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-2px", marginBottom: 28 }}
          >
            <span style={{ display: "block", fontSize: "clamp(52px, 6.5vw, 96px)", color: "#ffffff" }}>Fix It</span>
            <span style={{ display: "block", fontSize: "clamp(52px, 6.5vw, 96px)", background: "linear-gradient(90deg, #00d68f 0%, #4fffbe 55%, #00d68f 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundSize: "200%", }}>Fast. Right.</span>
            <span style={{ display: "block", fontSize: "clamp(52px, 6.5vw, 96px)", color: "rgba(255,255,255,0.18)" }}>Guaranteed.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52, duration: 0.7 }}
            style={{ color: "rgba(255,255,255,0.46)", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.8, marginBottom: 44, fontFamily: "var(--fb)", maxWidth: 480 }}
          >
            Satellite radios, laptops, computers and gaming consoles — repaired same day with a <strong style={{ color: "rgba(255,255,255,0.72)", fontWeight: 600 }}>90-day warranty</strong>. Walk in, walk out fixed.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68, duration: 0.6 }}
            style={{ display: "flex", flexWrap: "wrap" as const, gap: 14 }} className="hero-buttons"
          >
            <a href="tel:8254026694" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, #00d68f, #00b377)",
              color: "#fff", padding: "16px 32px", borderRadius: 56,
              fontWeight: 700, fontSize: 15, textDecoration: "none",
              boxShadow: "0 0 40px #00d68f50, 0 4px 20px rgba(0,0,0,0.3)",
              fontFamily: "var(--fb)", whiteSpace: "nowrap" as const,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px #00d68f70, 0 4px 24px rgba(0,0,0,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px #00d68f50, 0 4px 20px rgba(0,0,0,0.3)"; }}
            >
              <Icon.Phone /> Call Now — Free Quote
            </a>
            <a href="#services" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.72)",
              padding: "16px 32px", borderRadius: 56, fontWeight: 600, fontSize: 15,
              textDecoration: "none", background: "rgba(255,255,255,0.04)",
              fontFamily: "var(--fb)", whiteSpace: "nowrap" as const,
              transition: "border-color 0.2s, color 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00d68f50"; (e.currentTarget as HTMLElement).style.color = "#00d68f"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.72)"; }}
            >
              Our Services <Icon.ArrowRight />
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
            style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 44, flexWrap: "wrap" as const }}
          >
            {["✓ Free Diagnosis", "✓ Same-Day Service", "✓ 90-Day Warranty"].map((t, i) => (
              <span key={i} style={{ fontFamily: "var(--fb)", fontSize: 13, color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>
                <span style={{ color: "#00d68f" }}>{t.split(" ")[0]}</span> {t.split(" ").slice(1).join(" ")}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — floating stats cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" as const, gap: 16, alignItems: "flex-end" }} className="hero-right">
          {/* Big stat card */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: -20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 24, padding: "32px 40px", backdropFilter: "blur(20px)", width: "100%", maxWidth: 360 }}
          >
            <div style={{ fontFamily: "var(--fh)", fontWeight: 800, fontSize: 64, color: "#00d68f", lineHeight: 1, letterSpacing: "-2px" }}>800+</div>
            <div style={{ fontFamily: "var(--fb)", fontWeight: 600, fontSize: 16, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Devices Repaired</div>
            <div style={{ fontFamily: "var(--fb)", fontSize: 13, color: "rgba(255,255,255,0.32)", marginTop: 4 }}>and counting in Lethbridge, AB</div>
            <div style={{ marginTop: 20, height: 3, borderRadius: 3, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
              <motion.div initial={{ width: 0 }} animate={{ width: "88%" }} transition={{ delay: 1.2, duration: 1.4, ease: "easeOut" }}
                style={{ height: "100%", background: "linear-gradient(90deg, #00d68f, #4fffbe)", borderRadius: 3 }} />
            </div>
          </motion.div>

          {/* Two smaller cards side-by-side */}
          <div style={{ display: "flex", gap: 14, width: "100%", maxWidth: 360 }} className="hero-mini-cards">
            {[
              { val: "98%", label: "Satisfaction Rate", icon: "★" },
              { val: "<2hr", label: "Avg. Repair Time", icon: "⚡" },
            ].map((c, i) => (
              <motion.div key={c.label}
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: "24px 20px", backdropFilter: "blur(20px)" }}
              >
                <div style={{ fontSize: 22, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontFamily: "var(--fh)", fontWeight: 800, fontSize: 28, color: "#fff", letterSpacing: "-1px" }}>{c.val}</div>
                <div style={{ fontFamily: "var(--fb)", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 4, lineHeight: 1.4 }}>{c.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "linear-gradient(135deg, #00d68f12, #00d68f06)", border: "1px solid #00d68f25", borderRadius: 20, padding: "20px 24px", backdropFilter: "blur(20px)", width: "100%", maxWidth: 360, display: "flex", alignItems: "center", gap: 16 }}
          >
            <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg, #00d68f, #00b377)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 16px #00d68f50" }}>
              <Icon.MapPin />
            </div>
            <div>
              <div style={{ fontFamily: "var(--fb)", fontWeight: 700, fontSize: 13, color: "#fff" }}>Lethbridge, Alberta · Mon–Fri 9AM–10PM</div>
              {/* <div style={{ fontFamily: "var(--fb)", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Lethbridge, Alberta · Mon–Fri 9AM–10PM</div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ position: "absolute", bottom: -8, left: "45%", transform: "translateX(-50%)", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 6, zIndex: 10 }}
      >
        <span style={{ fontFamily: "var(--fb)", fontSize: 10, color: "rgba(255,255,255,0.2)", textTransform: "uppercase" as const, letterSpacing: "0.2em" }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, #00d68f60, transparent)" }} />
      </motion.div>
    </section>
  );
}


export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="services" ref={ref} className="section-pad" style={{ background: BG, padding: "110px 0", position: "relative" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent," + G + "40,transparent)" }} />
      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 0", width: "100%" }}>
        <Reveal><SectionHead label="What We Fix" title="Our Services" sub="From signal dropouts to smashed screens — we fix it all, fast." /></Reveal>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.14, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="service-card">
              <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(8,12,10,0.95) 0%,rgba(8,12,10,0.25) 60%,transparent 100%)" }} />
                <span style={{ position: "absolute", top: 14, left: 14, background: s.tc + "20", border: "1px solid " + s.tc + "50", color: s.tc, fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", padding: "5px 12px", borderRadius: 40, fontFamily: "var(--fb)" }}>{s.tag}</span>
                <div style={{ position: "absolute", bottom: 14, left: 14, width: 44, height: 44, borderRadius: 12, background: G + "18", border: "1px solid " + G + "30", display: "flex", alignItems: "center", justifyContent: "center", color: G }}>
                  <s.icon />
                </div>
              </div>
              <div style={{ padding: "22px 22px 24px" }}>
                <h3 style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 19, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "rgba(255,255,255,0.44)", lineHeight: 1.72, marginBottom: 18 }}>{s.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
                  {s.bullets.map(b => (
                    <div key={b} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <span style={{ width: 18, height: 18, borderRadius: 5, background: G + "18", border: "1px solid " + G + "30", display: "flex", alignItems: "center", justifyContent: "center", color: G, flexShrink: 0 }}><Icon.Check /></span>
                      <span style={{ fontFamily: "var(--fb)", fontSize: 12, color: "rgba(255,255,255,0.48)" }}>{b}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 20, paddingTop: 16, borderTop: "1px solid " + BORDER, color: G, fontSize: 13, fontWeight: 600, textDecoration: "none", fontFamily: "var(--fb)", transition: "gap 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.gap = "10px")} onMouseLeave={e => (e.currentTarget.style.gap = "6px")}>
                  Book This Repair <Icon.ArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad" style={{ background: "#070b09", padding: "110px 0", position: "relative" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent," + G + "40,transparent)" }} />
      <motion.div animate={{ scale: [1,1.2,1], opacity: [0.05,0.11,0.05] }} transition={{ duration: 12, repeat: Infinity }}
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle," + G + "20,transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 0", position: "relative" }}>
        <div className="about-grid">
          <Reveal x={-40}>
            <span style={{ display: "inline-block", background: G + "18", border: "1px solid " + G + "40", color: G, fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.18em", padding: "6px 16px", borderRadius: 40, marginBottom: 16, fontFamily: "var(--fb)" }}>Why Choose Us</span>
            <h2 style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: "clamp(28px,4vw,48px)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: 18 }}>
              Lethbridge's #1<br /><span style={{ background: "linear-gradient(90deg," + G + ",#4fffbe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Tech Repair</span> Shop
            </h2>
            <p style={{ color: "rgba(255,255,255,0.46)", fontSize: 15, lineHeight: 1.8, marginBottom: 26, fontFamily: "var(--fb)", maxWidth: 450 }}>
              We are passionate about technology and committed to getting your devices back in perfect working order — fast, reliably, and at fair prices.
            </p>
            {["All repairs backed by a 90-day warranty","Free diagnosis on every device — no hidden fees","Genuine OEM-grade replacement parts only","Certified techs with 10+ years combined experience","Walk-ins welcome, no appointment needed","Most repairs done same day or within 24 hours"].map((item, i) => (
              <Reveal key={item} delay={0.05 * i} y={0}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 6, background: G + "18", border: "1px solid " + G + "35", display: "flex", alignItems: "center", justifyContent: "center", color: G, flexShrink: 0 }}><Icon.Check /></span>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 14, color: "rgba(255,255,255,0.58)" }}>{item}</span>
                </div>
              </Reveal>
            ))}
            <a href="tel:8254026694" className="btn-primary" style={{ marginTop: 26 }}><Icon.Phone /> Get a Free Quote</a>
          </Reveal>
          <Reveal x={40}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {WHY.map(w => (
                <motion.div key={w.title} whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 16, padding: "24px 20px", transition: "border-color 0.3s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = BORDER_G)}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = BORDER)}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: G + "14", border: "1px solid " + G + "25", display: "flex", alignItems: "center", justifyContent: "center", color: G, marginBottom: 14 }}>
                    <w.icon />
                  </div>
                  <h4 style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 8 }}>{w.title}</h4>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="section-pad" style={{ background: BG, padding: "110px 0", position: "relative" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent," + G + "40,transparent)" }} />
      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 0", width: "100%" }}>
        <Reveal><SectionHead label="How It Works" title="Simple 4-Step Process" sub="Getting your device fixed has never been easier." /></Reveal>
        <div className="process-grid">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12}>
              <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 18, padding: "28px 24px", transition: "border-color 0.3s, transform 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER_G; (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg," + G + "25," + G + "10)", border: "1px solid " + G + "40", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <span style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 16, color: G }}>{p.n}</span>
                </div>
                <h3 style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "rgba(255,255,255,0.43)", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad" style={{ background: "#070b09", padding: "110px 0", position: "relative" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent," + G + "40,transparent)" }} />
      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 0", width: "100%" }}>
        <Reveal><SectionHead label="Client Reviews" title="What People Say" sub="Real words from real customers in Lethbridge." /></Reveal>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.09}>
              <motion.div whileHover={{ y: -7, transition: { duration: 0.28 } }}
                style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 18, padding: "28px 24px", position: "relative", transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER_G; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px " + G + "0d"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <div style={{ position: "absolute", top: 14, right: 18, fontSize: 68, color: G + "0d", lineHeight: 1, fontFamily: "Georgia,serif", userSelect: "none" as const }}>"</div>
                <div style={{ display: "flex", gap: 2, marginBottom: 14, color: G }}>
                  {Array.from({ length: t.rating }).map((_, j) => <Icon.Star key={j} />)}
                </div>
                <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "rgba(255,255,255,0.58)", lineHeight: 1.75, marginBottom: 20 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid " + BORDER }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg," + G + "40," + G + "15)", border: "1px solid " + G + "30", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--fh)", fontWeight: 700, fontSize: 13, color: G, flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 14, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontFamily: "var(--fb)", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ background: BG, padding: "110px 0", position: "relative" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent," + G + "40,transparent)" }} />
      <motion.div animate={{ scale: [1,1.15,1], opacity: [0.06,0.12,0.06] }} transition={{ duration: 11, repeat: Infinity }}
        style={{ position: "absolute", bottom: 0, right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle," + G + "20,transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 0", position: "relative" }}>
        <Reveal><SectionHead label="Contact Us" title="Get In Touch" sub="Walk-ins welcome. No appointment needed." /></Reveal>
        <div className="contact-grid">
          <Reveal>
            <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 20, padding: "32px 28px" }}>
              <h3 style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 26 }}>Find Us</h3>
              {[
                { ic: Icon.Phone, l: "Phone", v: "(825) 402-6694", h: "tel:8254026694" },
                { ic: Icon.Mail, l: "Email", v: "help@siriusxmca.com", h: "mailto:help@siriusxmca.com" },
                { ic: Icon.MapPin, l: "Address", v: "101-75 Fairmont Blvd S, Lethbridge, AB T1K 6Z2", h: "#" },
              ].map(item => (
                <a key={item.l} href={item.h} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20, textDecoration: "none" }}
                  onMouseEnter={e => { const el = (e.currentTarget as HTMLElement).querySelector(".cv") as HTMLElement; if (el) el.style.color = G; }}
                  onMouseLeave={e => { const el = (e.currentTarget as HTMLElement).querySelector(".cv") as HTMLElement; if (el) el.style.color = "rgba(255,255,255,0.62)"; }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: G + "14", border: "1px solid " + G + "25", display: "flex", alignItems: "center", justifyContent: "center", color: G, flexShrink: 0 }}><item.ic /></div>
                  <div>
                    <div style={{ fontFamily: "var(--fb)", fontSize: 10, color: "rgba(255,255,255,0.28)", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 4 }}>{item.l}</div>
                    <div className="cv" style={{ fontFamily: "var(--fb)", fontSize: 14, color: "rgba(255,255,255,0.62)", lineHeight: 1.5, transition: "color 0.2s" }}>{item.v}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 20, padding: "32px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 26 }}>
                <div style={{ color: G }}><Icon.Clock /></div>
                <h3 style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 18, color: "#fff" }}>Business Hours</h3>
              </div>
              {HOURS.map((h, i) => (
                <div key={h.day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: i < HOURS.length - 1 ? "1px solid " + BORDER : "none" }}>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 13, color: h.time === "Closed" ? "rgba(255,255,255,0.26)" : "rgba(255,255,255,0.62)" }}>{h.day}</span>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600, color: h.time === "Closed" ? "rgba(255,255,255,0.26)" : G }}>{h.time}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ borderRadius: 20, overflow: "hidden", position: "relative", minHeight: 340 }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0d6e45 0%,#10955e 50%," + G + " 100%)" }} />
              <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 25% 15%,rgba(255,255,255,0.1),transparent 50%)" }} />
              <div style={{ position: "relative", padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>🔧</div>
                <h3 style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 24, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>Ready to Fix Your Device?</h3>
                <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, marginBottom: 24, flex: 1 }}>
                  Free diagnosis on every device. No hidden fees. Walk in or call — we are ready for you right now.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="tel:8254026694" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", color: "#0d6e45", padding: "15px 20px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none", fontFamily: "var(--fb)", transition: "transform 0.2s" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = "scale(1.02)")} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon.Phone /> Call Now</span><Icon.ArrowRight />
                  </a>
                  <a href="mailto:help@siriusxmca.com" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "2px solid rgba(255,255,255,0.35)", color: "#fff", padding: "13px 20px", borderRadius: 12, fontWeight: 600, fontSize: 14, textDecoration: "none", fontFamily: "var(--fb)", transition: "border-color 0.2s" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.75)")} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)")}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon.Mail /> Email Us</span><Icon.ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "#050805", borderTop: "1px solid " + BORDER, padding: "56px 0 28px" }}>
      <div className="section-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div className="footer-grid" style={{ marginBottom: 36 }}>
          <div>
            <div style={{ marginBottom: 14 }}>
              <LogoSVG height={34} />
            </div>
            <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "rgba(255,255,255,0.33)", lineHeight: 1.7, maxWidth: 270 }}>Lethbridge's trusted tech repair experts. Fast, reliable, professional.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,0.48)", textTransform: "uppercase" as const, letterSpacing: "0.14em", marginBottom: 16 }}>Navigation</h4>
            {NAV.map(n => (
              <a key={n} href={"#" + n.toLowerCase()} style={{ display: "block", fontFamily: "var(--fb)", fontSize: 14, color: "rgba(255,255,255,0.36)", textDecoration: "none", marginBottom: 11, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = G)} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.36)")}>{n}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,0.48)", textTransform: "uppercase" as const, letterSpacing: "0.14em", marginBottom: 16 }}>Contact</h4>
            {[
              { ic: Icon.Phone, v: "(825) 402-6694", h: "tel:8254026694" },
              { ic: Icon.Mail, v: "help@siriusxmca.com", h: "mailto:help@siriusxmca.com" },
              { ic: Icon.MapPin, v: "Lethbridge, AB T1K 6Z2", h: "#contact" },
            ].map(item => (
              <a key={item.v} href={item.h} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.36)", textDecoration: "none", fontSize: 13, fontFamily: "var(--fb)", marginBottom: 11, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = G)} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.36)")}>
                <item.ic /> {item.v}
 </a>
))}
</div>
</div>

<div
  style={{
    height: 1,
    background: "linear-gradient(90deg,transparent," + G + "30,transparent)",
    marginBottom: 20
  }}
/>

<div
  style={{
    textAlign: "center",
    fontFamily: "var(--fb)",
    fontSize: 12,
    color: "rgba(255,255,255,0.2)"
  }}
>
  © {new Date().getFullYear()} SiriosXM · Lethbridge, Alberta · All rights reserved.
  <div
    style={{
      marginTop: 6,
      fontSize: 11,
      color: "rgba(255, 255, 255, 0.15)"
    }}
  >
    Designed by <span style={{ color: "rgba(255, 255, 255, 0.15)", fontWeight: 500 }}>Pitambar</span>
  </div>
</div>

</div>
</footer>
  );
}