import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import WhyUsSlider from "@/components/ui/WhyUsSlider";
import { COMPANY_FACTS, CORE_VALUES, DIRECTORS, SUSTAINABILITY_COMMITMENTS } from "@/lib/data";
import { BiCheckCircle, BiLeaf } from "react-icons/bi";

export const metadata: Metadata = {
  title: "About Us | AyuraGreen Escapes Pvt Ltd",
  description: "Learn about AyuraGreen Escapes — Sri Lanka's trusted luxury destination management company, vision, mission, core values, leadership team, and sustainability commitments.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <section style={{ position: "relative", height: "450px", backgroundColor: "var(--forest-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=80"
          alt="About AyuraGreen Escapes"
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
          priority
        />
        <div className="container-custom" style={{ position: "relative", zIndex: 2, textAlign: "center", marginTop: "4rem" }}>
          <span className="eyebrow" style={{ color: "var(--gold-light)", letterSpacing: "0.25em" }}>OUR STORY & VALUES</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--white)", fontFamily: "var(--font-playfair)" }}>
            About AyuraGreen Escapes
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: "700px", margin: "0.8rem auto 0 auto" }}>
            Sri Lanka's Premier Destination Management Company
          </p>
        </div>
      </section>

      {/* 2. Company Overview, Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow">WHO WE ARE</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "1.5rem" }}>
              Crafting Unforgettable Sri Lankan Journeys
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--ink-soft)", lineHeight: "1.8" }}>
              {COMPANY_FACTS.positioning} AyuraGreen Escapes (Pvt) Ltd is a premier luxury Destination Management Company (DMC) operating across Sri Lanka. We combine local heritage, luxury hospitality, championship golf, and authentic Ayurveda wellness into hand-crafted journeys designed for discerning global travelers.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {/* Vision */}
            <div style={{ backgroundColor: "var(--off-white)", borderLeft: "4px solid var(--gold)", padding: "2.5rem", borderRadius: "0 12px 12px 0" }}>
              <span className="eyebrow">OUR VISION</span>
              <h3 style={{ fontSize: "1.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Global Leadership in Luxury DMC</h3>
              <p style={{ fontSize: "0.98rem", color: "var(--ink-soft)", lineHeight: "1.7", fontStyle: "italic" }}>
                "{COMPANY_FACTS.vision}"
              </p>
            </div>

            {/* Mission */}
            <div style={{ backgroundColor: "var(--off-white)", borderLeft: "4px solid var(--forest)", padding: "2.5rem", borderRadius: "0 12px 12px 0" }}>
              <span className="eyebrow" style={{ color: "var(--forest)" }}>OUR MISSION</span>
              <h3 style={{ fontSize: "1.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Innovative & Sustainable Solutions</h3>
              <p style={{ fontSize: "0.98rem", color: "var(--ink-soft)", lineHeight: "1.7", fontStyle: "italic" }}>
                "{COMPANY_FACTS.mission}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3.5rem auto" }}>
            <span className="eyebrow">THE BEDROCK OF OUR SERVICES</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Our Core Values</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.8rem" }}>
            {CORE_VALUES.map((val, idx) => (
              <RevealOnScroll key={val.title} delay={idx * 70}>
                <div className="card-clean" style={{ padding: "2rem", height: "100%" }}>
                  <BiCheckCircle style={{ color: "var(--gold)", fontSize: "2rem", marginBottom: "1rem" }} />
                  <h3 style={{ fontSize: "1.25rem", fontFamily: "var(--font-playfair)", marginBottom: "0.5rem" }}>{val.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: "1.6" }}>{val.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (12 Strengths Slider) */}
      <WhyUsSlider />

      {/* 5. Leadership Bios */}
      <section id="leadership" className="section-padding bg-off-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem auto" }}>
            <span className="eyebrow">EXECUTIVE DIRECTION</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Leadership Team</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "3rem" }}>
            {DIRECTORS.map((dir) => (
              <div key={dir.name} className="card-clean" style={{ padding: "2.5rem", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", marginBottom: "1.5rem", border: "3px solid var(--gold)" }}>
                  <Image src={dir.image} alt={dir.name} fill style={{ objectFit: "cover" }} sizes="120px" />
                </div>
                <h3 style={{ fontSize: "1.6rem", fontFamily: "var(--font-playfair)", marginBottom: "0.2rem" }}>{dir.name}</h3>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem", display: "block" }}>
                  {dir.role}
                </span>
                <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                  {dir.bio}
                </p>

                <div style={{ marginTop: "auto", borderTop: "1px solid var(--line)", paddingTop: "1rem" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--forest)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.6rem" }}>
                    Areas of Expertise:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {dir.expertise.map((exp, i) => (
                      <span key={i} style={{ backgroundColor: "var(--white)", border: "1px solid var(--line)", padding: "0.3rem 0.7rem", borderRadius: "20px", fontSize: "0.78rem", color: "var(--forest)" }}>
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Sustainability Commitments */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem auto" }}>
            <BiLeaf style={{ fontSize: "2.5rem", color: "var(--forest)", marginBottom: "0.5rem" }} />
            <span className="eyebrow">RESPONSIBLE TOURISM</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Sustainability Commitments</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {SUSTAINABILITY_COMMITMENTS.map((item, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.8rem", padding: "1.2rem", borderRadius: "8px", backgroundColor: "var(--off-white)", border: "1px solid var(--line)" }}>
                <BiCheckCircle style={{ color: "var(--forest)", fontSize: "1.4rem", flexShrink: 0 }} />
                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--forest)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dark CTA Band */}
      <section className="bg-forest section-padding-sm" style={{ textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--white)", marginBottom: "1rem" }}>
            Ready to plan your Sri Lanka journey?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Speak with our travel consultants to design your luxury vacation, golf holiday, or wellness retreat.
          </p>
          <Link href="/contact" className="btn-gold" style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
            Contact Our Travel Desk
          </Link>
        </div>
      </section>
    </>
  );
}
