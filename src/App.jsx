import { useState, useMemo } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Work from "./components/Work";
import ProductCard from "./components/ProductCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { products, categories } from "./data/products";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const key = `${product.id}-${product.selectedSize}-${product.selectedColor}`;
      const existing = prev.find(i => `${i.id}-${i.selectedSize}-${i.selectedColor}` === key);
      if (existing) {
        return prev.map(i =>
          `${i.id}-${i.selectedSize}-${i.selectedColor}` === key ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemove = (item) => {
    setCartItems(prev =>
      prev.filter(i => !(i.id === item.id && i.selectedSize === item.selectedSize && i.selectedColor === item.selectedColor))
    );
  };

  const handleUpdateQty = (item, newQty) => {
    if (newQty < 1) { handleRemove(item); return; }
    setCartItems(prev =>
      prev.map(i =>
        i.id === item.id && i.selectedSize === item.selectedSize && i.selectedColor === item.selectedColor
          ? { ...i, qty: newQty } : i
      )
    );
  };

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "all") list = list.filter(p => p.category === activeCategory);
    if (searchQuery) list = list.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "sale") list = [...list].filter(p => p.originalPrice);
    return list;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF8", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* 1. Header */}
      <Header
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />

      {/* 2. Slider / Hero */}
      <Slider />

      {/* 3. Work / Lookbook */}
      <Work />

      {/* 4. Shop Section */}
      <section id="shop" style={{ background: "#FFFFFF", padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 4,
              color: "#D85A30", textTransform: "uppercase", margin: "0 0 12px",
            }}>The Edit</p>
            <h2 style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700, color: "#1A1A18",
              margin: "0 0 12px",
            }}>Shop all products.</h2>
            <p style={{ color: "#888780", fontSize: 15, margin: 0 }}>
              {filtered.length} piece{filtered.length !== 1 ? "s" : ""} in your selection
            </p>
          </div>

          {/* Filter bar */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 36, flexWrap: "wrap", gap: 12,
          }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                  padding: "7px 18px",
                  borderRadius: 20,
                  border: activeCategory === cat ? "1.5px solid #1A1A18" : "1px solid #E8E6DF",
                  background: activeCategory === cat ? "#1A1A18" : "#FFFFFF",
                  color: activeCategory === cat ? "#FAFAF8" : "#888780",
                  fontSize: 13, fontWeight: 500,
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}>{cat === "all" ? "All" : cat}</button>
              ))}
            </div>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{
              padding: "7px 14px",
              border: "1px solid #E8E6DF",
              borderRadius: 8,
              fontSize: 13, color: "#888780",
              background: "#FFFFFF", cursor: "pointer",
            }}>
              <option value="default">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="sale">On Sale</option>
            </select>
          </div>

          {/* Products grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#888780" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#1A1A18", margin: "0 0 8px" }}>No products found</p>
              <p style={{ margin: 0 }}>Try a different search or category</p>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 24,
            }}>
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Contact */}
      <Contact />

      {/* 6. Footer */}
      <Footer />

      {/* Cart sidebar */}
      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemove}
          onUpdateQty={handleUpdateQty}
        />
      )}
    </div>
  );
}
