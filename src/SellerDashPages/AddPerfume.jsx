import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../AdminDashCSS/AdminDashboard.css";
import"../AdminDashCSS/Viewperfumes.css"
const AddPerfume = () => {

  return (
    <div className="bgcardPerfumes">
        <form className="AddPerfumeForm">
        <p>Perfume Name</p>
      <input type="text" placeholder="Perfume Name"/>
      <p>Perfume Price</p>
      <input type="text" placeholder="Perfume Price"/>
      <p>Category</p>
      <input type="text" placeholder="Perfume Category"/>
      <p>Discount</p>
      <input type="text" placeholder="Perfume Discount"/>
      <p>Perfume Image</p>
      <input type="file" placeholder="Perfume Image"/>
      <p>Perfume Description</p>
      <textarea
           placeholder="Perfume Description"
           ></textarea>      <p>Perfume Stock</p>
      <input type="text" placeholder="Perfume Stock"/>
      <button>save</button>
      </form>
      
    </div>
  );
};

export default AddPerfume;
