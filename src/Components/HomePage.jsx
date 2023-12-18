
import Header from "./Header";
import Category from "./Category";
import "../ComponentCSS/HomePageContainer.css";
import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'; 
import FooterAndOurClients from "./FooterAndOurClients.jsx";


function HomePage() {
    return (
      <div className="HomePageContainer">
        <Header/>
        <Category/>
        <FooterAndOurClients/>
        </div>
    )}
    export default HomePage;