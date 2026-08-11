"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { PACKAGES } from "@/lib/data";
import { PackageItem } from "@/lib/types";
import {
  BiCheck,
  BiCalendar,
  BiMoon,
  BiPlus,
  BiMinus,
  BiCheckCircle,
  BiErrorCircle,
  BiSend,
} from "react-icons/bi";
import { FaPlane } from "react-icons/fa";

const COUNTRY_CODES = [
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+94", country: "LK", flag: "🇱🇰" },
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
];

function EnquiryFormInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const packageParam = searchParams ? searchParams.get("package") : null;

  // Find initial selected package
  const initialPkg =
    PACKAGES.find((p) => p.slug === packageParam) || PACKAGES[0];

  const [selectedPackage, setSelectedPackage] = useState<PackageItem>(initialPkg);
  const [guestsCount, setGuestsCount] = useState<number>(1);
  const [countryCode, setCountryCode] = useState<string>("+44");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    departureAirport: "London Airports (LON)",
    travelDate: "2026-08-01",
    tripDuration: initialPkg.duration || "10 Days / 9 Nights",
    communicationMode: "A Callback",
    bestTimeToCall: "Any Time",
    comments: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  // Sync state when package parameter changes in URL
  useEffect(() => {
    if (packageParam) {
      const found = PACKAGES.find((p) => p.slug === packageParam);
      if (found) {
        setSelectedPackage(found);
        setFormData((prev) => ({
          ...prev,
          tripDuration: found.duration,
        }));
      }
    }
  }, [packageParam]);

  const handlePackageChange = (slug: string) => {
    const found = PACKAGES.find((p) => p.slug === slug);
    if (found) {
      setSelectedPackage(found);
      setFormData((prev) => ({
        ...prev,
        tripDuration: found.duration,
      }));
      router.push(`/enquire?package=${slug}`, { scroll: false });
    }
  };

  const handleGuestChange = (delta: number) => {
    setGuestsCount((prev) => Math.max(1, Math.min(20, prev + delta)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      setStatus({
        type: "error",
        message: "Please agree to the terms and conditions before submitting.",
      });
      return;
    }

    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "enquiry",
          packageName: selectedPackage.name,
          packageSlug: selectedPackage.slug,
          guests: guestsCount,
          countryCode,
          phone: `${countryCode} ${formData.contactNumber}`,
          ...formData,
        }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your enquiry for " +
            selectedPackage.name +
            " has been submitted. Our DMC desk will reach out to you within 12 hours.",
        });
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          departureAirport: "London Airports (LON)",
          travelDate: "2026-08-01",
          tripDuration: selectedPackage.duration,
          communicationMode: "A Callback",
          bestTimeToCall: "Any Time",
          comments: "",
        });
        setAcceptedTerms(false);
      } else {
        setStatus({
          type: "error",
          message:
            data.error ||
            "Failed to submit enquiry. Please try again or WhatsApp us directly.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Network error. Please try again or contact us directly via WhatsApp.",
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "1140px",
        margin: "0 auto",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        boxShadow: "0 15px 50px rgba(27, 54, 38, 0.1)",
        overflow: "hidden",
        border: "1px solid var(--line, #EAEAEA)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          minHeight: "640px",
        }}
      >
        {/* LEFT SIDE: SELECTED PACKAGE DETAILS CARD */}
        <div
          style={{
            position: "relative",
            padding: "2.5rem 2.2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#FFFFFF",
            minHeight: "560px",
            overflow: "hidden",
          }}
        >
          {/* Background Image of Selected Package */}
          <Image
            src={selectedPackage.image}
            alt={selectedPackage.name}
            fill
            priority
            style={{ objectFit: "cover", zIndex: 0 }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Dark Forest Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(10, 33, 22, 0.75) 0%, rgba(10, 33, 22, 0.94) 100%)",
              zIndex: 1,
            }}
          />

          {/* Content Wrapper */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            {/* Top Package Switcher Dropdown */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  fontSize: "0.68rem",
                  color: "var(--gold-light, #E2C980)",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                SELECT TOUR PACKAGE:
              </label>
              <select
                value={selectedPackage.slug}
                onChange={(e) => handlePackageChange(e.target.value)}
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(197, 160, 89, 0.5)",
                  borderRadius: "6px",
                  padding: "8px 12px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  outline: "none",
                  backdropFilter: "blur(8px)",
                  cursor: "pointer",
                }}
              >
                {PACKAGES.map((pkg) => (
                  <option
                    key={pkg.slug}
                    value={pkg.slug}
                    style={{ color: "#1B3626", backgroundColor: "#FFFFFF" }}
                  >
                    {pkg.name} ({pkg.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Top Badge (if available) */}
            {selectedPackage.badgeTop && (
              <div style={{ marginBottom: "0.6rem" }}>
                <span
                  style={{
                    backgroundColor:
                      selectedPackage.badgeTopType === "forest"
                        ? "#1B3626"
                        : "#C5A059",
                    color: "#FFFFFF",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "12px",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    display: "inline-block",
                  }}
                >
                  {selectedPackage.badgeTop}
                </span>
              </div>
            )}

            {/* Dynamic Package Title & Tagline */}
            <div style={{ marginBottom: "1.2rem" }}>
              <h2
                style={{
                  color: "#FFFFFF",
                  fontSize: "1.85rem",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  margin: "0 0 0.5rem 0",
                }}
              >
                {selectedPackage.name}
              </h2>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "0.92rem",
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {selectedPackage.tagline}
              </p>
            </div>

            {/* Duration Pill */}
            <div style={{ marginBottom: "1.5rem" }}>
              <span
                style={{
                  backgroundColor: "rgba(197, 160, 89, 0.2)",
                  border: "1px solid rgba(197, 160, 89, 0.5)",
                  color: "#F3E5AB",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: "20px",
                  display: "inline-block",
                }}
              >
                ⏱️ {selectedPackage.duration}
              </span>
            </div>

            {/* INCLUDED HIGHLIGHTS SECTION */}
            <div style={{ margin: "0 0 auto 0" }}>
              <span
                style={{
                  color: "#C5A059",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.8rem",
                }}
              >
                INCLUDED HIGHLIGHTS:
              </span>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                }}
              >
                {selectedPackage.inclusions.map((inc, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.88rem",
                      color: "#F8FAFC",
                      lineHeight: 1.35,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <BiCheck
                      style={{
                        color: "#C5A059",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dynamic Price Display */}
            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              {selectedPackage.price ? (
                <div
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255, 255, 255, 0.9)",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "6px",
                  }}
                >
                  <span>From</span>
                  <span
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "#C5A059",
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {selectedPackage.price}
                  </span>
                  <span>/ Person</span>
                </div>
              ) : (
                <div
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#C5A059",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  Price: On Request
                </div>
              )}

              <p
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255, 255, 255, 0.65)",
                  margin: "6px 0 0 0",
                  fontStyle: "italic",
                }}
              >
                * Quote is based on lead dates. Prices are subject to change based on seasonality.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: SUBMIT FORM ("Your Dream Holiday Awaits") */}
        <div
          style={{
            padding: "2.5rem 2.2rem",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Header Title with Brand Gold Underline */}
          <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                color: "#1B3626",
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 700,
                margin: "0 0 0.5rem 0",
              }}
            >
              Your Dream Holiday Awaits
            </h2>
            <div
              style={{
                width: "45px",
                height: "3px",
                backgroundColor: "#C5A059",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
          >
            {/* Status Messages */}
            {status.type === "success" && (
              <div
                style={{
                  backgroundColor: "rgba(37, 211, 102, 0.12)",
                  border: "1px solid #25D366",
                  color: "#1B3626",
                  padding: "0.8rem 1rem",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "0.85rem",
                }}
              >
                <BiCheckCircle
                  style={{ fontSize: "1.3rem", color: "#25D366", flexShrink: 0 }}
                />
                <span>{status.message}</span>
              </div>
            )}

            {status.type === "error" && (
              <div
                style={{
                  backgroundColor: "rgba(220, 53, 69, 0.08)",
                  border: "1px solid #dc3545",
                  color: "#dc3545",
                  padding: "0.8rem 1rem",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "0.85rem",
                }}
              >
                <BiErrorCircle style={{ fontSize: "1.3rem", flexShrink: 0 }} />
                <span>{status.message}</span>
              </div>
            )}

            {/* Row 1: Name & Email */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#1B3626",
                    display: "block",
                    marginBottom: "3px",
                  }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.9rem",
                    borderRadius: "6px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#F8FAFC",
                    outline: "none",
                    fontSize: "0.88rem",
                    color: "#1B3626",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#1B3626",
                    display: "block",
                    marginBottom: "3px",
                  }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.9rem",
                    borderRadius: "6px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#F8FAFC",
                    outline: "none",
                    fontSize: "0.88rem",
                    color: "#1B3626",
                  }}
                />
              </div>
            </div>

            {/* Row 2: Contact Number (with Country Code) & Guests Counter */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {/* Contact Number Input */}
              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#1B3626",
                    display: "block",
                    marginBottom: "3px",
                  }}
                >
                  Contact Number *
                </label>
                <div
                  style={{
                    display: "flex",
                    borderRadius: "6px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#F8FAFC",
                    overflow: "hidden",
                  }}
                >
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{
                      backgroundColor: "#F1F5F9",
                      border: "none",
                      borderRight: "1px solid #E2E8F0",
                      padding: "0.75rem 0.5rem",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#1B3626",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    required
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, contactNumber: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 0.8rem",
                      border: "none",
                      backgroundColor: "transparent",
                      outline: "none",
                      fontSize: "0.88rem",
                      color: "#1B3626",
                    }}
                  />
                </div>
              </div>

              {/* Guests Selection */}
              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#1B3626",
                    display: "block",
                    marginBottom: "3px",
                  }}
                >
                  Guests
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "6px",
                    padding: "0.45rem 0.8rem",
                    height: "42px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#1B3626",
                    }}
                  >
                    {guestsCount} Traveller(s)
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <button
                      type="button"
                      onClick={() => handleGuestChange(-1)}
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: "#1B3626",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      aria-label="Decrease guests"
                    >
                      <BiMinus style={{ fontSize: "0.9rem" }} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleGuestChange(1)}
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: "#1B3626",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      aria-label="Increase guests"
                    >
                      <BiPlus style={{ fontSize: "0.9rem" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Departure Airport (Clean Input - Search bar removed) */}
            <div>
              <label
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#1B3626",
                  display: "block",
                  marginBottom: "3px",
                }}
              >
                Departure Airport / City
              </label>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaPlane
                  style={{
                    position: "absolute",
                    left: "12px",
                    color: "#C5A059",
                    fontSize: "0.85rem",
                  }}
                />
                <input
                  type="text"
                  required
                  placeholder="Departure Airport (e.g. London Airports - LON)"
                  value={formData.departureAirport}
                  onChange={(e) =>
                    setFormData({ ...formData, departureAirport: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.9rem 0.75rem 2.3rem",
                    borderRadius: "6px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#F8FAFC",
                    outline: "none",
                    fontSize: "0.88rem",
                    color: "#1B3626",
                  }}
                />
              </div>
            </div>

            {/* Row 4: Travel Date & Trip Duration */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {/* Travel Date */}
              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#1B3626",
                    display: "block",
                    marginBottom: "3px",
                  }}
                >
                  Estimated Travel Date
                </label>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) =>
                      setFormData({ ...formData, travelDate: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 2.2rem 0.75rem 0.9rem",
                      borderRadius: "6px",
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#F8FAFC",
                      outline: "none",
                      fontSize: "0.88rem",
                      color: "#1B3626",
                    }}
                  />
                  <BiCalendar
                    style={{
                      position: "absolute",
                      right: "12px",
                      color: "#C5A059",
                      fontSize: "1.1rem",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/* Trip Duration */}
              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#1B3626",
                    display: "block",
                    marginBottom: "3px",
                  }}
                >
                  Trip duration in nights
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "6px",
                    padding: "0.45rem 0.8rem",
                    height: "42px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#1B3626",
                    }}
                  >
                    {formData.tripDuration}
                  </span>
                  <BiMoon style={{ color: "#C5A059", fontSize: "1.1rem" }} />
                </div>
              </div>
            </div>

            {/* Row 5: Communication Mode & Best Time To Call */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#1B3626",
                    display: "block",
                    marginBottom: "3px",
                  }}
                >
                  Communication Mode
                </label>
                <select
                  value={formData.communicationMode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      communicationMode: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.8rem",
                    borderRadius: "6px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#F8FAFC",
                    outline: "none",
                    fontSize: "0.88rem",
                    color: "#1B3626",
                    cursor: "pointer",
                  }}
                >
                  <option value="A Callback">A Callback</option>
                  <option value="Email">Email</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Phone Call">Phone Call</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#1B3626",
                    display: "block",
                    marginBottom: "3px",
                  }}
                >
                  Best Time To Call
                </label>
                <select
                  value={formData.bestTimeToCall}
                  onChange={(e) =>
                    setFormData({ ...formData, bestTimeToCall: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.8rem",
                    borderRadius: "6px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#F8FAFC",
                    outline: "none",
                    fontSize: "0.88rem",
                    color: "#1B3626",
                    cursor: "pointer",
                  }}
                >
                  <option value="Any Time">Any Time</option>
                  <option value="Morning">Morning (09:00 - 12:00 IST)</option>
                  <option value="Afternoon">Afternoon (12:00 - 17:00 IST)</option>
                  <option value="Evening">Evening (17:00 - 20:00 IST)</option>
                </select>
              </div>
            </div>

            {/* Row 6: Comments (Optional) */}
            <div>
              <label
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#1B3626",
                  display: "block",
                  marginBottom: "3px",
                }}
              >
                Comments (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share any special preferences, hotel tier desires, or golf/wellness requests..."
                value={formData.comments}
                onChange={(e) =>
                  setFormData({ ...formData, comments: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.75rem 0.9rem",
                  borderRadius: "6px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#F8FAFC",
                  outline: "none",
                  fontSize: "0.88rem",
                  color: "#1B3626",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Row 7: Terms Checkbox (Matched to Forest Green brand color) */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginTop: "4px",
              }}
            >
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                style={{
                  marginTop: "3px",
                  cursor: "pointer",
                  width: "16px",
                  height: "16px",
                  accentColor: "#1B3626",
                }}
              />
              <label
                htmlFor="terms"
                style={{
                  fontSize: "0.78rem",
                  color: "#555555",
                  lineHeight: 1.4,
                  cursor: "pointer",
                }}
              >
                By ticking this box, you agree to all the terms and conditions
                set forth by AyuraGreen Escapes.
              </label>
            </div>

            {/* Row 8: SUBMIT Button (Gold brand color matching site theme) */}
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="btn-gold"
              style={{
                width: "100%",
                backgroundColor: "#C5A059",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "1px",
                padding: "0.95rem",
                borderRadius: "6px",
                border: "none",
                cursor: status.type === "loading" ? "not-allowed" : "pointer",
                transition: "all 0.25s ease",
                marginTop: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(197, 160, 89, 0.3)",
              }}
            >
              {status.type === "loading" ? (
                "SUBMITTING..."
              ) : (
                <>
                  SUBMIT <BiSend style={{ fontSize: "1.1rem" }} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function EnquiryForm() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "3rem" }}>Loading Enquiry Form...</div>}>
      <EnquiryFormInner />
    </Suspense>
  );
}
