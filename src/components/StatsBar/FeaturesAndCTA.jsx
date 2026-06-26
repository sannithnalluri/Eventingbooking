import React from 'react';
import { motion } from 'framer-motion';
import ctaBg from '../../assets/hero.png'; // Place your background image snippet here

const FeaturesAndCTA = () => {
  const features = [
    { title: "Secure Booking", desc: "Your safety is our priority always.", icon: "🛡️", color: "pink" },
    { title: "Instant Tickets", desc: "Get your tickets instantly.", icon: "🎫", color: "purple" },
    { title: "Best Prices", desc: "We offer unbeatable prices.", icon: "🏷️", color: "blue" },
    { title: "24/7 Support", desc: "We're here to help you anytime.", icon: "🎧", color: "cyan" }
  ];

  return (
    <div className="features-cta-grid">
      {/* Left: Why Join Card */}
      <motion.div 
        className="why-join-card"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="why-join-glow-line"></div>
        <h3 className="card-heading">Why Join <span className="purple-text">Eventix?</span></h3>
        
        <div className="features-subgrid">
          {features.map((feat, index) => (
            <motion.div 
              key={index} 
              className="feature-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <div className={`feature-icon ${feat.color}`}>{feat.icon}</div>
              <h5>{feat.title}</h5>
              <p>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right: CTA Banner */}
      <motion.div 
        className="cta-banner"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <img src={ctaBg} alt="Concert Crowd Ambient Background" className="cta-bg-image" />
        <div className="cta-overlay-glow"></div>
        
        <div className="cta-content">
          <h2>Ready to Make <br /><span className="gradient-glow-text">Unforgettable</span> Memories?</h2>
          <p>Join millions of people and experience events like never before.</p>
          
          <div className="cta-actions">
            <motion.button 
              className="btn-cta-explore"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(189, 0, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Events Now →
            </motion.button>
            <a href="#learn" className="cta-link-video">
              <span>🛈</span> Learn more about Eventix
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesAndCTA;