import { useState } from "react";

export default function ProductCard({ product, onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAdd = () => {
    if (!selectedSize) return;
    onAddToCart({ ...product, selectedSize, selectedColor });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const tagColors = {
    "Bestseller": { bg: "#EAF3DE", text: "#3B6D11" },
    "New": { bg: "#E6F1FB", text: "#185FA5" },
    "Sale": { bg: "#FAECE7", text: "#993C1D" },
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF",
        borderRadius: 12,
        border: "1px solid #E8E6DF",
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.08)" : "none",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#F5F3EF" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {product.tag && (
          <span style={{
            position: "absolute", top: 12, left: 12,
            padding: "4px 10px",
            borderRadius: 6,
            fontSize: 11, fontWeight: 600,
            background: tagColors[product.tag]?.bg,
            color: tagColors[product.tag]?.text,
          }}>{product.tag}</span>
        )}
        {discount && (
          <span style={{
            position: "absolute", top: 12, right: 12,
            padding: "4px 10px",
            borderRadius: 6,
            fontSize: 11, fontWeight: 600,
            background: "#2C2C2A",
            color: "#FAFAF8",
          }}>-{discount}%</span>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "16px" }}>
        <h3 style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 600, color: "#1A1A18" }}>
          {product.name}
        </h3>
        <p style={{ margin: "0 0 12px", fontSize: 13, color: "#888780", lineHeight: 1.5 }}>
          {product.description}
        </p>

        {/* Price */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: "#1A1A18" }}>
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span style={{ fontSize: 14, color: "#B4B2A9", textDecoration: "line-through" }}>
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Colors */}
        <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
          {product.colors.map((c, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(i)}
              style={{
                width: 20, height: 20,
                borderRadius: "50%",
                background: c,
                border: selectedColor === i ? "2px solid #1A1A18" : "1.5px solid #E8E6DF",
                cursor: "pointer",
                outline: "none",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Sizes */}
        <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
          {product.sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                padding: "4px 10px",
                borderRadius: 6,
                border: selectedSize === size ? "1.5px solid #1A1A18" : "1px solid #E8E6DF",
                background: selectedSize === size ? "#1A1A18" : "#FFFFFF",
                color: selectedSize === size ? "#FAFAF8" : "#888780",
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >{size}</button>
          ))}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAdd}
          disabled={!selectedSize}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: 8,
            border: "none",
            background: added ? "#3B6D11" : selectedSize ? "#1A1A18" : "#E8E6DF",
            color: selectedSize ? "#FAFAF8" : "#B4B2A9",
            fontSize: 14, fontWeight: 600,
            cursor: selectedSize ? "pointer" : "not-allowed",
            transition: "background 0.2s",
          }}
        >
          {added ? "✓ Added to Cart" : selectedSize ? "Add to Cart" : "Select a size"}
        </button>
      </div>
    </div>
  );
}
