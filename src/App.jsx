import React from "react";

export default function App() {
  const items = [
    { name: "Filet Mignon", price: 190 },
    { name: "Lobster Bisque", price: 80 },
    { name: "Evian Water", price: 25 }
  ];
  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#f3f2ed", minHeight: "100vh", padding: "2rem" }}>
      <div style={{
        background: "#fff",
        maxWidth: "500px",
        margin: "0 auto",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        padding: "2rem"
      }}>
        <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>
          Table 12 – Receipt
        </h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item, idx) => (
            <li key={idx} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>{item.name}</span>
              <span>SAR {item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <hr style={{ margin: "1rem 0" }} />
        <h2 style={{ textAlign: "right" }}>Total: SAR {total.toFixed(2)}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
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
  background: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  cursor: "pointer"
};

