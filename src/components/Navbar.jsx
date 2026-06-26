import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice'; // Adjust path based on your exact file structure
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  
  // Read state parameters directly from your secure Redux slice storage
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Search state management variables
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Core mockup list tracking client-facing events for live search checks
  const sampleEvents = [
    { id: "sunburn-arena-2024", title: "Sunburn Arena 2024", category: "Music", price: "1,499", location: "Mumbai, India", date: "25", month: "MAY" },
    { id: "ipl-final-match-2024", title: "IPL Final Match", category: "Sports", price: "3,999", location: "Ahmedabad, India", date: "08", month: "JUN" },
    { id: "stand-up-comedy-show", title: "Stand-up Comedy Show", category: "Comedy", price: "799", location: "Bengaluru, India", date: "15", month: "JUN" },
    { id: "holi-festival-2024", title: "Holi Festival 2024", category: "Festival", price: "499", location: "Mathura, India", date: "22", month: "JUN" }
  ];

  // Dynamic filter array mapping text variations to query configurations
  const filteredResults = sampleEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Clean outside-click hook monitoring search tree visibility
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (eventItem) => {
    setShowDropdown(false);
    setSearchQuery('');
    // Route forward using explicit contextual state updates
    navigate(`/event/${eventItem.id}`, { state: eventItem });
  };

  const handleLogoutAction = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* Brand Identity Logo */}
      <div className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <span className="logo-icon">✦</span> Eventix
      </div>

      {/* Primary Context Navigation Links */}
      <div className="nav-links">
        <Link to="/" className="active">Home</Link>
        <a href="#events">Events</a>
        <a href="#categories">Categories</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Right Side Control Bar Meta Actions */}
      <div className="nav-actions">
        {/* 🔍 CORE INTERACTIVE SEARCH ELEMENT CONTAINER */}
        <div className="search-box" ref={dropdownRef} style={{ position: 'relative' }}>
          <input 
            type="text" 
            placeholder="Search events, artists, venues..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowDropdown(e.target.value.length > 0);
            }}
            onFocus={() => searchQuery.length > 0 && setShowDropdown(true)}
          />
          <span className="search-icon">🔍</span>

          {/* DYNAMIC SEARCH ENGINE DRAWER VIEWPORT */}
          {showDropdown && (
            <div style={{
              position: 'absolute',
              top: '46px',
              left: 0,
              width: '100%',
              background: 'var(--card-bg, #0b0618)',
              border: '1px solid var(--search-border, rgba(255,255,255,0.08))',
              borderRadius: '14px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              zIndex: 99999,
              maxHeight: '280px',
              overflowY: 'auto',
              padding: '0.5rem'
            }}>
              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleResultClick(item)}
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'background 0.2s',
                      color: 'var(--text-primary, #ffffff)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted, #7c7789)', marginTop: '0.15rem' }}>📍 {item.location.split(',')[0]}</div>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#bd00ff', fontWeight: 700, background: 'rgba(189,0,255,0.08)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                      {item.category}
                    </span>
                  </div>
                ))
              ) : (
                <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted, #7c7789)', fontSize: '0.85rem' }}>
                  No matches found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Dynamic Context Render Guard Block */}
        {isAuthenticated && user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            {/* Heart Icon / Saved Passes */}
            <span style={{ fontSize: '1.2rem', cursor: 'pointer', opacity: 0.85 }}>❤️</span>

            {/* Notification Alert Ring Bell Capsule Wrapper */}
            <div style={{ position: 'relative', cursor: 'pointer', fontSize: '1.2rem' }}>
              <span>🔔</span>
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: '#ff007a',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: 800,
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                3
              </span>
            </div>

            {/* Profile Greeting Module matching exact image mockup parameters */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#23193a',
                border: '1px solid #bd00ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem'
              }}>
                👩🏽‍💼
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Hi, {user.name.split(' ')[0]}</span>
            </div>

            {/* Admin Dashboard shortcut visible only to logged-in administrators */}
            {user.role === 'admin' && (
              <button 
                className="btn-view-all" 
                style={{ margin: 0, padding: '0.5rem 1rem' }}
                onClick={() => navigate('/admin/dashboard')}
              >
                Dashboard
              </button>
            )}

            {/* Sign Out Action Button */}
            <button 
              className="btn-signin" 
              style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              onClick={handleLogoutAction}
            >
              Sign Out
            </button>
          </div>
        ) : (
          /* Render simple default standard layout button fields if logged out */
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="btn-signin" onClick={() => navigate('/login')}>Sign In</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;