import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaHome, FaProjectDiagram, FaTools, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './Header.css';
import logo from '../logo.png';

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.querySelector('.sticky-header').classList.add('scrolled');
            } else {
                document.querySelector('.sticky-header').classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                        <li><ScrollLink to="hero" smooth={true} duration={500}><FaHome /> Home</ScrollLink></li>
                        <li><ScrollLink to="projects" smooth={true} duration={500}><FaProjectDiagram /> Projects</ScrollLink></li>
                        <li><ScrollLink to="skills" smooth={true} duration={500}><FaTools /> Skills</ScrollLink></li>
                        <li><ScrollLink to="about" smooth={true} duration={500}><FaInfoCircle /> About</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth={true} duration={500}><FaEnvelope /> Contact</ScrollLink></li>
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
                    <li><ScrollLink to="hero" smooth={true} duration={500} onClick={closeMobileNav}><FaHome /> Home</ScrollLink></li>
                    <li><ScrollLink to="projects" smooth={true} duration={500} onClick={closeMobileNav}><FaProjectDiagram /> Projects</ScrollLink></li>
                    <li><ScrollLink to="skills" smooth={true} duration={500} onClick={closeMobileNav}><FaTools /> Skills</ScrollLink></li>
                    <li><ScrollLink to="about" smooth={true} duration={500} onClick={closeMobileNav}><FaInfoCircle /> About</ScrollLink></li>
                    <li><ScrollLink to="contact" smooth={true} duration={500} onClick={closeMobileNav}><FaEnvelope /> Contact</ScrollLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
