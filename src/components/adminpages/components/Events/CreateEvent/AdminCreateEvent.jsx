import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminCreateEvent = () => {
  const navigate = useNavigate();
  
  // Initialize state modeling exact entity schemas
  const [formData, setFormData] = useState({
    title: '', category: 'Music', description: '', price: '', originalPrice: '',
    dateDay: '', dateMonth: 'JAN', startTime: '7:00 PM Onwards',
    locationName: '', city: '', heroImageUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API payload entity creation pipeline injection simulation (POST /api/events)
    console.log("Submitting Entity Payload to Backend Stack:", formData);
    navigate('/admin/events');
  };

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="booking-page-wrapper">
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="card-category" style={{ background: '#bd00ff', color: '#fff' }}>INVENTORY CONSOLE</span>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.5rem' }}>Create New Event</h2>
      </div>

      <div className="description-card-block" style={{ maxWidth: '800px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Event Title</label>
              <input type="text" name="title" required value={formData.title} onChange={handleInputChange} style={inputStyle} placeholder="e.g. Tomorrowland Global Tour" />
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
            <textarea name="description" rows="4" required value={formData.description} onChange={handleInputChange} style={{ ...inputStyle, resize: 'none' }} placeholder="Provide detailed event information structure..." />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Base Pricing (INR)</label>
              <input type="number" name="price" required value={formData.price} onChange={handleInputChange} style={inputStyle} placeholder="1499" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Original Strikethrough Price</label>
              <input type="number" name="originalPrice" required value={formData.originalPrice} onChange={handleInputChange} style={inputStyle} placeholder="2499" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Performance Kickoff Hour</label>
              <input type="text" name="startTime" required value={formData.startTime} onChange={handleInputChange} style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Date Numeric Day</label>
              <input type="text" name="dateDay" maxLength="2" required value={formData.dateDay} onChange={handleInputChange} style={inputStyle} placeholder="25" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Date Month</label>
              <select name="dateMonth" value={formData.dateMonth} onChange={handleInputChange} style={inputStyle}>
                {['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'].map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>City Location Hub</label>
              <input type="text" name="city" required value={formData.city} onChange={handleInputChange} style={inputStyle} placeholder="Mumbai, India" />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Venue Landmark Title</label>
            <input type="text" name="locationName" required value={formData.locationName} onChange={handleInputChange} style={inputStyle} placeholder="Jio World Garden" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#7c7789', fontSize: '0.85rem' }}>Display Asset Hero Image URL</label>
            <input type="url" name="heroImageUrl" required value={formData.heroImageUrl} onChange={handleInputChange} style={inputStyle} placeholder="https://domain-assets.com/images/cover.jpg" />
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
            <button type="submit" className="btn-adm-primary-add" style={{ padding: '1rem 2.5rem' }}>Publish Live Stage</button>
            <button type="button" className="btn-view-all" style={{ margin: 0, padding: '1rem 2.5rem' }} onClick={() => navigate('/admin/events')}>Cancel</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

// Common Input Field Style Utility Object matching login design variants
const inputStyle = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  padding: '1rem',
  borderRadius: '12px',
  color: '#ffffff',
  outline: 'none',
  fontSize: '0.95rem'
};

export default AdminCreateEvent;