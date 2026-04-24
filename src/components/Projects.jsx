import React from 'react';
import { PlayCircle } from 'lucide-react';
import './Projects.css';

const projectData = [
  {
    id: 'smart-soja',
    title: 'Smart-Soja',
    image: '/images/smart_soja.png',
    desc: "Le pont parfait : Unité matérielle mobile et dashboard cloud pour les acteurs de l'agriculture intelligente.",
    tags: ['IoT', 'Arduino', 'Dashboard Cloud', 'React']
  },
  {
    id: 'controle-thermique',
    title: 'Contrôle Thermique Intelligent',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800',
    desc: "Asservissement électronique et supervision web pour le maintien précis de la température (IoT).",
    tags: ['Asservissement', 'Électronique', 'Supervision Web'],
    videoUrl: 'https://www.youtube.com/embed/cxcdyMv_2ws'
  },
  {
    id: 'convoyeur',
    title: 'Convoyeur de 650mm',
    image: '/images/image_convoyeur.PNG',
    desc: "Système conçu sur SolidWorks et imprimé en PLA pour le transport automatisé.",
    tags: ['SolidWorks', 'Impression 3D', 'PLA'],
    videoUrl: 'https://www.youtube.com/embed/6EmU694LZT4'
  },
  {
    id: 'compteur-numerique',
    title: 'Compteur Électronique Numérique',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    desc: "Réalisation matérielle à base de circuits logiques (bascules) et d'afficheurs 7 segments.",
    tags: ['Circuits Logiques', 'Électronique Numérique'],
    videoUrl: 'https://www.youtube.com/embed/AeeMU35w_BE'
  },
  {
    id: 'boitier-electronique',
    title: 'Boîtier Électronique Industriel',
    image: '/images/image_boitier_electronique.PNG',
    desc: "Conception complète et modélisation d'un boîtier électronique robuste avec intégration des contraintes réelles de fabrication.",
    tags: ['SolidWorks', 'Conception 3D', 'CAO']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className="section-header">
        <div className="section-number">03</div>
        <h2>Innovations <span className="gradient-text-accent">Réalisées</span></h2>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card glass-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3>{project.title}</h3>
                {project.videoUrl && (
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="project-video-link" aria-label="Voir la vidéo">
                    <PlayCircle size={28} />
                  </a>
                )}
              </div>
              <p>{project.desc}</p>
              <div className="project-tags mt-4">
                {project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
