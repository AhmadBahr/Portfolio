import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';
import icon_6 from '../../assets/2241285 1.svg';
import icon_7 from '../../assets/depositphotos_574826670-stock-illustration-shopping-cart-simple-design 1.svg';
import icon_8 from '../../assets/ecommerce-website-icon-vector 1.svg';
import icon_9 from '../../assets/istockphoto-580129972-612x612.svg';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const projectsData = [
    {
      image: icon_6,
      title: "E-commerce Website",
      description: "An intuitive e-commerce website with seamless navigation and secure payment processing",
      technologies: ["HTML", "CSS", "JS", "React"]
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
      technologies: ["C#", "CSS", "HTML", "JS", "JQuery"]
    },
    {
      image: "https://via.placeholder.com/150?text=Self-Driving+Car",
      title: "Self-Driving Car",
      description: "A self-driving car simulation showcasing advanced problem-solving skills and application of AI concepts.",
      technologies: ["JavaScript", "Neural Networks", "Machine Learning"]
    },
    {
      image: "https://via.placeholder.com/150?text=Chat+Application",
      title: "Chat Application",
      description: "A real-time chat application demonstrating real-time communication and web socket implementation.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Socket.IO",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux Toolkit",
        "Socket.IO Client",
        "Chakra UI"
      ]
    },
    {
      image: "https://via.placeholder.com/150?text=Social+Media+Application",
      title: "Social Media Application",
      description: "A social media application with features such as user authentication, posting, and liking, showcasing full-stack development skills.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JsonWebToken",
        "Multer",
        "GridFS-Storage",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux Toolkit",
        "React Router",
        "Redux Persist",
        "React Dropzone",
        "Formik",
        "Yup"
      ]
    },
    {
      image: "https://via.placeholder.com/150?text=Restaurant+Finder",
      title: "Restaurant Finder",
      description: "A restaurant finder application showcasing API integration and data visualization.",
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "HTML",
        "JavaScript",
        "React",
        "React Router"
      ]
    },
    {
      image: "https://via.placeholder.com/150?text=TicTacToe+Human+vs+AI",
      title: "TicTacToe Human vs AI",
      description: "A Tic-Tac-Toe game with AI opponent, demonstrating knowledge in game development and artificial intelligence.",
      technologies: ["C#", "CSS", "HTML", "JS", "JQuery"]
    }
  ];

  return (
    <div id="projects" className="Projects-container" data-aos="fade-up">
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
