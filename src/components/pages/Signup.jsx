import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { loginSuccess } from '../../store/authSlice';
import './Signup.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Directly login users natively post-registration
    const mockAuthData = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eventixSessionToken",
      user: { name: name, email: email, avatarUrl: null }
    };

    dispatch(loginSuccess(mockAuthData));
    navigate('/');
  };

  return (
    <div className="auth-view-container">
      <motion.div 
        className="auth-card-panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div className="auth-card-header">
          <h3>Join Eventix <span>✦</span></h3>
          <p>Discover and secure premium concert entry passes worldwide.</p>
        </div>

        <form onSubmit={handleSignupSubmit} className="auth-core-form">
          <div className="auth-field-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Ananya Sharma" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>

          <div className="auth-field-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@domain.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="auth-field-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Minimum 8 characters" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="auth-checkbox-row">
            <input type="checkbox" id="terms-accept" required />
            <label htmlFor="terms-accept">I agree to the Terms of Service & Privacy Policy.</label>
          </div>

          <motion.button 
            type="submit" 
            className="btn-auth-action"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Create Account
          </motion.button>
        </form>

        <div className="auth-social-divider">
          <div className="divider-line"></div>
          <span>Or register with</span>
          <div className="divider-line"></div>
        </div>

        <div className="auth-social-grid">
          <button className="btn-social-oauth"><span>🌐</span> Google</button>
          <button className="btn-social-oauth"><span>🍏</span> Apple</button>
        </div>

        <p className="auth-switch-footer">
          Already registered? <Link to="/login">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;