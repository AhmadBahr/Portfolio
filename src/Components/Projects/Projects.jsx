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
    HTML: "#F16529",
    CSS: "#1572B6",
    JavaScript: "#F0DB4F",
    React: "#61DAFB",
    "Node.js": "#68A063",
    "Express.js": "#000000",
    MongoDB: "#4DB33D",
    Mongoose: "#592B13",
    "Socket.IO": "#010101",
    JsonWebToken: "#205C3B",
    Multer: "#FFB64D",
    "GridFS-Storage": "#00AEEF",
    "React Router": "#CA4245",
    "Redux Toolkit": "#764ABC",
    WebSocket: "#2176FF",
    "Chakra UI": "#319795",
    Formik: "#F49D37",
    Yup: "#0056B3",
    PostgreSQL: "#336791",
    jQuery: "#0868AC",
    "C#": "#239120",
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
    "React-Router-Dom": "#CA4245",
    SASS: "#CC6699",
  };

  const projectsData = [
    {
      image: icon_6,
      title: "Super TicTacToe",
      description:
        "An intuitive e-commerce website with seamless navigation and secure payment processing.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      githubLink: "https://github.com/AhmadBahr/Ecommerce-Website",
      demoVideo: "https://www.example.com/demo1.mp4",
    },
    {
      image: icon_7,
      title: "Tesla Car",
      description:
        "Crafted an intuitive and visually appealing shopping cart UI with static props.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/AhmadBahr/ShoppingCartUI",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "PixelQuest",
      description:
        "Crafted an intuitive and visually appealing shopping cart UI with static props.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/AhmadBahr/ShoppingCartUI",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "FinShark",
      description:
        "Crafted an intuitive and visually appealing shopping cart UI with static props.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/AhmadBahr/ShoppingCartUI",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "Resource Manager",
      description:
        "Crafted an intuitive and visually appealing shopping cart UI with static props.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/AhmadBahr/ShoppingCartUI",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "Ryde",
      description:
        "Crafted an intuitive and visually appealing shopping cart UI with static props.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/AhmadBahr/ShoppingCartUI",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "Chatter-Box",
      description:
        "Crafted an intuitive and visually appealing shopping cart UI with static props.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/AhmadBahr/ShoppingCartUI",
      demoVideo: "https://www.example.com/demo2.mp4",
    },
    {
      image: icon_7,
      title: "Sociopedia",
      description:
        "Crafted an intuitive and visually appealing shopping cart UI with static props.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/AhmadBahr/ShoppingCartUI",
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
