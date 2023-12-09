import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Sidebar from "./components/Sidebar";
import Patient from "./components/patient";
import Appointment from "./components/appointment";
 
import "./App.css";

const App = () => {
  

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
      
            <div className="w-1/5 fixed sidebar dark:bg-secondary-dark-bg bg-slate-200">
              <Sidebar />
            </div>
         
          <div className="w-full flex flex-col">
          
            <div className="flex justify-end">
            <div className={"w-4/5" ? "w-4/5" : "w-full"}>
            <div className="flex flex-1">
            <Routes>
                   <Route path="/" element={<Patient />} />
                   <Route path="/Dashboard" element={<Patient />} />
                 
                   <Route path="/Appointment" element={<Appointment />} />
                   <Route path="/Patient" element={<Patient />} />
                   
                 </Routes>
              </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
