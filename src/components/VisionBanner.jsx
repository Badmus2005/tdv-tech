import React from 'react';
import './VisionBanner.css';

const VisionBanner = () => {
  return (
    <section className="container">
      <div className="glass-card vision-banner">
        <h2>Ce qui me distingue réellement</h2>
        <p className="vision-banner-text">
          C'est ma capacité à <strong className="hl-primary">fusionner plusieurs domaines</strong>. Je ne propose pas seulement un service, mais une <strong className="hl-accent">solution complète</strong>, capable de relier le monde physique (capteurs, machines) au monde numérique (applications, dashboards).
        </p>
        <div className="vision-tags">
          <span>Électronique</span>
          <span>Développement web</span>
          <span>Design graphique & 3D</span>
        </div>
        <p className="vision-quote">
          "Mon ambition est de participer à la création de solutions innovantes dans l'industrie, l'automatisation et l'agriculture intelligente, avec une approche simple : <strong className="hl-primary">rendre la technologie utile, accessible et efficace.</strong>"
        </p>
      </div>
    </section>
  );
};

export default VisionBanner;
