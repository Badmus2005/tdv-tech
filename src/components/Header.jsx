import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="logo">
          <img src="/images/logo_dodji.png" alt="Logo Dodji" className="brand-logo" />
        </a>
        
        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Qui suis-je ?</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projets</a>
          
          <a href="mailto:tchidehoudojivirgile@gmail.com" className="header-contact-btn" onClick={() => setMobileMenuOpen(false)}>
            Me contacter
          </a>
        </nav>

        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
