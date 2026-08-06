"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PACKAGES } from "@/lib/data";

export default function PackagesCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter or take the top 4 luxury travel packages
  const luxuryPackages = PACKAGES.slice(0, 4);

  const handleScroll = () => {
    if (rowRef.current) {
      const scrollLeft = rowRef.current.scrollLeft;
      const width = rowRef.current.clientWidth;
      // Estimate card width based on container width or children
      const cardEl = rowRef.current.children[0] as HTMLElement;
      const cardWidth = cardEl ? cardEl.offsetWidth + 16 : 290;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(index, luxuryPackages.length - 1)));
    }
  };

  useEffect(() => {
    const el = rowRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, [luxuryPackages.length]);

  const scrollToCard = (index: number) => {
    if (rowRef.current) {
      const cardEl = rowRef.current.children[index] as HTMLElement;
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      } else {
        const cardWidth = 290;
        rowRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
      }
      setActiveIndex(index);
    }
  };

  return (
    <section className="section-padding bg-off-white" id="luxury-packages">
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 2rem auto" }}>
          <span
            style={{
              color: "#C5A059",
              fontSize: "0.75rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 600,
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            — CURATED JUST FOR YOU —
          </span>
          <h2
            style={{
              color: "#1B3626",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "0.75rem",
            }}
          >
            Luxury Travel Packages
          </h2>
          <p
            style={{
              color: "#555555",
              fontSize: "0.95rem",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Handpicked experiences designed to showcase the very best of Sri Lanka. From relaxation and adventure to wellness and heritage, we create unforgettable memories.
          </p>
        </div>

        {/* Responsive Grid / Horizontal Carousel Container */}
        <div
          ref={rowRef}
          className="no-scrollbar luxury-packages-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "16px",
            paddingBottom: "4px",
          }}
        >
          {luxuryPackages.map((pkg) => (
            <article
              key={pkg.slug}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #EAEAEA",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                scrollSnapAlign: "start",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="luxury-package-card"
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
                  sizes="(max-width: 768px) 280px, 320px"
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
                {/* Title */}
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

                {/* Short Description */}
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

                {/* Included Highlights Header & List */}
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
                    {pkg.inclusions.slice(0, 3).map((highlight, idx) => (
                      <li
                        key={idx}
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
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Tag & CTA Button Wrapper */}
                <div style={{ marginTop: "auto", paddingTop: "6px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* Price Tag */}
                  {pkg.price && (
                    <div style={{ fontSize: "0.85rem", color: "#666666", display: "flex", alignItems: "baseline", gap: "4px" }}>
                      <span>From </span>
                      <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1B3626" }}>{pkg.price}</span>
                      <span> / Person</span>
                    </div>
                  )}

                  {/* CTA Button */}
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
                      transition: "background-color 0.2s ease, transform 0.2s ease",
                    }}
                    className="package-cta-btn"
                  >
                    View Package Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Responsive Active Dots Pagination Indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
            marginTop: "20px",
          }}
        >
          {luxuryPackages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`dot ${idx === activeIndex ? "active" : ""}`}
              aria-label={`Go to package slide ${idx + 1}`}
              style={{
                width: idx === activeIndex ? "10px" : "8px",
                height: idx === activeIndex ? "10px" : "8px",
                borderRadius: "50%",
                background: idx === activeIndex ? "#1B3626" : "#CCC",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
