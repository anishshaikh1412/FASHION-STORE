import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const info = [
    { icon: "📍", label: "Address", value: " super fashion,  Anand 388001" },
    { icon: "📞", label: "Phone", value: "+91 7485935278" },
    { icon: "✉️", label: "Email", value: "hello@SuperFashio.in" },
    { icon: "🕐", label: "Hours", value: "Mon–Sat, 10am – 7pm IST" },
  ];

  return (
    <section id="contact" style={{ background: "#1A1A18", padding: "80px 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 4,
            color: "#D85A30", textTransform: "uppercase", margin: "0 0 12px",
          }}>Get in Touch</p>
          <h2 style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 700, color: "#FAFAF8",
            margin: "0 0 12px",
          }}>We'd love to hear from you.</h2>
          <p style={{ color: "#888780", fontSize: 16, margin: 0 }}>
            Questions, styling advice, or just a hello — we're here.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 48,
          alignItems: "start",
        }}>
          {/* Info */}
          <div>
            {info.map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: 16,
                padding: "20px 0",
                borderBottom: i < info.length - 1 ? "1px solid #2C2C2A" : "none",
              }}>
                <span style={{ fontSize: 24, minWidth: 32 }}>{item.icon}</span>
                <div>
                  <p style={{ margin: "0 0 3px", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#888780", textTransform: "uppercase" }}>{item.label}</p>
                  <p style={{ margin: 0, fontSize: 15, color: "#D3D1C7" }}>{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ marginTop: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 14px" }}>Follow Us</p>
              <div style={{ display: "flex", gap: 10 }}>
                {["Instagram", "Pinterest", "Twitter"].map(s => (
                  <a key={s} href="#" style={{
                    padding: "7px 14px",
                    border: "1px solid #444441",
                    borderRadius: 20,
                    color: "#D3D1C7",
                    fontSize: 12, fontWeight: 500,
                    textDecoration: "none",
                  }}>{s}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: "#252522",
            borderRadius: 16,
            padding: "36px",
            border: "1px solid #2C2C2A",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Georgia', serif", color: "#FAFAF8", fontSize: 24, margin: "0 0 10px" }}>Message Sent!</h3>
                <p style={{ color: "#888780", margin: "0 0 24px" }}>We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  style={{
                    padding: "10px 24px", borderRadius: 8,
                    border: "1px solid #444441",
                    background: "transparent",
                    color: "#D3D1C7", fontSize: 14, cursor: "pointer",
                  }}>Send another</button>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[
                    { key: "name", label: "Full Name", placeholder: "Aarav Sharma" },
                    { key: "email", label: "Email", placeholder: "aarav@email.com" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#888780", marginBottom: 6, letterSpacing: 1 }}>{f.label.toUpperCase()}</label>
                      <input
                        value={form[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        style={{
                          width: "100%", padding: "10px 12px",
                          background: "#1A1A18",
                          border: "1px solid #444441",
                          borderRadius: 8, color: "#FAFAF8",
                          fontSize: 14, outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#888780", marginBottom: 6, letterSpacing: 1 }}>SUBJECT</label>
                  <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    style={{
                      width: "100%", padding: "10px 12px",
                      background: "#1A1A18",
                      border: "1px solid #444441",
                      borderRadius: 8, color: form.subject ? "#FAFAF8" : "#888780",
                      fontSize: 14, outline: "none",
                    }}>
                    <option value="">Select a topic</option>
                    <option>Order & Delivery</option>
                    <option>Returns & Exchange</option>
                    <option>Styling Advice</option>
                    <option>Wholesale Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#888780", marginBottom: 6, letterSpacing: 1 }}>MESSAGE</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    style={{
                      width: "100%", padding: "10px 12px",
                      background: "#1A1A18",
                      border: "1px solid #444441",
                      borderRadius: 8, color: "#FAFAF8",
                      fontSize: 14, outline: "none",
                      resize: "vertical", boxSizing: "border-box",
                    }}
                  />
                </div>

                <button onClick={handleSubmit}
                  disabled={!form.name || !form.email || !form.message}
                  style={{
                    width: "100%", padding: "13px",
                    borderRadius: 8, border: "none",
                    background: form.name && form.email && form.message ? "#D85A30" : "#2C2C2A",
                    color: form.name && form.email && form.message ? "#FFFFFF" : "#888780",
                    fontSize: 15, fontWeight: 700,
                    cursor: form.name && form.email && form.message ? "pointer" : "not-allowed",
                    transition: "background 0.2s",
                  }}>Send Message →</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
