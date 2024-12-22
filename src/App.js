import React from "react";
import './App.css';
import WholePage from "./compenent/WholePage";
import { Route, Routes } from "react-router-dom";




const App = () => {
  
  
  return (

    <div className="container">
        
       
      <Routes >

        <Route path="/" element={<WholePage />} />
        
        
      </Routes>
   
      
    </div>
  );
};

export default App;
