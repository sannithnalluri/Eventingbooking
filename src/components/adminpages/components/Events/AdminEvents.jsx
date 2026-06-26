import React from 'react';
import { motion } from 'framer-motion';
import './AdminEvents.css';
import { useNavigate } from 'react-router-dom';

const AdminEvents = () => {
  const navigate = useNavigate();
  
  const managedEvents = [
    { id: "sunburn-arena-2024", title: "Sunburn Arena 2024", category: "Music", sales: "1,240 / 1,500", revenue: "₹18,58,760", status: "Active" },
    { id: "ipl-final-match-2024", title: "IPL Final Match", category: "Sports", sales: "3,100 / 3,100", revenue: "₹1,23,96,900", status: "Sold Out" },
    { id: "stand-up-comedy-show", title: "Stand-up Comedy Show", category: "Comedy", sales: "450 / 600", revenue: "₹3,59,550", status: "Active" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="adm-events-wrapper">
      <div className="adm-header-action-row">
        <div>
          <h2>Manage Events</h2>
          <p style={{ color: '#7c7789', marginTop: '0.2rem', fontSize: '0.9rem' }}>Click any event row to update configurations or delete records.</p>
        </div>
        <button 
          className="btn-adm-primary-add" 
          onClick={() => navigate('/admin/events/create')}
        >
          + Create Event
        </button>
      </div>

      <div className="adm-table-responsive-box">
        <table className="adm-data-table-element">
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Category</th>
              <th>Passes Allocation</th>
              <th>Gross Revenue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {managedEvents.map((ev) => (
              <tr 
                key={ev.id} 
                onClick={() => navigate(`/admin/events/${ev.id}`)} 
                style={{ cursor: 'pointer' }}
              >
                <td className="lbl-title" style={{ color: '#00f0ff' }}>{ev.title} ↗</td>
                <td><span className="lbl-category">{ev.category}</span></td>
                <td className="lbl-sales">{ev.sales}</td>
                <td className="lbl-revenue">{ev.revenue}</td>
                <td>
                  <span className={`adm-status-tag ${ev.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {ev.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AdminEvents;