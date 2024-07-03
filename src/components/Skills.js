import React from 'react';
import './Skills.css';

const skillsData = [
    { img: "https://img.icons8.com/color/96/flutter.png", name: "Flutter" },
    { img: "https://img.icons8.com/color/96/git.png", name: "Git" },
    { img: "https://img.icons8.com/color/96/github.png", name: "GitHub" },
    { img: "https://img.icons8.com/color/96/visual-studio-code-2019.png", name: "VS Code" },
    { img: "https://img.icons8.com/color/96/firebase.png", name: "Firebase" },
    { img: "https://img.icons8.com/color/96/java-coffee-cup-logo.png", name: "Java" },
    { img: "https://img.icons8.com/color/96/sql.png", name: "SQL" },
    { img: "https://img.icons8.com/color/96/figma.png", name: "Figma" }
];

const Skills = () => {
    return (
        <section id="skills" className="skills full-page">
            <div className="container">
                <h2>Mes Compétences</h2>
                <div className="skill-list">
                    {skillsData.map(skill => (
                        <div className="skill-card" key={skill.name}>
                            <img src={skill.img} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
