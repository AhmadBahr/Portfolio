import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-bootstrap/Carousel";
import "./Projects.css";
import icon_6 from "../../assets/2241285 1.svg";
import icon_7 from "../../assets/video-game-background-deisgn_23.jpg";
import icon_26ff from "../../assets/266f.jpg";
import icon_9 from "../../assets/images.jpeg";
import icon_11 from "../../assets/icon_11.png";
import icon_12 from "../../assets/bmy3m8bhdcx91.png";
import icon_13 from "../../assets/BCC-text-message-how-to-featured.jpg";
import icon_14 from "../../assets/1595924249289.jpeg";

import video_1 from "../../assets/video_1.mp4";
import video_2 from "../../assets/video_2.mp4";
import video_3 from "../../assets/video_3.mp4";
import video_4 from "../../assets/video_4.mp4";
import video_5 from "../../assets/video_5.mp4";
import video_6 from "../../assets/video_6.mp4";
import video_7 from "../../assets/video_7.mp4";
import video_8 from "../../assets/video_8.mp4";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

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
    setIsCarouselPaused(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
    setIsCarouselPaused(false);
  };

  const technologyColors = {
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    jQuery: "#0769AD",
    TypeScript: "#3178C6",
    Kaboomjs: "#E66024",
    Vite: "#646CFF",
    React: "#61DAFB",
    ReactNative: "#61DA",
    TailWindCSS: "#06B6D4",
    FramerMotion: "#FF008C",
    Csharp: "#68217A",
    SSMS: "#CC2927",
    "ASP.NET Core": "#512BD4",
    "Machine Learning": "#FF6F00",
    "Neural Networking": "#A259FF",
    Stripe: "#008CDD",
    PostgreSQL: "#336791",
    Clerk: "#512BF2",
    Zustand: "#6C47FF",
    "Google Auth": "#4285F4",
    Nodejs: "#339933",
    Express: "#000000",
    MongoDB: "#47A248",
    SocketIO: "#808080",
    Redux: "#764ABC",
    "Chakra UI": "#319795",
    JWT: "#EF9A3E",
    Multer: "#FF5722",
    GridFS: "#46A048",
    Formik: "#FFCB2C",
    Electron: "#47848F",
    Cypress: "#17202C",
    Playwright: "#2C2255",
    ViteTest: "#FFD700",
    Expo: "#000020",
  };

  const projectsData = [
    {
      image: icon_6,
      title: "Super TicTacToe",
      description:
        "A multiplayer TicTacToe game with a dynamic grid system that scales with player input, offering a modern twist to the classic game.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      githubLink: "",
      demoVideo: video_1,
    },
    {
      image: icon_11,
      title: "Tesla Car",
      description:
        "Simulated Tesla car automation using predictive algorithms powered by machine learning models and neural networks.",
      technologies: ["HTML", "CSS", "JavaScript", "Machine Learning", "Neural Networking"],
      githubLink: "https://github.com/AhmadBahr/Tesla-Car-Simulation",
      demoVideo: video_2,
    },
    {
      image: icon_7,
      title: "PixelQuest",
      description:
        "A retro-styled browser game created using Kaboom.js, featuring smooth animations and a compelling adventure storyline.",
      technologies: ["HTML", "CSS", "TypeScript", "Kaboomjs", "Vite", "React"],
      githubLink: "https://github.com/AhmadBahr/PixelQuest",
      demoVideo: video_3,
    },
    {
      image: icon_26ff,
      title: "FinShark",
      description:
        "A financial document search engine that leverages APIs and advanced filtering for a seamless user experience.",
      technologies: ["Csharp", "SSMS", "ASP.NET Core", "TailWindCSS", "FramerMotion"],
      githubLink: "https://github.com/AhmadBahr/FinShark",
      demoVideo: video_4,
    },
    {
      image: icon_12,
      title: "Resource Manager",
      description:
        "An all-in-one desktop application for managing development resources, complete with testing tools like Cypress and Playwright.",
      technologies: ["TypeScript", "React", "Vite", "ViteTest", "Cypress", "Electron", "Playwright"],
      githubLink: "https://github.com/AhmadBahr/Resource-Manager",
      demoVideo: video_5,
    },
    {
      image: icon_9,
      title: "Ryde",
      description:
        "A ride-sharing platform with real-time tracking, payment integration via Stripe, and user authentication powered by Clerk.",
      technologies: [
        "HTML",
        "CSS",
        "React",
        "ReactNative",
        "Expo",
        "Stripe",
        "PostgreSQL",
        "Clerk",
        "Zustand",
        "Google Auth",
        "Nodejs",
        "Express",
      ],
      githubLink: "https://github.com/AhmadBahr/Ryde",
      demoVideo: video_6,
    },
    {
      image: icon_13,
      title: "Chatter-Box",
      description:
        "A real-time chat application with WebSocket integration for instant messaging and a responsive UI built with Chakra UI.",
      technologies: [
        "HTML",
        "CSS",
        "React",
        "Express",
        "MongoDB",
        "SocketIO",
        "JavaScript",
        "Redux",
        "Chakra UI",
      ],
      githubLink: "https://github.com/AhmadBahr/Chatter-Box",
      demoVideo: video_8,
    },
    {
      image: icon_14,
      title: "Sociopedia",
      description:
        "A social networking platform where users can post, like, and comment. Implements JWT authentication and file uploads using Multer and GridFS.",
      technologies: [
        "Nodejs",
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
      demoVideo: video_7,
    },
  ];

  return (
    <div id="projects" className="Projects-container" data-aos="fade-up">
      <div className="Projects-title">Projects</div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        pause={isCarouselPaused ? "hover" : "false"}
      >
        {projectsData.map((project, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={project.image}
              alt={project.title}
            />
            <Carousel.Caption>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-descript">{project.description}</p>
              <div className="Technologies-container">
                <strong className="technologies-titlee">Technologies Used:</strong>
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
