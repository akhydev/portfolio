import React from 'react';
import './Contact.css';
import { FaLightbulb, FaCogs, FaChartLine, FaRegSmile } from 'react-icons/fa';

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:nvbile.Dev@gmail.com?subject=Demande%20de%20contact&body=Bonjour,%20je%20souhaite%20discuter%20avec%20vous%20de%20mon%20projet%20mobile.';
    };

    return (
        <section id="contact" className="contact full-page">
            <div className="container">
                <h2>Transformez Vos Idées en Réalité</h2>
                <p className="intro-text">
                    Ne laissez pas vos idées en suspens. Transformez-les en applications mobiles puissantes et intuitives qui impressionneront vos utilisateurs et vous permettront de vous démarquer. Voici ce que vous gagnez en travaillant avec nous :
                </p>
                <div className="contact-content">
                    <div className="contact-item">
                        <div className="icon-title">
                            <FaLightbulb className="icon" />
                            <h3>Innovation et Créativité</h3>
                        </div>
                        <p>
                            Nous transformons vos idées en solutions innovantes. Une application unique qui capte l'attention de vos utilisateurs et fait la différence sur le marché.
                        </p>
                    </div>
                    <div className="contact-item">
                        <div className="icon-title">
                            <FaCogs className="icon" />
                            <h3>Productivité Optimisée</h3>
                        </div>
                        <p>
                            Libérez du temps et des ressources grâce à une application qui simplifie vos processus quotidiens. Concentrez-vous sur ce qui compte vraiment et laissez la technologie travailler pour vous.
                        </p>
                    </div>
                    <div className="contact-item">
                        <div className="icon-title">
                            <FaChartLine className="icon" />
                            <h3>Croissance et Rentabilité</h3>
                        </div>
                        <p>
                            Attirez plus d'utilisateurs, générez plus de revenus et faites croître votre entreprise. Une application de qualité est un investissement qui rapporte.
                        </p>
                    </div>
                    <div className="contact-item">
                        <div className="icon-title">
                            <FaRegSmile className="icon" />
                            <h3>Satisfaction Client</h3>
                        </div>
                        <p>
                            Offrez à vos utilisateurs une expérience exceptionnelle. Une application intuitive et performante qui fidélise vos clients et renforce votre image de marque.
                        </p>
                    </div>
                </div>
                <div className="cta-container">
                    <button className="contact-button" onClick={handleEmailClick}>
                        Démarrez Votre Projet Aujourd'hui
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
