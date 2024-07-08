import React from 'react';
import './Skills.css';
import { FaLightbulb, FaCogs, FaMobileAlt, FaDatabase, FaPaintBrush, FaCodeBranch } from 'react-icons/fa';

const skillsData = [
    {
        icon: <FaMobileAlt />,
        name: "Développement Mobile",
        description: "Nous transformons vos idées en applications mobiles performantes et intuitives avec Flutter. Offrez à vos utilisateurs une expérience exceptionnelle avec des solutions mobiles qui captivent et engagent."
    },
    {
        icon: <FaCodeBranch />,
        name: "Contrôle de Version",
        description: "Assurez une gestion du code impeccable et une collaboration fluide avec Git et GitHub. Notre expertise garantit une coordination sans faille et une intégration continue pour des projets de toute envergure."
    },
    {
        icon: <FaDatabase />,
        name: "Base de Données",
        description: "Optimisez la gestion de vos données avec notre maîtrise des bases de données SQL et NoSQL. Que ce soit pour une petite application ou une grande infrastructure, nous assurons une performance optimale et une intégrité maximale."
    },
    {
        icon: <FaCogs />,
        name: "API & Backend",
        description: "Développez des API robustes et intégrez-les harmonieusement avec Firebase et Node.js. Nous créons des backends puissants et sécurisés, capables de gérer de lourdes charges de manière efficace."
    },
    {
        icon: <FaPaintBrush />,
        name: "Design UI/UX",
        description: "Émerveillez vos utilisateurs avec des designs attrayants et ergonomiques créés avec Figma. Nous concevons des interfaces intuitives et visuellement plaisantes qui offrent une expérience utilisateur optimale."
    },
    {
        icon: <FaLightbulb />,
        name: "Résolution de Problèmes",
        description: "Affrontez et résolvez des problèmes complexes avec notre expertise en optimisation des performances. Nous identifions rapidement les goulots d'étranglement et apportons des solutions efficaces pour maintenir vos applications à leur meilleur niveau."
    },
];

const Skills = () => {
    return (
        <section id="skills" className="skills full-page">
            <div className="container">
                <h2>Mes Compétences</h2>
                <div className="skill-list">
                    {skillsData.map(skill => (
                        <div className="skill-card" key={skill.name}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
