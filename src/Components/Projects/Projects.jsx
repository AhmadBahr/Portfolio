import React from 'react';
import './Projects.css';
import icon_6 from '../../assets/2241285 1.svg';
import icon_7 from '../../assets/depositphotos_574826670-stock-illustration-shopping-cart-simple-design 1.svg';
import icon_8 from '../../assets/ecommerce-website-icon-vector 1.svg';
import icon_9 from '../../assets/istockphoto-580129972-612x612.svg';

const Projects = () => {
  const projectsData = [
    {
      image: icon_6,
      title: "E-commerce Website",
      description: "An intuitive e-commerce website with seamless navigation and secure payment processing",
      technologies: ["HTML", "CSS", "JS","React"]
    },
    {
      image: icon_7,
      title: "Shopping Cart",
      description: "Crafted an intuitive and visually appealing shopping cart UI with static props.",
      technologies: ["HTML", "CSS"]
    },
    {
      image: icon_8,
      title: "Rock Papers Scissors",
      description: "Developed an engaging Rock-Paper-Scissors game with sleek UI design, smooth animations, and responsive controls, offering players a fun and immersive gaming experience.",
      technologies: ["HTML", "CSS", "JS"]
    },
    {
      image: icon_9,
      title: "Super Ticktactoe Game",
      description: "A captivating UI for a Super Tic-Tac-Toe game, incorporating strategic game play elements and interactive features to engage players.",
      technologies: ["C#", "CSS", "HTML","JS","JQuery"]
    },
  ];

  return (
    <div className="Projects-container">
      <div className="Projects-title">Projects</div>
      <div className="Projects-list">
        {projectsData.map((project, index) => (
          <div className="Project-item" key={index}>
            <img src={project.image} alt={project.title} className="Project-image" />
            <div className="Project-details">
              <div className="Project-title">{project.title}</div>
              <div className="Project-subtitle">{project.subtitle}</div>
              <div className="Project-description">{project.description}</div>
              <div className="Project-technologies">
                <div className="Technologies-title">Technologies Used:</div>
                {project.technologies.map((technology, index) => (
                  <div className="Technology-item" key={index}>{technology}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
