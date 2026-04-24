import React from 'react';
import { Cpu, Server, Cuboid, Wrench } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="container">
      <div className="section-header">
        <div className="section-number">02</div>
        <h2>Mes <span className="gradient-text-primary">Services</span></h2>
      </div>

      <div className="services-grid">
        <div className="glass-card service-card wide">
          <div className="service-icon"><Wrench size={32} /></div>
          <h3>Informatique Industrielle & Maintenance</h3>
          <p>
            Cœur de mon expertise, j'interviens sur le <span className="hl-primary">diagnostic, la maintenance et l'optimisation de systèmes industriels</span> afin de garantir leur fiabilité et leur performance.
          </p>
          <div className="tech-tags mt-4">
            <span className="tag"><Cpu size={14}/> Électronique</span>
            <span className="tag"><Server size={14}/> IoT Industriel</span>
          </div>
        </div>

        <div className="glass-card service-card">
          <div className="service-icon"><Server size={32} color="var(--accent)" /></div>
          <h3>Développement Web Fullstack</h3>
          <p>
            Je conçois des <span className="hl-accent">applications web complètes</span>, de l'interface utilisateur moderne jusqu'à la logique serveur et la supervision IoT.
          </p>
        </div>

        <div className="glass-card service-card">
          <div className="service-icon"><Cuboid size={32} /></div>
          <h3>Modélisation 3D & Design</h3>
          <p>
            Modélisation <span className="hl-primary">SolidWorks</span> et conception de prototypes 3D pour donner vie à vos projets matériels de manière précise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
