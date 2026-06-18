import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    tag: "New Arrivals — Summer 2025",
    headline: "Where style\nmeets purpose.",
    sub: "Thoughtfully designed pieces for the modern wardrobe.",
    cta: "Shop Women",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
  },
  {
    id: 2,
    tag: "Men's Edit",
    headline: "Refined.\nTimeless.\nYours.",
    sub: "Premium menswear crafted for the discerning gentleman.",
    cta: "Explore Men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=80",
  },
  {
    id: 3,
    tag: "Limited Collection",
    headline: "Details that\ndefine you.",
    sub: "Accessories and essentials — curated, not mass-produced.",
    cta: "Shop Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    if (fading || idx === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section id="home" style={{ position: "relative", height: "90vh", minHeight: 500, overflow: "hidden" }}>

      {/* Full-bleed background image */}
      <img
        key={slide.id}
        src={slide.image}
        alt=""
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          opacity: fading ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Dark overlay — simple, no gradient complexity */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(15, 15, 13, 0.52)",
      }} />

      {/* Text content — centered, clean */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center",
        padding: "0 2rem",
        opacity: fading ? 0 : 1,
        transform: fading ? "translateY(8px)" : "none",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}>
        <div style={{ maxWidth: 640 }}>
          <p style={{
            fontSize: 11, fontWeight: 700,
            letterSpacing: 4,
            color: "#D85A30",
            textTransform: "uppercase",
            margin: "0 0 16px",
          }}>{slide.tag}</p>

          <h1 style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(38px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#FAFAF8",
            margin: "0 0 18px",
            whiteSpace: "pre-line",
          }}>{slide.headline}</h1>

          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            margin: "0 0 32px",
          }}>{slide.sub}</p>

          <a href="#shop" style={{
            display: "inline-block",
            padding: "12px 36px",
            borderRadius: 8,
            background: "#FAFAF8",
            color: "#1A1A18",
            fontWeight: 700,
            fontSize: 14,
            textDecoration: "none",
            letterSpacing: 0.5,
          }}>{slide.cta} →</a>
        </div>
      </div>

      {/* Dots — bottom center */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", gap: 8, zIndex: 3,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? 24 : 7,
            height: 7,
            borderRadius: 4,
            border: "none",
            background: i === current ? "#FFFFFF" : "rgba(255,255,255,0.35)",
            cursor: "pointer",
            padding: 0,
            transition: "width 0.3s, background 0.3s",
          }} />
        ))}
      </div>

      {/* Arrows — subtle */}
      {[
        { dir: -1, side: "left", label: "‹" },
        { dir: 1, side: "right", label: "›" },
      ].map(({ dir, side, label }) => (
        <button key={side} onClick={() => goTo((current + dir + slides.length) % slides.length)}
          style={{
            position: "absolute", [side]: 24, top: "50%",
            transform: "translateY(-50%)",
            width: 40, height: 40, borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#FFFFFF", fontSize: 20,
            cursor: "pointer", zIndex: 3,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
        >{label}</button>
      ))}
    </section>
  );
}
