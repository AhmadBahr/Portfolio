import React from 'react';
import './TechStack.css';

import csharpIcon from '../../assets/c# logo.png';
import htmlIcon from '../../assets/html logo.png';
import cssIcon from '../../assets/css logo.jpeg';
import aspnetIcon from '../../assets/asp logo.jpeg';
import bootstrapIcon from '../../assets/boostrap logo.jpg';
import chakraIcon from '../../assets/chakra ui logo.png';
import javascriptIcon from '../../assets/javascript logo.png';
import reactIcon from '../../assets/react logo.png';
import reduxIcon from '../../assets/redux.png';
import sassIcon from '../../assets/png-transparent-sass-npm-cascading-style-sheets-node-js-sass-purple-violet-text-thumbnail.png';
import tailwindIcon from '../../assets/download.jpg';
import nodejsIcon from '../../assets/images.png';
import materialuiIcon from '../../assets/download.png';
import expressIcon from '../../assets/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg';
import mongodbIcon from '../../assets/Untitled.png';
import mysqlIcon from '../../assets/Untitled1.jpg';
import swaggerIcon from '../../assets/images.jpg';
import jestIcon from '../../assets/images1.jpg';
import postmanIcon from '../../assets/postman logo.png';
import ssmsIcon from '../../assets/1_KTDZHTVaVbvbyhIf2PmBAw.png';
import postgresqlIcon from '../../assets/Untitled2.jpg';
import typescriptIcon from '../../assets/images (1).png';
import gitIcon from '../../assets/download (1).png';
import reactTestingLibraryIcon from '../../assets/rtk.png';
import socketioIcon from '../../assets/1024px-Socket-io.svg.jpg';
import reactNativeIcon from '../../assets/images2.jpg';
import stripeIcon from '../../assets/Untitled.jpg';
import jwtIcon from '../../assets/images (2).png';
import websokcketsIcon from '../../assets/images3.jpg';
import neuralNetworksIcon from '../../assets/Untitled3.jpg';
import machineLearningIcon from '../../assets/Untitled4.jpg';
import figmaIcon from '../../assets/download (2).png';
import jiraIcon from '../../assets/download3.jpg';
import jqueryIcon from '../../assets/download (3).png';
import kaboomIcon from '../../assets/626a4d26872df226062635.jpg';
import expoIcon from '../../assets/expo.jpg';
import electronIcon from '../../assets/images4.png';
import framerIcon from '../../assets/imageeee.jpg'
import aosIcon from '../../assets/images (3).png'
import gsapIcon from '../../assets/cropped_image.png'
import cypressIcon from '../../assets/images10.jpeg'
import vitestIcon from '../../assets/images(10).png'
import playwriteIcon from '../../assets/1632954819046.jpeg'
import viteIcon from '../../assets/vite.svg'
import vercelIcon from '../../assets/images (16).png'
import npmIcon from '../../assets/images (17).png'
import chromeIcon from '../../assets/Untitled-12-removebg-preview.png'

const techStack = [
  { name: 'C#', icon: csharpIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'ASP.NET Core Web API', icon: aspnetIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'Chakra UI', icon: chakraIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Redux Toolkit', icon: reduxIcon },
  { name: 'SASS', icon: sassIcon },
  { name: 'Tailwind', icon: tailwindIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Material UI', icon: materialuiIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Swagger', icon: swaggerIcon },
  { name: 'Jest', icon: jestIcon },
  { name: 'Postman', icon: postmanIcon },
  { name: 'SSMS', icon: ssmsIcon },
  { name: 'PostgreSQL', icon: postgresqlIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'React Testing Library', icon: reactTestingLibraryIcon },
  { name: 'Socket.io', icon: socketioIcon },
  { name: 'React Native', icon: reactNativeIcon },
  { name: 'Stripe', icon: stripeIcon },
  { name: 'JWT', icon: jwtIcon },
  { name: 'WebSockets', icon: websokcketsIcon },
  { name: 'Neural Networks', icon: neuralNetworksIcon },
  { name: 'Machine Learning', icon: machineLearningIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'Jira', icon: jiraIcon },
  { name: 'jQuery', icon: jqueryIcon },
  { name: 'Kaboom.js', icon: kaboomIcon },
  { name: 'Expo', icon: expoIcon },
  { name: 'Electron.js', icon: electronIcon },
  { name: 'Framer Motion', icon: framerIcon },
  { name: 'AOS (Animate On Scroll)', icon: aosIcon },
  { name: 'GSAP', icon: gsapIcon },
  { name: 'Cypress', icon: cypressIcon },
  { name: 'Playwright', icon: playwriteIcon },
  { name: 'Vitest', icon: vitestIcon },
  { name: 'Vite', icon: viteIcon },
  { name: 'Vercel', icon: vercelIcon },
  { name: 'npm', icon: npmIcon },
  { name: 'Chrome Extension Developer', icon: chromeIcon },

];

const TechStack = () => {
  return (
    <div id="tech-stack" className="tech-stack-container">
      <h2 className="tech-stack-title">Tech Stack</h2>
      <p className="tech-stack-subtitle">Technologies I've Been Working With</p>
      <div className="grid-container">
        {techStack.map((tech) => (
          <div className="grid-item" key={tech.name}>
            <img
              src={tech.icon}
              alt={tech.name}
              title={tech.name}
              className="icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
