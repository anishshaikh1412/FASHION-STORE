export default function Hero() {
  return (
    <div style={{
      background: "#1A1A18",
      color: "#FAFAF8",
      padding: "80px 2rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(ellipse at 30% 50%, rgba(216,90,48,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(55,138,221,0.1) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
        <p style={{
          fontSize: 11, fontWeight: 700,
          letterSpacing: 4,
          color: "#888780",
          textTransform: "uppercase",
          margin: "0 0 20px",
        }}>Summer Collection 2025</p>

        <h1 style={{
          fontFamily: "'Georgia', serif",
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 700,
          lineHeight: 1.1,
          margin: "0 0 24px",
          color: "#FAFAF8",
        }}>
          Dress with
          <span style={{ color: "#D85A30", display: "block" }}>intention.</span>
        </h1>

        <p style={{
          fontSize: 17,
          color: "#888780",
          lineHeight: 1.7,
          margin: "0 0 36px",
        }}>
          Curated pieces for the modern wardrobe — refined, sustainable, and built to last.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#products" style={{
            padding: "12px 32px",
            borderRadius: 8,
            background: "#D85A30",
            color: "#FFFFFF",
            fontSize: 15, fontWeight: 600,
            textDecoration: "none",
          }}>Shop Now</a>
          <a href="#products" style={{
            padding: "12px 32px",
            borderRadius: 8,
            background: "transparent",
            border: "1px solid #444441",
            color: "#D3D1C7",
            fontSize: 15, fontWeight: 600,
            textDecoration: "none",
          }}>View Lookbook</a>
        </div>
      </div>
    </div>
  );
}
