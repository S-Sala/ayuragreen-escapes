"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import Counter from "./Counter";

interface Slide {
  src: string;
  alt: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const headlineText = "Luxury Golf & Wellness Experiences in Sri Lanka";
  const headlineWords = headlineText.split(" ");

  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: "720px", overflow: "hidden", backgroundColor: "var(--forest-deep)" }}>
      {/* Background Images Cross-fade + Zoom */}
      {slides.map((slide, idx) => (
        <div
          key={`${slide.src}-${idx}`}
          style={{
            position: "absolute",
            inset: 0,
            opacity: idx === activeIndex ? 1 : 0,
            transition: "opacity 1.4s ease-in-out",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              animation: idx === activeIndex ? "heroZoom 7s ease-out forwards" : "none",
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      {/* Dark Gradient Overlay for Readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(10, 33, 22, 0.65) 0%, rgba(18, 53, 36, 0.45) 50%, rgba(10, 33, 22, 0.85) 100%)",
          zIndex: 2,
        }}
      />

      {/* Vertical Dot Indicators */}
      <div
        style={{
          position: "absolute",
          right: "2.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: "12px",
              height: i === activeIndex ? "36px" : "12px",
              borderRadius: "6px",
              backgroundColor: i === activeIndex ? "var(--gold)" : "rgba(255, 255, 255, 0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s ease",
              padding: 0,
            }}
            aria-label={`Go to hero slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Hero Content Container */}
      <div
        className="container-custom"
        style={{
          position: "relative",
          zIndex: 5,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "4rem",
          paddingBottom: "8rem",
        }}
      >
        <div style={{ maxWidth: "880px" }}>
          <span className="eyebrow" style={{ color: "var(--gold-light)", letterSpacing: "0.3em", marginBottom: "1rem" }}>
            EXQUISITE DESTINATION MANAGEMENT
          </span>

          {/* Staggered Word-by-Word Headline */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              color: "var(--white)",
              lineHeight: 1.12,
              marginBottom: "1.5rem",
              fontFamily: "var(--font-playfair)",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem 0.75rem",
            }}
          >
            {headlineWords.map((word, index) => (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  animation: `slideUpWord 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${index * 80 + 200}ms`,
                  opacity: 0,
                  transform: "translateY(25px)",
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "rgba(255, 255, 255, 0.88)",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
              maxWidth: "720px",
              animation: "fadeInUp 0.8s ease forwards 1s",
              opacity: 0,
            }}
          >
            Discover unforgettable luxury travel, championship golf, certified Ayurveda retreats, destination weddings, and authentic Sri Lankan experiences.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.2rem",
              animation: "fadeInUp 0.8s ease forwards 1.2s",
              opacity: 0,
            }}
          >
            <Link href="/packages" className="btn-gold" style={{ padding: "1.1rem 2.4rem", fontSize: "1rem" }}>
              Explore Tours
            </Link>
            <Link href="/contact" className="btn-outline-white" style={{ padding: "1.1rem 2.4rem", fontSize: "1rem" }}>
              Plan My Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Glassmorphism Counter Panel Overlapping Bottom */}
      <div
        className="hero-counter-panel"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 3rem)",
          maxWidth: "1200px",
          zIndex: 10,
          background: "rgba(18, 53, 36, 0.55)",
          backdropFilter: "blur(16px)",
          borderRadius: "12px",
          border: "1px solid rgba(217, 194, 133, 0.25)",
          padding: "1.2rem 1.5rem",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
        }}
      >
        <Counter target={15} label="Years Experience" />
        <Counter target={8500} label="Happy Travelers" suffix="+" />
        <Counter target={50} label="Luxury Partners" suffix="+" />
        <Counter target={24} label="Customer Support" suffix="/7" />
      </div>

      {/* Scroll Down Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 11,
          color: "var(--gold)",
          fontSize: "1.8rem",
          animation: "bounceSlow 2s infinite",
          pointerEvents: "none",
        }}
      >
        <BiChevronDown />
      </div>
    </section>
  );
}
