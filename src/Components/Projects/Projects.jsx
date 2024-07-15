import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css';
import icon_6 from '../../assets/2241285 1.svg';
import icon_7 from '../../assets/depositphotos_574826670-stock-illustration-shopping-cart-simple-design 1.svg';
import icon_8 from '../../assets/ecommerce-website-icon-vector 1.svg';
import icon_9 from '../../assets/istockphoto-580129972-612x612.svg';
import icon_11 from '../../assets/icon_11.png';
import icon_12 from '../../assets/icon_12.png';
import icon_13 from '../../assets/icon_13.jpg';
import icon_14 from '../../assets/icon_14.avif';
import icon_15 from '../../assets/icon_15.jpg';

const Projects = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const technologyColors = {
    HTML: "#F16529",
    CSS: "#1572B6",
    JavaScript: "#F0DB4F",
    React: "#61DAFB",
    'Node.js': "#68A063",
    'Express.js': "#000000",
    MongoDB: "#4DB33D",
    Mongoose: "#592B13",
    'Socket.IO': "#010101",
    'JsonWebToken': "#205C3B",
    Multer: "#FFB64D",
    'GridFS-Storage': "#00AEEF",
    'React Router': "#CA4245",
    'Redux Toolkit': "#764ABC",
    WebSocket: "#2176FF",
    'Chakra UI': "#319795",
    Formik: "#F49D37",
    Yup: "#0056B3",
    PostgreSQL: "#336791",
    jQuery: "#0868AC",
    'C#': "#239120",
    'Neural Networks': "#FF6F61",
    'Machine Learning': "#FFA500",
    'Redux Persist': "#764ABC",
    'React Dropzone': "#0088CC" 
  };

  const projectsData = [
    {
      image: icon_6,
      title: "E-commerce Website",
      description: "An intuitive e-commerce website with seamless navigation and secure payment processing",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      githubLink: "https://github.com/AhmadBahr/Ecommerce-Website"
    },
    {
      image: icon_7,
      title: "Shopping Cart",
      description: "Crafted an intuitive and visually appealing shopping cart UI with static props.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/AhmadBahr/ShoppingCartUI"
    },
    {
      image: icon_8,
      title: "Rock Papers Scissors",
      description: "Developed an engaging Rock-Paper-Scissors game with sleek UI design, smooth animations, and responsive controls, offering players a fun and immersive gaming experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/AhmadBahr/Rock-Papers-Scissors"
    },
    {
      image: icon_9,
      title: "Super Tic Tac Toe Game",
      description: "A captivating UI for a Super Tic-Tac-Toe game, incorporating strategic gameplay elements and interactive features to engage players.",
      technologies: ["C#", "CSS", "HTML", "JavaScript", "jQuery"],
      githubLink: "https://github.com/AhmadBahr/LoginForm-SUPER-TicTacToeGame"
    },
    {
      image: icon_11,
      title: "Self-Driving Car",
      description: "A self-driving car simulation showcasing advanced problem-solving skills and application of AI concepts.",
      technologies: ["JavaScript", "Neural Networks", "Machine Learning"],
      githubLink: "https://github.com/AhmadBahr/Self-Driving-Car"
    },
    {
      image: icon_12,
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
        "WebSocket",
        "Chakra UI"
      ],
      githubLink: "https://github.com/AhmadBahr/Chat-Application"
    },
    {
      image: icon_13,
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
      ],
      githubLink: "https://github.com/AhmadBahr/Social-Media-Application"
    },
    {
      image: icon_14,
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
      ],
      githubLink: "https://github.com/AhmadBahr/Restaurant-Finder"
    },
    {
      image: icon_15,
      title: "Tic-Tac-Toe Human vs AI",
      description: "A Tic-Tac-Toe game with AI opponent, demonstrating knowledge in game development and artificial intelligence.",
      technologies: ["C#", "CSS", "HTML", "JavaScript", "jQuery"],
      githubLink: "https://github.com/AhmadBahr/TicTacToegame-Human-V.S-AI-"
    }
  ];

  return (
    <div id="projects" className="Projects-container" data-aos="fade-up">
      <div className="Projects-title">Projects</div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {projectsData.map((project, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={project.image}
              alt={project.title}
            />
            <Carousel.Caption>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="Technologies-container">
                <strong>Technologies Used:</strong>
                <div className="Technologies-list">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="Technology-item"
                      style={{ backgroundColor: technologyColors[tech] }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-btn"
              >
                View Project
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
