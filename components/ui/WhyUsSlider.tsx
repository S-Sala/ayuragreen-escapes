"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import { STRENGTHS } from "@/lib/data";

const SHOWCASE_IMAGES = [
  { src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1000&q=80", title: "Championship Golf Courses", alt: "Victoria Golf Resort Kandy Championship Golf Course Sri Lanka" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80", title: "Certified Ayurveda & Wellness", alt: "Certified Ayurveda and Wellness Resort Sri Lanka" },
  { src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80", title: "World-Class Sri Lankan Hospitality", alt: "Ayuragreen Escapes Luxury Hospitality & Boutique Villa Experience Sri Lanka" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80", title: "Bespoke Beach & Villa Escapes", alt: "Luxury Oceanfront Beach Escape Bentota Sri Lanka" }
];

export default function WhyUsSlider() {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % SHOWCASE_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
          
          {/* Left Column: Strengths List */}
          <div>
            <span className="eyebrow">THE AYURAGREEN ADVANTAGE</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "2rem" }}>
              Travel With Confidence & Elegance
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
              {STRENGTHS.slice(0, 6).map((item, idx) => (
                <RevealOnScroll key={item.id} delay={idx * 80}>
                  <article style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start", padding: "1rem", borderRadius: "8px", backgroundColor: "var(--off-white)", border: "1px solid var(--line)" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "var(--gold)",
                        lineHeight: 1,
                      }}
                    >
                      {item.num}
                    </span>
                    <div>
                      <h3 style={{ fontSize: "1.1rem", marginBottom: "0.2rem", fontFamily: "var(--font-playfair)" }}>{item.title}</h3>
                      <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", lineHeight: "1.5" }}>{item.description}</p>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right Column: Rotating Image Showcase */}
          <div style={{ position: "relative", height: "550px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 50px rgba(18, 53, 36, 0.12)" }}>
            {SHOWCASE_IMAGES.map((img, idx) => (
              <div
                key={img.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: idx === activeImg ? 1 : 0,
                  transition: "opacity 1s ease",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(10,33,22,0.85) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "2rem",
                  }}
                >
                  <span style={{ color: "var(--gold-light)", fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700 }}>
                    {img.title}
                  </span>
                </div>
              </div>
            ))}

            {/* Dot indicators */}
            <div style={{ position: "absolute", bottom: "1.2rem", right: "2rem", display: "flex", gap: "0.5rem", zIndex: 10 }}>
              {SHOWCASE_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: i === activeImg ? "24px" : "12px",
                    height: "12px",
                    minWidth: "12px",
                    minHeight: "12px",
                    borderRadius: "6px",
                    backgroundColor: i === activeImg ? "var(--gold)" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                  aria-label={`Go to showcase photo ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
