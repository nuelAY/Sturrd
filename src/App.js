import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'

function App() {
  return (
     <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
