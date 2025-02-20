import React from "react";
import "./List.css";

const ProjectList = () => {
    const projects = [
        {
            title: "YouTube Lecture Summarizer",
            description: "A model that summarizes YouTube lectures with unique features and a React-based interface.",
            link: "https://github.com/amansagar0403/YouTube-Lecture-summarizer"
        },
        {
            title: "SmartDoc",
            description: "An AI-powered system for document classification, semantic search, and question answering.",
            link: "https://github.com/amansagar0403/SmartDoc"
        },
        {
            title: "Alumni Connect",
            description: "A platform connecting students with alumni for mentorship and networking.",
            link: "https://github.com/amansagar0403/SNU_CONNECT-MAIN"
        },
    ];

    return (
        <div className="list-container">
            <ul>
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="clickable-link">
                            <h3 className="no-margin">{project.title}</h3>
                            <p className="paragraph">{project.description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
