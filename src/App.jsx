import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Landing from "./Landing";
import Contact from './Contact';
import Login from './Login';


const App = () => {
  

  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/login" element={<Contact />} />
        <Route path="/contact" element={<Login />} />
      </Routes>
    </>
    
  );
};

export default App;
