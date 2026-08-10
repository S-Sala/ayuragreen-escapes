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

  // Map active index (0 to 7) to 3 pagination states (0, 1, 2)
  const activeDotIndex = Math.min(2, Math.floor((activeIndex / total) * 3));

  return (
    <section
      className="section-padding destinations-section"
      style={{
        position: "relative",
        color: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Background Scenic Image */}
      <Image
        src="/images/where-will-you-go-bg.jpg"
        alt="Where Will You Go - Sri Lanka Tea Plantation Landscape"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
        sizes="100vw"
      />

      {/* Dark Gradient Overlay to ensure crisp legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(8, 22, 16, 0.72) 0%, rgba(10, 26, 19, 0.84) 50%, rgba(6, 18, 13, 0.88) 100%)",
          zIndex: 1,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 3 }}>
        
        {/* Main 2-Column Split Container - Transparent Glass Box */}
        <div
          className="destinations-glass-card"
          style={{
            background: "rgba(10, 24, 18, 0.38)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            padding: "clamp(2rem, 3.5vw, 3.5rem)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
            overflow: "hidden", // Keeps slider images strictly inside the box
          }}
        >
          <div
            className="destinations-split-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            
            {/* LEFT COLUMN: Dynamic Text Content & Controls (~40%) */}
            <div style={{ maxWidth: "440px" }}>
              
              {/* Eyebrow Subheading */}
              <span
                key={`eyebrow-${activeIndex}`}
                className="destination-eyebrow-fade"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                  color: "#C5A059",
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  display: "block",
                  marginBottom: "0.5rem",
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
                  fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.18,
                  marginBottom: "0.8rem",
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
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  marginBottom: "1.8rem",
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
                  Explore Destination <BiRightArrowAlt style={{ fontSize: "1.15rem" }} />
                </Link>
              </div>

              {/* Navigation Controls & Counter (Sleek Small Arrow Buttons) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                  marginTop: "2rem",
                  paddingTop: "1.2rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                {/* Arrow Buttons (Small Sleek 36px Circles) */}
                <div style={{ display: "flex", gap: "0.6rem" }}>
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
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                  }}
                >
                  <strong style={{ color: "#C5A059", fontSize: "1.05rem" }}>
                    {String(activeIndex + 1).padStart(2, "0")}
                  </strong>{" "}
                  / {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Card Slider (Shows ONLY 3 Images Contained inside Box) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.2rem",
                width: "100%",
              }}
            >
              <div
                className="destinations-slider-wrapper"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "430px", // Constrained height inside container
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden", // Restricts image slider strictly inside glass box
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

                    // REQUIREMENT: Show ONLY 3 IMAGES max (Active center card, 1 Left card, 1 Right card)
                    if (absOffset > 1) return null;

                    const isActive = offset === 0;

                    // Horizontal spacing offset keeping side cards comfortably inside the box container
                    const translateX = offset * 145;
                    const scale = isActive ? 1.03 : 0.84;
                    const opacity = isActive ? 1 : 0.6;
                    const zIndex = isActive ? 30 : 10;

                    return (
                      <div
                        key={dest.slug}
                        onClick={() => setActiveIndex(idx)}
                        className="destinations-card-item"
                        style={{
                          position: "absolute",
                          width: "240px",
                          height: "360px",
                          borderRadius: "18px",
                          overflow: "hidden",
                          transform: `translateX(${translateX}px) scale(${scale})`,
                          opacity: opacity,
                          zIndex: zIndex,
                          cursor: "pointer",
                          transition: "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.45s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.45s ease",
                          boxShadow: isActive
                            ? "0 14px 35px rgba(0, 0, 0, 0.4), 0 0 18px rgba(197, 160, 89, 0.2)"
                            : "0 8px 20px rgba(0, 0, 0, 0.3)",
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
                            filter: isActive ? "brightness(1.02)" : "brightness(0.72)",
                            transition: "filter 0.45s ease",
                          }}
                          sizes="280px"
                        />

                        {/* Soft Vignette */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: isActive
                              ? "radial-gradient(circle at center, rgba(0,0,0,0) 65%, rgba(0,0,0,0.2) 100%)"
                              : "rgba(0, 0, 0, 0.25)",
                            pointerEvents: "none",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* REQUIREMENT: ONLY 3 CIRCULATION DOTS of EXACT SAME WIDTH & HEIGHT under the image slider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  marginTop: "0.2rem",
                }}
              >
                {[0, 1, 2].map((dotIdx) => {
                  const isDotActive = activeDotIndex === dotIdx;
                  const targetSlideIndex = dotIdx === 0 ? 0 : dotIdx === 1 ? 3 : 6;

                  return (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveIndex(targetSlideIndex)}
                      aria-label={`Go to section ${dotIdx + 1}`}
                      style={{
                        width: "10px",
                        height: "10px",
                        minWidth: "10px",
                        minHeight: "10px",
                        borderRadius: "50%",
                        backgroundColor: isDotActive ? "#C5A059" : "rgba(255, 255, 255, 0.3)",
                        boxShadow: isDotActive ? "0 0 10px rgba(197, 160, 89, 0.6)" : "none",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        padding: 0,
                        margin: 0,
                      }}
                    />
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
