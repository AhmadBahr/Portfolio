import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-bootstrap/Carousel";
import "./Projects.css";
import icon_6 from "../../assets/2241285 1.svg";
import icon_7 from "../../assets/depositphotos_574826670-stock-illustration-shopping-cart-simple-design 1.svg";
import icon_8 from "../../assets/ecommerce-website-icon-vector 1.svg";
import icon_9 from "../../assets/istockphoto-580129972-612x612.svg";
import icon_11 from "../../assets/icon_11.png";
import icon_12 from "../../assets/icon_12.png";
import icon_13 from "../../assets/icon_13.jpg";
import icon_14 from "../../assets/icon_14.avif";
import icon_15 from "../../assets/icon_15.jpg";
import icon_16 from "../../assets/icon_16.jpg";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  const technologyColors = {
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    React: "#61DAFB",
    "Node.js": "#83CD29",
    "Express.js": "#000000",
    MongoDB: "#47A248",
    Mongoose: "#A33F2E",
    "Socket.IO": "#010101",
    JsonWebToken: "#005A5B",
    Multer: "#FFB64D",
    "GridFS-Storage": "#00AEEF",
    "React Router": "#CA4245",
    "Redux Toolkit": "#764ABC",
    WebSocket: "#20456D",
    "Chakra UI": "#319795",
    Formik: "#F49D37",
    Yup: "#0056B3",
    PostgreSQL: "#336791",
    jQuery: "#0868AC",
    "C#": "#9C499F",
    "Neural Networks": "#FF6F61",
    "Machine Learning": "#FFA500",
    "Redux Persist": "#764ABC",
    "React Dropzone": "#0088CC",
    MySQL: "#00758F",
    Axios: "#5A29E4",
    Bcryptjs: "#3A3A3A",
    Cookieparser: "#FF9800",
    CORS: "#00BFFF",
    Nodemon: "#76D04B",
    "React-quill": "#CA3F7E",
    "React-Router-Dom": "#CA42",
    SASS: "#CC6699",
    Kaboomjs: "#FF4F40",
    Vite: "#646CFF",
    ViteTest: "#38B2AC",
    Cypress: "#17202C",
    Playwright: "#40B5A4",
    Electron: "#47848F",
    TailWindCSS: "#06B6D4",
    FramerMotion: "#EA4C89",
    Expo: "#000020",
    Stripe: "#635BFF",
    Clerk: "#FA709A",
    Zustand: "#4D4D4D",
    GoogleAuth: "#428",
  };


  const projectsData = [
    {
      image: icon_6,
      title: "Super TicTacToe",
      description:
        "A multiplayer TicTacToe game with a dynamic grid system that scales with player input, offering a modern twist to the classic game.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      githubLink: "https://github.com/AhmadBahr/Super-TicTacToe",
      demoVideo: "https://www.example.com/demo1.mp4",
    },
    {
      image: icon_7,
      title: "Tesla Car",
      description:
        "Simulated Tesla car automation using predictive algorithms powered by machine learning models and neural networks.",
      technologies: ["HTML", "CSS", "JavaScript", "Machine Learning", "Neural Networking"],
      githubLink: "https://github.com/AhmadBahr/Tesla-Car-Simulation",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "PixelQuest",
      description:
        "A retro-styled browser game created using Kaboom.js, featuring smooth animations and a compelling adventure storyline.",
      technologies: ["HTML", "CSS", "TypeScript", "Kaboomjs", "Vite", "React"],
      githubLink: "https://github.com/AhmadBahr/PixelQuest",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "FinShark",
      description:
        "A financial document search engine that leverages APIs and advanced filtering for a seamless user experience.",
      technologies: ["C#", "SSMS", "ASP.NET Core", "TailWind CSS", "Framer Motion"],
      githubLink: "https://github.com/AhmadBahr/FinShark",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "Resource Manager",
      description:
        "An all-in-one desktop application for managing development resources, complete with testing tools like Cypress and Playwright.",
      technologies: ["TypeScript", "React", "Vite", "ViteTest", "Cypress", "Electron", "Playwright"],
      githubLink: "https://github.com/AhmadBahr/Resource-Manager",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "Ryde",
      description:
        "A ride-sharing platform with real-time tracking, payment integration via Stripe, and user authentication powered by Clerk.",
      technologies: [
        "HTML",
        "CSS",
        "React",
        "React Native",
        "Expo",
        "Stripe",
        "PostgreSQL",
        "Clerk",
        "Zustand",
        "Google Auth",
        "Node",
        "Express",
      ],
      githubLink: "https://github.com/AhmadBahr/Ryde-App",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "Chatter-Box",
      description:
        "A real-time chat application with WebSocket integration for instant messaging and a responsive UI built with Chakra UI.",
      technologies: [
        "HTML",
        "CSS",
        "React",
        "Express",
        "MongoDB",
        "Socket.IO",
        "JavaScript",
        "Redux",
        "Chakra UI",
      ],
      githubLink: "https://github.com/AhmadBahr/Chatter-Box",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "Sociopedia",
      description:
        "A social networking platform where users can post, like, and comment. Implements JWT authentication and file uploads using Multer and GridFS.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Multer",
        "GridFS",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Formik",
      ],
      githubLink: "https://github.com/AhmadBahr/Sociopedia",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
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
              <button
                onClick={() => openModal(project.demoVideo)}
                className="demo-video-btn"
              >
                Watch Demo Video
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {isModalOpen && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <video src={currentVideo} controls autoPlay />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
