import React, { useEffect } from "react";
import "./Details.css";
import WorkList from "../List/Work/WorkList";
import ProjectList from "../List/Project/ProjectList";
import PublishList from "../List/Publication/PublishList";
import SkillsList from "../List/Skills/ProjectList";
import { FaEnvelope, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Details = () => {
    useEffect(() => {
        const boxes = document.querySelectorAll(".box");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        boxes.forEach((box) => observer.observe(box));

        return () => {
            boxes.forEach((box) => observer.unobserve(box));
        };
    }, []);

    return (
        <div className="details-container">
            <div className="left-section">
                <div className="box left-box"><h2>Work Experience</h2><WorkList /></div>
                <div className="box left-box"><h2>My Projects</h2><ProjectList /></div>
            </div>
            <div className="middle-section">
                <div className="box middle-box-80">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <img src="CSE_AmanSagar.jpg" alt="Aman" className="about-img" />
                        <p>
                            Hi, I'm Aman Sagar! I like building cool things with code and making tech work smarter. AI and problem-solving keep me hooked, but outside of that, you’ll probably find me lost in my phone or just chilling.
                        </p>
                    </div>
                </div>

                <div className="box middle-box-20"><h2>Skills</h2><SkillsList /></div>
            </div>
            <div className="right-section">
                <div className="box right-box-20">
                    <h2>Contact Me</h2>
                    <div className="contact-icons">
                        <a href="mailto:amansagar0403@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="icon" />
                        </a>
                        <a href="https://github.com/amansagar0403" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/amansagar0403/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                        <a href="https://leetcode.com/u/a_sagar7688/" target="_blank" rel="noopener noreferrer">
                            <FaCode className="icon" />
                        </a>
                    </div>
                </div>
                <div className="box right-box-80"><h2>My Publication</h2><PublishList /></div>
            </div>
        </div>
    );
};

export default Details;
