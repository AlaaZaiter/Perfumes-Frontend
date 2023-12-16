
import Header from "./Header";
import Category from "./Category";
import BestSaller from "./Bestsaller.jsx"
import "../ComponentCSS/HomePageContainer.css";
import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'; 
import FooterAndOurClients from "./FooterAndOurClients.jsx";


function HomePage() {
    return (
      <div className="HomePageContainer">
        <Header/>
        <Category/>
        <BestSaller/>
        <FooterAndOurClients/>
        </div>
    )}
    export default HomePage;

  
