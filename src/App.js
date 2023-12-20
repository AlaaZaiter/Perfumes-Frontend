
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage'
import Contact from './Components/Contact';
import SellerDashboard from './Components/SellerDashboard';
import AdminDashboard from './Components/AdminDashboard';
import About from "./Components/About";

import ShopPage from "./Pages/ShopPage"
import Checkout from "./Components/CheckoutPage";

import ProtectRoute from "./Components/ProtectRoute";
import Login  from './Pages/Login'
import Register from './Pages/Register';
function App() {
  return (
    <div>

 <Router>
        <Routes>
        <Route path="/checkout" element={<Checkout />} />
        
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path="/user" element={<User />} /> */}
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/" element={<HomePage/>} />
          <Route
            path="/admin"
            element={
               <ProtectRoute adminOnly={true}>
                <AdminDashboard />
               </ProtectRoute>
            }
          />
         <Route path="/Seller" element={<ProtectRoute sellerOnly={true}>
              <SellerDashboard />
            </ProtectRoute>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
     </div>
  )}


export default App;
