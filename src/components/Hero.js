import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    useEffect(() => {
        const heroContent = document.querySelector('.hero-content');
        heroContent.classList.add('fade-in');
    }, []);

    return (
        <section className="hero full-page" id="hero">
            <div className="hero-content">
                <div className="intro">
                    <h1><span className="highlight">Développeur Mobile</span> et Créateur d'Expériences</h1>
                    <p>Passionné par la création d'applications mobiles performantes et visuellement attrayantes via Flutter.</p>
                    <button className="scroll-button" onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}>
                        Découvrir mes réalisations
                    </button>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/zahiddev_/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://x.com/zahidDev_" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://github.com/akhydev" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
