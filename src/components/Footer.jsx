import React from 'react';
import { GitBranch, ShieldCheck, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{
      marginTop: 'auto',
      borderTop: '1px solid var(--border-subtle)',
      backgroundColor: 'var(--bg-secondary)',
      padding: '2.5rem 0 2rem 0',
      color: 'var(--text-muted)',
      fontSize: '0.85rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              Proyecto Integrador de Exposición Front End
            </div>
            <div>Equipo: Ulysses Quirós (JavaScript/React) • Ana • Caleb</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <GitBranch size={16} color="var(--accent-primary)" />
              Repositorio: Exposici-n-Frontend
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} color="var(--accent-emerald)" />
              Arquitectura Modular y Desacoplada
            </span>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          fontSize: '0.78rem',
          color: 'var(--text-dim)'
        }}>
          <div>Construido con React 19, Vite y Vanilla CSS Moderno.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Desarrollado para demostración técnica evaluativa
          </div>
        </div>
      </div>
    </footer>
  );
};
