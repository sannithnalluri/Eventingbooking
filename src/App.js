import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
// Public User Modules
import Home from "./components/pages/Homepage";
import EventBooking from "./components/pages/EventBooking";
import PaymentPage from "./components/pages/PaymentPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";


// Immersive Admin Dashboard Modules


// Guard Rails
import { UserProtectedRoute, AdminRoute } from "./components/ProtectedRoute";
import AdminDashboard from "./components/adminpages/AdminDashboard";
import AdminLayout from "./components/adminpages/AdminLayout";
import AdminEvents from "./components/adminpages/components/Events/AdminEvents";
import LoginPage from "./components/pages/Login";
import SignupPage from "./components/pages/Signup";
import AdminBookings from "./components/adminpages/components/bookings/AdminBookings";
import AdminCreateEvent from "./components/adminpages/components/Events/CreateEvent/AdminCreateEvent";
import AdminEventDetails from "./components/adminpages/components/Events/UpdateEvent/AdminEventDetails";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        {/* ==================== 1. MAIN CLIENT PUBLIC VIEWPORT LAYOUT ==================== */}
        <Route path="/*" element={
          <div className="app-container">
              <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
          
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
            <Route path="event/:id" element={<EventBooking />} />
              <Route path="payment" element={<UserProtectedRoute><PaymentPage /></UserProtectedRoute>} />
              <Route path="confirmation" element={<UserProtectedRoute><ConfirmationPage /></UserProtectedRoute>} />
            </Routes>
            <Footer />
          </div>
        } />

        {/* ==================== 2. SECURE ADMIN PRIVATE WORKSPACE OUTLET ==================== */}
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          {/* Default entry path index matching '/admin' mapping */}
          <Route index element={<AdminDashboard />} /> 
          <Route path="dashboard" element={<AdminDashboard />} /> 
          <Route path="events" element={<AdminEvents />} />
          <Route path="events/create" element={<AdminCreateEvent />} />
          <Route path="events/:id" element={<AdminEventDetails />} />
          <Route path="bookings" element={<AdminBookings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;