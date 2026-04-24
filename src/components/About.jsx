import React from 'react';
import { MapPin, Mail, Phone, Code, Database, MonitorPlay, Zap, ArrowRight, Layers, Cpu } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="container about-section">
      <div className="section-header fade-up">
        <div className="section-number">01</div>
        <h2>Qui <span className="gradient-text-primary">suis-je ?</span></h2>
      </div>

      <div className="about-bento-grid">
        {/* Main Text Card */}
        <div className="glass-card bento-card bento-main fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="bento-glow"></div>
          <h3 className="text-2xl font-bold mb-4">Un socle industriel solide</h3>
          <p className="text-lg text-white mb-4">
            Je m'appelle <strong>Tchidehou Dodji Virgile</strong>. Mon parcours prend racine dans ma formation en <strong className="hl-primary">Licence en Informatique Industrielle et Maintenance</strong>, actuellement en troisième année.
          </p>
          <p className="text-muted mb-6">
            Contrairement aux idées reçues, cette filière ne se limite pas à la maintenance ou à la réparation. Elle m'a formé à comprendre, concevoir et maîtriser l'<strong className="text-white">intelligence des systèmes</strong>, qu'ils soient matériels ou logiciels.
          </p>
          <p className="text-muted mb-6">
            Cette base technique m'a appris à penser en termes de <strong className="text-white">systèmes complets</strong>, où chaque composant — matériel ou logiciel — joue un rôle précis. Au cours de ma formation, j'ai développé des compétences solides en :
          </p>
          
          <div className="skills-tags">
            <span className="skill-tag"><Cpu size={14} /> VHDL</span>
            <span className="skill-tag"><Layers size={14} /> Modélisation 3D</span>
            <span className="skill-tag"><Zap size={14} /> Électronique embarquée</span>
            <span className="skill-tag"><Code size={14} /> Automatisation</span>
          </div>
        </div>

        {/* Profile Image Card */}
        <div className="bento-card bento-image-wrapper fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="cyber-frame">
            <img src="/images/Photo_dodji.webp" alt="Dodji Virgile" className="profile-image-cyber" />
            <div className="cyber-overlay"></div>
          </div>
          
          {/* Floating Contact Card */}
          <div className="glass-card floating-contact">
            <a href="mailto:tchidehoudojivirgile@gmail.com" className="contact-row">
              <div className="icon-box"><Mail size={16} /></div>
              <span>Me contacter</span>
              <ArrowRight size={14} className="arrow-hover" />
            </a>
            <div className="contact-row mt-2">
              <div className="icon-box"><MapPin size={16} /></div>
              <span className="text-muted">Cotonou, Bénin</span>
            </div>
            <a href="tel:+2290156043081" className="contact-row mt-2">
              <div className="icon-box"><Phone size={16} /></div>
              <span>+229 0156043081</span>
            </a>
          </div>
        </div>

        {/* Vision Card 1 */}
        <div className="glass-card bento-card vision-card fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="vision-header">
            <div className="vision-icon cyber-blue"><MonitorPlay size={24} /></div>
            <h3>Une évolution vers le web</h3>
          </div>
          <p className="text-muted mb-6">
            Créer la passerelle parfaite entre le monde physique (machines) et le monde numérique (interfaces).
          </p>
          <div className="stack-list">
            <div className="stack-item">
              <span className="dot blue"></span> <strong>Frontend :</strong> UI/UX, React, Animations
            </div>
            <div className="stack-item">
              <span className="dot blue"></span> <strong>Backend :</strong> SQL, API, Temps réel
            </div>
          </div>
        </div>

        {/* Vision Card 2 */}
        <div className="glass-card bento-card vision-card border-orange fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="vision-header">
            <div className="vision-icon cyber-orange"><Zap size={24} /></div>
            <h3>Une approche globale</h3>
          </div>
          <p className="text-muted mb-4">
            De la modélisation à l'intégration web finale, j'interviens sur toute la chaîne de valeur.
          </p>
          <div className="process-timeline">
            <div className="timeline-item">Analyse & Compréhension</div>
            <div className="timeline-item">Conception & Dév. Embarqué</div>
            <div className="timeline-item active">Supervision Web & IoT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
