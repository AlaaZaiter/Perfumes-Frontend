import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import   '../AdminDashCSS/Viewperfumes.css'

const ViewSellers = () => {
  const [activePage, setActivePage] = useState("TrainerDashWelcome");

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
  };



  return (
    <div>
        <button className="AddPerfmueButton">Add Seller</button>
        <div className="bgcardPerfumes">
        <div className="tableContainer">
            <table border="1" className="tbcourse">
            <tr>
                <th>Full Name</th>
                <th>Password</th>
                <th>Email</th>
                <th>address</th>
                <th>edit</th>
                <th>Delete</th>
              </tr>
            </table>
        </div>
        
        </div>
    </div>
  );
};

export default ViewSellers;
