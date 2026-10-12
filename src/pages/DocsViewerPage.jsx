import React, { useState } from 'react';
import { BookOpen, FileText, GitBranch, Mic, Terminal, CheckCircle2 } from 'lucide-react';

export const DocsViewerPage = () => {
  const [activeTab, setActiveTab] = useState('historial');

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem 5rem 1.5rem', maxWidth: '1000px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Centro de Documentación del Proyecto
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Guías de integración colaborativa, historial de aprendizaje y guion técnico
        </p>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: '2rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem'
      }}>
        <button
          onClick={() => setActiveTab('historial')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            fontSize: '0.88rem',
            backgroundColor: activeTab === 'historial' ? 'var(--bg-surface-elevated)' : 'transparent',
            color: activeTab === 'historial' ? 'var(--accent-cyan)' : 'var(--text-muted)',
            border: activeTab === 'historial' ? '1px solid var(--border-focus)' : '1px solid transparent'
          }}
        >
          <BookOpen size={16} /> Mapa de Aprendizajes
        </button>

        <button
          onClick={() => setActiveTab('guion')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            fontSize: '0.88rem',
            backgroundColor: activeTab === 'guion' ? 'var(--bg-surface-elevated)' : 'transparent',
            color: activeTab === 'guion' ? 'var(--accent-primary)' : 'var(--text-muted)',
            border: activeTab === 'guion' ? '1px solid var(--border-focus)' : '1px solid transparent'
          }}
        >
          <Mic size={16} /> Guion Oral Ulysses (3 min)
        </button>

        <button
          onClick={() => setActiveTab('colaboracion')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            fontSize: '0.88rem',
            backgroundColor: activeTab === 'colaboracion' ? 'var(--bg-surface-elevated)' : 'transparent',
            color: activeTab === 'colaboracion' ? 'var(--accent-emerald)' : 'var(--text-muted)',
            border: activeTab === 'colaboracion' ? '1px solid var(--border-focus)' : '1px solid transparent'
          }}
        >
          <GitBranch size={16} /> Protocolo GitHub & Integración
        </button>
      </div>

      {/* Contenido según Tab */}
      <div className="card-glass" style={{ padding: '2.5rem' }}>
        {activeTab === 'historial' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>docs/historial-aprendizajes-frontend.md</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Archivo de especificación curricular</span>
              </div>
              <span className="badge badge-indigo">9 Proyectos Verificados</span>
            </div>

            <div style={{ color: 'var(--text-main)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                Este archivo registra el itinerario técnico del estudiante a través de 9 bases de código reales:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-muted)' }}>
                <li><strong style={{ color: '#f59e0b' }}>LoginMaster:</strong> Validación defensiva y almacenamiento con LocalStorage.</li>
                <li><strong style={{ color: '#10b981' }}>Gestor de Gastos:</strong> Componentes atómicos e inmutabilidad en listas.</li>
                <li><strong style={{ color: '#6366f1' }}>Ternarios & Laboratorios:</strong> Transformación con <code>.map()</code>, filtrado con <code>.filter()</code> y renderizado condicional.</li>
                <li><strong style={{ color: '#06b6d4' }}>Rutas Privadas:</strong> Guardas de acceso mediante <code>PrivateRoutes</code> y contexto de sesión.</li>
                <li><strong style={{ color: '#ec4899' }}>Testing con RTL & Vitest:</strong> Pruebas unitarias y de componentes centradas en el usuario.</li>
                <li><strong style={{ color: '#8b5cf6' }}>Automatización Climática:</strong> Custom Hooks desacoplados y mitigación de errores de red.</li>
                <li><strong style={{ color: '#14b8a6' }}>Rick & Morty:</strong> Consumo de API REST y renderizado dinámico de tarjetas.</li>
                <li><strong style={{ color: '#f97316' }}>Moka & Canela:</strong> Gestión de órdenes con <code>OrderContext</code>.</li>
                <li><strong style={{ color: '#3b82f6' }}>TalenTico:</strong> Aplicación SPA completa con separación por capas y aseguramiento de calidad.</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'guion' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>docs/guiones/ulysses.md</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Intervención técnica de Ulysses Quirós</span>
              </div>
              <span className="badge badge-emerald">Tiempo: 3:00 min</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-primary)' }}>
                <strong style={{ color: 'var(--text-main)' }}>[0:00 - 0:40] 1. Apertura e Introducción a JavaScript</strong><br />
                Presentación del rol del lenguaje como motor de interacción dinámica en el navegador, superando la estructura estática de HTML y el estilo pasivo de CSS.
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-cyan)' }}>
                <strong style={{ color: 'var(--text-main)' }}>[0:40 - 1:40] 2. Demostración Práctica: Del DOM Imperativo a React Declarativo</strong><br />
                Exhibición en vivo del filtrado funcional con <code>.filter()</code>, renderizado con <code>.map()</code>, manejo de estado reactivo con <code>useState</code> y renderizado condicional con ternarios.
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-emerald)' }}>
                <strong style={{ color: 'var(--text-main)' }}>[1:40 - 2:30] 3. Arquitectura y Ecosistema en Proyectos Reales</strong><br />
                Explicación de cómo estos fundamentos sostienen las rutas privadas (`Rutas priv`), el consumo asíncrono (`Rick & Morty`, `Automatización climática`) y las pruebas de calidad (`Vitest` y `React Testing Library`).
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-amber)' }}>
                <strong style={{ color: 'var(--text-main)' }}>[2:30 - 3:00] 4. Lección Aprendida y Cierre</strong><br />
                La importancia crítica de la inmutabilidad: por qué mutar el estado directamente rompe la reactividad de React y cómo dominar JavaScript funcional previene bugs silenciosos.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'colaboracion' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>README.md — Flujo Colaborativo</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Protocolo para Ana, Caleb y Ulysses</span>
              </div>
              <span className="badge badge-cyan">GitFlow Adaptado</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ marginTop: '0.15rem' }} />
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>Aislamiento por Directorios:</strong> Cada integrante trabaja en su submódulo en <code>src/modules/[nombre]/</code> para evitar conflictos de merge.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ marginTop: '0.15rem' }} />
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>Branching Naming Convention:</strong> Ramas dedicadas <code>feature/ulysses-javascript</code>, <code>feature/ana-estructura</code>, <code>feature/caleb-arquitectura</code>.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ marginTop: '0.15rem' }} />
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>Integración No Destructiva:</strong> Marcadores de posición (<code>SectionPlaceholder</code>) en <code>main</code> permiten que el proyecto compile y ejecute perfectamente en cualquier momento.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
