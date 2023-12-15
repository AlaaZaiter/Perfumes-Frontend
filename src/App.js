import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./Components/HomePage";
import NotFound from "./pages/NotFound";
import ShopPage from "./pages/ShopPage";
import User from "./userProfile/Users";
import AdminDashboard from "./Components/AdminDashboard";
import ProtectRoute from "./pages/ProtectRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoAccess from "./pages/NoAccess";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/noAccess" element={<NoAccess/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shoppage" element={<ShopPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={
              <ProtectRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectRoute>
            }
          />
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
