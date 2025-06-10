import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Location from './pages/Location';
import Products from './pages/Products';
import Rent from './pages/Rent';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Location':
        return <Location />;
      case 'Products':
        return <Products />;
      case 'Rent':
        return <Rent />;
      default:
        return <Home />;
    }
  };

  return (
    <CartProvider>
    <div className="min-h-screen bg-gray-100">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="p-6">{renderPage()}</div>
      <Footer/>
    </div>
    </CartProvider>
  );
}