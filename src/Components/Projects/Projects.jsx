import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Project 1",
      description: "Description of project 1",
      image: "project1.jpg",
      subtitle: "Subtitle for Project 1",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      image: "project2.jpg",
      subtitle: "Subtitle for Project 2",
      technologies: ["JavaScript", "HTML", "CSS"]
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      image: "project3.jpg",
      subtitle: "Subtitle for Project 3",
      technologies: ["React", "Redux", "Node.js"]
    },
    {
      title: "Project 4",
      description: "Description of project 4",
      image: "project4.jpg",
      subtitle: "Subtitle for Project 4",
      technologies: ["Python", "Django", "PostgreSQL"]
    },
  ];

  return (
    <div className="Projects-container">
      <div className="Projects-title">Projects</div>
      <div className="Projects-list">
        {projectsData.map((project, index) => (
          <div className="Project-item" key={index}>
            <img src={require(`../../assets/${project.image}`).default} alt={project.title} className="Project-image" />
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
