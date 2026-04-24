import React from 'react';
import './ToolsMarquee.css';

const tools = [
  "Microcontrôleurs", "Simulation Proteus", "KiCad", "Quartus II", 
  "TIA Portal", "SolidWorks", "C / C++", "React JS", 
  "Node.js", "Firebase / SQL", "Figma", "Photoshop", "WordPress"
];

const ToolsMarquee = () => {
  return (
    <section className="container" style={{ paddingBottom: '40px' }}>
      <div className="section-header" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>Les Outils & Technologies que je maîtrise</h2>
        <p className="text-muted" style={{ maxWidth: '600px', marginTop: '16px' }}>
          Je m'appuie sur un ensemble d'outils modernes et industriels pour concevoir des solutions complètes, du circuit à l'interface web.
        </p>
        <p className="text-white" style={{ maxWidth: '800px', marginTop: '16px', lineHeight: '1.7' }}>
          Je dispose de compétences solides en conception assistée par ordinateur, notamment en modélisation 3D (SolidWorks), assemblages mécaniques et réalisation de plans techniques exploitables. Mon approche de la conception intègre les contraintes réelles de fabrication, d'assemblage et de fonctionnement.
        </p>
      </div>

      <div className="tools-marquee">
        <div className="marquee-content">
          {tools.map((tool, idx) => (
            <div key={idx} className="tool-badge">{tool}</div>
          ))}
        </div>
        <div className="marquee-content">
          {tools.map((tool, idx) => (
            <div key={`dup-${idx}`} className="tool-badge">{tool}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsMarquee;
