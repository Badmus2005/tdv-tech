import React from 'react';
import { Download, ChevronRight, Cpu, Activity, Briefcase, Sparkles } from 'lucide-react';
import Hero3D from './Hero3D';
import './Hero.css';

const Hero = () => {
  return (
    <section id="top" className="hero-section container">
      <div className="hero-bento-grid">
        
        {/* Main Text Card */}
        <div className="glass-card hero-main-card fade-up">
          <div className="hero-badge">
            <Cpu size={16} /> Web • Embedded • Design • IA
          </div>
          
          <h1 className="hero-title">
            Des systèmes physiques <br />
            <span className="gradient-text-accent">aux solutions web.</span>
          </h1>
          
          <p className="hero-desc text-muted mt-4">
            Issu de la filière de l'Informatique Industrielle et la Maintenance, j'aborde la technologie sous toutes ses coutures : de l'électronique embarquée jusqu'au développement d'interfaces web complexes.
          </p>

          <div className="btn-group mt-8">
            <a href="https://wa.me/2290156043081" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Demandez un devis <ChevronRight size={18} />
            </a>
            <a href="#services" className="btn btn-secondary">
              Découvrir mes services
            </a>
            <a href="/images/Cv_TCHIDEHOU_Dodji_Virgile.pdf" download className="btn btn-secondary btn-icon-only" aria-label="Télécharger mon CV">
              <Download size={18} style={{ color: 'var(--primary)' }} />
              <span className="cv-text">CV</span>
            </a>
          </div>
        </div>

        {/* 3D Model Display Card */}
        <div className="glass-card hero-3d-card fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-3d-header">
            <div className="status-indicator">
              <span className="pulse-dot"></span>
              <span className="status-text">Système en ligne</span>
            </div>
            <Sparkles size={18} className="text-muted" />
          </div>
          <div className="hero-3d-container">
            <Hero3D />
          </div>
        </div>

        {/* Small Widget 1 : Status */}
        <div className="glass-card hero-widget widget-status fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="widget-icon primary">
            <Activity size={24} />
          </div>
          <div className="widget-content">
            <span className="widget-value">Disponible</span>
            <span className="widget-label">Pour de nouveaux projets</span>
          </div>
        </div>

        {/* Small Widget 2 : Experience */}
        <div className="glass-card hero-widget widget-exp fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="widget-icon accent">
            <Briefcase size={24} />
          </div>
          <div className="widget-content">
            <span className="widget-value">Industrie & Web</span>
            <span className="widget-label">Double Compétence</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
