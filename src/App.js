import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import TechStack from './Components/TechStack/TechStack';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/techstack" element={<TechStack />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
