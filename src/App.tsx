import { Navbar, Hero, Services, About, Process, Testimonials, Contact, Footer } from "./components/Sections";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');
  :root { --fh: 'Plus Jakarta Sans', sans-serif; --fb: 'Manrope', sans-serif; }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; font-style: normal !important; }

  html, body {
    width: 100%; max-width: 100%;
    overflow-x: hidden;
    background: #060a07;
    color: #fff;
    scroll-behavior: smooth;
  }
  #root { width: 100%; max-width: 100%; overflow-x: hidden; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #060a07; }
  ::-webkit-scrollbar-thumb { background: #00d68f40; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #00d68f; }

  /* Hero responsive */
  .hero-inner { padding: 140px 60px 80px !important; gap: 64px !important; }
  .hero-left { max-width: 620px !important; }
  .hero-right { display: flex !important; }
  .hero-mini-cards { display: flex !important; }

  /* Sections */
  .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .service-card {
    background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 18px; overflow: hidden; cursor: pointer;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .service-card:hover { border-color: rgba(0,214,143,0.22); box-shadow: 0 20px 60px rgba(0,214,143,0.07); }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
  .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; }

  /* Tablet */
  @media (max-width: 1100px) {
    .hero-inner { padding: 120px 32px 60px !important; gap: 40px !important; }
    .hero-left { max-width: 520px !important; }
    .services-grid { grid-template-columns: repeat(2, 1fr); }
    .process-grid { grid-template-columns: repeat(2, 1fr); }
    .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .contact-grid { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  }

  /* Mobile */
  @media (max-width: 768px) {
    .hero-inner {
      flex-direction: column !important;
      padding: 100px 20px 60px !important;
      gap: 40px !important;
      align-items: flex-start !important;
    }
    .hero-left { max-width: 100% !important; }
    .hero-right {
      width: 100% !important;
      flex-direction: column !important;
      gap: 12px !important;
      align-items: stretch !important;
    }
    .hero-mini-cards { flex-direction: row !important; }
    .hero-buttons { flex-direction: column !important; width: 100% !important; }
    .hero-buttons a { width: 100% !important; justify-content: center !important; }
    .services-grid { grid-template-columns: 1fr !important; }
    .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .process-grid { grid-template-columns: 1fr !important; }
    .testimonials-grid { grid-template-columns: 1fr !important; }
    .contact-grid { grid-template-columns: 1fr !important; }
    .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
    .section-pad { padding: 72px 0 !important; }
    .section-inner { padding: 44px 20px 0 !important; }
  }

  @media (max-width: 480px) {
    .hero-mini-cards { flex-direction: row !important; gap: 10px !important; }
  }
`;

export default function App() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{ background: "#060a07", minHeight: "100vh", width: "100%" }}>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}