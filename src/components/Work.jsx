const lookbook = [
  {
    title: "Summer Linen Edit",
    desc: "Breathable, structured, effortless. Our linen collection is designed for the Indian summer.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    items: "12 Pieces",
    tag: "Women",
  },
  {
    title: "The Sharp Gentleman",
    desc: "Clean lines, premium fabrics, minimal fuss. Menswear that works as hard as you do.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    items: "8 Pieces",
    tag: "Men",
  },
  {
    title: "Carry Everything",
    desc: "From leather crossbodies to canvas totes — accessories that complete every look.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    items: "6 Pieces",
    tag: "Accessories",
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "200+", label: "Curated Styles" },
  { value: "4.8★", label: "Average Rating" },
  { value: "15", label: "Day Returns" },
];

export default function Work() {
  return (
    <section id="lookbook" style={{ background: "#FAFAF8", padding: "80px 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 4,
            color: "#D85A30", textTransform: "uppercase", margin: "0 0 12px",
          }}>Our Collections</p>
          <h2 style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 700, color: "#1A1A18",
            margin: "0 0 14px", lineHeight: 1.2,
          }}>Styled for every story.</h2>
          <p style={{ color: "#888780", fontSize: 16, margin: 0, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Three curated edits — one for her, one for him, and everything in between.
          </p>
        </div>

        {/* Lookbook grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 28,
          marginBottom: 72,
        }}>
          {lookbook.map((item, i) => (
            <div key={i} style={{
              borderRadius: 16,
              overflow: "hidden",
              background: "#FFFFFF",
              border: "1px solid #E8E6DF",
              cursor: "pointer",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}
            style2={{ transition: "transform 0.2s" }}
            >
              <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
                <img src={item.image} alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(26,26,24,0.7) 0%, transparent 50%)",
                }} />
                <span style={{
                  position: "absolute", top: 16, left: 16,
                  background: "#D85A30",
                  color: "#FFFFFF",
                  fontSize: 11, fontWeight: 700,
                  padding: "4px 12px", borderRadius: 20,
                }}>{item.tag}</span>
                <div style={{
                  position: "absolute", bottom: 20, left: 20, right: 20,
                }}>
                  <h3 style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: 22, fontWeight: 700,
                    color: "#FAFAF8", margin: "0 0 6px",
                  }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#D3D1C7", margin: 0 }}>{item.items}</p>
                </div>
              </div>
              <div style={{ padding: "18px 20px" }}>
                <p style={{ fontSize: 14, color: "#888780", margin: "0 0 14px", lineHeight: 1.6 }}>{item.desc}</p>
                <a href="#shop" style={{
                  fontSize: 13, fontWeight: 700,
                  color: "#1A1A18",
                  textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 6,
                }}>Explore collection →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 1,
          background: "#E8E6DF",
          border: "1px solid #E8E6DF",
          borderRadius: 16,
          overflow: "hidden",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: "#FFFFFF",
              padding: "32px 20px",
              textAlign: "center",
            }}>
              <p style={{
                fontFamily: "'Georgia', serif",
                fontSize: 36, fontWeight: 700,
                color: "#1A1A18", margin: "0 0 6px",
              }}>{s.value}</p>
              <p style={{ fontSize: 13, color: "#888780", margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
