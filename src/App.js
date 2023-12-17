
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage'
import Contact from './Components/Contact';
import SellerDashboard from './Components/SellerDashboard';
import AdminDashboard from './Components/AdminDashboard';
import About from "./Components/About";
import ShopPage from "./pages/ShopPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
 <Router>
        <Routes>
        
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
              // <ProtectRoute adminOnly={true}>
                <AdminDashboard />
              // </ProtectRoute>
            }
          />
         <Route path="/Seller" element={<SellerDashboard/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
     </div>
  )}

export default App;
