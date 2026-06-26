import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    explore: ['All Events', 'Music', 'Sports', 'Comedy', 'Festivals', 'Workshops'],
    company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners', 'Contact Us'],
    support: ['Help Center', 'Terms & Conditions', 'Privacy Policy', 'Refund Policy', 'FAQs', 'Sitemap']
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer 
      className="footer-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* --- NEWSLETTER TOP BAR --- */}
      <motion.div className="newsletter-card" variants={itemVariants}>
        <div className="newsletter-left">
          <div className="newsletter-icon-wrapper">
            <span className="mail-icon">🔮</span>
          </div>
          <div className="newsletter-text">
            <h3>Stay in the Loop!</h3>
            <p>Subscribe to get the latest events, offers & exclusive updates straight to your inbox.</p>
          </div>
        </div>
        <div className="newsletter-right">
          <div className="newsletter-input-group">
            <input type="email" placeholder="Enter your email address" />
            <motion.button 
              className="btn-subscribe"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe <span>🚀</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* --- FOOTER CONTENT LINKS GRID --- */}
      <div className="footer-grid">
        {/* Brand Description Column */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <span className="logo-star">✦</span> Eventix
          </div>
          <p className="footer-tagline">Discover. Book. Enjoy.</p>
          <p className="brand-description">
            Your ultimate destination for discovering amazing events and creating unforgettable memories.
          </p>
          <div className="social-links-row">
            {['f', '📸', '𝕏', '📺', 'in'].map((social, i) => (
              <motion.a 
                key={i} 
                href={`#social-${i}`} 
                className="social-circle-icon"
                whileHover={{ y: -3, backgroundColor: 'rgba(189, 0, 255, 0.2)', borderColor: '#bd00ff' }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Dynamic Nav Columns */}
        <div className="footer-links-col">
          <h4>Explore</h4>
          <ul>
            {footerLinks.explore.map((link, idx) => (
              <li key={idx}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            {footerLinks.company.map((link, idx) => (
              <li key={idx}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Support</h4>
          <ul>
            {footerLinks.support.map((link, idx) => (
              <li key={idx}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        {/* App Store Badge Columns */}
        <div className="footer-apps-col">
          <h4>Get the App</h4>
          <p>Download our app for a better experience on the go.</p>
          <div className="store-badges-wrapper">
            <motion.a href="#google-play" className="store-badge" whileHover={{ scale: 1.03 }}>
              <div className="badge-icon">🤖</div>
              <div className="badge-text">
                <span className="badge-sub">GET IT ON</span>
                <span className="badge-main">Google Play</span>
              </div>
            </motion.a>
            <motion.a href="#app-store" className="store-badge" whileHover={{ scale: 1.03 }}>
              <div className="badge-icon">🍏</div>
              <div className="badge-text">
                <span className="badge-sub">Download on the</span>
                <span className="badge-main">App Store</span>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="footer-contact-col">
          <h4>Contact Us</h4>
          <div className="contact-info-list">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>support@eventix.com</span>
            </div>
            <div className="contact-item align-top">
              <span className="contact-icon">📍</span>
              <span>123 Event Street,<br />Mumbai, India</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;