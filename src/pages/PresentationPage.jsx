import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  ExternalLink,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import './PresentationPage.css';

const SLIDES = [
  {
    id: 1,
    numero: 1,
    titulo: 'De la Estructura a la Interfaz Dinámica: Exposición Front End',
    subtitulo: 'Hilo conductor: Cómo HTML, CSS, JavaScript, React y las APIs REST se integran para crear una aplicación moderna.',
    expositor: 'Ulysses Quirós',
    expositorClase: 'speaker-ulysses',
    tiempoEstimado: '0:30 min',
    rol: 'Apertura y Arquitectura del Proyecto',
    seccionRuta: '/',
    puntosClave: [
      'Presentación del equipo: Ulysses Quirós (JS & React), Ana (CSS & Diseño Responsivo) y Caleb (HTML Semántico & APIs).',
      'Propósito académico: Demostrar cómo se conectan los 9 proyectos reales desarrollados durante el curso.',
      'Secuencia narrativa: Estructura semántica → Presentación visual adaptable → Interactividad reactiva → Consumo asíncrono de datos.',
      'Duración prevista de la exposición grupal: 9 minutos exactos (rango 8 a 10 min).'
    ],
    codigoSnippet: `// Concepto de integración de Front End:
const WebApp = {
  estructura:   "HTML5 Semántico y Accesibilidad",
  estilos:      "CSS Moderno, Flexbox, Grid y Responsividad",
  logica:       "JavaScript ES6+, Funciones Puras e Inmutabilidad",
  reactividad:  "React 19, Componentes, Hooks y Estado",
  datos:        "Consumo Asíncrono de APIs REST con fetch()"
};`
  },
  {
    id: 2,
    numero: 2,
    titulo: 'HTML Semántico, Accesibilidad y Formularios Nativos',
    subtitulo: 'La estructura y el significado: por qué la semántica importa para usuarios, lectores de pantalla y buscadores.',
    expositor: 'Caleb',
    expositorClase: 'speaker-caleb',
    tiempoEstimado: '1:10 min',
    rol: 'HTML Semántico, A11y y Formularios',
    seccionRuta: '/seccion/html-api',
    puntosClave: [
      'Etiquetas semánticas: Jerarquía estricta con un único <h1>, <header>, <nav>, <main>, <section> y <article>.',
      'Accesibilidad (A11y): Asociación explícita de <label> con <input> mediante htmlFor e id, cumplimiento de WCAG 2.1.',
      'Formularios nativos: Validación de campos con required, type="email", pattern y pseudoclases CSS :valid/:invalid.',
      'Manejo del DOM seguro: Evitar innerHTML para blindar la aplicación frente a ataques de inyección XSS.'
    ],
    codigoSnippet: `<!-- Estructura accesible con validación nativa -->
<form aria-labelledby="form-titulo">
  <h2 id="form-titulo">Registro de Publicación</h2>
  
  <label for="titulo-post">Título del artículo:</label>
  <input 
    id="titulo-post" 
    name="title" 
    type="text" 
    required 
    minlength="5" 
    aria-required="true"
  />
</form>`
  },
  {
    id: 3,
    numero: 3,
    titulo: 'CSS: Selectores, Cascada, Especificidad y Box Model',
    subtitulo: 'Principios fundamentales de estilo: cómo el navegador calcula las reglas y el espacio de los elementos.',
    expositor: 'Ana',
    expositorClase: 'speaker-ana',
    tiempoEstimado: '1:15 min',
    rol: 'CSS Fundamentos y Box Model',
    seccionRuta: '/seccion/css',
    puntosClave: [
      'Selectores: Elemento (article), clases reutilizables (.card) e identificadores (#destacado).',
      'Cascada y especificidad: Reglas en conflicto se resuelven por importancia > especificidad (ID > Clase > Etiqueta) > orden.',
      'Herencia: Propiedades como color y font-family se heredan; margin, border y padding no.',
      'Box Model: Las cuatro capas indispensables: Contenido (centro), Padding (relleno), Border (límite) y Margin (espacio externo).'
    ],
    codigoSnippet: `/* Cálculo de especificidad y Box Model */
article { color: #dbeafe; }       /* Elemento: (0,0,1) */
.card { padding: 1.25rem; }        /* Clase:    (0,1,0) */
#destacado { border: 2px solid; }  /* ID:       (1,0,0) */

.card {
  margin: 1rem;       /* Espacio exterior entre cajas */
  border: 1px solid;  /* Frontera delimitadora */
  padding: 1.25rem;   /* Relleno interno al contenido */
}`
  },
  {
    id: 4,
    numero: 4,
    titulo: 'CSS: Flexbox, CSS Grid y Diseño Responsivo',
    subtitulo: 'Distribuciones modernas y adaptación dinámica para garantizar una experiencia visual accesible.',
    expositor: 'Ana',
    expositorClase: 'speaker-ana',
    tiempoEstimado: '1:15 min',
    rol: 'Layouts Modernos y Responsividad',
    seccionRuta: '/seccion/css',
    puntosClave: [
      'Flexbox (1D): Alineación unidimensional en fila o columna; ideal para barras de navegación, acciones y listas de productos.',
      'CSS Grid (2D): Control simultáneo de filas y columnas; ideal para plantillas de página, cuadrículas y dashboards.',
      'Diseño Responsivo: Media queries (@media) que adaptan el número de columnas y previenen desbordamientos (overflow).',
      'Foco y Accesibilidad visual: Uso obligatorio de :focus-visible para usuarios que navegan con teclado (Tab/Shift+Tab).'
    ],
    codigoSnippet: `/* Grid para el layout y media query responsiva */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 48rem) {
  .grid-container {
    grid-template-columns: 1fr; /* Colapsa a 1 columna */
  }
}`
  },
  {
    id: 5,
    numero: 5,
    titulo: 'JavaScript: Variables, Funciones Puras, Eventos y DOM',
    subtitulo: 'El motor del dinamismo: de la manipulación imperativa tradicional a las funciones puras e inmutabilidad.',
    expositor: 'Ulysses Quirós',
    expositorClase: 'speaker-ulysses',
    tiempoEstimado: '1:20 min',
    rol: 'JavaScript e Interactividad',
    seccionRuta: '/seccion/javascript',
    puntosClave: [
      'Variables modernas: const para referencias inmutables y let para variables de bloque con ámbito delimitado.',
      'Funciones puras: Mismos argumentos producen siempre el mismo resultado sin efectos secundarios (vitales para testing).',
      'Inmutabilidad: Evitar mutaciones directas (array.push()); utilizar el operador spread [...array, item] para preservar referencias.',
      'DOM Tradicional vs React: En LoginMaster manipulábamos el DOM manualmente (querySelector); en React delegamos esa sincronización.'
    ],
    codigoSnippet: `// ❌ Mala práctica: Mutación imperativa directa
gastos.push(nuevoGasto); // Rompe la reactividad

// ✅ Buena práctica: Función pura e inmutabilidad
export const agregarGastoInmutable = (gastos, nuevo) => {
  return [...gastos, nuevo]; // Nueva referencia en memoria
};`
  },
  {
    id: 6,
    numero: 6,
    titulo: 'React: Componentes, Estado, .map(), Ternarios y Hooks',
    subtitulo: 'El paradigma declarativo: UI = f(State), Virtual DOM, useState, useEffect y useContext.',
    expositor: 'Ulysses Quirós',
    expositorClase: 'speaker-ulysses',
    tiempoEstimado: '1:10 min',
    rol: 'Arquitectura React y Hooks',
    seccionRuta: '/seccion/javascript',
    puntosClave: [
      'Paradigma Declarativo: Describimos qué debe mostrarse según el estado actual; React gestiona el Virtual DOM.',
      '.map() y Keys estables: Proyección de listas JSX garantizando identificadores únicos para el algoritmo de reconciliación.',
      'Renderizado condicional con ternarios: items.length === 0 ? <EstadoVacio /> : <Lista /> para evitar errores de render.',
      'Hooks del ecosistema: useState para estado local, useEffect para efectos secundarios y useContext para evitar prop drilling.'
    ],
    codigoSnippet: `// Renderizado declarativo con .filter(), .map() y ternario
const filtrados = productos.filter(p => p.precio <= presupuesto);

return (
  <div>
    {filtrados.length === 0 ? (
      <EstadoVacio mensaje="Sin coincidencias" />
    ) : (
      filtrados.map(item => <Tarjeta key={item.id} {...item} />)
    )}
  </div>
);`
  },
  {
    id: 7,
    numero: 7,
    titulo: 'Consumo de APIs: Fetch(), Respuestas JSON y Errores',
    subtitulo: 'Conexión con el backend: estados asíncronos, validación defensiva y la diferencia frente a Postman.',
    expositor: 'Caleb',
    expositorClase: 'speaker-caleb',
    tiempoEstimado: '1:25 min',
    rol: 'Consumo Asíncrono de APIs REST',
    seccionRuta: '/seccion/html-api',
    puntosClave: [
      'Servicio desacoplado: La lógica de red reside en calebApiService.js, manteniendo los componentes React limpios.',
      'Gestión de estados asíncronos: Triple estado estándar: carga (spinner/skeleton), datos exitosos y tratamiento de errores.',
      'Validación defensiva con response.ok: fetch() no rechaza la promesa ante un error 404 o 500; debemos validarlo manualmente.',
      'Postman vs React: Postman prueba endpoints aislados sin usuarios; en React debemos gobernar la experiencia visual y cancelar con AbortController.'
    ],
    codigoSnippet: `// Consumo profesional con manejo de errores y AbortSignal
export async function getPosts(limit = 5, { signal } = {}) {
  const response = await fetch(\`\${URL}?_limit=\${limit}\`, { signal });
  
  // fetch() no falla en 404 o 500, se debe verificar response.ok:
  if (!response.ok) {
    throw new Error(\`Error HTTP \${response.status}: Respuesta fallida\`);
  }
  return await response.json();
}`
  },
  {
    id: 8,
    numero: 8,
    titulo: 'Buenas Prácticas, Proyectos del Curso y Reflexión Final',
    subtitulo: 'Consolidación de aprendizajes: dificultades superadas, código limpio y trabajo colaborativo.',
    expositor: 'Equipo (Ulysses, Ana y Caleb)',
    expositorClase: 'speaker-trio',
    tiempoEstimado: '1:00 min',
    rol: 'Conclusiones y Lecciones Aprendidas',
    seccionRuta: '/proyectos',
    puntosClave: [
      'Separación de responsabilidades: HTML estructura, CSS estiliza, JS calcula, React renderiza y los servicios comunican.',
      'Dificultad de Caleb: Comprender que fetch() no lanza excepciones en 404/500 y cancelar peticiones con AbortController.',
      'Dificultad de Ana: Evitar colisiones de selectores globales aislando estilos con prefijos modulares y controlando la especificidad.',
      'Dificultad de Ulysses: Desaprender la mutación directa de datos (array.push()) para adoptar inmutabilidad funcional estricta.',
      'Flujo Colaborativo en Git: Ramas por feature, Pull Requests revisados e integración limpia y no destructiva en main.'
    ],
    codigoSnippet: `// Resumen de competencias adquiridas:
const LeccionesAprendidas = [
  "HTML Semántico: Accesibilidad nativa antes de añadir capas visuales",
  "CSS Moderno: Variables y Flexbox/Grid eliminan código redundante",
  "JavaScript & React: La inmutabilidad garantiza predictibilidad",
  "APIs REST: Manejo defensivo de errores y cancelación de peticiones",
  "Git & Colaboración: Arquitecturas modulares evitan conflictos"
];`
  }
];

