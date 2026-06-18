export default function Cart({ items, onClose, onRemove, onUpdateQty }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.3)",
          zIndex: 200,
        }}
      />

      {/* Sidebar */}
      <div style={{
        position: "fixed", right: 0, top: 0, bottom: 0,
        width: "min(420px, 95vw)",
        background: "#FAFAF8",
        zIndex: 201,
        display: "flex", flexDirection: "column",
        boxShadow: "-8px 0 32px rgba(0,0,0,0.1)",
      }}>
        {/* Header */}
        <div style={{
          padding: "20px 24px",
          borderBottom: "1px solid #E8E6DF",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#1A1A18" }}>
            Your Cart ({items.reduce((s, i) => s + i.qty, 0)})
          </h2>
          <button onClick={onClose} style={{
            background: "none", border: "none",
            fontSize: 20, cursor: "pointer", color: "#888780",
          }}>✕</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#888780" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🛍</div>
              <p style={{ margin: 0, fontSize: 15 }}>Your cart is empty</p>
              <p style={{ margin: "4px 0 0", fontSize: 13 }}>Add some pieces you love</p>
            </div>
          ) : (
            items.map(item => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                style={{
                  display: "flex", gap: 14,
                  padding: "14px 0",
                  borderBottom: "1px solid #E8E6DF",
                }}>
                <img src={item.image} alt={item.name}
                  style={{ width: 72, height: 90, objectFit: "cover", borderRadius: 8 }} />
                <div style={{ flex: 1 }}>
                  <p style={{ margin: "0 0 2px", fontSize: 14, fontWeight: 600, color: "#1A1A18" }}>
                    {item.name}
                  </p>
                  <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888780" }}>
                    Size: {item.selectedSize}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <button onClick={() => onUpdateQty(item, item.qty - 1)}
                        style={{
                          width: 24, height: 24, borderRadius: 6,
                          border: "1px solid #E8E6DF", background: "#FFFFFF",
                          cursor: "pointer", fontSize: 14, display: "flex",
                          alignItems: "center", justifyContent: "center",
                        }}>−</button>
                      <span style={{ fontSize: 14, fontWeight: 500 }}>{item.qty}</span>
                      <button onClick={() => onUpdateQty(item, item.qty + 1)}
                        style={{
                          width: 24, height: 24, borderRadius: 6,
                          border: "1px solid #E8E6DF", background: "#FFFFFF",
                          cursor: "pointer", fontSize: 14, display: "flex",
                          alignItems: "center", justifyContent: "center",
                        }}>+</button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#1A1A18" }}>
                        ₹{(item.price * item.qty).toLocaleString()}
                      </span>
                      <button onClick={() => onRemove(item)}
                        style={{
                          background: "none", border: "none",
                          color: "#B4B2A9", cursor: "pointer", fontSize: 16,
                        }}>🗑</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{
            padding: "20px 24px",
            borderTop: "1px solid #E8E6DF",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ fontSize: 15, color: "#888780" }}>Subtotal</span>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#1A1A18" }}>
                ₹{total.toLocaleString()}
              </span>
            </div>
            <button style={{
              width: "100%",
              padding: "14px",
              borderRadius: 10,
              border: "none",
              background: "#1A1A18",
              color: "#FAFAF8",
              fontSize: 15, fontWeight: 700,
              cursor: "pointer",
            }}>
              Checkout →
            </button>
            <p style={{ textAlign: "center", margin: "10px 0 0", fontSize: 12, color: "#B4B2A9" }}>
              Free delivery on orders above ₹2,999
            </p>
          </div>
        )}
      </div>
    </>
  );
}
