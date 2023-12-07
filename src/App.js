import React, { createContext, useContext } from 'react';
import HomePage from "./Components/HomePage";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;
