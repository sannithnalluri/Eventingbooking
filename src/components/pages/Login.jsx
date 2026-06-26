import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import './Login.css';
import { loginSuccess } from '../../store/authSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Mock Payload modeling successful database verification return
    const mockAuthData = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eventixSessionToken",
      user: { name: "Ananya Sharma", email: email, avatarUrl: null }
    };
    // Example payload structure your slice expects upon successful login:
const mockUserPayload = {
  token: "eyJhbGciOi...",
  user: {
    name: "Ananya Sharma",
    email: "ananya@domain.com",
    role: "user" // Or change to "admin" to test the Admin Route path!
  }
};

    dispatch(loginSuccess(mockUserPayload));
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
          <h3>Welcome Back <span>✦</span></h3>
          <p>Login to manage your passes and access upcoming events.</p>
        </div>

        <form onSubmit={handleLoginSubmit} className="auth-core-form">
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
            <div className="label-row-split">
              <label>Password</label>
              <span className="auth-inline-link">Forgot Password?</span>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <motion.button 
            type="submit" 
            className="btn-auth-action"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </form>

        <div className="auth-social-divider">
          <div className="divider-line"></div>
          <span>Or continue with</span>
          <div className="divider-line"></div>
        </div>

        <div className="auth-social-grid">
          <button className="btn-social-oauth"><span>🌐</span> Google</button>
          <button className="btn-social-oauth"><span>🍏</span> Apple</button>
        </div>

        <p className="auth-switch-footer">
          New to Eventix? <Link to="/signup">Create an account</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;