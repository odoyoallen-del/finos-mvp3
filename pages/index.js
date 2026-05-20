import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1e40af, #3b82f6)",
      color: "white",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>FINOS MVP</h1>
      <div style={{
        background: "rgba(255, 255, 255, 0.1)",
        padding: "30px",
        borderRadius: "12px",
        backdropFilter: "blur(10px)",
        maxWidth: "600px",
        minWidth: "280px"
      }}>
        <h2 style={{ marginTop: 0, fontSize: "20px" }}>Status</h2>
        <p>Next.js is running</p>
        <p>Ready for development</p>
      </div>

      <Link href="/dashboard" style={{
        background: "white",
        color: "#1e40af",
        padding: "12px 28px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px",
        transition: "transform 0.2s"
      }}>
        Go to Dashboard
      </Link>
    </div>
  )
}