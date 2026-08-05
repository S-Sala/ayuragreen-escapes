"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight, BiCheck, BiRightArrowAlt } from "react-icons/bi";
import { PACKAGES } from "@/lib/data";

export default function PackagesCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (rowRef.current) {
      const scrollLeft = rowRef.current.scrollLeft;
      const cardWidth = 340;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, PACKAGES.length - 1));
    }
  };

  useEffect(() => {
    const el = rowRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToCard = (index: number) => {
    if (rowRef.current) {
      rowRef.current.scrollTo({ left: index * 340, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <section className="section-padding bg-off-white">
      <div className="container-custom">
        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem", gap: "1rem" }}>
          <div>
            <span className="eyebrow">CURATED JOURNEYS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Signature Packages</h2>
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button
              onClick={() => scroll("left")}
              aria-label="Previous package"
              style={{
                width: "40px",
                height: "40px",
                minWidth: "40px",
                minHeight: "40px",
                borderRadius: "50%",
                border: "1px solid var(--line)",
                backgroundColor: "var(--white)",
                color: "var(--forest)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
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
                width: "40px",
                height: "40px",
                minWidth: "40px",
                minHeight: "40px",
                borderRadius: "50%",
                border: "1px solid var(--line)",
                backgroundColor: "var(--white)",
                color: "var(--forest)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
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
            gap: "1.5rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "1.2rem",
            paddingRight: "1rem",
          }}
        >
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.slug}
              className="card-clean"
              style={{
                flex: "0 0 340px",
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
                    boxShadow: "0 4px 10px rgba(185, 151, 62, 0.4)",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Card Image Wrapper */}
              <div className="package-card-img-wrap" style={{ position: "relative", width: "100%", height: "180px" }}>
                <Image
                  src={pkg.image}
                  alt={`Ayuragreen Escapes Luxury Tour Package Sri Lanka - ${pkg.name}`}
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  sizes="340px"
                />
                <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", backgroundColor: "rgba(10,33,22,0.85)", color: "var(--white)", padding: "0.25rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 600 }}>
                  {pkg.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="package-card-body" style={{ padding: "1.2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 className="package-card-title" style={{ fontSize: "1.25rem", fontFamily: "var(--font-playfair)", marginBottom: "0.3rem" }}>
                  {pkg.name}
                </h3>
                <p className="package-card-tagline" style={{ fontSize: "0.82rem", color: "var(--ink-soft)", marginBottom: "0.8rem", lineHeight: "1.35" }}>
                  {pkg.tagline}
                </p>

                <div className="package-card-highlights" style={{ borderTop: "1px solid var(--line)", paddingTop: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                    Included Highlights:
                  </span>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {pkg.inclusions.slice(0, 3).map((inc, idx) => (
                      <li key={idx} style={{ fontSize: "0.8rem", color: "var(--ink)", display: "flex", alignItems: "flex-start", gap: "0.4rem" }}>
                        <BiCheck style={{ color: "var(--gold)", fontSize: "1rem", flexShrink: 0, marginTop: "2px" }} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: "auto" }}>
                  <Link href={`/packages#${pkg.slug}`} className="btn-outline-gold" style={{ width: "100%", justifyContent: "center", minHeight: "38px", padding: "0.5rem 1rem", fontSize: "0.82rem" }}>
                    View Package Details <BiRightArrowAlt style={{ fontSize: "1.1rem" }} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Visible Pagination Dots for Touch Devices */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "0.8rem" }}>
          {PACKAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              style={{
                width: idx === activeIndex ? "24px" : "12px",
                height: "12px",
                minWidth: "12px",
                minHeight: "12px",
                borderRadius: "6px",
                backgroundColor: idx === activeIndex ? "var(--gold)" : "var(--line)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
              aria-label={`Scroll to package ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
