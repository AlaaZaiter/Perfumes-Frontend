import React, { createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage'
import Contact from './Components/Contact';
import SellerDashboard from './Components/SellerDashboard';
import AdminDashboard from './Components/AdminDashboard';
import About from "./Components/About";
import ShopPage from './Components/ShopPage';
import Checkout from './Components/CheckoutPage';


function App() {
  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>   
     </div>
  )}


export default App;
