import React, { createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage";
import Contact from './Components/Contact';
function App() {
  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>   
     </div>
  );
}

export default App;
