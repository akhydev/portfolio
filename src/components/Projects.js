import React from 'react';
import './Projects.css';
import focusFlowImage from '../assets/focus_flow.png';
import nafsyImage from '../assets/nafsy.png';

const Projects = () => {
    return (
        <section id="projects" className="projects full-page">
            <div className="container">
                <h2 className="project-title">Découvrez Mes Projets</h2>
                <p className="intro-text">Explorez nos réalisations et voyez comment nous transformons des idées en succès. Nos projets sont conçus pour maximiser votre productivité et vous aider à atteindre vos objectifs.</p>
                <div className="project-list">
                    <div className="project">
                        <div className="project-image-container">
                            <img src={focusFlowImage} alt="Focus Flow" className="project-image" />
                            <div className="project-overlay">
                                <div className="project-overlay-content">
                                    <h3>Focus Flow</h3>
                                    <p>Dominez votre concentration, maximisez votre productivité.</p>
                                    <a href="#" className="cta-button">En savoir plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src={nafsyImage} alt="Nafsy" className="project-image" />
                            <div className="project-overlay">
                                <div className="project-overlay-content">
                                    <h3>Nafsy</h3>
                                    <p>Remettez-vous en question, devenez meilleur !</p>
                                    <a href="#" className="cta-button">Installer l'application</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
