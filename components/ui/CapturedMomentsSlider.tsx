"use client";

import Image from "next/image";

const GALLERY_TEASERS = [
  { src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80", title: "Victoria Golf Resort Kandy", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Victoria Golf Resort Kandy" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", title: "Ayurveda Spa Deck", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Certified Ayurveda Spa Deck" },
  { src: "/images/destinations/bentota.jpg", title: "Bentota Sunset Beach", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Bentota Sunset Beach" },
  { src: "/images/destinations/sigiriya.jpg", title: "Sigiriya Lion Rock Fortress", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Sigiriya Lion Rock Fortress" },
  { src: "/images/destinations/ella.jpg", title: "Nine Arch Bridge Ella", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Nine Arch Bridge Ella Tea Country" },
  { src: "/images/destinations/nuwara-eliya.jpg", title: "Nuwara Eliya Tea Hills", alt: "Ayuragreen Escapes Luxury Golf and Wellness Tour Sri Lanka - Nuwara Eliya Tea Estate Hills" },
];

export default function CapturedMomentsSlider() {
  // Duplicate array 3 times for seamless infinite loop animation
  const items = [...GALLERY_TEASERS, ...GALLERY_TEASERS, ...GALLERY_TEASERS];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        padding: "1rem 0",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 8%, rgba(0,0,0,0.85) 92%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 8%, rgba(0,0,0,0.85) 92%, transparent 100%)",
      }}
    >
      {/* Left Edge Low-Opacity Soft Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "100px",
          background: "linear-gradient(to right, #FAF9F6 0%, rgba(250, 249, 246, 0) 100%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Right Edge Low-Opacity Soft Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "100px",
          background: "linear-gradient(to left, #FAF9F6 0%, rgba(250, 249, 246, 0) 100%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Continuous Infinite Auto-Play Track (Left to Right) */}
      <div
        className="captured-moments-track"
        style={{
          display: "flex",
          gap: "1.2rem",
          width: "max-content",
          animation: "marqueeLeftToRight 35s linear infinite",
        }}
      >
        {items.map((g, idx) => (
          <article
            key={idx}
            style={{
              flex: "0 0 280px",
              width: "280px",
              height: "220px",
              borderRadius: "14px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 6px 20px rgba(18,53,36,0.08)",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            className="gallery-tile"
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              loading="lazy"
              style={{ objectFit: "cover" }}
              sizes="300px"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(10,33,22,0.85) 100%)",
                padding: "1.2rem",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <span style={{ color: "var(--white)", fontFamily: "var(--font-playfair)", fontSize: "1rem" }}>
                {g.title}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
