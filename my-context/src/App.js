import React from "react";
import { useState } from "react";
import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyContext } from "./MyContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
        <div className="bgcolor">
        <ul className="pages">
        <p>Re:educate</p>
        <li className="links">
          <a  href="/">Home</a> 
        </li>
        <li>
          <a  href="/about">About</a> 
        </li>       
        <button onClick={toggleDarkMode}>Dark mode</button>
        </ul> 
        </div>
     <MyContext.Provider value={darkMode}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
      </MyContext.Provider> 
    </div>
  );
}

export default App;
