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
  BiSearch,
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
    tripDuration: initialPkg.duration || "12 Night(s)",
    communicationMode: "A Callback",
    bestTimeToCall: "Any Time",
    comments: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  // Update selected package when query param changes
  useEffect(() => {
    if (packageParam) {
      const found = PACKAGES.find((p) => p.slug === packageParam);
      if (found) {
        setSelectedPackage(found);
        setFormData((prev) => ({
          ...prev,
          tripDuration: found.duration || "12 Night(s)",
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
        tripDuration: found.duration || "12 Night(s)",
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
            "Your enquiry for " +
            selectedPackage.name +
            " has been sent! Our travel team will contact you within 12 hours.",
        });
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          departureAirport: "London Airports (LON)",
          travelDate: "2026-08-01",
          tripDuration: selectedPackage.duration || "12 Night(s)",
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
          "Network connection error. Please try again or contact us via WhatsApp.",
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "1140px",
        margin: "0 auto",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
        overflow: "hidden",
        border: "1px solid #EAEAEA",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          minHeight: "680px",
        }}
      >
        {/* LEFT SIDE: SELECTED PACKAGE DETAILS CARD */}
        <div
          style={{
            position: "relative",
            padding: "2.2rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#FFFFFF",
            minHeight: "560px",
            overflow: "hidden",
          }}
        >
          {/* Package Background Image */}
          <Image
            src={selectedPackage.image}
            alt={selectedPackage.name}
            fill
            priority
            style={{ objectFit: "cover", zIndex: 0 }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Dark Overlay Gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(10, 25, 18, 0.92) 100%)",
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
            {/* Top Package Switcher Dropdown (for convenience) */}
            <div style={{ marginBottom: "1.2rem" }}>
              <label
                style={{
                  fontSize: "0.68rem",
                  color: "#D0D0D0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Selected Package:
              </label>
              <select
                value={selectedPackage.slug}
                onChange={(e) => handlePackageChange(e.target.value)}
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "6px",
                  padding: "6px 10px",
                  fontSize: "0.82rem",
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

            {/* Top Magenta / Crimson Banner Badge (Matching Screenshot) */}
            <div
              style={{
                backgroundColor: "#D61C59",
                color: "#FFFFFF",
                padding: "1rem 1.2rem",
                borderRadius: "4px",
                textAlign: "center",
                fontWeight: 800,
                fontSize: "1.05rem",
                letterSpacing: "0.5px",
                lineHeight: 1.3,
                textTransform: "uppercase",
                boxShadow: "0 6px 20px rgba(214, 28, 89, 0.4)",
                marginBottom: "1.5rem",
              }}
            >
              {selectedPackage.name}
            </div>

            {/* Price Header Section */}
            <div style={{ textAlign: "center", marginBottom: "1.2rem" }}>
              <span
                style={{
                  color: "#E0E0E0",
                  fontSize: "1rem",
                  display: "block",
                  marginBottom: "2px",
                  letterSpacing: "0.5px",
                }}
              >
                Price
              </span>
              <h2
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  margin: "0 0 2px 0",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  lineHeight: 1.1,
                }}
              >
                {selectedPackage.price ? selectedPackage.price : "On Request"}
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                Per Person - {selectedPackage.duration}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#CCCCCC",
                  margin: "2px 0 0 0",
                }}
              >
                Departure - {formData.departureAirport.split(" ")[0] || "London"}
              </p>
            </div>

            {/* Included Highlights List */}
            <div style={{ margin: "1rem 0 auto 0" }}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <li
                  style={{
                    fontSize: "0.92rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontSize: "1.1rem", color: "#FFFFFF" }}>•</span>
                  <span>Flights</span>
                </li>
                <li
                  style={{
                    fontSize: "0.92rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontSize: "1.1rem", color: "#FFFFFF" }}>•</span>
                  <span>Accommodations</span>
                </li>
                <li
                  style={{
                    fontSize: "0.92rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontSize: "1.1rem", color: "#FFFFFF" }}>•</span>
                  <span>Transfers</span>
                </li>
                <li
                  style={{
                    fontSize: "0.92rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontSize: "1.1rem", color: "#FFFFFF" }}>•</span>
                  <span>Tours And Excursions</span>
                </li>
                {selectedPackage.inclusions.slice(0, 3).map((inc, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      color: "#E2E8F0",
                    }}
                  >
                    <BiCheck
                      style={{
                        color: "#C5A059",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Trust Badges (ABTA, IATA, ATOL) */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.8rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem",
                  opacity: 0.9,
                }}
              >
                {/* ABTA Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                  }}
                >
                  <span>🛡️ ABTA</span>
                </div>

                {/* IATA Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                  }}
                >
                  <span>✈️ IATA</span>
                </div>

                {/* ATOL Protected Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                  }}
                >
                  <span>🔒 ATOL</span>
                </div>
              </div>

              {/* Disclaimer */}
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  textAlign: "center",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                * Quote is based on lead dates. Prices are subject to change.
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
          {/* Header Title with Pink Underline */}
          <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                color: "#0F4C81",
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
                backgroundColor: "#D61C59",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
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
                  color: "#1E293B",
                }}
              />

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
                  color: "#1E293B",
                }}
              />
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
                    color: "#1E293B",
                  }}
                />
              </div>

              {/* Guests Selection */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "6px",
                  padding: "0.4rem 0.8rem",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: "#64748B",
                      display: "block",
                      lineHeight: 1,
                    }}
                  >
                    Guests
                  </span>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#1E293B",
                    }}
                  >
                    {guestsCount} Traveller(s)
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <button
                    type="button"
                    onClick={() => handleGuestChange(-1)}
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "4px",
                      border: "none",
                      backgroundColor: "#0F4C81",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    aria-label="Decrease guests"
                  >
                    <BiMinus style={{ fontSize: "1rem" }} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleGuestChange(1)}
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "4px",
                      border: "none",
                      backgroundColor: "#0F4C81",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    aria-label="Increase guests"
                  >
                    <BiPlus style={{ fontSize: "1rem" }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Row 3: Departure Airport */}
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
                  color: "#64748B",
                  fontSize: "0.9rem",
                }}
              />
              <input
                type="text"
                required
                placeholder="London Airports (LON)"
                value={formData.departureAirport}
                onChange={(e) =>
                  setFormData({ ...formData, departureAirport: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.75rem 2.2rem 0.75rem 2.4rem",
                  borderRadius: "6px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#F8FAFC",
                  outline: "none",
                  fontSize: "0.88rem",
                  color: "#1E293B",
                }}
              />
              <BiSearch
                style={{
                  position: "absolute",
                  right: "12px",
                  color: "#64748B",
                  fontSize: "1.1rem",
                }}
              />
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
                    color: "#1E293B",
                  }}
                />
                <BiCalendar
                  style={{
                    position: "absolute",
                    right: "12px",
                    color: "#64748B",
                    fontSize: "1.2rem",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Trip Duration */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "6px",
                  padding: "0.4rem 0.8rem",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: "#64748B",
                      display: "block",
                      lineHeight: 1,
                    }}
                  >
                    Trip duration in nights
                  </span>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#1E293B",
                    }}
                  >
                    {formData.tripDuration}
                  </span>
                </div>
                <BiMoon style={{ color: "#64748B", fontSize: "1.2rem" }} />
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
                    fontSize: "0.7rem",
                    color: "#64748B",
                    display: "block",
                    marginBottom: "2px",
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
                    padding: "0.65rem 0.8rem",
                    borderRadius: "6px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#F8FAFC",
                    outline: "none",
                    fontSize: "0.88rem",
                    color: "#1E293B",
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
                    fontSize: "0.7rem",
                    color: "#64748B",
                    display: "block",
                    marginBottom: "2px",
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
                    padding: "0.65rem 0.8rem",
                    borderRadius: "6px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#F8FAFC",
                    outline: "none",
                    fontSize: "0.88rem",
                    color: "#1E293B",
                    cursor: "pointer",
                  }}
                >
                  <option value="Any Time">Any Time</option>
                  <option value="Morning">Morning (09:00 - 12:00)</option>
                  <option value="Afternoon">Afternoon (12:00 - 17:00)</option>
                  <option value="Evening">Evening (17:00 - 20:00)</option>
                </select>
              </div>
            </div>

            {/* Row 6: Comments (Optional) */}
            <div>
              <textarea
                rows={3}
                placeholder="Comments (Optional)"
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
                  color: "#1E293B",
                  resize: "none",
                }}
              />
            </div>

            {/* Row 7: Terms Checkbox */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
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
                  accentColor: "#0F4C81",
                }}
              />
              <label
                htmlFor="terms"
                style={{
                  fontSize: "0.75rem",
                  color: "#64748B",
                  lineHeight: 1.35,
                  cursor: "pointer",
                }}
              >
                By ticking this box, you agree to all the terms and conditions
                set forth by Ayuragreen Escapes.
              </label>
            </div>

            {/* Row 8: SUBMIT Button */}
            <button
              type="submit"
              disabled={status.type === "loading"}
              style={{
                width: "100%",
                backgroundColor: "#0F4C81",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "1px",
                padding: "0.95rem",
                borderRadius: "6px",
                border: "none",
                cursor: status.type === "loading" ? "not-allowed" : "pointer",
                transition: "background-color 0.2s ease",
                marginTop: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0 4px 12px rgba(15, 76, 129, 0.25)",
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
