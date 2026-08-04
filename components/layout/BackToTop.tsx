"use client";

import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        backgroundColor: "var(--forest)",
        color: "var(--gold)",
        border: "1px solid var(--gold)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.6rem",
        boxShadow: "0 6px 20px rgba(18, 53, 36, 0.25)",
        zIndex: 998,
        cursor: "pointer",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transform: isVisible ? "translateY(0)" : "translateY(15px)",
        transition: "all 0.3s ease",
      }}
    >
      <BiChevronUp />
    </button>
  );
}
