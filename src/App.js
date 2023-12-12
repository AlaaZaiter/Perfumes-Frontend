import React, { createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage'
import Contact from './Components/Contact';
import SellerDashboard from './Components/SellerDashboard';
import AdminDashboard from './Components/AdminDashboard';
import ProtectRoute from "./Components/ProtectRoute";
import Login  from './Pages/Login'
import Register from './Pages/Register';
function App() {
  return (
    <div>
<BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/"
          element={
            <ProtectRoute adminOnly={false}>
           <HomePage/>
            </ProtectRoute>
          }
          
        />
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
  );
  
}

export default App;
