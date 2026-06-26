import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EventBooking.css';

const EventBooking = () => {
  const { id } = useParams();
  const locationState = useLocation().state;
  const navigate = useNavigate();
  
  // Fallback default details matched to the exact "ChatGPT Image Jun 26, 2026, 08_18_33 PM.png" specification if data isn't inherited
  const event = locationState || {
    id: id || "sunburn-2024",
    title: "Sunburn Arena 2024",
    category: "Music Festival",
    price: "1,499",
    location: "Jio World Garden, Mumbai, India",
    date: "25",
    month: "MAY"
  };

  // Timer Countdown state simulation (02d : 14h : 36m : 28s)
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 36, seconds: 28 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  
  const handleBookingRedirect = () => {
    navigate('/payment',
         { state: { selectedEvent: event } });
  };

  return (
    <motion.div 
      className="booking-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Breadcrumb Navigation Line */}
      <div className="breadcrumb-bar">
        Home <span>&gt;</span> Events <span>&gt;</span> Music <span>&gt;</span> <span className="active">{event.title}</span>
      </div>

      {/* Main Container Divided into Left (Details) and Right (Ticket Panel) */}
      <div className="booking-layout-grid">
        
        {/* LEFT COMPARTMENT */}
        <div className="layout-left-column">
          
          {/* Main Visual Frame Header */}
          <div className="main-media-frame">
            <div className="video-thumbnail-placeholder">
              <div className="play-button-ring">▶</div>
            </div>
            {/* Gallery Thumbnail Strips underneath */}
            <div className="media-thumbnail-strip">
              <div className="thumb active"></div>
              <div className="thumb"></div>
              <div className="thumb"></div>
              <div className="thumb"></div>
            </div>
          </div>

          {/* Sub Navigation Anchor Tabs */}
          <div className="navigation-tabs-row">
            <span className="tab-item active">📋 Overview</span>
            <span className="tab-item">👥 Artists</span>
            <span className="tab-item">📅 Schedule</span>
            <span className="tab-item">📍 Venue</span>
            <span className="tab-item">🖼️ Gallery</span>
            <span className="tab-item">⭐ Reviews (2.4K)</span>
            <span className="tab-item">❓ FAQ</span>
          </div>

          {/* Descriptive Content Panels */}
          <div className="info-cards-row">
            <div className="description-card-block">
              <h3>About the Event</h3>
              <p>
                {event.title} is more than just a music festival—it's an experience! Witness mind-blowing performances 
                by international and Indian artists across multiple stages with state-of-the-art sound, lights, and production.
              </p>
              <ul className="perks-bullet-grid">
                <li>✔️ Top International & Local DJs</li>
                <li>✔️ Delicious Food & Beverages</li>
                <li>✔️ Immersive Visuals & Production</li>
                <li>✔️ Exclusive Merchandise</li>
                <li>✔️ Multiple Stages & Experiences</li>
                <li>✔️ After Parties & More!</li>
              </ul>
            </div>

            <div className="highlights-card-block">
              <h3>Event Highlights</h3>
              <ul className="highlights-list">
                <li>⚡ Massive Crowd & Energy</li>
                <li>⚙️ World-class Production</li>
                <li>🎵 Multiple Music Genres</li>
                <li>🥂 VIP Lounges</li>
                <li>🛡️ Secure & Well Managed</li>
                <li>✨ Unforgettable Memories</li>
              </ul>
            </div>
          </div>

          {/* Performers Carousel Row Section */}
          <div className="performers-carousel-section">
            <div className="carousel-header">
              <h3>Top Artists Performing</h3>
              <span className="link-view-artists">View All Artists →</span>
            </div>
            <div className="artists-profile-flex">
              {['Alan Walker', 'Martin Garrix', 'DJ Snake', 'Armin van Buuren', 'Zedd'].map((artist, idx) => (
                <div key={idx} className="artist-avatar-card">
                  <div className="avatar-circle-frame"></div>
                  <h5>{artist} <span>✓</span></h5>
                  <p>Headliner</p>
                </div>
              ))}
            </div>
          </div>

          {/* Urgency Alert Bottom Strip Bar */}
          <div className="urgency-alert-bar">
            <span>🚨</span> <strong>Don't miss out!</strong> Tickets are selling fast. Book now and be a part of the experience!
          </div>
        </div>

        {/* RIGHT COMPARTMENT (TICKET SELECTION ENGINE PANEL) */}
        <div className="layout-right-column">
          <div className="sticky-ticket-panel-card">
            
            {/* Ticket Header & Counter */}
            <div className="panel-ticket-tier-header">
              <div className="tier-meta">
                <span className="fire-tag">🔥 Early Bird</span>
                <p className="limit-offer-text">Limited Time Offer</p>
              </div>
              <div className="countdown-display-block">
                <div className="time-unit"><span>{String(timeLeft.days).padStart(2, '0')}</span><p>Days</p></div>
                <div className="time-unit"><span>{String(timeLeft.hours).padStart(2, '0')}</span><p>Hours</p></div>
                <div className="time-unit"><span>{String(timeLeft.minutes).padStart(2, '0')}</span><p>Mins</p></div>
                <div className="time-unit"><span>{String(timeLeft.seconds).padStart(2, '0')}</span><p>Secs</p></div>
              </div>
            </div>

            {/* Pricing Section Display */}
            <div className="panel-pricing-matrix">
              <span className="label-start-from">Start From</span>
              <div className="price-row">
                <h2>₹{event.price}</h2>
                <span className="crossed-original-price">₹2,499</span>
                <div className="discount-pill-tag">40% OFF</div>
              </div>
              <p className="tax-notice-text">✓ Inclusive of all taxes</p>
            </div>

            {/* Main Action Form Button Trigger */}
            <motion.button 
              className="btn-main-booking-action"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBookingRedirect}
            >
              Book Tickets 🎟️
            </motion.button>

            {/* Dynamic Conversions Live Alert Tag */}
            <div className="live-social-proof-alert">
              ⚡ <strong>1.2K</strong> people booked this event in last 24 hours
            </div>

            {/* Trust Assurances Guarantee Row Checklist */}
            <div className="trust-assurances-container">
              <div className="assurance-row-item">
                <span className="icon-shield">🛡️</span>
                <div className="item-text">
                  <h6>Secure Booking</h6>
                  <p>100% Secure Payments</p>
                </div>
              </div>
              <div className="assurance-row-item">
                <span className="icon-shield">⚡</span>
                <div className="item-text">
                  <h6>Instant Confirmation</h6>
                  <p>Get instant e-ticket</p>
                </div>
              </div>
              <div className="assurance-row-item">
                <span className="icon-shield">🔄</span>
                <div className="item-text">
                  <h6>Easy Refunds</h6>
                  <p>Refund policy applicable</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default EventBooking;