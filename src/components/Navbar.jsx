import { useState } from "react";

export default function Navbar({ cartCount, onCartOpen, onSearch, searchQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#FAFAF8",
      borderBottom: "1px solid #E8E6DF",
      padding: "0 2rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            fontFamily: "'Georgia', serif",
            fontSize: 22, fontWeight: 700,
            letterSpacing: "-0.5px",
            color: "#1A1A18",
          }}>SUPER</span>
          <span style={{
            fontSize: 10, fontWeight: 600,
            letterSpacing: 3,
            color: "#888780",
            marginTop: 4,
          }}>Fshion</span>
        </div>

        {/* Search bar */}s
        <div style={{
          flex: 1, maxWidth: 360,
          margin: "0 2rem",
          position: "relative",
          display: window.innerWidth < 600 ? "none" : "block",
        }}>
          <span style={{
            position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
            color: "#888780", fontSize: 16,
          }}>🔍</span>
          <input
            value={searchQuery}
            onChange={e => onSearch(e.target.value)}
            placeholder="Search products..."
            style={{
              width: "100%",
              padding: "8px 12px 8px 36px",
              border: "1px solid #E8E6DF",
              borderRadius: 8,
              fontSize: 14,
              background: "#FFFFFF",
              color: "#1A1A18",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={onCartOpen}
            style={{
              position: "relative",
              background: "#1A1A18",
              color: "#FAFAF8",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            🛍 Cart
            {cartCount > 0 && (
              <span style={{
                background: "#D85A30",
                color: "#FFFFFF",
                borderRadius: "50%",
                width: 18, height: 18,
                fontSize: 11, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
