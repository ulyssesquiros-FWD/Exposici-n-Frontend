import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Code2,
  BookOpen,
  Layers,
  Sparkles,
  Globe,
  Tv,
  FileText,
  Menu,
  X
} from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Inicio', icon: Sparkles },
    { path: '/presentacion', label: 'Modo Presentación', icon: Tv, highlight: true },
    { path: '/seccion/html-api', label: 'HTML & APIs (Caleb)', icon: Globe },
    { path: '/seccion/css', label: 'CSS & Layouts (Ana)', icon: Layers },
    { path: '/seccion/javascript', label: 'JS & React (Ulysses)', icon: Code2 },
    { path: '/proyectos', label: 'Proyectos', icon: BookOpen },
    { path: '/documentacion', label: 'Docs & Guiones', icon: FileText },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Logo / Marca */}
        <Link to="/" className="site-brand" onClick={() => setIsMenuOpen(false)}>
          <span className="site-brand__logo" aria-hidden="true">
            FE
          </span>
          <span className="site-brand__copy">
            <span className="site-brand__title">
              Exposición Front End
            </span>
            <span className="site-brand__subtitle">
              HTML • CSS • JS • React • APIs
            </span>
          </span>
        </Link>

        <button
          className="site-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={`site-nav${isMenuOpen ? ' site-nav--open' : ''}`}
          id="site-navigation"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={[
                  'site-nav__link',
                  isActive && 'site-nav__link--active',
                  link.highlight && 'site-nav__link--highlight',
                ].filter(Boolean).join(' ')}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon
                  size={15}
                  color={isActive ? 'var(--accent-cyan)' : link.highlight ? 'var(--accent-cyan)' : 'currentColor'}
                />
                <span>{link.label}</span>
                {link.highlight && !isActive && (
                  <span className="badge badge-cyan site-nav__badge">
                    9 min
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
