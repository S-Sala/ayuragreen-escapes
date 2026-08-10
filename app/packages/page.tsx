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
      <section className="section-padding bg-white" style={{ overflow: "hidden" }}>
        <div className="container-custom" style={{ paddingTop: "1rem", paddingBottom: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", paddingTop: "0.5rem", paddingBottom: "1.2rem" }}>
            {PACKAGES.map((pkg, idx) => (
              <RevealOnScroll key={pkg.slug} delay={idx * 50}>
                <article
                  id={pkg.slug}
                  className="luxury-package-card"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    border: "1px solid #EAEAEA",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    scrollMarginTop: "90px",
                    height: "100%",
                  }}
                >
                  {/* Reduced Image Header (170px) */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "170px",
                      overflow: "hidden",
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                    }}
                  >
                    <Image
                      src={pkg.image}
                      alt={`Ayuragreen Escapes - ${pkg.name}`}
                      fill
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 280px, 400px"
                    />

                    {/* Top-Right Badge */}
                    {pkg.badgeTop && (
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          zIndex: 2,
                          background: pkg.badgeTopType === "forest" || pkg.badgeTop === "NEW" ? "#1B3626" : "#C5A059",
                          color: "#FFF",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: "12px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {pkg.badgeTop}
                      </div>
                    )}

                    {/* Bottom-Left Badge (Duration) */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        zIndex: 2,
                        background: "rgba(27, 54, 38, 0.85)",
                        color: "#FFF",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        padding: "4px 10px",
                        borderRadius: "12px",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Compact Card Body Content (16px padding, 10px gap) */}
                  <div
                    style={{
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        color: "#1B3626",
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        margin: 0,
                        lineHeight: 1.3,
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      style={{
                        color: "#666666",
                        fontSize: "0.85rem",
                        lineHeight: 1.35,
                        margin: 0,
                      }}
                    >
                      {pkg.tagline}
                    </p>

                    <div style={{ marginTop: "2px" }}>
                      <span
                        style={{
                          color: "#C5A059",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.8px",
                          marginTop: "4px",
                          display: "block",
                          marginBottom: "6px",
                          textTransform: "uppercase",
                        }}
                      >
                        INCLUDED HIGHLIGHTS:
                      </span>
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                          padding: 0,
                          margin: 0,
                          listStyle: "none",
                        }}
                      >
                        {pkg.inclusions.slice(0, 3).map((inc, i) => (
                          <li
                            key={i}
                            style={{
                              color: "#333333",
                              fontSize: "0.8rem",
                              lineHeight: 1.25,
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                            }}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#C5A059"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ flexShrink: 0, marginTop: "2px" }}
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: "auto", paddingTop: "6px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {pkg.price && (
                        <div style={{ fontSize: "0.85rem", color: "#666666", display: "flex", alignItems: "baseline", gap: "4px" }}>
                          <span>From </span>
                          <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1B3626" }}>{pkg.price}</span>
                          <span> / Person</span>
                        </div>
                      )}
                      <Link
                        href={`/contact?package=${pkg.slug}`}
                        style={{
                          backgroundColor: "#C5A059",
                          color: "#FFFFFF",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          padding: "10px 16px",
                          borderRadius: "8px",
                          border: "none",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                        className="package-cta-btn"
                      >
                        View Package Details →
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
