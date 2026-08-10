"use client";

import { useState, useRef, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight, BiRightArrowAlt } from "react-icons/bi";
import { DESTINATIONS } from "@/lib/data";

export default function DestinationsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = DESTINATIONS.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeDest = DESTINATIONS[activeIndex];

  // Calculate wrap-around offset distance relative to active index
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      className="section-padding"
      style={{
        position: "relative",
        color: "#FFFFFF",
        overflow: "hidden",
        padding: "6rem 0",
      }}
    >
      {/* Background Scenic Image */}
      <Image
        src="/images/where-will-you-go-bg.jpg"
        alt="Where Will You Go - Sri Lanka Tea Plantation & Mountain Landscape"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
        sizes="100vw"
      />

      {/* Dark Gradient Overlay to ensure text readability & luxury contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(8, 22, 16, 0.72) 0%, rgba(10, 26, 19, 0.84) 50%, rgba(6, 18, 13, 0.88) 100%)",
          zIndex: 1,
        }}
      />

      {/* Subtle ambient lighting glows */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-5%",
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 3 }}>
        
        {/* Main 2-Column Split Layout Container - Glassmorphic Transparent Style */}
        <div
          style={{
            background: "rgba(10, 24, 18, 0.38)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            padding: "clamp(2rem, 4vw, 4rem)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
            overflow: "visible", // Allows shadows to display smoothly without clipping
          }}
        >
          <div
            className="destinations-split-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            
            {/* LEFT COLUMN: Dynamic Text Content & Controls (~40%) */}
            <div style={{ maxWidth: "460px" }}>
              
              {/* Eyebrow Subheading */}
              <span
                key={`eyebrow-${activeIndex}`}
                className="destination-eyebrow-fade"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                  color: "#C5A059",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  display: "block",
                  marginBottom: "0.6rem",
                  letterSpacing: "0.02em",
                }}
              >
                {activeDest.tagline}
              </span>

              {/* Main Heading */}
              <h2
                key={`title-${activeIndex}`}
                className="destination-title-fade"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.18,
                  marginBottom: "1rem",
                }}
              >
                {activeDest.name}
              </h2>

              {/* Description Paragraph */}
              <p
                key={`desc-${activeIndex}`}
                className="destination-desc-fade"
                style={{
                  color: "#E2E8F0",
                  fontSize: "1.025rem",
                  lineHeight: 1.65,
                  marginBottom: "2.2rem",
                  textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                {activeDest.description}
              </p>

              {/* Primary CTA Button */}
              <div>
                <Link
                  href="/gallery"
                  className="destination-cta-btn"
                >
                  Explore Destination <BiRightArrowAlt style={{ fontSize: "1.25rem" }} />
                </Link>
              </div>

              {/* Navigation Controls & Circular Pagination Dots */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginTop: "2.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                {/* Arrow Buttons */}
                <div style={{ display: "flex", gap: "0.85rem" }}>
                  <button
                    onClick={prevSlide}
                    aria-label="Previous destination"
                    className="slider-nav-arrow"
                  >
                    <BiChevronLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next destination"
                    className="slider-nav-arrow"
                  >
                    <BiChevronRight />
                  </button>
                </div>

                {/* Slide Counter */}
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                  }}
                >
                  <strong style={{ color: "#C5A059", fontSize: "1.15rem" }}>
                    {String(activeIndex + 1).padStart(2, "0")}
                  </strong>{" "}
                  / {String(total).padStart(2, "0")}
                </span>

                {/* 1st Requirement: CIRCLE Pagination Dots */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginLeft: "auto" }}>
                  {DESTINATIONS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      style={{
                        width: idx === activeIndex ? "12px" : "10px",
                        height: idx === activeIndex ? "12px" : "10px",
                        borderRadius: "50%",
                        backgroundColor: idx === activeIndex ? "#C5A059" : "rgba(255, 255, 255, 0.3)",
                        boxShadow: idx === activeIndex ? "0 0 10px rgba(197, 160, 89, 0.6)" : "none",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive 3D Card Slider (~60%) */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "520px", // Increased height to prevent shadow cutoff at bottom
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 0",
                overflow: "visible", // Ensures active card drop shadows breathe naturally
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {DESTINATIONS.map((dest, idx) => {
                  const offset = getOffset(idx);
                  const absOffset = Math.abs(offset);

                  // Only display active card and cards within 2 steps of distance
                  if (absOffset > 2) return null;

                  const isActive = offset === 0;

                  // Dynamic transformation math for center & overlapping side cards
                  const translateX = offset * 185; // horizontal px spacing offset
                  const scale = isActive ? 1.04 : 0.88 - (absOffset - 1) * 0.12;
                  const opacity = isActive ? 1 : 0.65 - (absOffset - 1) * 0.35;
                  const zIndex = 30 - absOffset * 10;

                  return (
                    <div
                      key={dest.slug}
                      onClick={() => setActiveIndex(idx)}
                      style={{
                        position: "absolute",
                        width: "270px",
                        height: "410px",
                        borderRadius: "20px",
                        overflow: "hidden",
                        transform: `translateX(${translateX}px) scale(${scale})`,
                        opacity: opacity,
                        zIndex: zIndex,
                        cursor: "pointer",
                        transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease",
                        // 2nd Requirement: Refined luxury drop shadow without edge clipping
                        boxShadow: isActive
                          ? "0 18px 40px rgba(0, 0, 0, 0.45), 0 0 22px rgba(197, 160, 89, 0.25)"
                          : "0 10px 25px rgba(0, 0, 0, 0.35)",
                        border: isActive
                          ? "2px solid rgba(197, 160, 89, 0.85)"
                          : "1px solid rgba(255, 255, 255, 0.15)",
                        userSelect: "none",
                      }}
                    >
                      {/* Clean Image without text overlay */}
                      <Image
                        src={dest.image}
                        alt={`Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - ${dest.name}`}
                        fill
                        priority={idx === 0}
                        style={{
                          objectFit: "cover",
                          filter: isActive ? "brightness(1.02)" : "brightness(0.75)",
                          transition: "filter 0.5s ease",
                        }}
                        sizes="300px"
                      />

                      {/* Subtle Vignette for visual depth */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: isActive
                            ? "radial-gradient(circle at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%)"
                            : "rgba(0, 0, 0, 0.25)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
