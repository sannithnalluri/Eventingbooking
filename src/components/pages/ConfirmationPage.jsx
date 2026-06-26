import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const { event, bookingId } = location.state || {
    event: { title: "Sunburn Arena 2024", location: "Jio World Garden, Mumbai", date: "25", month: "MAY" },
    bookingId: "EVTX-948210"
  };

  return (
    <motion.div 
      className="confirm-page-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="success-announcement-header">
        <div className="success-checkmark-circle">✓</div>
        <h2>Booking Confirmed!</h2>
        <p>Your transaction finished seamlessly. Show this digital pass voucher at the venue gates entrance layout.</p>
      </div>

      {/* --- REALISTIC RETRO PASS TICKET CONTAINER STUB --- */}
      <div className="digital-ticket-stub">
        
        {/* Left Side: Media Banner & Cover details art */}
        <div className="ticket-visual-brand-side">
          <div className="ticket-glowing-curtain-overlay"></div>
          <div className="ticket-brand-meta">
            <span className="live-pill-tag">✦ ADMIT ONE PASS</span>
            <h2>{event.title}</h2>
            <p className="ticket-loc">📍 {event.location}</p>
          </div>
          <div className="ticket-date-huge">
            <h3>{event.date}</h3>
            <p>{event.month}</p>
          </div>
        </div>

        {/* Right Side: Security verification credentials scan pass stub */}
        <div className="ticket-verification-bar-side">
          <div className="ticket-stub-notch top"></div>
          <div className="ticket-stub-notch bottom"></div>
          
          <div className="qr-wrapper-frame">
            {/* Minimalist simulated vector line barcode layout representation */}
            <div className="mock-qr-code">
              <div className="qr-corner-box top-left"></div>
              <div className="qr-corner-box top-right"></div>
              <div className="qr-corner-box bottom-left"></div>
              <div className="qr-inner-matrix-dots"></div>
            </div>
          </div>
          
          <div className="booking-meta-id">
            <span className="label">BOOKING ID</span>
            <span className="value-id">{bookingId}</span>
          </div>
          
          <div className="ticket-holder-meta">
            <span className="label">PASS TYPE</span>
            <span className="value">General Admission</span>
          </div>
        </div>

      </div>

      <div className="action-return-footer">
        <Link to="/" className="btn-back-dashboard">Return to Main Dashboard →</Link>
      </div>
    </motion.div>
  );
};

export default ConfirmationPage;