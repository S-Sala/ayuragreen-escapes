"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  label: string;
  suffix?: string;
}

export default function Counter({ target, label, suffix = "+" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let startTimestamp: number | null = null;
          const duration = 1800; // 1.8 seconds

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease-out quad curve
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ textAlign: "center", padding: "0.5rem 1rem" }}>
      <div
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "2.6rem",
          fontWeight: 800,
          color: "var(--gold)",
          lineHeight: 1,
          marginBottom: "0.4rem",
        }}
      >
        {count}
        {suffix}
      </div>
      <div style={{ fontFamily: "var(--font-poppins)", fontSize: "0.82rem", fontWeight: 500, color: "var(--white)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
        {label}
      </div>
    </div>
  );
}
