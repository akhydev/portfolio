import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about full-page">
            <div className="container">
                <h2>Pourquoi me choisir ?</h2>
                <p className="intro">
                    Vous cherchez un développeur mobile capable de transformer vos idées en applications performantes et esthétiques ?
                </p>
                <p>
                    Avec une expertise en développement mobile et une passion pour l'innovation, je crée des solutions sur mesure qui dépassent vos attentes.
                    Mon approche combine créativité et savoir-faire technique pour offrir des applications intuitives, fiables et à la pointe de la technologie.
                </p>
                <p>
                    Faites confiance à mon expérience et à mon engagement pour apporter une valeur ajoutée significative à vos projets mobiles. Ensemble,
                    nous pouvons créer des applications qui non seulement répondent à vos besoins, mais qui séduisent et engagent vos utilisateurs.
                </p>
            </div>
        </section>
    );
};

export default About;
