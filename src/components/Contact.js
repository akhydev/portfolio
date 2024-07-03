import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:nvbile.Dev@gmail.com?subject=Demande%20de%20contact&body=Bonjour,%20je%20souhaite%20discuter%20avec%20vous%20de%20mon%20projet%20mobile.';
    };

    return (
        <section id="contact" className="contact full-page">
            <div className="container">
                <h2>Transformez vos idées en réalité</h2>
                <p>
                    Vous avez une idée ? Transformons-la en une application mobile puissante et intuitive. Avec une expertise en développement Flutter et un engagement envers la qualité, je crée des applications qui font plus que fonctionner – elles excèdent les attentes. Ne laissez pas vos idées en suspens. Faisons-en une réalité performante et lucrative dès aujourd'hui.
                </p>
                <button className="contact-button" onClick={handleEmailClick}>
                    Contactez-moi dès maintenant
                </button>
            </div>
        </section>
    );
};

export default Contact;
