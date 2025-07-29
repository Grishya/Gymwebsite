

import { Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";
import Contacts from "./Components/Contacts";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import {Trainers} from "./Components/Trainers";
import { useEffect } from "react";



function App() {
    const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (performance.navigation.type === 1 && location.pathname !== '/') {
      navigate('/');
    }
  }, []);
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Trainers"element={<Trainers/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
      </Routes>
</>
     

  );
}

export default App;
