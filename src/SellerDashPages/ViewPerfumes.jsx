import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import   '../AdminDashCSS/Viewperfumes.css'
import AddPerfume from "./AddPerfume";

const ViewPerfumes = (props) => {
  const data = props.Data;

  const [activePage,setActivePage] =useState("ViewPerfumes");

 
    const switchToAddPerfume=()=>{
        setActivePage("AddPerfume");

    }
    
  return (
    <div>
   
        <button className="AddPerfmueButton" onClick={switchToAddPerfume}>Add Perfume</button>
        {activePage === "AddPerfume" && <AddPerfume />}
        {activePage === "ViewPerfumes" && <div className="bgcardPerfumes">
        <div className="tableContainer">
            <table border="1" className="tbcourse">
            <tr>
                <th>Perfume Name</th>
                <th>Perfume Description</th>
                <th>Perfume Price</th>
                <th>Category</th>
                <th>Discount</th>
                <th>Perfume Image</th>
                <th>Stock</th>
                <th>edit</th>
                <th>Delete</th>
              </tr>
            </table>
        </div>
        
        </div>}

        
    </div>
  );
};

export default ViewPerfumes;
