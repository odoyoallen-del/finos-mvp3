import Link from 'next/link'

export default function Dashboard() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "#1e40af",
      color: "white",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "40px", marginBottom: "16px" }}>Dashboard</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>This is your dashboard page.</p>
      
      <Link 
        href="/" 
        style={{ 
          background: "white",
          color: "#1e40af",
          padding: "12px 28px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px"
        }}
      >
        Back to Home
      </Link>
    </div>
  )
}