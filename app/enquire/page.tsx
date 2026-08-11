import { Metadata } from "next";
import Image from "next/image";
import EnquiryForm from "@/components/ui/EnquiryForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { COMPANY_FACTS } from "@/lib/data";
import { BiPhoneCall, BiEnvelope, BiLogoWhatsapp } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Send Package Enquiry | Ayuragreen Escapes Sri Lanka",
  description:
    "Send a custom travel enquiry for luxury golf, wellness, family, or honeymoon packages with Ayuragreen Escapes Sri Lanka.",
};

export default function EnquirePage() {
  return (
    <>
      {/* Header Banner Section */}
      <section
        style={{
          position: "relative",
          height: "360px",
          backgroundColor: "var(--forest-deep)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
          alt="Ayuragreen Escapes Luxury Tour Package Enquiry Sri Lanka"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
          priority
        />
        <div
          className="container-custom"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>
            TAILORED ESCAPES
          </span>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              color: "var(--white)",
              fontFamily: "var(--font-playfair)",
            }}
          >
            Package Enquiry & Booking
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.05rem",
              maxWidth: "680px",
              margin: "0.6rem auto 0 auto",
            }}
          >
            Customize your dream holiday in Sri Lanka. Review your selected package details and submit your preferences directly to our travel experts.
          </p>
        </div>
      </section>

      {/* Main Enquire Form Section */}
      <section
        className="section-padding bg-off-white"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
        <div className="container-custom">
          <EnquiryForm />
        </div>
      </section>

      {/* Quick Help & Concierge Direct Desk */}
      <section className="bg-white section-padding-sm" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container-custom">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              backgroundColor: "var(--off-white)",
              padding: "1.8rem 2.2rem",
              borderRadius: "14px",
              border: "1px solid var(--line)",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-playfair)", color: "var(--forest)", margin: "0 0 0.3rem 0" }}>
                Need Immediate Assistance or Custom Arrangements?
              </h3>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.9rem", margin: 0 }}>
                Speak directly with our local Sri Lanka travel consultants via WhatsApp or phone.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href={`tel:${COMPANY_FACTS.phone.replace(/\s+/g, "")}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--forest)",
                  backgroundColor: "#FFFFFF",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "6px",
                  border: "1px solid var(--line)",
                  textDecoration: "none",
                }}
              >
                <BiPhoneCall style={{ fontSize: "1.2rem", color: "var(--gold)" }} />
                {COMPANY_FACTS.phone}
              </a>

              <a
                href={`https://wa.me/${COMPANY_FACTS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ padding: "0.6rem 1.4rem", fontSize: "0.9rem", minHeight: "40px" }}
              >
                <BiLogoWhatsapp style={{ fontSize: "1.2rem" }} /> Direct WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Enquiry FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem auto" }}>
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>Package Booking FAQs</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
