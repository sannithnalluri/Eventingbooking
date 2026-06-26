import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminEventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock array simulating data pull (GET /api/events/:id)
  const [formData, setFormData] = useState({
    title: 'Sunburn Arena 2024', category: 'Music', description: 'Witness mind-blowing performances by international and Indian artists across multiple stages.', price: '1499', originalPrice: '2499',
    dateDay: '25', dateMonth: 'MAY', startTime: '7:00 PM Onwards',
    locationName: 'Jio World Garden', city: 'Mumbai, India', heroImageUrl: 'https://images.eventix.com/sunburn_main.jpg'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Simulate API update execution (PUT /api/events/:id)
    console.log(`Updating Entity Reference ID: ${id}`, formData);
    navigate('/admin/events');
  };

  const handleDelete = () => {
    if (window.confirm("Are you absolutely sure you want to permanently delete this event from the platform inventory?")) {
      // Simulate API deletion execution (DELETE /api/events/:id)
      console.log(`Deleting Entity Reference ID: ${id}`);
      navigate('/admin/events');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="booking-page-wrapper">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <span className="card-category" style={{ background: '#00f0ff', color: '#000' }}>EDIT CONSOLE MAPPING</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.5rem' }}>Configure Event Specifications</h2>
        </div>
        <button 
          type="button" 
          onClick={handleDelete}
          style={{ background: 'rgba(255, 74, 74, 0.1)', border: '1px solid #ff4a4a', color: '#ff4a4a', padding: '0.8rem 1.5rem', borderRadius: '12px', fontWeight: 700, cursor: 'pointer' }}
        >
          🗑️ Delete Stage Record
        </button>
      </div>

      {/* REUSING CREATE LAYOUT FORM STRUCTURE MAP */}
      <div className="description-card-block" style={{ maxWidth: '800px' }}>
        <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Event Title</label>
              <input type="text" name="title" required value={formData.title} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange} style={inputStyle}>
                <option value="Music">Music</option>
                <option value="Sports">Sports</option>
                <option value="Comedy">Comedy</option>
                <option value="Festival">Festival</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>About Overview Description</label>
            <textarea name="description" rows="4" required value={formData.description} onChange={handleInputChange} style={{ ...inputStyle, resize: 'none' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Base Pricing (INR)</label>
              <input type="number" name="price" required value={formData.price} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Original Strikethrough Price</label>
              <input type="number" name="originalPrice" required value={formData.originalPrice} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Performance Kickoff Hour</label>
              <input type="text" name="startTime" required value={formData.startTime} onChange={handleInputChange} style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Date Numeric Day</label>
              <input type="text" name="dateDay" maxLength="2" required value={formData.dateDay} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Date Month</label>
              <select name="dateMonth" value={formData.dateMonth} onChange={handleInputChange} style={inputStyle}>
                {['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'].map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>City Location Hub</label>
              <input type="text" name="city" required value={formData.city} onChange={handleInputChange} style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Venue Landmark Title</label>
            <input type="text" name="locationName" required value={formData.locationName} onChange={handleInputChange} style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Display Asset Hero Image URL</label>
            <input type="url" name="heroImageUrl" required value={formData.heroImageUrl} onChange={handleInputChange} style={inputStyle} />
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
            <button type="submit" className="btn-adm-primary-add" style={{ padding: '1rem 2.5rem' }}>Save Modified Changes</button>
            <button type="button" className="btn-view-all" style={{ margin: 0, padding: '1rem 2.5rem' }} onClick={() => navigate('/admin/events')}>Cancel</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

const inputStyle = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  padding: '1rem',
  borderRadius: '12px',
  color: '#ffffff',
  outline: 'none',
  fontSize: '0.95rem'
};

export default AdminEventDetails;