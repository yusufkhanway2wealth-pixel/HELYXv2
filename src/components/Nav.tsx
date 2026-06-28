import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(16px)",
        background: "rgba(5,8,22,0.75)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 24px"
        }}
      >
        <h2
          style={{
            color: "white",
            fontWeight: 700,
            letterSpacing: "1px",
            cursor: "pointer"
          }}
        >
          HELYX
        </h2>

        <div
          style={{
            display: window.innerWidth > 768 ? "flex" : "none",
            gap: "28px",
            alignItems: "center"
          }}
        >
          <a href="#layers">Layers</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#copilot">Copilot</a>

          <button
            style={{
              background: "transparent",
              color: "#6EE7FF",
              border: "1px solid rgba(110,231,255,.4)",
              padding: "10px 18px",
              borderRadius: "999px",
              cursor: "pointer"
            }}
          >
            Launch Terminal
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "transparent",
            color: "white",
            border: "none",
            fontSize: "22px",
            cursor: "pointer"
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "20px",
            background: "#050816"
          }}
        >
          <a href="#layers">Layers</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#copilot">Copilot</a>
        </div>
      )}
    </nav>
  );
}
