import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function App() {
    return (
        <div id="app">
            <Header />
            <Hero />
            <section className="section" id="projects">
                <Projects />
            </section>
            <section className="section" id="skills">
                <Skills />
            </section>
            <section className="section" id="about">
                <About />
            </section>
            <section className="section" id="contact">
                <Contact />
            </section>
            <Footer />
        </div>

    );
}

export default App;
