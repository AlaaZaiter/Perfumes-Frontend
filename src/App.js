import React, { createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage'
import Contact from './Components/Contact';
import SellerDashboard from './Components/SellerDashboard';
import AdminDashboard from './Components/AdminDashboard';
import About from "./Components/About";
import ShopPage from './Components/ShopPage';
import Checkout from './Components/CheckoutPage';


import ProtectRoute from "./Components/ProtectRoute";
import Login  from './Pages/Login'
import Register from './Pages/Register';
function App() {
  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<Checkout />} />
       
        <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contact />} />
       
         <Route
          path="/admin"
          element={
            <ProtectRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectRoute>
          } 
        />
          <Route
          path="/seller"
          element={
            <ProtectRoute sellerOnly={true}>
              <SellerDashboard />
            </ProtectRoute>
          }
          />
        {/* here you can add fall back to 404 page for example */}
        
      </Routes>
    </BrowserRouter>   
     </div>
  )}


export default App;
