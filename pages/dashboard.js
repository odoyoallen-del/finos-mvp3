export default function Dashboard() {
  const wallets = [
    { name: "Daily Wallet", amount: "KES 450.00", sub: "Today: 45% used", bg: "#1e293b", subColor: "#94a3b8" },
    { name: "Emergency Wallet", amount: "KES 25,000.00", sub: "Locked", bg: "#3b1f1f", subColor: "#f87171", icon: "🔒" },
    { name: "Savings Wallet", amount: "KES 78,500.00", sub: "+8.4%", bg: "#1e293b", subColor: "#22c55e" },
    { name: "Trip Wallet", amount: "KES 52,000.00", sub: "66% of goal", bg: "#1e293b", subColor: "#94a3b8", progress: 66 },
    { name: "Business Wallet", amount: "KES 35,600.00", sub: "This month", bg: "#2d1b3d", subColor: "#94a3b8" },
    { name: "School Fees Wallet", amount: "KES 24,300.00", sub: "Next due in 20 days", bg: "#3d2a1b", subColor: "#94a3b8" },
  ];

  const quickActions = [
    { label: "Send", icon: "→" },
    { label: "Receive", icon: "↓" },
    { label: "Scan QR", icon: "▣" },
    { label: "Pay Bill", icon: "📄" },
    { label: "More", icon: "•••" },
  ];

  return (
    <div style={{ 
      minHeight: "100vh",
      background: "#0a0e1a",
      color: "white",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      paddingBottom: "80px"
    }}>
      
      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div>
            <div style={{ fontSize: "14px", color: "#94a3b8" }}>Welcome back,</div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>John Doe 👋</div>
          </div>
          <div style={{ display: "flex", gap: "15px", fontSize: "22px" }}>
            <span style={{ position: "relative" }}>🔔<span style={{ 
              position: "absolute", 
              top: "-2px", 
              right: "-2px", 
              width: "8px", 
              height: "8px", 
              background: "#ef4444", 
              borderRadius: "50%" 
            }}></span></span>
            ⚙️
          </div>
        </div>

        <div style={{ 
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "25px"
        }}>
          <div style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "5px" }}>Total Net Worth</div>
          <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "5px" }}>KES 245,850.50</div>
          <div style={{ color: "#22c55e", fontSize: "14px" }}>+12.5% this month</div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
            <h3 style={{ margin: 0, fontSize: "18px" }}>Wallets Overview</h3>
            <span style={{ color: "#3b82f6", fontSize: "14px", cursor: "pointer" }}>See All</span>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {wallets.map((w, i) => (
              <div key={i} style={{ 
                background: w.bg,
                padding: "15px",
                borderRadius: "12px",
                border: "1px solid #1e293b"
              }}>
                <div style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "5px" }}>
                  {w.name} {w.icon}
                </div>
                <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>{w.amount}</div>
                <div style={{ fontSize: "12px", color: w.subColor }}>{w.sub}</div>
                {w.progress && (
                  <div style={{ 
                    height: "4px", 
                    background: "#1e293b", 
                    borderRadius: "2px", 
                    marginTop: "8px",
                    overflow: "hidden"
                  }}>
                    <div style={{ width: `${w.progress}%`, height: "100%", background: "#3b82f6" }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ marginBottom: "15px", fontSize: "18px" }}>Quick Actions</h3>
          <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            {quickActions.map((action, i) => (
              <div key={i} style={{ cursor: "pointer" }}>
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  background: "#1e293b", 
                  borderRadius: "50%", 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                  fontSize: "20px"
                }}>
                  {action.icon}
                </div>
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>{action.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          background: "#1e293b",
          padding: "15px",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{ 
              width: "36px", 
              height: "36px", 
              background: "#3b82f6", 
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>AI</div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "4px" }}>AI Financial Insight</div>
              <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                You spent 20% less on entertainment this week. Great job! 🎉
              </div>
            </div>
          </div>
          <div style={{ fontSize: "20px", color: "#94a3b8" }}>→</div>
        </div>
      </div>

      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#0f172a",
        borderTop: "1px solid #1e293b",
        display: "flex",
        justifyContent: "space-around",
        padding: "12px 0",
        maxWidth: "500px",
        margin: "0 auto"
      }}>
        {[
          { icon: "🏠", label: "Home", active: true },
          { icon: "💳", label: "Wallets", active: false },
          { icon: "📊", label: "Budget", active: false },
          { icon: "🎯", label: "Goals", active: false },
          { icon: "☰", label: "More", active: false },
        ].map((item, i) => (
          <div key={i} style={{ 
            textAlign: "center", 
            color: item.active ? "#3b82f6" : "#64748b",
            cursor: "pointer"
          }}>
            <div style={{ fontSize: "22px", marginBottom: "2px" }}>{item.icon}</div>
            <div style={{ fontSize: "11px" }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}