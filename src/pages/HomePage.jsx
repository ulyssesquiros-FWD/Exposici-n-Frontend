import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Layers,
  Terminal,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  GitBranch,
  Cpu,
  MonitorCheck
} from 'lucide-react';

export const HomePage = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Luz ambiental de fondo */}
      <div className="hero-glow-bg" />

      {/* Hero Section */}
      <section style={{ padding: '4.5rem 0 3rem 0', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
            <span className="badge badge-indigo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={14} /> Exposición Integrada Front End • 2026
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.3rem, 5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
            maxWidth: '960px',
            margin: '0 auto 1.25rem auto'
          }}>
            De la Sintaxis a <span className="gradient-accent-text">React</span> y la Arquitectura Colaborativa
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            maxWidth: '750px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.6
          }}>
            Plataforma interactiva para la defensa técnica del curso de Front End. Fundamentos de JavaScript moderno, el paradigma reactivo, manipulación del estado y metodologías ágiles en GitHub.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/seccion/javascript" className="btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
              Explorar Sección de Ulysses (JavaScript) <ArrowRight size={18} />
            </Link>
            <Link to="/proyectos" className="btn-secondary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
              Ver Mapa de Proyectos del Curso <BookOpen size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tarjetas de Expositores y Módulos */}
      <section style={{ padding: '3.5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
              Estructura de la Exposición por Módulos
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Cada integrante lidera un eje técnico con autonomía y responsabilidad modular
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {/* Tarjeta Ulysses */}
            <div className="card-glass pulse-glow" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', borderColor: 'rgba(99, 102, 241, 0.4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(99, 102, 241, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#818cf8'
                }}>
                  <Code2 size={24} />
                </div>
                <span className="badge badge-emerald">Completado y Verificado</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
                JavaScript e Interactividad
              </h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.85rem' }}>
                Expositor: Ulysses Quirós
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                Fundamentos del lenguaje, funciones puras, inmutabilidad, .map() y .filter(), transición al modelo declarativo de React, hooks (useState, useEffect, useContext), rutas protegidas y pruebas con Testing Library.
              </p>

              <div style={{
                backgroundColor: 'rgba(0,0,0,0.25)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
                marginBottom: '1.25rem'
              }}>
                Rama: <code>feature/ulysses-javascript</code>
              </div>

              <Link to="/seccion/javascript" className="btn-primary" style={{ justifyContent: 'center' }}>
                Ver Módulo & Demostraciones <ArrowRight size={16} />
              </Link>
            </div>

            {/* Tarjeta Ana */}
            <div className="card-glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(236, 72, 153, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f472b6'
                }}>
                  <Layers size={24} />
                </div>
                <span className="badge badge-amber">En Desarrollo</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
                Estructura, Semántica & UI
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#f472b6', fontWeight: 600, marginBottom: '0.85rem' }}>
                Expositora: Ana
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                Maquetación semántica HTML5, accesibilidad web (a11y), arquitectura CSS moderna, diseño responsivo y experiencia de usuario adaptativa.
              </p>

              <div style={{
                backgroundColor: 'rgba(0,0,0,0.25)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
                marginBottom: '1.25rem'
              }}>
                Rama: <code>feature/ana-estructura</code>
              </div>

              <Link to="/seccion/ana" className="btn-secondary" style={{ justifyContent: 'center' }}>
                Consultar Estado del Módulo <ArrowRight size={16} />
              </Link>
            </div>

            {/* Tarjeta Caleb */}
            <div className="card-glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22d3ee'
                }}>
                  <Terminal size={24} />
                </div>
                <span className="badge badge-amber">En Desarrollo</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
                Control de Versiones & DevOps
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#22d3ee', fontWeight: 600, marginBottom: '0.85rem' }}>
                Expositor: Caleb
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                Flujo colaborativo Git/GitHub, estrategia de ramas (GitFlow / Trunk), resolución de conflictos, integración continua y empaquetado con Vite.
              </p>

              <div style={{
                backgroundColor: 'rgba(0,0,0,0.25)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
                marginBottom: '1.25rem'
              }}>
                Rama: <code>feature/caleb-arquitectura</code>
              </div>

              <Link to="/seccion/caleb" className="btn-secondary" style={{ justifyContent: 'center' }}>
                Consultar Estado del Módulo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Características del Enfoque Técnico */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'rgba(17, 24, 39, 0.4)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-emerald)', marginTop: '0.2rem' }}><CheckCircle2 size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>Demostraciones Verificables</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Talleres interactivos en vivo basados en 9 proyectos reales del curso sin datos inventados.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-primary)', marginTop: '0.2rem' }}><GitBranch size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>Colaboración Desacoplada</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Arquitectura base lista para integrar aportes de compañeros mediante Pull Requests limpios.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-cyan)', marginTop: '0.2rem' }}><MonitorCheck size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>Diseño Profesional</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Estética oscura contemporánea, tipografía Outfit e Inter, componentes reactivos y accesibles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
