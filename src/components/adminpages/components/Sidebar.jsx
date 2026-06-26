import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/authSlice';
import { motion } from 'framer-motion';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <aside className="adm-sidebar-panel">
      {/* Brand Branding Node */}
      <div className="adm-sidebar-logo">
        <span className="adm-logo-spark">✦</span> Eventix <span className="adm-badge-pro">PRO</span>
      </div>

      {/* Profile Summary Badge Block */}
      <div className="adm-sidebar-profile">
        <div className="adm-profile-circle">⚡</div>
        <div className="adm-profile-info">
          <h6>{user?.name || "System Admin"}</h6>
          <p>Global Controller</p>
        </div>
      </div>

      {/* Navigation Control Links Container */}
      <nav className="adm-sidebar-nav">
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "adm-nav-item active" : "adm-nav-item"}>
          <span className="adm-nav-icon">📊</span> Dashboard Metrics
        </NavLink>
        <NavLink to="/admin/events" className={({ isActive }) => isActive ? "adm-nav-item active" : "adm-nav-item"}>
          <span className="adm-nav-icon">📅</span> Manage Events
        </NavLink>
        <NavLink to="/admin/bookings" className={({ isActive }) => isActive ? "adm-nav-item active" : "adm-nav-item"}>
          <span className="adm-nav-icon">🎟️</span> Ticket Bookings
        </NavLink>
      </nav>

      {/* Exit Control Panel Button Action */}
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-adm-sidebar-logout"
        onClick={handleSignOut}
      >
        Exit Console
      </motion.button>
    </aside>
  );
};

export default AdminSidebar;