export const PresentationPage = () => {
  const [slideActual, setSlideActual] = useState(0);

  const slide = SLIDES[slideActual];

  // Navegación por teclado (Flechas izquierda y derecha)
  // Se ignora si el foco está dentro de un input o textarea
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        avanzarSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        retrocederSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideActual]);

  const avanzarSlide = () => {
    if (slideActual < SLIDES.length - 1) {
      setSlideActual(prev => prev + 1);
    }
  };

  const retrocederSlide = () => {
    if (slideActual > 0) {
      setSlideActual(prev => prev - 1);
    }
  };

  return (
    <div className="presentation-container animate-fade-in">
      {/* Barra superior del modo presentación */}
      <div className="presentation-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="badge badge-indigo" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} /> Modo Exposición Guiada
          </span>
          <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Diapositiva <strong>{slide.numero}</strong> de {SLIDES.length}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <Clock size={15} color="var(--accent-cyan)" />
            Tiempo de esta pantalla: <strong style={{ color: '#ffffff' }}>{slide.tiempoEstimado}</strong>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            Tiempo acumulado previsto: ~9:05 min
          </div>
        </div>
      </div>

      {/* Pista de progreso visual */}
      <div className="presentation-progress-track">
        <div
          className="presentation-progress-fill"
          style={{ width: `${((slideActual + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Tarjeta de la Diapositiva Activa */}
      <div className="slide-card animate-fade-in" key={slide.id}>
        {/* Cabecera del Expositor y Rol */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div className={`slide-speaker-tag ${slide.expositorClase}`}>
            <User size={14} /> Expositor: {slide.expositor} • {slide.rol}
          </div>

          <Link
            to={slide.seccionRuta}
            className="btn-secondary"
            style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            Abrir Módulo Completo <ExternalLink size={13} />
          </Link>
        </div>

        <h1 className="slide-title">{slide.titulo}</h1>
        <p className="slide-subtitle">{slide.subtitulo}</p>

        {/* Cuerpo en dos columnas (Puntos Clave + Código Didáctico) */}
        <div className="slide-body-grid">
          {/* Columna Izquierda: Puntos clave pedagógicos */}
          <div className="slide-concept-box">
            <h3 style={{ fontSize: '1rem', color: 'var(--accent-cyan)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} /> Puntos Fundamentales para Explicar:
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
              {slide.puntosClave.map((punto, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 700, marginTop: '0.1rem' }}>›</span>
                  <span>{punto}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Derecha: Código didáctico representativo */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                Código Didáctico Representativo:
              </span>
            </div>
            <pre className="slide-code-preview">
              <code>{slide.codigoSnippet}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Controles de Navegación del Modo Presentación */}
      <div className="presentation-nav-footer">
        <button
          onClick={retrocederSlide}
          disabled={slideActual === 0}
          className="btn-secondary"
          style={{ opacity: slideActual === 0 ? 0.4 : 1, cursor: slideActual === 0 ? 'not-allowed' : 'pointer' }}
        >
          <ChevronLeft size={18} /> Diapositiva Anterior
        </button>

        {/* Píldoras indicadoras */}
        <div className="slide-indicator-pills">
          {SLIDES.map((s, idx) => (
            <div
              key={s.id}
              className={`slide-pill ${idx === slideActual ? 'active' : ''}`}
              onClick={() => setSlideActual(idx)}
              title={`Ir a: ${s.titulo}`}
            />
          ))}
        </div>

        <button
          onClick={avanzarSlide}
          disabled={slideActual === SLIDES.length - 1}
          className="btn-primary"
          style={{ opacity: slideActual === SLIDES.length - 1 ? 0.4 : 1, cursor: slideActual === SLIDES.length - 1 ? 'not-allowed' : 'pointer' }}
        >
          Siguiente Diapositiva <ChevronRight size={18} />
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
        Tip de oratoria: Usa las teclas <code>←</code> y <code>→</code> para avanzar o retroceder de diapositiva.
      </div>
    </div>
  );
};
