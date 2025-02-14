//import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <main>
          <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default Layout;