"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";

const GALLERY_ITEMS = [
  { id: "1", src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80", alt: "Victoria Golf Resort Kandy Dawn Fairway", category: "Golf" },
  { id: "2", src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80", alt: "Nuwara Eliya Heritage Golf Course", category: "Golf" },
  { id: "3", src: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1200&q=80", alt: "Royal Colombo Golf Club Fairway", category: "Golf" },
  { id: "4", src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80", alt: "Ayurveda Wellness Resort Spa Deck", category: "Wellness" },
  { id: "5", src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80", alt: "Sunrise Yoga Session Overlooking Jungle", category: "Wellness" },
  { id: "6", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", alt: "Bentota Oceanfront Sunset Wedding Arch", category: "Weddings" },
  { id: "7", src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", alt: "Colonial Tea Garden Wedding Ceremony", category: "Weddings" },
  { id: "8", src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80", alt: "Sigiriya Rock Fortress Ancient Frescoes", category: "Destinations" },
  { id: "9", src: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80", alt: "Nine Arch Bridge Scenic Train Journey", category: "Destinations" },
  { id: "10", src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80", alt: "Galle Fort Colonial Ramparts & Ocean View", category: "Destinations" },
  { id: "11", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80", alt: "Executive MICE Corporate Conference Setup", category: "Corporate" },
  { id: "12", src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80", alt: "Family Wildlife Safari in Yala National Park", category: "Leisure" },
];

const CATEGORIES = ["All", "Golf", "Wellness", "Weddings", "Destinations", "Corporate", "Leisure"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "420px", backgroundColor: "var(--forest-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80"
          alt="AyuraGreen Gallery"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
          priority
        />
        <div className="container-custom" style={{ position: "relative", zIndex: 2, textAlign: "center", marginTop: "3.5rem" }}>
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>VISUAL STORYTELLING</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5.5vw, 4rem)", color: "var(--white)", fontFamily: "var(--font-playfair)" }}>
            AyuraGreen Escapes Gallery
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: "700px", margin: "0.8rem auto 0 auto" }}>
            Real guest journeys across championship golf, certified Ayurveda wellness, beach weddings, and Sri Lankan heritage.
          </p>
        </div>
      </section>

      {/* Filterable Masonry Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", marginBottom: "3rem" }}>
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: "0.6rem 1.4rem",
                    borderRadius: "30px",
                    border: isActive ? "1px solid var(--gold)" : "1px solid var(--line)",
                    backgroundColor: isActive ? "var(--gold)" : "var(--off-white)",
                    color: isActive ? "var(--white)" : "var(--forest)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                style={{
                  position: "relative",
                  height: "280px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 8px 25px rgba(18,53,36,0.06)",
                }}
                className="gallery-tile"
              >
                <Image src={item.src} alt={item.alt} fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }} sizes="400px" />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(10,33,22,0.85) 100%)",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600 }}>
                    {item.category}
                  </span>
                  <h3 style={{ color: "var(--white)", fontSize: "1.1rem", fontFamily: "var(--font-playfair)", margin: "0.2rem 0 0 0" }}>
                    {item.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1))}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
      />
    </>
  );
}
