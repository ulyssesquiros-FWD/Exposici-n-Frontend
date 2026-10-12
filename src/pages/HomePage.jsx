import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Layers,
  Globe,
  Tv,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  GitBranch,
  MonitorCheck,
  Zap,
  Clock,
  Users
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
              <Sparkles size={14} /> Exposición Integrada Front End • Equipo Ulysses, Ana y Caleb
            </span>
          </div>

          <h1 className="home-hero__title">
            <span>De la estructura web a una interfaz</span>
            <span>dinámica con <span className="gradient-accent-text">React y APIs</span></span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.22rem)',
            color: 'var(--text-muted)',
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.6
          }}>
            Plataforma unificada para la defensa técnica del curso. Un recorrido continuo: <strong>HTML</strong> estructura con accesibilidad, <strong>CSS</strong> estiliza con responsividad, <strong>JavaScript y React</strong> aportan dinamismo declarativo, y una <strong>API REST</strong> alimenta la aplicación con datos vivos.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presentacion" className="btn-primary" style={{ padding: '0.85rem 1.85rem', fontSize: '1rem', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-primary))' }}>
              <Tv size={18} /> Iniciar Modo Presentación (8-10 min) <ArrowRight size={18} />
            </Link>
            <Link to="/proyectos" className="btn-secondary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
              <BookOpen size={18} /> Mapa de Aprendizajes (9 Proyectos)
            </Link>
          </div>

          {/* Badge de tiempo y alineación académica */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginTop: '2rem',
            padding: '0.5rem 1.25rem',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#67e8f9' }}>
              <Clock size={15} /> Duración calibrada: 9:05 min
            </span>
            <span style={{ color: 'var(--text-dim)' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#6ee7b7' }}>
              <CheckCircle2 size={15} /> 3 Módulos Integrados
            </span>
            <span style={{ color: 'var(--text-dim)' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a5b4fc' }}>
              <Users size={15} /> 100% Participación del Trío
            </span>
          </div>
        </div>
      </section>

      {/* Secuencia Pedagógica y Tarjetas de Expositores */}
      <section style={{ padding: '3.5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', marginBottom: '0.5rem' }}>
              Secuencia Pedagógica y Módulos de la Exposición
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Tres áreas especializadas unificadas bajo un mismo hilo conductor técnico
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '1.75rem',
          }}>
            {/* Tarjeta 1: Caleb (HTML & APIs) */}
            <div className="card-glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', borderColor: 'rgba(6, 182, 212, 0.35)' }}>
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
                  <Globe size={24} />
                </div>
                <span className="badge badge-emerald">Completado e Integrado</span>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Módulo 1 • 2:35 min
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
                HTML Semántico & Consumo de APIs
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#67e8f9', fontWeight: 600, marginBottom: '0.85rem' }}>
                Expositor: Caleb
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                Estructura semántica HTML5, accesibilidad WCAG con <code>htmlFor</code>, validación nativa de formularios, consumo en vivo de APIs REST con <code>fetch()</code>, validación de <code>response.ok</code>, estados asíncronos y relación con Postman.
              </p>

              <div style={{
                backgroundColor: 'rgba(0,0,0,0.25)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
                marginBottom: '1.25rem'
              }}>
                Ruta: <code>/seccion/html-api</code> • Rama: <code>feature/caleb-html-api</code>
              </div>

              <Link to="/seccion/html-api" className="btn-secondary" style={{ justifyContent: 'center' }}>
                Explorar Módulo de Caleb <ArrowRight size={16} />
              </Link>
            </div>

            {/* Tarjeta 2: Ana (CSS & Layouts) */}
            <div className="card-glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', borderColor: 'rgba(244, 114, 182, 0.35)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(244, 114, 182, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f472b6'
                }}>
                  <Layers size={24} />
                </div>
                <span className="badge badge-emerald">Completado e Integrado</span>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#f472b6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Módulo 2 • 2:30 min
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
                CSS, Box Model & Diseño Responsivo
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#f472b6', fontWeight: 600, marginBottom: '0.85rem' }}>
                Expositora: Ana
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                Reglas y selectores, cascada, especificidad y herencia. Análisis de las 4 capas del Box Model, distribuciones en 1D con Flexbox y 2D con CSS Grid, media queries responsivas y navegación accesible con foco de teclado.
              </p>

              <div style={{
                backgroundColor: 'rgba(0,0,0,0.25)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
                marginBottom: '1.25rem'
              }}>
                Ruta: <code>/seccion/css</code> • Rama: <code>feature/ana-css</code>
              </div>

              <Link to="/seccion/css" className="btn-secondary" style={{ justifyContent: 'center' }}>
                Explorar Módulo de Ana <ArrowRight size={16} />
              </Link>
            </div>

            {/* Tarjeta 3: Ulysses (JS & React) */}
            <div className="card-glass pulse-glow" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', borderColor: 'rgba(99, 102, 241, 0.45)' }}>
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
                <span className="badge badge-emerald">Completado e Integrado</span>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#818cf8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Módulo 3 • 2:30 min (+ Apertura)
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
                JavaScript, React & Hooks
              </h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.85rem' }}>
                Expositor: Ulysses Quirós
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                Funciones puras, inmutabilidad, .map(), .filter(), renderizado condicional con ternarios. Modelo declarativo frente al DOM imperativo, hooks (useState, useEffect, useContext), rutas protegidas, testing unitario y coordinación del proyecto.
              </p>

              <div style={{
                backgroundColor: 'rgba(0,0,0,0.25)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
                marginBottom: '1.25rem'
              }}>
                Ruta: <code>/seccion/javascript</code> • Rama: <code>feature/ulysses-javascript</code>
              </div>

              <Link to="/seccion/javascript" className="btn-primary" style={{ justifyContent: 'center' }}>
                Explorar Módulo de Ulysses <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Características del Enfoque Técnico */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'rgba(17, 24, 39, 0.4)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-emerald)', marginTop: '0.2rem' }}><CheckCircle2 size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>Demostraciones Verificables</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Talleres interactivos en vivo y consumo real de API basados en 9 proyectos reales del curso.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-primary)', marginTop: '0.2rem' }}><GitBranch size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>Integración Colaborativa</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Arquitectura modular en Git: ramas por función, Pull Requests revisados y fusión limpia en main.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-cyan)', marginTop: '0.2rem' }}><MonitorCheck size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>Modo Presentación Único</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Secuencia guiada de diapositivas con cronómetro, transiciones orales y controles accesibles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
