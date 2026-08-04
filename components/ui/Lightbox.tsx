"use client";

import { useEffect } from "react";
import Image from "next/image";
import { BiX, BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface LightboxProps {
  isOpen: boolean;
  images: { src: string; alt: string; category?: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(10, 33, 22, 0.94)",
        backdropFilter: "blur(10px)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "2rem",
          background: "none",
          border: "none",
          color: "var(--white)",
          fontSize: "2.5rem",
          cursor: "pointer",
          zIndex: 100001,
        }}
        aria-label="Close Lightbox"
      >
        <BiX />
      </button>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        style={{
          position: "absolute",
          left: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          color: "var(--white)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          cursor: "pointer",
          zIndex: 100001,
        }}
        aria-label="Previous Image"
      >
        <BiChevronLeft />
      </button>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "1100px",
          width: "100%",
          maxHeight: "82vh",
          height: "75vh",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Image
          src={currentImg.src}
          alt={currentImg.alt}
          fill
          style={{ objectFit: "contain" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(10, 33, 22, 0.8)",
            color: "var(--white)",
            padding: "0.5rem 1.2rem",
            borderRadius: "20px",
            fontSize: "0.9rem",
            textAlign: "center",
          }}
        >
          {currentImg.alt} {currentImg.category ? `• ${currentImg.category}` : ""}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          color: "var(--white)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          cursor: "pointer",
          zIndex: 100001,
        }}
        aria-label="Next Image"
      >
        <BiChevronRight />
      </button>
    </div>
  );
}
