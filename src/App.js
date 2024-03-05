import React from 'react';
import NavBar from '././Shared/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { About } from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import TechStack from './Components/TechStack/TechStack';
import Contact from './Components/Contact/Contact';
import Footer from '././Shared/Footer/Footer';
import Experience from '././Components/Experience/Experience';
import Copyright from './Components/Copyrights/Copyright';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Skills />
      <TechStack/>
      <Contact />
      <Footer />
      <Copyright/>
    </div>
  );
}

export default App;
