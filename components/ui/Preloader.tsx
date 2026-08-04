"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--forest-deep)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        transition: "opacity 0.5s ease, visibility 0.5s ease",
      }}
    >
      <div style={{ textAlign: "center", animation: "pulse 1.5s infinite" }}>
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "2.2rem", fontWeight: 800, color: "var(--white)", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>
          AYURAGREEN
        </h1>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: "0.75rem", fontWeight: 600, color: "var(--gold)", letterSpacing: "0.3em" }}>
          LUXURY ESCAPES
        </p>
      </div>
    </div>
  );
}
