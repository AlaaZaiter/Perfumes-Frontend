
import Header from "./Header";
import Category from "./Category";
import BestSaller from "./BestSaller.jsx";
import "../ComponentCSS/HomePageContainer.css";
import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';


function HomePage() {
    return (
      <div className="HomePageContainer">
        <Header/>
        <Category/>
        <BestSaller/>
        </div>
    )}
    export default HomePage;