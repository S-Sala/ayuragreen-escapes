"use client";

import { useState } from "react";
import { GOLF_COURSES } from "@/lib/data";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { GiGolfFlag } from "react-icons/gi";

export default function TeeTimeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: GOLF_COURSES[0].name,
    date: "",
    players: "2 Players",
    message: "",
  });

  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({
    type: "idle",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "tee-time", ...formData }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({
          type: "success",
          message: "Our golf desk will confirm your tee time directly with the club.",
        });
        setFormData({ name: "", email: "", phone: "", course: GOLF_COURSES[0].name, date: "", players: "2 Players", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to submit tee time request." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error occurred. Please try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
      {status.type === "success" && (
        <div
          style={{
            backgroundColor: "rgba(37, 211, 102, 0.12)",
            border: "1px solid #25D366",
            color: "var(--forest)",
            padding: "1rem 1.2rem",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            fontSize: "0.9rem",
          }}
        >
          <BiCheckCircle style={{ fontSize: "1.4rem", color: "#25D366", flexShrink: 0 }} />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === "error" && (
        <div
          style={{
            backgroundColor: "rgba(220, 53, 69, 0.1)",
            border: "1px solid #dc3545",
            color: "#dc3545",
            padding: "1rem 1.2rem",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            fontSize: "0.9rem",
          }}
        >
          <BiErrorCircle style={{ fontSize: "1.4rem", flexShrink: 0 }} />
          <span>{status.message}</span>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" }}>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Golfer Full Name"
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
          />
        </div>

        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="golfer@example.com"
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" }}>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Preferred Championship Course *
          </label>
          <select
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem", backgroundColor: "var(--white)" }}
          >
            {GOLF_COURSES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name} ({c.location})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Number of Players
          </label>
          <select
            value={formData.players}
            onChange={(e) => setFormData({ ...formData, players: e.target.value })}
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem", backgroundColor: "var(--white)" }}
          >
            <option value="Single Player">1 Golfer</option>
            <option value="2 Players">2 Golfers</option>
            <option value="3 Players">3 Golfers</option>
            <option value="4 Players (Fourball)">4 Golfers (Fourball)</option>
            <option value="Group / Corporate">Group / Corporate Golf Party</option>
          </select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" }}>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Preferred Date *
          </label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
          />
        </div>

        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
            Phone / WhatsApp Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+94 77 215 8888"
            style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem" }}
          />
        </div>
      </div>

      <div>
        <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--forest)", display: "block", marginBottom: "0.4rem" }}>
          Additional Requirements (Caddie, Rental Clubs, Transfers, Post-round Spa)
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Specify preferred tee time window, club hire needs, or accommodation arrangements..."
          style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "6px", border: "1px solid var(--line)", outline: "none", fontSize: "0.9rem", resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="btn-gold"
        style={{ width: "100%", justifyContent: "center", padding: "1rem", fontSize: "1rem" }}
      >
        {status.type === "loading" ? "Reserving Tee Time..." : <>Request Tee Time Reservation <GiGolfFlag /></>}
      </button>
    </form>
  );
}
