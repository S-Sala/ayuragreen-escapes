import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiPhone, BiEnvelope, BiMap } from "react-icons/bi";
import { COMPANY_FACTS } from "@/lib/data";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-forest-deep" style={{ paddingTop: "5rem", paddingBottom: "3rem", borderTop: "1px solid rgba(217, 194, 133, 0.2)" }}>
      <div className="container-custom">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          
          {/* Brand Column */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "1.2rem" }}>
              <span style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em" }}>
                AYURAGREEN
              </span>
              <span style={{ display: "block", fontFamily: "var(--font-poppins)", fontSize: "0.7rem", fontWeight: 600, color: "var(--gold)", letterSpacing: "0.22em" }}>
                ESCAPES • SRI LANKA
              </span>
            </Link>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              {COMPANY_FACTS.positioning}
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "0.8rem" }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-badge">
                <BiLogoFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-badge">
                <BiLogoInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-badge">
                <BiLogoLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "var(--gold)", fontSize: "1.1rem", marginBottom: "1.4rem", fontFamily: "var(--font-playfair)" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.9rem" }}>
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About AyuraGreen</Link></li>
              <li><Link href="/services" className="footer-link">Service Portfolio</Link></li>
              <li><Link href="/packages" className="footer-link">Signature Packages</Link></li>
              <li><Link href="/gallery" className="footer-link">Photo Gallery</Link></li>
              <li><Link href="/contact" className="footer-link">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 style={{ color: "var(--gold)", fontSize: "1.1rem", marginBottom: "1.4rem", fontFamily: "var(--font-playfair)" }}>
              Specialist Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.9rem" }}>
              <li><Link href="/golf" className="footer-link">Golf Tourism & Tee Times</Link></li>
              <li><Link href="/wellness" className="footer-link">Ayurveda & Wellness Retreats</Link></li>
              <li><Link href="/destination-weddings" className="footer-link">Destination Weddings</Link></li>
              <li><Link href="/services#corporate" className="footer-link">Corporate MICE & Incentives</Link></li>
              <li><Link href="/services#corporate-golf" className="footer-link">Corporate Golf Tournaments</Link></li>
              <li><Link href="/services#transfers" className="footer-link">VIP Airport Transfers</Link></li>
            </ul>
          </div>

          {/* Contact Information & Newsletter */}
          <div>
            <h4 style={{ color: "var(--gold)", fontSize: "1.1rem", marginBottom: "1.4rem", fontFamily: "var(--font-playfair)" }}>
              Direct Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <BiPhone style={{ color: "var(--gold)", fontSize: "1.2rem" }} />
                <span>{COMPANY_FACTS.phone}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <BiEnvelope style={{ color: "var(--gold)", fontSize: "1.2rem" }} />
                <span>{COMPANY_FACTS.email}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <BiMap style={{ color: "var(--gold)", fontSize: "1.2rem" }} />
                <span>Sri Lanka</span>
              </div>
            </div>

            {/* Newsletter Form */}
            <NewsletterForm />
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <p>© {new Date().getFullYear()} AyuraGreen Escapes (Pvt) Ltd. All rights reserved.</p>
          <p style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Designed for the discerning traveler.</p>
        </div>
      </div>
    </footer>
  );
}
