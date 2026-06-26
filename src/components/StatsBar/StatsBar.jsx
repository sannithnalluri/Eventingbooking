import React from 'react';
import { motion } from 'framer-motion';

const StatsBar = () => {
  const statsData = [
    { id: 1, value: "10K+", label: "Events", icon: "🎟️", color: "pink" },
    { id: 2, value: "500K+", label: "Happy Users", icon: "👥", color: "purple" },
    { id: 3, value: "50+", label: "Countries", icon: "🌐", color: "blue" },
    { id: 4, value: "4.8", label: "User Rating", icon: "⭐", color: "orange" },
    { id: 5, value: "24/7", label: "Customer Support", icon: "🎧", color: "magenta" },
    { id: 6, value: "100%", label: "Secure Booking", icon: "🛡️", color: "cyan" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div 
      className="stats-bar-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {statsData.map((stat) => (
        <motion.div 
          key={stat.id} 
          className="stats-bar-item"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className={`stats-icon-circle ${stat.color}`}>
            <span className="stat-icon-emoji">{stat.icon}</span>
          </div>
          <div className="stats-bar-text">
            <h4>{stat.value}</h4>
            <p>{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsBar;