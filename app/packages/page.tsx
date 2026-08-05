import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { PACKAGES } from "@/lib/data";
import { BiCheck, BiRightArrowAlt } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Signature Tour Packages Sri Lanka | Ayuragreen Escapes",
  description:
    "Explore Ayuragreen Escapes' 7 signature tour packages: Family Holiday, Luxury Escape, Wellness Retreat, Golf Holiday, Corporate Retreat, Beach Escape, and Tailor-Made Tours.",
};

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "400px", backgroundColor: "var(--forest-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
          alt="Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Signature Packages Hero"
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
          priority
        />
        <div className="container-custom" style={{ position: "relative", zIndex: 2, textAlign: "center", marginTop: "3.5rem" }}>
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>HAND-CRAFTED ITINERARIES</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "var(--white)", fontFamily: "var(--font-playfair)" }}>
            Our 7 Signature Packages
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: "700px", margin: "0.6rem auto 0 auto" }}>
            Curated journeys combining championship golf, certified Ayurveda wellness, family adventures, and luxury escapes.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {PACKAGES.map((pkg, idx) => (
              <RevealOnScroll key={pkg.slug} delay={idx * 50}>
                <article
                  id={pkg.slug}
                  className="card-clean"
                  style={{
                    scrollMarginTop: "90px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    border: pkg.featured ? "2px solid var(--gold)" : "1px solid var(--line)",
                  }}
                >
                  {pkg.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        backgroundColor: "var(--gold)",
                        color: "var(--white)",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "4px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        zIndex: 10,
                      }}
                    >
                      Most Popular
                    </div>
                  )}

                  <div className="package-card-img-wrap" style={{ position: "relative", width: "100%", height: "180px" }}>
                    <Image
                      src={pkg.image}
                      alt={`Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - ${pkg.name}`}
                      fill
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                      sizes="400px"
                    />
                    <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", backgroundColor: "rgba(10,33,22,0.88)", color: "var(--white)", padding: "0.25rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 600 }}>
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="package-card-body" style={{ padding: "1.2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 className="package-card-title" style={{ fontSize: "1.3rem", fontFamily: "var(--font-playfair)", marginBottom: "0.3rem" }}>
                      {pkg.name}
                    </h3>
                    <p className="package-card-tagline" style={{ fontSize: "0.85rem", color: "var(--ink-soft)", lineHeight: "1.4", marginBottom: "1rem" }}>
                      {pkg.tagline}
                    </p>

                    <div className="package-card-highlights" style={{ borderTop: "1px solid var(--line)", paddingTop: "0.8rem", marginBottom: "1.2rem" }}>
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" }}>
                        Inclusions & Highlights:
                      </span>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} style={{ fontSize: "0.82rem", color: "var(--ink)", display: "flex", alignItems: "flex-start", gap: "0.4rem" }}>
                            <BiCheck style={{ color: "var(--gold)", fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }} />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: "auto" }}>
                      <Link href={`/contact?package=${pkg.slug}`} className="btn-gold" style={{ width: "100%", justifyContent: "center", minHeight: "40px", padding: "0.6rem 1.2rem", fontSize: "0.85rem" }}>
                        Enquire About Package <BiRightArrowAlt style={{ fontSize: "1.1rem" }} />
                      </Link>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA Band */}
      <section className="bg-forest section-padding-sm" style={{ textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--white)", marginBottom: "0.8rem" }}>
            None of these quite right? We'll build one that is.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", marginBottom: "1.8rem" }}>
            Our travel designers customize every detail to match your schedule, group size, and travel style.
          </p>
          <Link href="/contact?package=tailor-made-tours" className="btn-gold" style={{ padding: "0.8rem 2.2rem", fontSize: "0.95rem", minHeight: "44px" }}>
            Design My Journey
          </Link>
        </div>
      </section>
    </>
  );
}
