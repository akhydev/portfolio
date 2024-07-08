import React, { useEffect } from 'react';
import './Hero.css';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Hero = () => {
    useEffect(() => {
        const heroContent = document.querySelector('.hero-content');
        heroContent.classList.add('fade-in');
    }, []);

    return (
        <section className="hero full-page" id="hero">
            <div className="hero-content">
                <div className="intro">
                    <h1 className="title"><span className="highlight">Transformez Vos Idées</span> en Applications Mobiles</h1>
                    <p className="description">Passionné par la technologie, je crée des applications mobiles performantes et visuellement attrayantes avec Flutter. Joignez-vous à moi pour faire de votre projet une réalité exceptionnelle.</p>
                    <button className="cta-button" onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}>
                        Découvrez Mes Projets
                    </button>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/zahiddev_/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://x.com/zahidDev_" target="_blank" rel="noreferrer"><FaTwitter /></a>
                        <a href="https://github.com/akhydev" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
