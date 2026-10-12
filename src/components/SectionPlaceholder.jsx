import React from 'react';
import { GitPullRequest, Clock, ShieldAlert, FileCode2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SectionPlaceholder = ({
  author = 'Compañero/a',
  sectionTitle = 'Módulo en Construcción',
  expectedBranch = 'feature/...',
  expectedModulePath = 'src/modules/...',
  topics = [],
  description = ''
}) => {
  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem', maxWidth: '900px' }}>
      <div className="card-glass" style={{ padding: '2.5rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <span className="badge badge-amber" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={14} /> Espacio Reservado
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
            Arquitectura Desacoplada
          </span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', marginBottom: '0.75rem' }}>
          {sectionTitle}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.75rem', lineHeight: '1.7' }}>
          {description || `Este módulo está asignado a ${author}. La arquitectura base del proyecto está preparada para recibir e integrar sus componentes sin generar conflictos ni dependencias rotas en el código principal.`}
        </p>

        <div style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '0.95rem', color: '#fcd34d', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileCode2 size={18} /> Pautas de Integración para {author}
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-cyan)' }}>• Rama esperada:</span> <code>{expectedBranch}</code>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-cyan)' }}>• Directorio asignado:</span> <code>{expectedModulePath}</code>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-cyan)' }}>• Integración:</span> Abrir Pull Request hacia <code>main</code> tras validar <code>npm run build</code>.
            </li>
          </ul>
        </div>

        {topics.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
              Temas previstos para este módulo:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {topics.map((t, idx) => (
                <span key={idx} style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
          <Link to="/seccion/javascript" className="btn-primary">
            Ver Módulo Disponible (JavaScript - Ulysses) <ArrowRight size={16} />
          </Link>
          <Link to="/documentacion" className="btn-secondary">
            Consultar Guía de Colaboración
          </Link>
        </div>
      </div>
    </div>
  );
};
