import React from "react";
import "./List.css";

const SkillsList = () => {
    const skills = [
        "Java", "Python", "React", "Html/Css", "Git",
        "JavaScript", "SQL", "Supervised Leaning", "Scikit-learn", "TensorFlow", " PyTorch"
    ];

    return (
        <div className="skills-container">
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-item">
                        {skill} {index !== skills.length - 1 && <span className="separator">|</span>}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillsList;
