import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';
import logo from '../logo.png';

const Header = () => {
    const closeMobileNav = () => {
        document.querySelector('.mobile-nav').classList.remove('active');
    };

    return (
        <header className="sticky-header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="desktop-nav">
                    <ul>
                        <li><ScrollLink to="hero" smooth={true} duration={500}>Accueil</ScrollLink></li>
                        <li><ScrollLink to="projects" smooth={true} duration={500}>Projets</ScrollLink></li>
                        <li><ScrollLink to="skills" smooth={true} duration={500}>Compétences</ScrollLink></li>
                        <li><ScrollLink to="about" smooth={true} duration={500}>À propos</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
                    </ul>
                </nav>
                <div className="burger" onClick={() => document.querySelector('.mobile-nav').classList.toggle('active')}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <nav className="mobile-nav">
                <ul>
                    <li><ScrollLink to="hero" smooth={true} duration={500} onClick={closeMobileNav}>Accueil</ScrollLink></li>
                    <li><ScrollLink to="projects" smooth={true} duration={500} onClick={closeMobileNav}>Projets</ScrollLink></li>
                    <li><ScrollLink to="skills" smooth={true} duration={500} onClick={closeMobileNav}>Compétences</ScrollLink></li>
                    <li><ScrollLink to="about" smooth={true} duration={500} onClick={closeMobileNav}>À propos</ScrollLink></li>
                    <li><ScrollLink to="contact" smooth={true} duration={500} onClick={closeMobileNav}>Contact</ScrollLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
