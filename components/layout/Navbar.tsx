"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BiChevronDown, BiMenu, BiX, BiPhoneCall } from "react-icons/bi";
import { COMPANY_FACTS } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s ease",
          backgroundColor: isScrolled ? "var(--white)" : "rgba(255, 255, 255, 0.95)",
          boxShadow: isScrolled ? "0 4px 20px rgba(18, 53, 36, 0.08)" : "none",
          borderBottom: isScrolled ? "1px solid var(--line)" : "1px solid rgba(231, 227, 216, 0.4)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "84px" }}>
          {/* Logo & Brand */}
          <Link href="/" style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "var(--forest)", letterSpacing: "-0.02em", lineHeight: 1 }}>
              AYURAGREEN
            </span>
            <span style={{ fontFamily: "var(--font-poppins)", fontSize: "0.65rem", fontWeight: 600, color: "var(--gold)", letterSpacing: "0.22em", marginTop: "2px" }}>
              ESCAPES • SRI LANKA
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: "none", alignItems: "center", gap: "2.2rem" }} className="desktop-nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>

            {/* Experiences Mega Menu Trigger */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--forest)",
                  cursor: "pointer",
                  padding: "0.5rem 0",
                }}
                aria-expanded={dropdownOpen}
              >
                Experiences
                <BiChevronDown
                  style={{
                    fontSize: "1.2rem",
                    transition: "transform 0.3s ease",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    color: "var(--gold)",
                  }}
                />
              </button>

              {/* Mega Menu Dropdown */}
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "-120px",
                  width: "640px",
                  backgroundColor: "var(--white)",
                  borderRadius: "8px",
                  boxShadow: "0 15px 40px rgba(18, 53, 36, 0.12)",
                  border: "1px solid var(--line)",
                  padding: "1.8rem",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1.5rem",
                  opacity: dropdownOpen ? 1 : 0,
                  visibility: dropdownOpen ? "visible" : "hidden",
                  transform: dropdownOpen ? "translateY(0)" : "translateY(8px)",
                  transition: "all 0.3s ease",
                  zIndex: 1001,
                }}
              >
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "0.8rem" }}>
                    Golf & Sports
                  </span>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <li><Link href="/golf" className="dropdown-item">Golf Holidays</Link></li>
                    <li><Link href="/golf#book" className="dropdown-item">Tee Time Booking</Link></li>
                    <li><Link href="/services#corporate-golf" className="dropdown-item">Corporate Golf Events</Link></li>
                  </ul>
                </div>

                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "0.8rem" }}>
                    Wellness & Romance
                  </span>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <li><Link href="/wellness" className="dropdown-item">Wellness & Ayurveda</Link></li>
                    <li><Link href="/destination-weddings" className="dropdown-item">Destination Weddings</Link></li>
                    <li><Link href="/packages#wellness-retreat" className="dropdown-item">Wellness Retreats</Link></li>
                  </ul>
                </div>

                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "0.8rem" }}>
                    Corporate & Luxury
                  </span>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <li><Link href="/services#corporate" className="dropdown-item">Corporate MICE</Link></li>
                    <li><Link href="/packages" className="dropdown-item">Signature Packages</Link></li>
                    <li><Link href="/gallery" className="dropdown-item">Image Gallery</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/packages" className="nav-link">Packages</Link>
            <Link href="/gallery" className="nav-link">Gallery</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Right Action CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href={`tel:${COMPANY_FACTS.phone.replace(/\s+/g, '')}`}
              style={{ display: "none", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", fontWeight: 600, color: "var(--forest)" }}
              className="phone-link"
            >
              <BiPhoneCall style={{ fontSize: "1.2rem", color: "var(--gold)" }} />
              {COMPANY_FACTS.phone}
            </a>

            <Link href="/contact" className="btn-gold" style={{ padding: "0.65rem 1.4rem", fontSize: "0.85rem" }}>
              Plan My Journey
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "none",
                border: "none",
                fontSize: "2rem",
                color: "var(--forest)",
                cursor: "pointer",
                padding: "0.3rem",
                display: "flex",
              }}
              aria-label="Toggle navigation drawer"
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <BiX /> : <BiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop & Drawer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(10, 33, 22, 0.6)",
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? "visible" : "hidden",
          transition: "all 0.3s ease",
          zIndex: 1002,
        }}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "300px",
          backgroundColor: "var(--forest-deep)",
          color: "var(--white)",
          padding: "2.5rem 1.8rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1003,
          boxShadow: "5px 0 25px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
          <div>
            <span style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "var(--white)" }}>AYURAGREEN</span>
            <span style={{ display: "block", fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.2em" }}>ESCAPES</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: "none", border: "none", color: "var(--white)", fontSize: "1.8rem", cursor: "pointer" }}
          >
            <BiX />
          </button>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "1.1rem", fontSize: "1.05rem" }}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/golf" onClick={() => setMobileMenuOpen(false)}>Golf Holidays</Link>
          <Link href="/wellness" onClick={() => setMobileMenuOpen(false)}>Wellness & Ayurveda</Link>
          <Link href="/destination-weddings" onClick={() => setMobileMenuOpen(false)}>Destination Weddings</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/packages" onClick={() => setMobileMenuOpen(false)}>Signature Packages</Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>

        <div style={{ marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
          <p style={{ fontSize: "0.8rem", color: "var(--gold-light)", marginBottom: "0.8rem" }}>Direct Booking Desk:</p>
          <a href={`https://wa.me/${COMPANY_FACTS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
            WhatsApp Us
          </a>
        </div>
      </aside>
    </>
  );
}
