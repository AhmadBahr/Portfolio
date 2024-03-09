import React, {useEffect} from 'react';
import NavBar from '././Shared/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { About } from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Hobbies from './Components/Hobbies/Hobbies';
import TechStack from './Components/TechStack/TechStack';
import Contact from './Components/Contact/Contact';
import Experience from '././Components/Experience/Experience';
import Copyright from './Components/Copyrights/Copyright';
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Hobbies />
      <TechStack/>
      <Contact />
      <Copyright/>
    </div>
  );
}

export default App;
