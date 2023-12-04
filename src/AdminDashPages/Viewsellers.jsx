import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import   '../AdminDashCSS/Viewperfumes.css'
import AddSeller from "./AddSeller";

const ViewSellers = () => {
  const [activePage,setActivePage] =useState("ViewSellers");

 
  const switchToAddSeller=()=>{
      setActivePage("AddSeller");

  }



  return (
    <div>
        <button className="AddPerfmueButton" onClick={switchToAddSeller}>Add Seller</button>
        {activePage === "AddSeller" && <AddSeller />}

        {activePage === "ViewSellers" && <div className="bgcardPerfumes">
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
        
        </div>}
    </div>
  );
};

export default ViewSellers;
