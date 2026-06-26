import React from 'react';
import { Outlet } from 'react-router-dom';
import './AdminLayout.css';
import AdminSidebar from './components/Sidebar';

const AdminLayout = () => {
  return (
    <div className="adm-layout-shell">
      {/* Structural Sidebar Navigation Column Component */}
      <AdminSidebar />

      {/* Dynamic Content Frame Viewport Area */}
      <main className="adm-main-viewport">
        <div className="adm-viewport-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;