"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight, BiCheck, BiRightArrowAlt } from "react-icons/bi";
import { PACKAGES } from "@/lib/data";

export default function PackagesCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-off-white">
      <div className="container-custom">
        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", gap: "1rem" }}>
          <div>
            <span className="eyebrow">CURATED JOURNEYS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Signature Packages</h2>
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button
              onClick={() => scroll("left")}
              aria-label="Previous package"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid var(--line)",
                backgroundColor: "var(--white)",
                color: "var(--forest)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <BiChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next package"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid var(--line)",
                backgroundColor: "var(--white)",
                color: "var(--forest)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <BiChevronRight />
            </button>
          </div>
        </div>

        {/* Scroll Snap Row */}
        <div
          ref={rowRef}
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: "2rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "1.5rem",
          }}
        >
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.slug}
              className="card-clean"
              style={{
                flex: "0 0 360px",
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: pkg.featured ? "2px solid var(--gold)" : "1px solid var(--line)",
              }}
            >
              {/* Featured Ribbon */}
              {pkg.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    backgroundColor: "var(--gold)",
                    color: "var(--white)",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    zIndex: 10,
                    boxShadow: "0 4px 10px rgba(185, 151, 62, 0.4)",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Card Image */}
              <div style={{ position: "relative", width: "100%", height: "220px" }}>
                <Image src={pkg.image} alt={pkg.name} fill style={{ objectFit: "cover" }} sizes="360px" />
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem", backgroundColor: "rgba(10,33,22,0.85)", color: "var(--white)", padding: "0.3rem 0.7rem", borderRadius: "4px", fontSize: "0.8rem", fontWeight: 600 }}>
                  {pkg.duration}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "1.8rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-playfair)", marginBottom: "0.4rem" }}>
                  {pkg.name}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", marginBottom: "1.2rem", lineHeight: "1.4" }}>
                  {pkg.tagline}
                </p>

                <div style={{ borderTop: "1px solid var(--line)", paddingTop: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.6rem" }}>
                    Included Highlights:
                  </span>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {pkg.inclusions.slice(0, 3).map((inc, idx) => (
                      <li key={idx} style={{ fontSize: "0.84rem", color: "var(--ink)", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <BiCheck style={{ color: "var(--gold)", fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: "auto" }}>
                  <Link href={`/packages#${pkg.slug}`} className="btn-outline-gold" style={{ width: "100%", justifyContent: "center" }}>
                    View Package Details <BiRightArrowAlt style={{ fontSize: "1.2rem" }} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
