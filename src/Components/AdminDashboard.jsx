import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  '../AdminDashCSS/AdminDashboard.css'
import ViewPerfumes from '../AdminDashPages/ViewPerfumes.jsx';
import ViewSellers from '../AdminDashPages/Viewsellers.jsx';

function TrainerDashboard() {
  const [trainerData, setTrainerData] = useState(null);
  const [activePage, setActivePage] = useState("TrainerDashWelcome");
  const data="ViewPerfumes"

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
  };

  

  return (
    <div >
         <div>
            <img src="images/NavBar.png" alt="NavBar" className='NavBar'/>
        </div>
        <div className='SeparteSubContainerAndContent'>
      <div className='SideBarSubContainer'>
       
        
        <img src='images/PerfumeAdmin.png' className='TinyTechiesImg' />
        <div className="SideBarTitle">
          <p className='SideBarSubContainer-p'>Welcome</p>
          {trainerData && <p className='SideBarSubContainer-p'>Admin</p>}
        </div>
      <div className='SideBarContainer'>
      <div className='SideBarContainer'>
      <div className='SideBarButtons'>
      <a className="PagesLink"
           href='#ViewPerfumes' onClick={() => handleMenuClick("ViewPerfumes")}>
        <div className='SideBarButton'>
         
            Perfumes
         
        </div>
        </a>
      <a className="PagesLink"
            href='#ViewSellers'
            onClick={() => handleMenuClick("ViewSellers")}
          >
        <div className='SideBarButton'>
         
            Sellers
          
        </div>
        </a>
       
        <a className="PagesLink"
           href='#'
           onClick={handleLogout} >
        <div className='SideBarButton SideBarButtonLogout'>
            Logout
         
        </div>
        </a>
      </div>
      <div className='main-content'>
       
      </div>
    </div>
    </div>
        
      </div>
      <div className='selectedPage'>
      {activePage === "ViewPerfumes" && <ViewPerfumes Data={data} />}
      {activePage === "ViewSellers" && <ViewSellers />}
      
      </div>
      </div>
      
    </div>
  );
}

export default TrainerDashboard;
