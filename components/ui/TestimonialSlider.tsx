"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight, BiSolidStar } from "react-icons/bi";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const current = TESTIMONIALS[activeIdx];

  // Helper to extract initials if image fails or isn't a URL
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const isImageUrl = current.avatar && (current.avatar.startsWith("http") || current.avatar.startsWith("/"));

  return (
    <section className="section-padding bg-white" style={{ position: "relative" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem auto" }}>
          <span className="eyebrow">GUEST EXPERIENCES</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>What Our Travelers Say</h2>
        </div>

        {/* Testimonial Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            backgroundColor: "var(--off-white)",
            borderRadius: "16px",
            border: "1px solid var(--line)",
            padding: "3.5rem 3rem",
            boxShadow: "0 15px 40px rgba(18, 53, 36, 0.06)",
            position: "relative",
          }}
        >
          {/* Star Rating */}
          <div style={{ display: "flex", gap: "0.3rem", color: "var(--gold)", fontSize: "1.2rem", marginBottom: "1.5rem" }}>
            {[...Array(current.rating)].map((_, i) => (
              <BiSolidStar key={i} />
            ))}
          </div>

          {/* Quote Content */}
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
              color: "var(--forest)",
              lineHeight: 1.6,
              fontStyle: "italic",
              marginBottom: "2rem",
            }}
          >
            "{current.quote}"
          </p>

          {/* Author Badge & Details */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  minWidth: "52px",
                  minHeight: "52px",
                  borderRadius: "50%",
                  backgroundColor: "var(--forest)",
                  color: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.1rem",
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                {isImageUrl ? (
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    sizes="52px"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  getInitials(current.name)
                )}
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontFamily: "var(--font-playfair)", marginBottom: "0.1rem" }}>
                  {current.name}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
                  {current.role} • {current.location}
                </p>
              </div>
            </div>

            {/* Left & Right Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button
                onClick={() => setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                aria-label="Previous quote"
                style={{
                  width: "40px",
                  height: "40px",
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
                onClick={() => setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length)}
                aria-label="Next quote"
                style={{
                  width: "40px",
                  height: "40px",
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
        </div>

        {/* Dot Pagination - 100% Perfect Circles */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.6rem", marginTop: "2rem" }}>
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              style={{
                width: idx === activeIdx ? "12px" : "10px",
                height: idx === activeIdx ? "12px" : "10px",
                minWidth: idx === activeIdx ? "12px" : "10px",
                minHeight: idx === activeIdx ? "12px" : "10px",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                backgroundColor: idx === activeIdx ? "var(--gold)" : "var(--line)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
                margin: 0,
                outline: "none",
                transform: idx === activeIdx ? "scale(1.15)" : "scale(1)",
                boxShadow: idx === activeIdx ? "0 2px 8px rgba(185, 151, 62, 0.4)" : "none",
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
