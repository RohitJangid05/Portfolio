import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './style.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import ProjectDetail from './components/Projectdetails/ProjectDetails';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? savedTheme === 'true' : false;
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`w-full ${isDarkMode ? 'dark' : 'light'}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div className="sm:px-20 md:px-40 lg:px-40">
          <Routes>
            <Route path="/" element={<><Home isDarkMode={isDarkMode} /><Skills /><Projects /><About /><Contact /></>} />
            <Route path="/project/:id" element={<ProjectDetail />} /> 
          </Routes>
        </div>
        <hr />
        <div className="sm:px-20 md:px-40 lg:px-40">
          <Footer isDarkMode={isDarkMode}/>
        </div>
      </div>
    </Router>
  );
};

export default App;
