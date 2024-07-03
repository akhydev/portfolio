import React from 'react';
import './Projects.css';
import focusFlowImage from '../assets/focus_flow.png';
import nafsyImage from '../assets/nafsy.png';

const Projects = () => {
    return (
        <section id="projects" className="projects full-page">
            <div className="container">
                <h2 className="project-title">Mes Projets</h2>
                <div className="project-list">
                    <div className="project">
                        <img src={focusFlowImage} alt="Focus Flow" />
                        <div className="project-info">
                            <h3>Focus Flow</h3>
                            <p>Dominez votre concentration, maximisez votre productivité.</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={nafsyImage} alt="Nafsy" />
                        <div className="project-info">
                            <h3>Nafsy</h3>
                            <p>Remettez-vous en question, devenez meilleur !</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
