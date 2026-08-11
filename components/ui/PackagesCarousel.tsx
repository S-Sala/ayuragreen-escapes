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
      const cardWidth = rowRef.current.clientWidth / 3;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (rowRef.current) {
      const scrollLeft = rowRef.current.scrollLeft;
      const cardWidth = rowRef.current.clientWidth / 3 || 320;
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
      const cardWidth = rowRef.current.clientWidth / 3 || 320;
      rowRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <section className="section-padding bg-off-white" id="luxury-packages">
      <div className="container-custom">
        {/* Section Header with Navigation Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.2rem", gap: "1rem" }}>
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

          {/* Slider Arrow Buttons */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button
              onClick={() => scroll("left")}
              aria-label="Previous deal package"
              style={{
                width: "36px",
                height: "36px",
                minWidth: "36px",
                minHeight: "36px",
                borderRadius: "50%",
                border: "1px solid #EAEAEA",
                backgroundColor: "#FFFFFF",
                color: "#1B3626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
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
                width: "36px",
                height: "36px",
                minWidth: "36px",
                minHeight: "36px",
                borderRadius: "50%",
                border: "1px solid #EAEAEA",
                backgroundColor: "#FFFFFF",
                color: "#1B3626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
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
            fontSize: "0.9rem",
            lineHeight: 1.5,
            margin: "0 0 1.5rem 0",
            maxWidth: "650px",
          }}
        >
          Handpicked experiences designed to showcase the very best of Sri Lanka. From relaxation and adventure to wellness and heritage, we create unforgettable memories.
        </p>

        {/* 3-Card Carousel Container */}
        <div
          ref={rowRef}
          className="no-scrollbar luxury-packages-grid"
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingTop: "1rem",
            paddingBottom: "1.5rem",
            paddingLeft: "6px",
            paddingRight: "6px",
          }}
        >
          {luxuryPackages.map((pkg) => (
            <article
              key={pkg.slug}
              style={{
                flex: "0 0 calc(33.333% - 14px)",
                minWidth: "280px",
                backgroundColor: "#FFFFFF",
                borderRadius: "14px",
                border: "1px solid #EAEAEA",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                scrollSnapAlign: "start",
                transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="luxury-package-card"
            >
              {/* Compact Image Header (145px Height) */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "145px",
                  overflow: "hidden",
                  borderTopLeftRadius: "14px",
                  borderTopRightRadius: "14px",
                }}
              >
                <Image
                  src={pkg.image}
                  alt={`Ayuragreen Escapes - ${pkg.name}`}
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  sizes="350px"
                />

                {/* Top-Right Badge */}
                {pkg.badgeTop && (
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      zIndex: 2,
                      background: pkg.badgeTopType === "forest" || pkg.badgeTop === "NEW" ? "#1B3626" : "#C5A059",
                      color: "#FFF",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      padding: "3px 8px",
                      borderRadius: "10px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
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
                    bottom: "8px",
                    left: "8px",
                    zIndex: 2,
                    background: "rgba(27, 54, 38, 0.85)",
                    color: "#FFF",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    padding: "3px 8px",
                    borderRadius: "10px",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {pkg.duration}
                </div>
              </div>

              {/* Reduced Padding Card Body Content */}
              <div
                style={{
                  padding: "12px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  flex: 1,
                }}
              >
                {/* Title */}
                <h3
                  style={{
                    color: "#1B3626",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.25,
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  {pkg.name}
                </h3>

                {/* Reduced Tagline / Intro Font Size */}
                <p
                  style={{
                    color: "#666666",
                    fontSize: "0.78rem",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {pkg.tagline}
                </p>

                {/* Reduced Included Highlights Header & Points */}
                <div style={{ marginTop: "2px" }}>
                  <span
                    style={{
                      color: "#C5A059",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.8px",
                      display: "block",
                      marginBottom: "3px",
                      textTransform: "uppercase",
                    }}
                  >
                    INCLUDED HIGHLIGHTS:
                  </span>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
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
                          fontSize: "0.75rem",
                          lineHeight: 1.2,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "6px",
                        }}
                      >
                        <span
                          style={{
                            width: "5px",
                            height: "5px",
                            minWidth: "5px",
                            minHeight: "5px",
                            borderRadius: "50%",
                            backgroundColor: "#C5A059",
                            display: "inline-block",
                            flexShrink: 0,
                            marginTop: "4px",
                          }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Tag & CTA Button */}
                <div style={{ marginTop: "auto", paddingTop: "6px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {pkg.price && (
                    <div style={{ fontSize: "0.8rem", color: "#666666", display: "flex", alignItems: "baseline", gap: "4px", margin: 0 }}>
                      <span>From </span>
                      <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1B3626" }}>{pkg.price}</span>
                      <span> / Person</span>
                    </div>
                  )}

                  <Link
                    href={`/enquire?package=${pkg.slug}`}
                    style={{
                      backgroundColor: "#C5A059",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: "0.825rem",
                      padding: "8px 14px",
                      borderRadius: "6px",
                      border: "none",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
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
            marginTop: "16px",
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
