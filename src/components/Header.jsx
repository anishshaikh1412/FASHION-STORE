import { useState } from "react";

export default function Header({ cartCount, onCartOpen, onSearch, searchQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Shop", "Lookbook", "About", "Contact"];

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#FFFFFF",
      borderBottom: "1px solid #E8E6DF",
    }}>
      {/* Top bar */}
      <div style={{
        background: "#1A1A18",
        color: "#D3D1C7",
        textAlign: "center",
        padding: "8px",
        fontSize: 12,
        letterSpacing: 1,
      }}>
        🚚 Free Delivery on orders above ₹2,999 &nbsp;|&nbsp; Use code <strong style={{color:"#D85A30"}}>LUXE10</strong> for 10% off
      </div>

      {/* Main header */}
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 2rem",
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        height: 68,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{
            fontFamily: "'Georgia', serif",
            fontSize: 26, fontWeight: 700,
            letterSpacing: "-1px",
            color: "#1A1A18",
          }}>LUXE</span>
          <span style={{
            fontSize: 9, fontWeight: 700,
            letterSpacing: 4, color: "#888780",
          }}>STUDIO</span>
        </div>

        {/* Nav links — desktop */}
        <nav style={{
          display: "flex", gap: 32,
        }}>
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontSize: 13, fontWeight: 500,
              color: "#444441",
              textDecoration: "none",
              letterSpacing: 0.5,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "#D85A30"}
            onMouseLeave={e => e.target.style.color = "#444441"}
            >{link}</a>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Search */}
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute", left: 10, top: "50%",
              transform: "translateY(-50%)",
              fontSize: 14, color: "#B4B2A9",
            }}>🔍</span>
            <input
              value={searchQuery}
              onChange={e => onSearch(e.target.value)}
              placeholder="Search..."
              style={{
                padding: "7px 12px 7px 32px",
                border: "1px solid #E8E6DF",
                borderRadius: 20,
                fontSize: 13,
                width: 160,
                outline: "none",
                color: "#1A1A18",
                background: "#FAFAF8",
              }}
            />
          </div>

          {/* Cart */}
          <button onClick={onCartOpen} style={{
            position: "relative",
            background: "#1A1A18",
            color: "#FAFAF8",
            border: "none",
            borderRadius: 8,
            padding: "8px 18px",
            fontSize: 13, fontWeight: 600,
            cursor: "pointer",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            🛍 Cart
            {cartCount > 0 && (
              <span style={{
                background: "#D85A30",
                color: "#fff",
                borderRadius: "50%",
                width: 18, height: 18,
                fontSize: 11, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
