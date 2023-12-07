
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
      <div className="HomePageContainer">
        <Header/>
        <Category/>
        <BestSaller/>
        <FooterAndOurClients/>
        <Routes>
        <div>
        <Route path="/contact" component={Contact} />
        </div>
      </Routes>
      </div>
    );
  }
  
  export default HomePage;
  