export default function Footer() {
  const links = {
    "Shop": ["Women", "Men", "Accessories", "Sale", "New Arrivals"],
    "Company": ["About Us", "Lookbook", "Press", "Careers", "Sustainability"],
    "Help": ["Size Guide", "Shipping Info", "Returns", "Track Order", "Contact Us"],
  };

  return (
    <footer style={{ background: "#111110", color: "#888780" }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 2rem 48px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr repeat(3, 1fr)",
          gap: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <p style={{
                fontFamily: "'Georgia', serif",
                fontSize: 28, fontWeight: 700,
                color: "#FAFAF8", margin: "0 0 2px",
                letterSpacing: "-1px",
              }}>LUXE</p>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: 4, color: "#888780", margin: 0 }}>STUDIO</p>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 240 }}>
              Curated fashion for those who dress with intention. Mumbai-born, worn worldwide.
            </p>
            {/* Newsletter */}
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 10px", color: "#D3D1C7" }}>
              Get 10% off your first order
            </p>
            <div style={{ display: "flex", gap: 0 }}>
              <input placeholder="Your email address"
                style={{
                  flex: 1, padding: "9px 14px",
                  background: "#1A1A18",
                  border: "1px solid #2C2C2A",
                  borderRight: "none",
                  borderRadius: "8px 0 0 8px",
                  color: "#FAFAF8", fontSize: 13, outline: "none",
                }} />
              <button style={{
                padding: "9px 16px",
                background: "#D85A30",
                border: "none",
                borderRadius: "0 8px 8px 0",
                color: "#FFFFFF",
                fontWeight: 700, fontSize: 13,
                cursor: "pointer",
              }}>Subscribe</button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p style={{
                fontSize: 11, fontWeight: 700,
                letterSpacing: 2, textTransform: "uppercase",
                color: "#FAFAF8", margin: "0 0 18px",
              }}>{section}</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {items.map(item => (
                  <li key={item} style={{ marginBottom: 10 }}>
                    <a href="#" style={{
                      color: "#888780", fontSize: 14,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => e.target.style.color = "#D3D1C7"}
                    onMouseLeave={e => e.target.style.color = "#888780"}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Payment icons strip */}
      <div style={{
        borderTop: "1px solid #1A1A18",
        padding: "20px 2rem",
        maxWidth: 1200, margin: "0 auto",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ margin: 0, fontSize: 13 }}>
            © 2025 Luxe Studio Pvt. Ltd. · All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {["UPI", "Visa", "Mastercard", "RuPay", "COD"].map(p => (
              <span key={p} style={{
                padding: "4px 10px",
                background: "#1A1A18",
                borderRadius: 6,
                fontSize: 11, fontWeight: 600,
                color: "#888780",
                border: "1px solid #2C2C2A",
              }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
