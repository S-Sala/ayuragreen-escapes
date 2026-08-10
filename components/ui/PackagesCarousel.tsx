"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { PACKAGES } from "@/lib/data";

export default function PackagesCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const luxuryPackages = PACKAGES;

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
      rowRef.current.scrollTo({ left: index * 340, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <section className="section-padding bg-off-white" id="luxury-packages">
      <div className="container-custom">
        {/* Section Header with Left/Right Slider Navigation Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.5rem", gap: "1rem" }}>
          <div>
            <span
              style={{
                color: "#C5A059",
                fontSize: "0.75rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: 600,
                display: "block",
                marginBottom: "0.4rem",
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
                margin: 0,
              }}
            >
              Luxury Travel Packages
            </h2>
          </div>

          {/* Slider Prev / Next Arrow Buttons */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button
              onClick={() => scroll("left")}
              aria-label="Previous deal package"
              style={{
                width: "44px",
                height: "44px",
                minWidth: "44px",
                minHeight: "44px",
                borderRadius: "50%",
                border: "1px solid #EAEAEA",
                backgroundColor: "#FFFFFF",
                color: "#1B3626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
              className="slider-nav-btn"
            >
              <BiChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next deal package"
              style={{
                width: "44px",
                height: "44px",
                minWidth: "44px",
                minHeight: "44px",
                borderRadius: "50%",
                border: "1px solid #EAEAEA",
                backgroundColor: "#FFFFFF",
                color: "#1B3626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
              className="slider-nav-btn"
            >
              <BiChevronRight />
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: "#555555",
            fontSize: "0.95rem",
            lineHeight: 1.5,
            margin: "0 0 1.8rem 0",
            maxWidth: "650px",
          }}
        >
          Handpicked experiences designed to showcase the very best of Sri Lanka. From relaxation and adventure to wellness and heritage, we create unforgettable memories.
        </p>

        {/* Responsive Horizontal Slider Container */}
        <div
          ref={rowRef}
          className="no-scrollbar luxury-packages-grid"
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "0.75rem",
          }}
        >
          {luxuryPackages.map((pkg) => (
            <article
              key={pkg.slug}
              style={{
                flex: "0 0 320px",
                minWidth: "320px",
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
              {/* Image Header */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "180px",
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
                  sizes="320px"
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

              {/* Card Body Content */}
              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
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
                      display: "block",
                      marginBottom: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    INCLUDED HIGHLIGHTS:
                  </span>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
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
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            minWidth: "6px",
                            minHeight: "6px",
                            borderRadius: "50%",
                            backgroundColor: "#C5A059",
                            display: "inline-block",
                            flexShrink: 0,
                            marginTop: "5px",
                          }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Tag & CTA Button */}
                <div style={{ marginTop: "auto", paddingTop: "8px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {pkg.price && (
                    <div style={{ fontSize: "0.85rem", color: "#666666", display: "flex", alignItems: "baseline", gap: "4px", margin: 0 }}>
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
            gap: "8px",
            marginTop: "20px",
          }}
        >
          {luxuryPackages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`dot ${idx === activeIndex ? "active" : ""}`}
              aria-label={`Go to package deal slide ${idx + 1}`}
              style={{
                width: "8px",
                height: "8px",
                minWidth: "8px",
                minHeight: "8px",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                backgroundColor: idx === activeIndex ? "#1B3626" : "#CCCCCC",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.25s ease",
                flexShrink: 0,
                outline: "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
