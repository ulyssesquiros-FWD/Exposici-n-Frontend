import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, BookOpen, Layers, Users, Sparkles, Terminal } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio', icon: Sparkles },
    { path: '/seccion/javascript', label: 'JavaScript & React (Ulysses)', icon: Code2, activeBadge: 'Listo' },
    { path: '/seccion/ana', label: 'Estructura (Ana)', icon: Layers, badge: 'Pendiente' },
    { path: '/seccion/caleb', label: 'Arquitectura (Caleb)', icon: Terminal, badge: 'Pendiente' },
    { path: '/proyectos', label: 'Proyectos del Curso', icon: BookOpen },
    { path: '/documentacion', label: 'Documentación', icon: Users },
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
              JS • React • Arquitectura
            </div>
          </div>
        </Link>

        {/* Enlaces de Navegación */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
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
                  gap: '0.45rem',
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  backgroundColor: isActive ? 'var(--bg-surface-elevated)' : 'transparent',
                  border: isActive ? '1px solid var(--border-focus)' : '1px solid transparent',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Icon size={16} color={isActive ? 'var(--accent-cyan)' : 'currentColor'} />
                <span>{link.label}</span>
                {link.activeBadge && (
                  <span className="badge badge-emerald" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                    {link.activeBadge}
                  </span>
                )}
                {link.badge && (
                  <span className="badge" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-dim)' }}>
                    {link.badge}
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
