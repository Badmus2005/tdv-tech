import React from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Bento Grid Layout pour le Footer */}
        <div className="footer-bento-grid">
          
          {/* Main CTA Card */}
          <div className="glass-card footer-cta-card">
            <div className="footer-glow"></div>
            <h2 className="footer-title">
              Prêt à concrétiser<br />
              <span className="gradient-text-accent">votre projet ?</span>
            </h2>
            <p className="text-muted footer-desc">
              Que ce soit pour de la modélisation 3D, de l'IoT ou de l'électronique embarquée, je suis à votre écoute pour transformer vos idées en réalité industrielle.
            </p>
            <a href="mailto:tchidehoudojivirgile@gmail.com" className="footer-contact-btn">
              <Mail size={18} />
              Me contacter
            </a>
          </div>

          {/* Navigation Card */}
          <div className="glass-card footer-nav-card">
            <h3>Navigation Rapide</h3>
            <ul className="footer-links">
              <li><a href="#top">Accueil</a></li>
              <li><a href="#about">Qui suis-je ?</a></li>
              <li><a href="#services">Mes Services</a></li>
              <li><a href="#projects">Réalisations</a></li>
            </ul>
          </div>

          {/* Socials Card */}
          <div className="glass-card footer-social-card">
            <h3>Mes Réseaux</h3>
            <div className="social-grid">
              <a href="https://www.linkedin.com/in/dodji-virgile-tchidehou-b1612b347/" target="_blank" rel="noopener noreferrer" className="social-pill linkedin" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
                <span>LinkedIn</span>
                <ArrowRight size={14} className="social-arrow" />
              </a>
              <a href="https://github.com/Badmus2005" target="_blank" rel="noopener noreferrer" className="social-pill github" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
                <ArrowRight size={14} className="social-arrow" />
              </a>
              <a href="https://www.facebook.com/atchamou05" target="_blank" rel="noopener noreferrer" className="social-pill facebook" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
                <span>Facebook</span>
                <ArrowRight size={14} className="social-arrow" />
              </a>
              <a href="https://www.instagram.com/dodji_atchamou/" target="_blank" rel="noopener noreferrer" className="social-pill instagram" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
                <ArrowRight size={14} className="social-arrow" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="text-muted">&copy; 2026 Tchidehou Dodji Virgile — Tous droits réservés.</p>
          <div className="footer-badge">
            Built with React & Three.js
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
