import React from "react";

export default function App() {
  const items = [
    { name: "Filet Mignon", price: 2432.00 },
    { name: "Lobster Bisque", price: 1024.00 },
    { name: "Evian Water", price: 320.00 }
  ];
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.14;
  const service = subtotal * 0.12;
  const total = subtotal + tax + service;

  return (
    <div style={{
      fontFamily: "Inter, system-ui, sans-serif",
      background: "linear-gradient(to right, #ece9e6, #ffffff)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "2.5rem",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "600px"
      }}>
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "2rem", color: "#333" }}>
          Table 12 – Receipt
        </h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item, idx) => (
            <li key={idx} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>{item.name}</span>
              <span>EGP {item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <hr style={{ margin: "1rem 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Subtotal</span>
          <span>EGP {subtotal.toFixed(2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Tax (14%)</span>
          <span>EGP {tax.toFixed(2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Service Charge (12%)</span>
          <span>EGP {service.toFixed(2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", marginTop: "1rem", fontSize: "1.2rem" }}>
          <span>Total</span>
          <span>EGP {total.toFixed(2)}</span>
        </div>
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <button style={btn}>Pay Full</button>
          <button style={btn}>Split Bill</button>
          <button style={btn}>Select Items</button>
        </div>
      </div>
    </div>
  );
}

const btn = {
  padding: "0.75rem",
  background: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "1rem",
  cursor: "pointer"
};

