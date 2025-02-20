import React from "react";
import "./List.css";

const WorkList = () => {
    const works = [
        {
            title: "New Bharat Music House",
            role: "Full-Stack Developer Intern",
            description: "Gained full-stack expertise during an internship by recreating a brand's website to enhance functionality and user experience, collaborating on both front-end and back-end development to ensure seamless integration aligned with the brand's objectives.",
        },
        {
            title: "Samnic Tech",
            role: "Graphic Designer Intern",
            description: "Designed marketing campaign graphics to boost social media engagement and website interactions, while collaborating on creative ideas to maintain brand consistency and enhancing graphic design skills through hands-on experience.",
        },
    ];

    return (
        <div className="list-container">
            <ul>
                {works.map((work, index) => (
                    <li key={index} className="project-item">
                        <h3 className="no-margin">{work.title}</h3>
                        <p className="role"><strong>{work.role}</strong></p>
                        <p className="paragraph">{work.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkList;
