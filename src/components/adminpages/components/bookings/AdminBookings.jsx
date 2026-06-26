import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import '../Events/AdminEvents.css'; // Reuses your core layout table rules

const AdminBookings = () => {
  // 1. Comprehensive Backend Mockup Array for All Active Ticket Sales Logs
  const allBookings = [
    { id: "TXN_98432", user: "Ananya Sharma", eventId: "sunburn-arena-2024", eventTitle: "Sunburn Arena 2024", total: "₹1,829", channel: "UPI", status: "Completed" },
    { id: "TXN_98433", user: "Rohan Malhotra", eventId: "ipl-final-match-2024", eventTitle: "IPL Final Match", total: "₹4,778", channel: "CARD", status: "Completed" },
    { id: "TXN_98434", user: "Priya Patel", eventId: "stand-up-comedy-show", eventTitle: "Stand-up Comedy Show", total: "₹1,002", channel: "UPI", status: "Completed" },
    { id: "TXN_98435", user: "Kabir Singh", eventId: "holi-festival-2024", eventTitle: "Holi Festival 2024", total: "₹648", channel: "UPI", status: "Failed" },
    { id: "TXN_98436", user: "Suresh Kumar", eventId: "sunburn-arena-2024", eventTitle: "Sunburn Arena 2024", total: "₹1,829", channel: "CARD", status: "Completed" },
    { id: "TXN_98437", user: "Vikram Malhotra", eventId: "ipl-final-match-2024", eventTitle: "IPL Final Match", total: "₹4,778", channel: "UPI", status: "Completed" },
    { id: "TXN_98438", user: "Aditi Rao", eventId: "stand-up-comedy-show", eventTitle: "Stand-up Comedy Show", total: "₹1,002", channel: "CARD", status: "Completed" },
    { id: "TXN_98439", user: "Neha Sharma", eventId: "holi-festival-2024", eventTitle: "Holi Festival 2024", total: "₹648", channel: "UPI", status: "Completed" }
  ];

  // 2. Control Filtering States
  const [selectedEventId, setSelectedEventId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 3. Extract Unique Event IDs and Labels Dynamically for the Dropdown Form
  const eventDropdownOptions = useMemo(() => {
    const uniqueEventsMap = new Map();
    allBookings.forEach(b => {
      if (!uniqueEventsMap.has(b.eventId)) {
        uniqueEventsMap.set(b.eventId, b.eventTitle);
      }
    });
    return Array.from(uniqueEventsMap.entries()).map(([id, title]) => ({ id, title }));
  }, [allBookings]);

  // 4. Combined Processing Logic for Dropdown Filters and Text Search Queries
  const filteredBookings = useMemo(() => {
    return allBookings.filter(booking => {
      const matchesDropdown = selectedEventId === 'all' || booking.eventId === selectedEventId;
      
      const cleanQuery = searchQuery.toLowerCase().trim();
      const matchesSearch = booking.user.toLowerCase().includes(cleanQuery) || 
                            booking.id.toLowerCase().includes(cleanQuery);

      return matchesDropdown && matchesSearch;
    });
  }, [selectedEventId, searchQuery, allBookings]);

  // 5. Aggregate metrics dynamically based on the filtered results list
  const activeMetrics = useMemo(() => {
    const successful = filteredBookings.filter(b => b.status === 'Completed');
    return {
      totalCount: filteredBookings.length,
      successCount: successful.length,
      failedCount: filteredBookings.length - successful.length
    };
  }, [filteredBookings]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.4 }}
    >
      {/* View Title Panel Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.5px' }}>Ticket Bookings</h2>
        <p style={{ color: '#7c7789', marginTop: '0.2rem', fontSize: '0.9rem' }}>Audit and search across customer purchase passes pipelines.</p>
      </div>

      {/* FILTER CONTROL DASHBOARD BAR */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
        background: '#0b0618',
        border: '1px solid rgba(255, 255, 255, 0.03)',
        padding: '1.5rem',
        borderRadius: '20px',
        marginBottom: '2rem'
      }}>
        {/* Dropdown Input Selector block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '280px' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7c7789', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Filter by Event Location</label>
          <select 
            value={selectedEventId}
            onChange={(e) => setSelectedEventId(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '0.8rem 1rem',
              borderRadius: '12px',
              color: '#ffffff',
              outline: 'none',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            <option value="all" style={{ background: '#0b0618' }}>🌐 All Active Events</option>
            {eventDropdownOptions.map(option => (
              <option key={option.id} value={option.id} style={{ background: '#0b0618' }}>
                🎬 {option.title}
              </option>
            ))}
          </select>
        </div>

        {/* Text Search Field input block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7c7789', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Search Ticket Invoices</label>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search by customer name, reference invoice ID (e.g. TXN_)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0.8rem 1rem 0.8rem 2.5rem',
                borderRadius: '12px',
                color: '#ffffff',
                outline: 'none',
                fontSize: '0.9rem',
                width: '100%',
                boxBoxing: 'border-box'
              }}
            />
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }}>🔍</span>
          </div>
        </div>
      </div>

      {/* MATCHING RESULTS PERFORMANCE SUB-COUNTER BAR */}
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.82rem', fontWeight: 600, color: '#7c7789' }}>
        <span>Showing <strong style={{ color: '#fff' }}>{activeMetrics.totalCount}</strong> entries found</span>
        <span>•</span>
        <span style={{ color: '#00ffa3' }}>{activeMetrics.successCount} Settled Successfully</span>
        {activeMetrics.failedCount > 0 && (
          <>
            <span>•</span>
            <span style={{ color: '#ff4a4a' }}>{activeMetrics.failedCount} Failed Requests</span>
          </>
        )}
      </div>

      {/* TABULAR SECURE DATABASE INTERFACE */}
      <div className="adm-table-responsive-box">
        {filteredBookings.length > 0 ? (
          <table className="adm-data-table-element">
            <thead>
              <tr>
                <th>Invoice Reference</th>
                <th>Customer Name</th>
                <th>Target Event Pass</th>
                <th>Gross Volume Captured</th>
                <th>Channel</th>
                <th>Gateway Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((log) => (
                <tr key={log.id}>
                  <td className="lbl-id" style={{ color: '#00f0ff', fontWeight: 600 }}>{log.id}</td>
                  <td className="lbl-title">{log.user}</td>
                  <td style={{ color: '#7c7789' }}>{log.eventTitle}</td>
                  <td style={{ fontWeight: 700 }}>{log.total}</td>
                  <td><span className="lbl-category" style={{ letterSpacing: '0.5px' }}>{log.channel}</span></td>
                  <td>
                    <span className={`adm-status-tag ${log.status === "Completed" ? "active" : "sold-out"}`}>
                      {log.status === "Completed" ? "SUCCESS" : "FAILED"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          /* Empty Search Fallback State Graphic */
          <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#7c7789' }}>
            <span style={{ fontSize: '2.5rem' }}>🎫</span>
            <h5 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginTop: '1rem' }}>No Matching Tickets Found</h5>
            <p style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>Try altering your search text query parameters or switching dropdown categories.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AdminBookings;