
import Header from "./Header";
import Category from "./Category";
import BestSaller from "./BestSaller.jsx";
import FooterAndOurClients from "./FooterAndOurClients";
import "../ComponentCSS/HomePageContainer.css";
import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Contact from "./Contact.jsx";


function HomePage() {
    return (
      <>
        <Header/>
        <Category/>
        <BestSaller/>
        <FooterAndOurClients/>
      </>
    );
  }
  
  export default HomePage;
  