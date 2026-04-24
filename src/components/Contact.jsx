import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="glass-card contact-box">
        <h2>Concrétisons votre <span className="gradient-text-primary">projet.</span></h2>
        <p>
          Ne laissez plus vos idées dans un tiroir. Grâce à ma <span className="hl-primary">double compétence matériel et logiciel</span>, trouvons ensemble la solution technologique complète de bout-en-bout.
        </p>
        <div className="btn-group contact-btns">
          <a href="https://wa.me/2290156043081" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} /> WhatsApp direct
          </a>
          <a href="mailto:tchidehoudojivirgile@gmail.com" className="btn btn-secondary">
            <Mail size={20} /> M'envoyer un mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
