import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PaymentPage.css';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  const event = location.state?.selectedEvent || {
    title: "Sunburn Arena 2024",
    price: "1,499",
    location: "Jio World Garden, Mumbai",
    date: "25",
    month: "MAY"
  };

  const basePrice = parseInt(event.price.replace(/,/g, ''));
  const platformFee = 60;
  const gst = Math.round(basePrice * 0.18);
  const totalAmount = basePrice + platformFee + gst;

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate standard checking window transaction delay
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/confirmation', { state: { event, bookingId: "EVTX-" + Math.floor(100000 + Math.random() * 900000) } });
    }, 2000);
  };

  return (
    <motion.div 
      className="payment-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="payment-title">Secure Checkout</h2>
      
      <div className="payment-grid">
        {/* Left Options Form Selection Block */}
        <div className="payment-methods-card">
          <h3>Select Payment Method</h3>
          
          <div className="method-selector-tabs">
            <button 
              className={`method-tab ${paymentMethod === 'upi' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('upi')}
            >
              📱 UPI (GPay, PhonePe)
            </button>
            <button 
              className={`method-tab ${paymentMethod === 'card' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              💳 Credit / Debit Card
            </button>
          </div>

          <form onSubmit={handlePaymentSubmit} className="payment-form">
            {paymentMethod === 'upi' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="form-group">
                <label>Enter UPI ID</label>
                <input type="text" placeholder="username@okhdfcbank" required />
                <p className="input-hint">A payment request will be sent to your UPI application.</p>
              </motion.div>
            )}

            {paymentMethod === 'card' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card-fields">
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input type="text" placeholder="Ananya Sharma" required />
                </div>
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" maxLength="16" placeholder="4532 •••• •••• ••••" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" maxLength="5" required />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="password" placeholder="•••" maxLength="3" required />
                  </div>
                </div>
              </motion.div>
            )}

            <button type="submit" className="btn-pay-now" disabled={isProcessing}>
              {isProcessing ? "Processing Security Protocol..." : `Pay ₹${totalAmount.toLocaleString()}`}
            </button>
          </form>
        </div>

        {/* Right Summary Breakdowns Element */}
        <div className="order-summary-card">
          <h3>Order Summary</h3>
          <div className="summary-event-details">
            <h4>{event.title}</h4>
            <p>📍 {event.location}</p>
            <p>📅 {event.date} {event.month} • 7:00 PM Onwards</p>
          </div>
          
          <div className="billing-breakdown">
            <div className="billing-row"><span>Ticket Price (1x)</span><span>₹{basePrice.toLocaleString()}</span></div>
            <div className="billing-row"><span>Platform Fee</span><span>₹{platformFee}</span></div>
            <div className="billing-row"><span>Integrated GST (18%)</span><span>₹{gst}</span></div>
            <div className="billing-row total"><span>Total Amount</span><span>₹{totalAmount.toLocaleString()}</span></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentPage;