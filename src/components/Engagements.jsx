import React from 'react';
import { Users, Trophy } from 'lucide-react';
import './Engagements.css';

const Engagements = () => {
  return (
    <section id="engagements" className="container">
      <div className="section-header">
        <div className="section-number">05</div>
        <h2>Engagements & <span className="gradient-text-accent">Défis</span></h2>
      </div>

      <div className="engagements-grid">
        <div className="glass-card engagement-card">
          <div className="engagement-header">
            <div className="engagement-icon"><Users size={28} /></div>
            <h3>Leadership Associatif</h3>
          </div>
          <p>
            En tant qu'<span className="hl-primary">Organisateur Général</span> au sein d'UCAO-TECH, je joue un rôle clé dans l'écosystème technologique étudiant (Hackathons, Ateliers).
          </p>
        </div>

        <div className="glass-card engagement-card border-accent">
          <div className="engagement-header">
            <div className="engagement-icon accent"><Trophy size={28} /></div>
            <h3>Compétitions & Hackathons</h3>
          </div>
          <p>
            Je confronte mes compétences à la réalité : <span className="hl-accent">Compétition TRC 2k25</span>, Challenges Arduino Days. L'occasion idéale pour le travail d'équipe sous pression.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Engagements;
