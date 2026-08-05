import { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { COMPANY_FACTS } from "@/lib/data";
import {
  BiPhoneCall,
  BiEnvelope,
  BiMap,
  BiLogoWhatsapp,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiSupport,
  BiTimeFive,
} from "react-icons/bi";

export const metadata: Metadata = {
  title: "Contact Us | Ayuragreen Escapes Pvt Ltd",
  description:
    "Get in touch with Ayuragreen Escapes — Sri Lanka luxury Destination Management Company. Phone/WhatsApp: +94 77 215 8888, Email: info@ayuragreenescapes.com.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "420px", backgroundColor: "var(--forest-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
          alt="Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Contact Us Hero"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
          priority
        />
        <div className="container-custom" style={{ position: "relative", zIndex: 2, textAlign: "center", marginTop: "3.5rem" }}>
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>GET IN TOUCH</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5.5vw, 4rem)", color: "var(--white)", fontFamily: "var(--font-playfair)" }}>
            Let's Plan Your Sri Lanka
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: "700px", margin: "0.8rem auto 0 auto" }}>
            Speak directly with our local travel designers, golf specialists, and wellness consultants.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "4rem" }}>
            
            {/* Left Column: Office & Contact Info */}
            <article>
              <span className="eyebrow">DIRECT HEADQUARTERS</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.6rem)", marginBottom: "1.5rem" }}>
                AyuraGreen Escapes (Pvt) Ltd
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--ink-soft)", lineHeight: "1.7", marginBottom: "2rem" }}>
                Whether you wish to reserve a championship golf round, arrange an Ayurveda detox retreat, plan an oceanfront wedding, or organize executive corporate logistics, our local DMC team is at your service.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem", marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "var(--off-white)", color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", border: "1px solid var(--line)" }}>
                    <BiPhoneCall />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase" }}>Phone / WhatsApp</span>
                    <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--forest)" }}>{COMPANY_FACTS.phone}</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "var(--off-white)", color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", border: "1px solid var(--line)" }}>
                    <BiEnvelope />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase" }}>Direct Email</span>
                    <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--forest)" }}>{COMPANY_FACTS.email}</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "var(--off-white)", color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", border: "1px solid var(--line)" }}>
                    <BiMap />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase" }}>Headquarters Location</span>
                    <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--forest)" }}>Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Office Hours & 24/7 Support */}
              <div style={{ backgroundColor: "var(--off-white)", padding: "1.5rem", borderRadius: "10px", border: "1px solid var(--line)", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                  <BiSupport style={{ color: "var(--gold)", fontSize: "1.3rem" }} />
                  <span style={{ fontWeight: 700, color: "var(--forest)" }}>24/7 Global Guest Assistance</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)" }}>
                  Round-the-clock dedicated concierge support for all guests traveling in Sri Lanka.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: "0.8rem" }}>
                  <BiTimeFive style={{ color: "var(--gold)", fontSize: "1.3rem" }} />
                  <span style={{ fontSize: "0.88rem", color: "var(--forest)", fontWeight: 500 }}>Office Desk: Mon - Sun (08:00 - 20:00 IST)</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--forest)", display: "block", marginBottom: "0.8rem" }}>Follow AyuraGreen Escapes:</span>
                <div style={{ display: "flex", gap: "0.8rem" }}>
                  <a href={`https://wa.me/${COMPANY_FACTS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="social-badge" aria-label="WhatsApp">
                    <BiLogoWhatsapp />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-badge" aria-label="Facebook">
                    <BiLogoFacebook />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-badge" aria-label="Instagram">
                    <BiLogoInstagram />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-badge" aria-label="LinkedIn">
                    <BiLogoLinkedin />
                  </a>
                </div>
              </div>
            </article>

            {/* Right Column: Contact Form */}
            <article style={{ backgroundColor: "var(--off-white)", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--line)", boxShadow: "0 15px 40px rgba(18,53,36,0.06)" }}>
              <h3 style={{ fontSize: "1.6rem", fontFamily: "var(--font-playfair)", marginBottom: "0.4rem" }}>
                Send Us a Message
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", marginBottom: "1.8rem" }}>
                Fill out your details below and our DMC desk will respond within 12 hours.
              </p>
              <ContactForm />
            </article>

          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-off-white section-padding-sm" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="eyebrow">OUR LOCATION</span>
            <h2 style={{ fontSize: "1.8rem", fontFamily: "var(--font-playfair)" }}>Sri Lanka DMC Headquarters</h2>
          </div>
          {/* Google Maps Embed Placeholder */}
          <div
            style={{
              width: "100%",
              height: "360px",
              borderRadius: "12px",
              backgroundColor: "#E2DFC0",
              backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "var(--forest)",
              border: "1px solid var(--line)",
            }}
          >
            <BiMap style={{ fontSize: "3rem", color: "var(--gold)", marginBottom: "0.5rem" }} />
            <span style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 700 }}>AyuraGreen Escapes (Pvt) Ltd</span>
            <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>Interactive Google Map Embed Location — Sri Lanka</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem auto" }}>
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Travel Inquiry FAQs</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
