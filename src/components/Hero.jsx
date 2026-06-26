import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero.png'; 

const Hero = ({onExploreClick}) => {
  // Stagger wrapper variant for the text links/stats
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section className="hero-section">
      <motion.div 
        className="hero-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-tag" variants={itemVariants}>
          <span className="tag-icon">🎉</span> Discover. Book. Enjoy.
        </motion.div>
        
        <motion.h1 className="hero-title" variants={itemVariants}>
          Experience Events <br />
          Like <span className="gradient-text">Never Before</span>
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Discover amazing events, book your tickets securely, and create unforgettable memories.
        </motion.p>
        
        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExploreClick} /* Trigger expand and scroll */
          >
            Explore Events <span className="arrow">→</span>
          </motion.button>
          

          <motion.button 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
          >
            <span className="play-icon">▶</span> Watch Video
          </motion.button>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Events</p>
          </div>
          <div className="stat-item">
            <h3>500K+</h3>
            <p>Happy Users</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Countries</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-right">
        {/* Subtle background ambient glowing pulsing look */}
        <motion.div 
          className="glow-overlay-lines"
          animate={{ 
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.03, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={heroBg} alt="Concert Crowd" className="hero-main-img" />
          
          {/* Floating live concert card sliding up playfully */}
          <motion.div 
            className="floating-live-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
            whileHover={{ y: -5 }}
          >
            <div className="live-badge">🎧 Live Concert</div>
            <h4>Music Festival 2024</h4>
            <p>23 May • Mumbai</p>
            <div className="attendees">
              <div className="avatar-group">
                <span className="avatar"></span>
                <span className="avatar"></span>
                <span className="avatar"></span>
              </div>
              <span className="attendee-count">+2k</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;