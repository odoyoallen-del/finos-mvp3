export default function Home() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center",
      background: "linear-gradient(135deg, #0f172a, #1e40af)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "10px", fontWeight: "bold" }}>
        FINOS MVP
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px", opacity: 0.9 }}>
        Welcome to your Financial Open Source MVP
      </p>
      
      <div style={{ 
        background: "rgba(255, 255, 255, 0.08)", 
        padding: "30px", 
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        marginBottom: "25px",
        minWidth: "280px"
      }}>
        <h2 style={{ marginTop: 0, fontSize: "20px" }}>Status</h2>
        <p>✓ Next.js is running</p>
        <p>✓ Ready for development</p>
      </div>

      <a href="/dashboard" style={{
        background: "white",
        color: "#1e40af",
        padding: "12px 28px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px",
        transition: "transform 0.2s"
      }}>
        Go to Dashboard →
      </a>
    </div>
  );
}