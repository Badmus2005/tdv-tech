import React from 'react';
import { Settings, Puzzle, Rocket } from 'lucide-react';
import './WhyMe.css';

const WhyMe = () => {
  return (
    <section id="why" className="container">
      <div className="section-header">
        <div className="section-number">04</div>
        <h2>Pourquoi <span className="gradient-text-primary">Me Choisir ?</span></h2>
      </div>

      <div className="why-me-grid">
        <div className="glass-card benefit-card">
          <Settings size={40} className="benefit-icon" />
          <h3>Esprit analytique d'ingénieur</h3>
          <p>
            Ma formation m'a donné une approche méthodique. Face à un problème (panne électronique ou bug), j'identifie la <span className="hl-primary">cause réelle</span> pour apporter une solution durable.
          </p>
        </div>
        
        <div className="glass-card benefit-card">
          <Puzzle size={40} className="benefit-icon" color="var(--accent)" />
          <h3>Solutions sur-mesure</h3>
          <p>
            Je combine <span className="hl-accent">matériel + logiciel + design</span> pour créer un système parfaitement adapté. Je ne me limite pas à des solutions standards.
          </p>
        </div>

        <div className="glass-card benefit-card">
          <Rocket size={40} className="benefit-icon" />
          <h3>Culture du résultat</h3>
          <p>
            Dans l'industrie, l'efficacité n'est pas une option. J'applique cette exigence à tous mes projets web : fiabilité, continuité de service et <span className="text-white font-semibold">performance maximale</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
