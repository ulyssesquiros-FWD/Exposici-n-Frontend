import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Code2,
  BookOpen,
  Layers,
  Sparkles,
  Globe,
  Tv,
  FileText
} from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();

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
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'var(--bg-glass)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4.5rem',
      }}>
        {/* Logo / Marca */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1.2rem',
            boxShadow: 'var(--shadow-glow)',
          }}>
            FE
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
              Exposición Front End
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              HTML • CSS • JS • React • APIs
            </div>
          </div>
        </Link>

        {/* Enlaces de Navegación */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  color: isActive
                    ? '#ffffff'
                    : link.highlight
                    ? '#67e8f9'
                    : 'var(--text-muted)',
                  backgroundColor: isActive
                    ? 'var(--bg-surface-elevated)'
                    : link.highlight
                    ? 'rgba(6, 182, 212, 0.1)'
                    : 'transparent',
                  border: isActive
                    ? '1px solid var(--border-focus)'
                    : link.highlight
                    ? '1px solid rgba(6, 182, 212, 0.3)'
                    : '1px solid transparent',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Icon
                  size={15}
                  color={isActive ? 'var(--accent-cyan)' : link.highlight ? 'var(--accent-cyan)' : 'currentColor'}
                />
                <span>{link.label}</span>
                {link.highlight && !isActive && (
                  <span className="badge badge-cyan" style={{ fontSize: '0.62rem', padding: '0.05rem 0.35rem' }}>
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
