import React from 'react';
import { motion } from 'framer-motion';
import './AdminDashboard.css'; // Import the CSS file for styling

const AdminDashboard = () => {
  const metricCards = [
    { title: "Total Platform Revenue", value: "₹14,84,390", sub: "+18.2% vs last month", icon: "💰", color: "cyan" },
    { title: "Ticket Sales Count", value: "3,421 Passes", sub: "84% overall sell-through", icon: "🎟️", color: "purple" },
    { title: "Active Event Arenas", value: "42 Live Stages", sub: "Across 12 major hub cities", icon: "🏟️", color: "pink" }
  ];

  return (
    <motion.div 
      className="adm-metrics-wrapper"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Heading Block */}
      <div className="adm-page-header">
        <span className="adm-meta-pill">PLATFORM CONTROL TELEMETRY</span>
        <h2>Dashboard Metrics</h2>
        <p>Real-time analytics across booking volume trends and infrastructure gateways.</p>
      </div>

      {/* High-Level Analytical Summary Cards Grid */}
      <div className="adm-metrics-grid">
        {metricCards.map((card, idx) => (
          <div key={idx} className="adm-metric-card-block">
            <div className="adm-card-top-row">
              <p className="adm-card-title-lbl">{card.title}</p>
              <span className={`adm-card-emoji-box ${card.color}`}>{card.icon}</span>
            </div>
            <h3>{card.value}</h3>
            <p className="adm-card-sub-lbl">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* System Gateway Status Section */}
      <div className="adm-status-banner-card">
        <div className="adm-status-left">
          <div className="adm-pulse-dot"></div>
          <div>
            <h5>Payment Node Gateways Operating at Nominal Capacity</h5>
            <p>API synchronization response latency holding steady at 42ms baseline average.</p>
          </div>
        </div>
        <span className="adm-pill-verified">SECURE SECURE</span>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;