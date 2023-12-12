import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


import "../AdminDashCSS/AdminDashboard.css";
import"../AdminDashCSS/Viewperfumes.css"
const AddSeller = () => {

  return (
    <div className="bgcardPerfumes">
        <form className="AddPerfumeForm">
        <p>Full Name</p>
      <input type="text" placeholder="Full Name"/>
      <p>Email</p>
      <input type="text" placeholder="Email"/>
      <p>Password</p>
      <input type="password" placeholder="Password"/>
      <p>Address</p>
      <input type="text" placeholder="Address"/>
      
      <button>save</button>
      </form>
      
    </div>
  );
};

export default AddSeller;
