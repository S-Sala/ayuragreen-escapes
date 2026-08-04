"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight, BiRightArrowAlt } from "react-icons/bi";
import { DESTINATIONS } from "@/lib/data";

export default function DestinationsCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-off-white" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", gap: "1rem" }}>
          <div>
            <span className="eyebrow">POPULAR SRI LANKAN DESTINATIONS</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>Where Will You Go?</h2>
          </div>

          {/* Navigation Arrow Buttons */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button
              onClick={() => scroll("left")}
              aria-label="Previous destination"
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gold)";
                e.currentTarget.style.color = "var(--white)";
                e.currentTarget.style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--white)";
                e.currentTarget.style.color = "var(--forest)";
                e.currentTarget.style.borderColor = "var(--line)";
              }}
            >
              <BiChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next destination"
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gold)";
                e.currentTarget.style.color = "var(--white)";
                e.currentTarget.style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--white)";
                e.currentTarget.style.color = "var(--forest)";
                e.currentTarget.style.borderColor = "var(--line)";
              }}
            >
              <BiChevronRight />
            </button>
          </div>
        </div>

        {/* Scroll-Snap Row */}
        <div
          ref={rowRef}
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: "1.8rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "1.5rem",
          }}
        >
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.slug}
              style={{
                flex: "0 0 340px",
                scrollSnapAlign: "start",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                height: "450px",
                boxShadow: "0 10px 30px rgba(18, 53, 36, 0.08)",
                cursor: "pointer",
              }}
              className="destination-card"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)" }}
                sizes="340px"
              />
              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,33,22,0.92) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.8rem",
                }}
              >
                <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "0.3rem" }}>
                  {dest.tagline}
                </span>
                <h3 style={{ color: "var(--white)", fontSize: "1.45rem", fontFamily: "var(--font-playfair)", marginBottom: "0.5rem" }}>
                  {dest.name}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem", lineHeight: "1.4" }}>
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Bottom CTA Link */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link
            href="/gallery"
            className="btn-outline-gold"
          >
            Explore All Destinations <BiRightArrowAlt style={{ fontSize: "1.3rem" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
