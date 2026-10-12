import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  GitBranch,
  Mic,
  Tv,
  Users,
  CheckCircle2,
  Terminal,
  Globe,
  Layers,
  Code2
} from 'lucide-react';

export const DocsViewerPage = () => {
  const [activeTab, setActiveTab] = useState('guion-grupal');

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem 5rem 1.5rem', maxWidth: '1080px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Centro de Documentación y Guiones de la Exposición
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Material de respaldo, especificaciones curriculares, guiones de oratoria y protocolos de integración
        </p>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.4rem',
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: '2rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem'
      }}>
        <button
          onClick={() => setActiveTab('guion-grupal')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.6rem 1.15rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            fontSize: '0.85rem',
            backgroundColor: activeTab === 'guion-grupal' ? 'var(--bg-surface-elevated)' : 'transparent',
            color: activeTab === 'guion-grupal' ? '#67e8f9' : 'var(--text-muted)',
            border: activeTab === 'guion-grupal' ? '1px solid var(--border-focus)' : '1px solid transparent'
          }}
        >
          <Mic size={15} /> Guion Grupal (9 min)
        </button>

        <button
          onClick={() => setActiveTab('guion-diapos')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.6rem 1.15rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            fontSize: '0.85rem',
            backgroundColor: activeTab === 'guion-diapos' ? 'var(--bg-surface-elevated)' : 'transparent',
            color: activeTab === 'guion-diapos' ? '#38bdf8' : 'var(--text-muted)',
            border: activeTab === 'guion-diapos' ? '1px solid var(--border-focus)' : '1px solid transparent'
          }}
        >
          <Tv size={15} /> Guion de Diapositivas
        </button>

        <button
          onClick={() => setActiveTab('historial')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.6rem 1.15rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            fontSize: '0.85rem',
            backgroundColor: activeTab === 'historial' ? 'var(--bg-surface-elevated)' : 'transparent',
            color: activeTab === 'historial' ? 'var(--accent-primary)' : 'var(--text-muted)',
            border: activeTab === 'historial' ? '1px solid var(--border-focus)' : '1px solid transparent'
          }}
        >
          <BookOpen size={15} /> Mapa de Aprendizajes (9 Proyectos)
        </button>

        <button
          onClick={() => setActiveTab('guion-caleb')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.6rem 1.15rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            fontSize: '0.85rem',
            backgroundColor: activeTab === 'guion-caleb' ? 'var(--bg-surface-elevated)' : 'transparent',
            color: activeTab === 'guion-caleb' ? '#22d3ee' : 'var(--text-muted)',
            border: activeTab === 'guion-caleb' ? '1px solid var(--border-focus)' : '1px solid transparent'
          }}
        >
          <Globe size={15} /> Guion Caleb
        </button>

        <button
          onClick={() => setActiveTab('guion-ana')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.6rem 1.15rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            fontSize: '0.85rem',
            backgroundColor: activeTab === 'guion-ana' ? 'var(--bg-surface-elevated)' : 'transparent',
            color: activeTab === 'guion-ana' ? '#f472b6' : 'var(--text-muted)',
            border: activeTab === 'guion-ana' ? '1px solid var(--border-focus)' : '1px solid transparent'
          }}
        >
          <Layers size={15} /> Guion Ana
        </button>

        <button
          onClick={() => setActiveTab('guion-ulysses')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.6rem 1.15rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            fontSize: '0.85rem',
            backgroundColor: activeTab === 'guion-ulysses' ? 'var(--bg-surface-elevated)' : 'transparent',
            color: activeTab === 'guion-ulysses' ? '#818cf8' : 'var(--text-muted)',
            border: activeTab === 'guion-ulysses' ? '1px solid var(--border-focus)' : '1px solid transparent'
          }}
        >
          <Code2 size={15} /> Guion Ulysses
        </button>
      </div>

      {/* Contenido según Tab */}
      <div className="card-glass" style={{ padding: '2.5rem' }}>
        {activeTab === 'guion-grupal' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>docs/guiones/guion-grupal.md</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Intervención secuencial de Ulysses, Ana y Caleb</span>
              </div>
              <span className="badge badge-cyan">Duración oficial: 9:05 min (8 a 10 min)</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-primary)' }}>
                <strong style={{ color: '#ffffff' }}>[0:00 - 0:30] 1. Apertura y Objetivo Común (Ulysses Quirós - 0:30)</strong><br />
                Bienvenida formal, presentación de integrantes y presentación del hilo conductor unificado ("De una estructura web a una interfaz dinámica que obtiene y presenta información").
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #22d3ee' }}>
                <strong style={{ color: '#ffffff' }}>[0:30 - 1:40] 2. HTML Semántico, Accesibilidad y Formularios (Caleb - 1:10)</strong><br />
                Jerarquía con único <code>&lt;h1&gt;</code>, etiquetas semánticas, vínculo obligatorio <code>htmlFor</code> en labels, validación nativa del navegador y prevención de XSS evitando <code>innerHTML</code>. Transición verbal a Ana.
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #f472b6' }}>
                <strong style={{ color: '#ffffff' }}>[1:40 - 2:55] 3. CSS: Selectores, Cascada y Box Model (Ana - 1:15)</strong><br />
                Cálculo de reglas, selectores (elemento, clase, ID), especificidad, herencia y análisis de las 4 capas del Box Model (contenido, padding, border, margin).
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #f472b6' }}>
                <strong style={{ color: '#ffffff' }}>[2:55 - 4:10] 4. CSS: Flexbox, CSS Grid y Responsividad (Ana - 1:15)</strong><br />
                Comparativa Flexbox (1D) vs CSS Grid (2D), media queries para pantallas estrechas y accesibilidad visual con <code>:focus-visible</code> para navegación por teclado. Transición verbal a Ulysses.
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-primary)' }}>
                <strong style={{ color: '#ffffff' }}>[4:10 - 5:30] 5. JavaScript: Variables, Funciones Puras y DOM (Ulysses - 1:20)</strong><br />
                Ámbito con <code>const</code> y <code>let</code>, programación funcional, funciones puras sin efectos secundarios, inmutabilidad con spread y por qué el DOM imperativo de <em>LoginMaster</em> fue superado por React.
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-primary)' }}>
                <strong style={{ color: '#ffffff' }}>[5:30 - 6:40] 6. React: Componentes, Estado, .map() y Hooks (Ulysses - 1:10)</strong><br />
                Modelo declarativo <code>UI = f(State)</code>, proyección con <code>.map()</code> y keys estables, ternarios para estados vacíos y hooks <code>useState</code>, <code>useEffect</code> y <code>useContext</code>. Transición verbal a Caleb.
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #22d3ee' }}>
                <strong style={{ color: '#ffffff' }}>[6:40 - 8:05] 7. Consumo de APIs con fetch() y Manejo de Errores (Caleb - 1:25)</strong><br />
                Servicio desacoplado <code>calebApiService.js</code>, triple estado (carga, éxito, error), validación obligatoria de <code>response.ok</code>, cancelación con <code>AbortController</code> y diferencias frente a Postman.
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-emerald)' }}>
                <strong style={{ color: '#ffffff' }}>[8:05 - 9:05] 8. Buenas Prácticas, Dificultades Reales y Cierre (Los Tres - 1:00)</strong><br />
                Ulysses: Dificultad de desaprender <code>.push()</code> e interiorizar inmutabilidad. Ana: Dificultad de evitar colisiones de selectores globales. Caleb: Dificultad de gobernar asincronía y coordinar ramas Git en equipo.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'guion-diapos' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>presentacion/guion-diapos.md</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Estructura de las 8 diapositivas en /presentacion</span>
              </div>
              <span className="badge badge-emerald">Modo Pantalla Completa</span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Este documento guía la presentación digital en pantalla. Describe los puntos visuales que acompañan a cada expositor, los fragmentos de código proyectados y las transiciones verbales directas para no perder fluidez ante el profesor.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Diapo 1:</strong> Portada & Hilo Conductor (Ulysses)
              </div>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Diapo 2:</strong> HTML Semántico & A11y (Caleb)
              </div>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Diapo 3:</strong> CSS Cascada & Box Model (Ana)
              </div>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Diapo 4:</strong> Flexbox, Grid & Responsividad (Ana)
              </div>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Diapo 5:</strong> JavaScript & Inmutabilidad (Ulysses)
              </div>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Diapo 6:</strong> React, Declaratividad & Hooks (Ulysses)
              </div>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Diapo 7:</strong> Consumo de APIs & Errores (Caleb)
              </div>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>Diapo 8:</strong> Buenas Prácticas & Cierre (Los Tres)
              </div>
            </div>
          </div>
        )}

        {activeTab === 'historial' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>docs/historial-aprendizajes-frontend.md</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Evidencias curriculares de los 9 proyectos reales</span>
              </div>
              <span className="badge badge-indigo">9 Proyectos Verificados</span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              El historial de conocimientos conecta los proyectos verificados en el entorno de desarrollo:
            </p>

            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <li><strong style={{ color: '#f59e0b' }}>LoginMaster:</strong> Validación con regex, DOM imperativo y persistencia en LocalStorage.</li>
              <li><strong style={{ color: '#10b981' }}>Gestor de Gastos:</strong> Componentes atómicos e inmutabilidad en arreglos numéricos.</li>
              <li><strong style={{ color: '#6366f1' }}>Ternarios & Laboratorios:</strong> Transformación con <code>.map()</code>, filtrado reactivo con <code>.filter()</code> y operadores ternarios.</li>
              <li><strong style={{ color: '#06b6d4' }}>Rutas Privadas:</strong> Guardas de navegación con <code>PrivateRoutes</code> y contexto de autenticación.</li>
              <li><strong style={{ color: '#ec4899' }}>Testing con RTL & Vitest:</strong> Pruebas unitarias de funciones puras y pruebas de componentes centradas en el usuario.</li>
              <li><strong style={{ color: '#8b5cf6' }}>Automatización Climática:</strong> Custom Hooks desacoplados (<code>useClimateAutomation</code>) y mitigación de fallas de red.</li>
              <li><strong style={{ color: '#14b8a6' }}>Rick & Morty:</strong> Consumo de API REST pública, debounce y renderizado de tarjetas.</li>
              <li><strong style={{ color: '#f97316' }}>Moka & Canela:</strong> Gestión de órdenes con <code>OrderContext</code> y cálculo reactivo de carrito.</li>
              <li><strong style={{ color: '#3b82f6' }}>TalenTico:</strong> Aplicación integral con arquitectura por capas, formularios y control de calidad.</li>
            </ul>
          </div>
        )}

        {activeTab === 'guion-caleb' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>docs/guiones/caleb.md</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Intervención de Caleb (HTML Semántico & Consumo de APIs)</span>
              </div>
              <span className="badge badge-cyan">Tiempo: ~2:55 min</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>
              Caleb abre el bloque de estructura demostrando semántica HTML5, formularios accesibles vinculados con <code>htmlFor</code>, y en el bloque 7 demuestra el consumo de la API REST con <code>fetch()</code>, validación de <code>response.ok</code> y prevención de memory leaks con <code>AbortController</code>. Incluye banco de 5 preguntas técnicas del docente con respuestas sugeridas.
            </p>
          </div>
        )}

        {activeTab === 'guion-ana' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>docs/guiones/ana.md</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Intervención de Ana (CSS, Layouts & Responsividad)</span>
              </div>
              <span className="badge" style={{ backgroundColor: 'rgba(244, 114, 182, 0.2)', color: '#f472b6' }}>Tiempo: ~2:50 min</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>
              Ana cubre la transformación visual de la estructura: cálculo de especificidad en cascada, las 4 capas del Box Model, la distribución de componentes con Flexbox (1D) y CSS Grid (2D), media queries para pantallas estrechas y accesibilidad con <code>:focus-visible</code>. Incluye banco de preguntas técnicas del docente con respuestas sugeridas.
            </p>
          </div>
        )}

        {activeTab === 'guion-ulysses' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>docs/guiones/ulysses.md</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Intervención de Ulysses (JS, React & Coordinación)</span>
              </div>
              <span className="badge badge-indigo">Tiempo: ~3:20 min</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>
              Ulysses realiza la apertura del equipo, profundiza en el motor de JavaScript (funciones puras e inmutabilidad estricta), demuestra la ventaja del modelo declarativo de React frente a la manipulación imperativa del DOM, y expone el uso de hooks (<code>useState</code>, <code>useEffect</code>, <code>useContext</code>) y testing unitario. Incluye banco de 4 preguntas técnicas del docente con respuestas sugeridas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
