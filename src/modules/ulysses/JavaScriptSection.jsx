import React, { useState, useEffect, useMemo } from 'react';
import {
  Code2,
  Sparkles,
  Play,
  RotateCcw,
  Search,
  Filter,
  CheckCircle,
  AlertCircle,
  Layers,
  ArrowRight,
  ShieldCheck,
  Lock,
  Unlock,
  Terminal,
  Zap,
  FolderGit2,
  Check,
  Copy,
  Eye,
  FileCode2,
  Cpu
} from 'lucide-react';
import './JavaScriptSection.css';

// -------------------------------------------------------------
// DATOS REALES DE EJEMPLO BASADOS EN EL HISTORIAL DEL CURSO
// -------------------------------------------------------------
const CURSO_LECCIONES = [
  {
    id: 1,
    titulo: 'Fundamentos de Variables y Scope',
    categoria: 'Sintaxis',
    tipo: 'let, const y tipos primitivos',
    proyectoRelacionado: 'HappyLab / JS Vanilla',
    dificultad: 'Básico',
    icono: '📦'
  },
  {
    id: 2,
    titulo: 'Funciones Puras e Inmutabilidad',
    categoria: 'Funcional',
    tipo: 'Parámetros, retornos sin efectos secundarios',
    proyectoRelacionado: 'Gestor de Gastos (Cálculos)',
    dificultad: 'Intermedio',
    icono: '⚡'
  },
  {
    id: 3,
    titulo: 'Transformación de Datos con .map()',
    categoria: 'Arreglos',
    tipo: 'Proyección reactiva de listas en JSX',
    proyectoRelacionado: 'Laboratorio de Ternarios & Reto',
    dificultad: 'Intermedio',
    icono: '🔄'
  },
  {
    id: 4,
    titulo: 'Filtrado Reactivo con .filter()',
    categoria: 'Arreglos',
    tipo: 'Búsqueda instantánea por criterios dinámicos',
    proyectoRelacionado: 'StudentsFilter / Rick & Morty',
    dificultad: 'Intermedio',
    icono: '🔍'
  },
  {
    id: 5,
    titulo: 'Renderizado Condicional con Operador Ternario',
    categoria: 'React',
    tipo: 'condicion ? <Exito /> : <Vacio />',
    proyectoRelacionado: 'Laboratorios de React',
    dificultad: 'Básico',
    icono: '🔀'
  },
  {
    id: 6,
    titulo: 'Gestión de Estado con useState',
    categoria: 'React',
    tipo: 'Flujo unidireccional y disparadores de re-render',
    proyectoRelacionado: 'Gestor de Gastos React',
    dificultad: 'Intermedio',
    icono: '⚛️'
  },
  {
    id: 7,
    titulo: 'Efectos Asíncronos con useEffect',
    categoria: 'React',
    tipo: 'Consumo de APIs y suscripción de ciclo de vida',
    proyectoRelacionado: 'Rick and Morty API / Clima',
    dificultad: 'Avanzado',
    icono: '⏳'
  },
  {
    id: 8,
    titulo: 'Contexto Global con useContext',
    categoria: 'Arquitectura',
    tipo: 'Evitar prop drilling en sesiones y carritos',
    proyectoRelacionado: 'Moka & Canela (OrderContext)',
    dificultad: 'Avanzado',
    icono: '🌐'
  },
  {
    id: 9,
    titulo: 'Rutas Protegidas y Auth Guards',
    categoria: 'Enrutamiento',
    tipo: 'PrivateRoutes y redirección a login',
    proyectoRelacionado: 'Rutas priv / TalenTico',
    dificultad: 'Avanzado',
    icono: '🛡️'
  },
  {
    id: 10,
    titulo: 'Pruebas Unitarias y React Testing Library',
    categoria: 'Testing',
    tipo: 'screen.getByRole y aserciones de comportamiento',
    proyectoRelacionado: 'test 3 (ClimateResult.test.jsx)',
    dificultad: 'Avanzado',
    icono: '🧪'
  }
];

// Función utilitaria pura para demostración de testing
export const calcularTotalItems = (lista) => {
  if (!Array.isArray(lista)) return 0;
  return lista.length;
};

export const filtrarPorCategoria = (lista, categoria) => {
  if (!Array.isArray(lista)) return [];
  if (!categoria || categoria === 'Todas') return lista;
  return lista.filter(item => item.categoria === categoria);
};

export default function JavaScriptSection() {
  const [tabActiva, setTabActiva] = useState('taller1');

  // Estados del Taller 1 (Interactividad, .map, .filter, ternarios y botón)
  const [contadorInteracciones, setContadorInteracciones] = useState(0);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');
  const [mostrarCodigo, setMostrarCodigo] = useState(false);
  const [ultimoEvento, setUltimoEvento] = useState('Inicio del módulo');

  // Estados del Taller 2 (DOM vs React)
  const [domTexto, setDomTexto] = useState('Texto reactivo inicial');
  const [contadorImperativo, setContadorImperativo] = useState(0);

  // Estados del Taller 3 (Hooks: useEffect simulación)
  const [simulacionActiva, setSimulacionActiva] = useState(false);
  const [segundosSimulados, setSegundosSimulados] = useState(0);
  const [datosApi, setDatosApi] = useState(null);
  const [cargandoApi, setCargandoApi] = useState(false);

  // Estados del Taller 4 (Rutas protegidas y Testing)
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  const [testResultado, setTestResultado] = useState(null);

  // Recuperar sesión simulada de localStorage si existía (Patrón LoginMaster)
  useEffect(() => {
    try {
      const guardado = localStorage.getItem('demo_ulysses_auth');
      if (guardado) {
        setUsuarioAutenticado(JSON.parse(guardado));
        setSesionIniciada(true);
      }
    } catch (e) {
      console.warn('LocalStorage no accesible');
    }
  }, []);

  // Simulación de useEffect con timer limpio (Patrón useGameTimer / Clima)
  useEffect(() => {
    let intervalo = null;
    if (simulacionActiva) {
      intervalo = setInterval(() => {
        setSegundosSimulados((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [simulacionActiva]);

  // Lista procesada declarativamente con .filter()
  const leccionesFiltradas = useMemo(() => {
    return CURSO_LECCIONES.filter((item) => {
      const coincideTexto = item.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        item.tipo.toLowerCase().includes(busqueda.toLowerCase()) ||
        item.proyectoRelacionado.toLowerCase().includes(busqueda.toLowerCase());
      const coincideCat = categoriaFiltro === 'Todas' || item.categoria === categoriaFiltro;
      return coincideTexto && coincideCat;
    });
  }, [busqueda, categoriaFiltro]);

  // Manejador de evento interactivo con actualización inmutable
  const manejarInteraccionBoton = () => {
    setContadorInteracciones((prev) => prev + 1);
    setUltimoEvento(`Clic registrado en botón interactivo a las ${new Date().toLocaleTimeString()}`);
  };

  // Manejador de inicio de sesión simulado
  const toggleAutenticacion = () => {
    if (sesionIniciada) {
      localStorage.removeItem('demo_ulysses_auth');
      setSesionIniciada(false);
      setUsuarioAutenticado(null);
    } else {
      const nuevoUsuario = { nombre: 'Ulysses Quirós', rol: 'Desarrollador Front End', expiracion: '1h' };
      localStorage.setItem('demo_ulysses_auth', JSON.stringify(nuevoUsuario));
      setSesionIniciada(true);
      setUsuarioAutenticado(nuevoUsuario);
    }
  };

  // Simulación de petición de API (Patrón Rick and Morty / Clima)
  const simularPeticionApi = () => {
    setCargandoApi(true);
    setDatosApi(null);
    setTimeout(() => {
      setDatosApi({
        status: 200,
        fuente: 'Rick and Morty API Simulator',
        personaje: 'Rick Sanchez',
        especie: 'Human',
        origen: 'Earth (C-137)',
        latenciaMs: 142
      });
      setCargandoApi(false);
    }, 1200);
  };

  // Ejecutor de prueba unitaria en vivo
  const ejecutarPruebaUnitaria = () => {
    const listaTest = [{ id: 1, categoria: 'React' }, { id: 2, categoria: 'Testing' }];
    const total = calcularTotalItems(listaTest);
    const filtrados = filtrarPorCategoria(listaTest, 'React');

    const pasa1 = total === 2;
    const pasa2 = filtrados.length === 1 && filtrados[0].id === 1;

    setTestResultado({
      ejecutado: true,
      pasa: pasa1 && pasa2,
      detalles: [
        { test: 'calcularTotalItems retorna la longitud exacta de la colección', exito: pasa1 },
        { test: 'filtrarPorCategoria aísla elementos de forma inmutable sin efectos secundarios', exito: pasa2 }
      ]
    });
  };

  const categoriasDisponibles = ['Todas', 'Sintaxis', 'Funcional', 'Arreglos', 'React', 'Arquitectura', 'Enrutamiento', 'Testing'];

  return (
    <div className="js-section-wrapper container animate-fade-in">
      {/* Encabezado del Módulo de Ulysses */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div className="js-header-badge">
          <Sparkles size={14} /> Módulo 3 • Exposición Especializada
        </div>
        <h1 className="js-title">
          JavaScript, Interactividad y el Modelo Declarativo de <span className="gradient-accent-text">React</span>
        </h1>
        <p className="js-subtitle">
          Expositor: <strong>Ulysses Quirós</strong>. Demostración práctica de cómo la programación funcional, la manipulación de estado, el ecosistema de hooks y el control de calidad fundamentaron los proyectos del curso.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          backgroundColor: 'rgba(99, 102, 241, 0.08)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.5rem',
          fontSize: '0.88rem'
        }}>
          <div>
            <strong style={{ color: '#ffffff' }}>Rama de Git:</strong> <code>feature/ulysses-javascript</code>
          </div>
          <div style={{ color: 'var(--text-dim)' }}>|</div>
          <div>
            <strong style={{ color: '#ffffff' }}>Módulos asociados:</strong> <code>src/modules/ulysses/</code>
          </div>
          <div style={{ color: 'var(--text-dim)' }}>|</div>
          <div>
            <strong style={{ color: '#ffffff' }}>Duración intervención:</strong> ~3:00 min
          </div>
        </div>
      </div>

      {/* Barra de Pestañas del Taller */}
      <div className="js-tabs-bar">
        <button
          className={`js-tab-btn ${tabActiva === 'taller1' ? 'active' : ''}`}
          onClick={() => setTabActiva('taller1')}
        >
          <Zap size={16} /> 1. Interactividad, .map(), .filter() & Ternarios
        </button>
        <button
          className={`js-tab-btn ${tabActiva === 'taller2' ? 'active' : ''}`}
          onClick={() => setTabActiva('taller2')}
        >
          <Layers size={16} /> 2. JS Tradicional (DOM) vs React Declarativo
        </button>
        <button
          className={`js-tab-btn ${tabActiva === 'taller3' ? 'active' : ''}`}
          onClick={() => setTabActiva('taller3')}
        >
          <Cpu size={16} /> 3. Hooks (useState, useEffect, useContext)
        </button>
        <button
          className={`js-tab-btn ${tabActiva === 'taller4' ? 'active' : ''}`}
          onClick={() => setTabActiva('taller4')}
        >
          <ShieldCheck size={16} /> 4. Rutas Protegidas & Testing en Vivo
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TALLER 1: INTERACTIVIDAD, .MAP(), .FILTER() Y TERNARIOS        */}
      {/* ------------------------------------------------------------- */}
      {tabActiva === 'taller1' && (
        <div className="js-interactive-panel animate-fade-in">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '0.25rem' }}>
                Taller Interactivo: Programación Reactiva en Tiempo Real
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Demostración ejecutable de eventos click, filtrado reactivo con <code>.filter()</code>, proyección con <code>.map()</code> y renderizado condicional con ternarios.
              </p>
            </div>

            <button
              onClick={() => setMostrarCodigo(!mostrarCodigo)}
              className="btn-secondary"
              style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
            >
              <FileCode2 size={16} /> {mostrarCodigo ? 'Ocultar Código Didáctico' : 'Ver Código Didáctico'}
            </button>
          </div>

          {/* Código didáctico desplegable */}
          {mostrarCodigo && (
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Terminal size={14} /> Fragmento de Código Ejecutado en esta Vista:
              </div>
              <pre className="code-display">
{`// 1. Filtrado funcional e inmutable con .filter()
const leccionesFiltradas = CURSO_LECCIONES.filter((item) => {
  const coincideTexto = item.titulo.toLowerCase().includes(busqueda.toLowerCase());
  const coincideCat = categoriaFiltro === 'Todas' || item.categoria === categoriaFiltro;
  return coincideTexto && coincideCat; // Predicado booleano
});

// 2. Renderizado condicional mediante Operador Ternario (? :)
{leccionesFiltradas.length === 0 ? (
  <EstadoVacio mensaje="No se encontraron lecciones coincidentes" />
) : (
  // 3. Proyección iterativa de componentes con .map() y key única
  leccionesFiltradas.map((item) => (
    <TarjetaLeccion key={item.id} data={item} />
  ))
)}`}
              </pre>
            </div>
          )}

          {/* Barra de Control Interactivo (Botón, Contador y Búsqueda) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '2rem'
          }}>
            {/* Control 1: Botón de Interacción y Cambio en Pantalla */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
                1. Interacción por Evento Click:
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <button
                  onClick={manejarInteraccionBoton}
                  className="btn-primary"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
                >
                  <Play size={16} /> Disparar Interacción
                </button>
                <div style={{
                  padding: '0.5rem 0.85rem',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-focus)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)'
                }}>
                  Clicks: {contadorInteracciones}
                </div>
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-dim)', marginTop: '0.4rem' }}>
                {ultimoEvento}
              </div>
            </div>

            {/* Control 2: Input de Filtrado en Tiempo Real */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
                2. Filtrar Colección de Datos (Búsqueda Reactiva):
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--bg-primary)',
                padding: '0.6rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}>
                <Search size={16} color="var(--text-dim)" />
                <input
                  type="text"
                  placeholder="Escribe: 'map', 'scope', 'useState', 'router'..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--text-main)',
                    width: '100%',
                    fontSize: '0.85rem'
                  }}
                />
                {busqueda && (
                  <button onClick={() => setBusqueda('')} style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Control 3: Filtro por Categoría */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
                3. Filtrar por Dimensión Técnica:
              </label>
              <select
                value={categoriaFiltro}
                onChange={(e) => setCategoriaFiltro(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-main)',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              >
                {categoriasDisponibles.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Estadísticas de la Colección */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <div>
              Mostrando <strong>{leccionesFiltradas.length}</strong> lecciones con renderizado iterativo <code>.map()</code>
            </div>
            {categoriaFiltro !== 'Todas' && (
              <span className="badge badge-indigo">Categoría activa: {categoriaFiltro}</span>
            )}
          </div>

          {/* Renderizado Condicional con Operador Ternario (? :) */}
          {leccionesFiltradas.length === 0 ? (
            /* Estado Vacío / Condicional (Ternario rama falsa) */
            <div className="empty-state-box animate-fade-in">
              <AlertCircle size={40} color="var(--accent-amber)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Ninguna lección coincide con el criterio
              </h3>
              <p style={{ fontSize: '0.9rem', maxWidth: '450px', margin: '0 auto 1.5rem auto' }}>
                El operador ternario <code>items.length === 0 ? &lt;EstadoVacio /&gt; : &lt;Lista /&gt;</code> evita renderizar contenedores vacíos o elementos nulos en el DOM.
              </p>
              <button
                onClick={() => { setBusqueda(''); setCategoriaFiltro('Todas'); }}
                className="btn-secondary"
                style={{ fontSize: '0.85rem' }}
              >
                <RotateCcw size={15} /> Restaurar Filtros
              </button>
            </div>
          ) : (
            /* Lista Reactiva Renderizada con .map() (Ternario rama verdadera) */
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1rem'
            }}>
              {leccionesFiltradas.map((item) => (
                <div key={item.id} className="item-card animate-fade-in">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.3rem' }}>{item.icono}</span>
                    <span className="badge badge-indigo" style={{ fontSize: '0.7rem' }}>
                      {item.categoria}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {item.titulo}
                  </h4>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {item.tipo}
                  </p>

                  <div style={{
                    marginTop: 'auto',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.75rem',
                    color: 'var(--text-dim)'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-cyan)' }}>
                      <FolderGit2 size={13} /> {item.proyectoRelacionado}
                    </span>
                    <span style={{ fontWeight: 600 }}>ID: #{item.id}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Caja didáctica explicativa */}
          <div className="didactic-box">
            <strong>💡 Clave para la exposición oral (Ulysses):</strong>
            {" "}En JavaScript funcional, <code>.map()</code> y <code>.filter()</code> no mutan el arreglo original, sino que devuelven nuevas referencias en memoria. Esto es exactamente lo que React necesita para comparar si el estado cambió y re-renderizar la vista de manera predecible.
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TALLER 2: JAVASCRIPT TRADICIONAL (DOM) VS REACT DECLARATIVO  */}
      {/* ------------------------------------------------------------- */}
      {tabActiva === 'taller2' && (
        <div className="js-interactive-panel animate-fade-in">
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '0.35rem' }}>
              Diferencias Fundamentales: Paradigma Imperativo vs Declarativo
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Contraste entre manipular manualmente el DOM con JavaScript Vanilla (como en <em>LoginMaster</em>) y sincronizar el estado reactivo en React (como en <em>Gestor de Gastos</em>).
            </p>
          </div>

          <div className="comparison-grid">
            {/* Lado 1: JS Tradicional Imperativo */}
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="badge" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#f87171' }}>
                  Modelo Imperativo (Vanilla DOM)
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Ej. LoginMaster</span>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                El desarrollador le indica al navegador <strong>cómo</strong> hacer cada paso: buscar el nodo, alterar sus clases, modificar el <code>textContent</code> e insertar hijos manualmente.
              </p>

              <pre className="code-display" style={{ marginBottom: '1rem', fontSize: '0.8rem' }}>
{`// Manipulación manual e imperativa
const btn = document.getElementById('btnSubmit');
const status = document.getElementById('status');

btn.addEventListener('click', () => {
  // Búsqueda manual en el árbol del DOM
  status.textContent = 'Guardando...';
  status.classList.add('loading');
  
  // Riesgo: Si el nodo no existe en el DOM,
  // ocurre un TypeError: Cannot read property
});`}
              </pre>

              <div style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem',
                color: '#fca5a5'
              }}>
                ⚠️ <strong>Desventaja técnica:</strong> Difícil de mantener en aplicaciones complejas. Frecuentes bugs por desincronización entre la memoria y la pantalla.
              </div>
            </div>

            {/* Lado 2: React Declarativo */}
            <div style={{
              backgroundColor: 'rgba(99, 102, 241, 0.05)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="badge badge-indigo">
                  Modelo Declarativo (React)
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>Ej. Gestor de Gastos</span>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                El desarrollador describe <strong>qué</strong> debe mostrarse según el estado actual: la interfaz es una función pura del estado <code>UI = f(State)</code>.
              </p>

              <pre className="code-display" style={{ marginBottom: '1rem', fontSize: '0.8rem' }}>
{`// Modelo declarativo con Hooks
const [isSaving, setIsSaving] = useState(false);

const handleSave = () => {
  setIsSaving(true); // Cambiamos el estado
};

// React calcula el Virtual DOM y actualiza
// únicamente los nodos que cambiaron (diffing)
return (
  <button onClick={handleSave}>
    {isSaving ? 'Guardando...' : 'Guardar'}
  </button>
);`}
              </pre>

              <div style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem',
                color: '#a5b4fc'
              }}>
                ✨ <strong>Ventaja técnica:</strong> Predictibilidad total. Virtual DOM ejecuta el algoritmo de reconciliación minimizando accesos costosos al DOM real.
              </div>
            </div>
          </div>

          {/* Comparativa Interactiva en Vivo */}
          <div style={{ marginTop: '2.5rem', backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Play size={18} color="var(--accent-cyan)" /> Demostración de Reactividad Declarativa:
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1rem' }}>
              Escribe un valor y observa cómo React re-renderiza la salida de forma reactiva sin invocar jamás <code>document.getElementById</code>.
            </p>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="text"
                value={domTexto}
                onChange={(e) => setDomTexto(e.target.value)}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-focus)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.65rem 1rem',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  flex: '1 1 250px'
                }}
              />
              <div style={{
                padding: '0.65rem 1.25rem',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.4)',
                borderRadius: 'var(--radius-sm)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}>
                Salida en Estado React: <span style={{ color: 'var(--accent-cyan)' }}>"{domTexto}"</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TALLER 3: HOOKS DEL ECOSISTEMA (STATE, EFFECT, CONTEXT)        */}
      {/* ------------------------------------------------------------- */}
      {tabActiva === 'taller3' && (
        <div className="js-interactive-panel animate-fade-in">
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '0.35rem' }}>
              Ecosistema de React Hooks en Proyectos Reales
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Análisis de <code>useState</code>, <code>useEffect</code> y <code>useContext</code> comprobados en los proyectos <em>Automatización climática</em>, <em>Rick & Morty</em> y <em>Moka & Canela</em>.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.5rem' }}>
            {/* Hook 1: useState */}
            <div className="card-glass" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-indigo">useState</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Gestor de Gastos</span>
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Manejo de Estado Local</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                Preserva valores entre renderizados y notifica a React que debe ejecutar una nueva fase de render.
              </p>
              <pre className="code-display" style={{ fontSize: '0.78rem' }}>
{`const [gastos, setGastos] = useState([]);

// Inmutabilidad: operador spread (...)
setGastos([...gastos, nuevoGasto]);`}
              </pre>
            </div>

            {/* Hook 2: useEffect */}
            <div className="card-glass" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-cyan">useEffect</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>useClimateAutomation</span>
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Efectos & Limpieza</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                Sincroniza el componente con sistemas externos (APIs, timers, eventos) con función de cleanup obligatoria.
              </p>
              <pre className="code-display" style={{ fontSize: '0.78rem' }}>
{`useEffect(() => {
  const timer = setInterval(...);
  return () => clearInterval(timer);
}, [dependencia]);`}
              </pre>
            </div>

            {/* Hook 3: useContext */}
            <div className="card-glass" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-emerald">useContext</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>OrderContext (Moka)</span>
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Estado Global sin Prop-Drilling</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                Comparte datos globales (usuario autenticado, carrito de compras) a través de todo el árbol de componentes.
              </p>
              <pre className="code-display" style={{ fontSize: '0.78rem' }}>
{`const { orden, agregarItem } = useOrder();
// Disponible en Catalogo, Resumen y Checkout`}
              </pre>
            </div>
          </div>

          {/* Demostración interactiva de useEffect con temporizador y consumo de API */}
          <div style={{ marginTop: '2rem', backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Laboratorio en Vivo: Simulación Asíncrona de API (Rick & Morty / Clima)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              Observa los tres estados asíncronos estándar: <strong>cargando (loading)</strong>, <strong>éxito (data)</strong> y <strong>limpieza de efectos</strong>.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.5rem' }}>
              <button
                onClick={simularPeticionApi}
                disabled={cargandoApi}
                className="btn-primary"
                style={{ fontSize: '0.88rem' }}
              >
                {cargandoApi ? 'Consumiendo API...' : 'Ejecutar Petición Asíncrona'}
              </button>

              <button
                onClick={() => setSimulacionActiva(!simulacionActiva)}
                className="btn-secondary"
                style={{ fontSize: '0.88rem' }}
              >
                {simulacionActiva ? 'Pausar Timer useEffect' : 'Activar Timer useEffect'}
              </button>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                Segundos transcurridos en timer: <strong>{segundosSimulados}s</strong>
              </div>
            </div>

            {/* Resultado de la llamada asíncrona */}
            {cargandoApi && (
              <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--accent-cyan)' }}>
                ⏳ Cargando datos de servicio asíncrono (simulando fetch con async/await)...
              </div>
            )}

            {datosApi && (
              <div className="animate-fade-in" style={{ backgroundColor: 'var(--bg-primary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="badge badge-emerald">Respuesta 200 OK</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Latencia: {datosApi.latenciaMs}ms</span>
                </div>
                <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: '#a5d6ff' }}>
                  Personaje: <strong>{datosApi.personaje}</strong> | Especie: {datosApi.especie} | Origen: {datosApi.origen}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TALLER 4: RUTAS PROTEGIDAS, LOCALSTORAGE & TESTING            */}
      {/* ------------------------------------------------------------- */}
      {tabActiva === 'taller4' && (
        <div className="js-interactive-panel animate-fade-in">
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '0.35rem' }}>
              Rutas Protegidas, Almacenamiento y Pruebas Unitarias
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Mecanismos de seguridad en React Router (proyecto <em>Rutas priv</em>), persistencia en <code>localStorage</code> y suites de prueba con <em>React Testing Library</em> y <em>Vitest</em> (proyecto <em>test 3</em>).
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {/* Simulador de Rutas Protegidas & LocalStorage */}
            <div className="card-glass" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {sesionIniciada ? <Unlock size={18} color="var(--accent-emerald)" /> : <Lock size={18} color="var(--accent-amber)" />}
                  Guarda de Ruta: &lt;PrivateRoutes /&gt;
                </h3>
                <span className={`badge ${sesionIniciada ? 'badge-emerald' : 'badge-amber'}`}>
                  {sesionIniciada ? 'Acceso Autorizado' : 'Acceso Restringido'}
                </span>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                Patrón verificado en <code>Rutas priv/src/routes/PrivateRoutes.jsx</code>: verifica la sesión en <code>AuthContext</code> y <code>localStorage</code> antes de renderizar la vista protegida.
              </p>

              <button
                onClick={toggleAutenticacion}
                className={sesionIniciada ? 'btn-secondary' : 'btn-primary'}
                style={{ width: '100%', justifyContent: 'center', marginBottom: '1.25rem' }}
              >
                {sesionIniciada ? 'Cerrar Sesión (Simular Logout)' : 'Iniciar Sesión (Simular Login en LocalStorage)'}
              </button>

              <div style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem'
              }}>
                <div style={{ color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                  Estado en <code>localStorage('demo_ulysses_auth')</code>:
                </div>
                {usuarioAutenticado ? (
                  <div style={{ color: '#a7f3d0', fontFamily: 'var(--font-mono)' }}>
                    ✅ Usuario: {usuarioAutenticado.nombre} ({usuarioAutenticado.rol})
                  </div>
                ) : (
                  <div style={{ color: '#fca5a5', fontFamily: 'var(--font-mono)' }}>
                    ❌ null (Redirección programática a /login)
                  </div>
                )}
              </div>
            </div>

            {/* Simulador de Pruebas Unitarias (Vitest & Testing Library) */}
            <div className="card-glass" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Terminal size={18} color="var(--accent-primary)" />
                  Suite de Pruebas Unitarias
                </h3>
                <span className="badge badge-cyan">test 3 & Jest/Vitest</span>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                Pruebas de funciones puras y componentes aislados. Ejecuta las aserciones en vivo sobre la lógica del módulo.
              </p>

              <button
                onClick={ejecutarPruebaUnitaria}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '1.25rem' }}
              >
                <Play size={16} /> Ejecutar Test Suite en Vivo
              </button>

              {testResultado ? (
                <div className="animate-fade-in" style={{
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <div style={{ color: testResultado.pasa ? '#4ade80' : '#f87171', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {testResultado.pasa ? '✓ PASS: 2 de 2 pruebas superadas (100%)' : '✗ FAIL: Se detectaron fallas'}
                  </div>
                  {testResultado.detalles.map((d, idx) => (
                    <div key={idx} style={{ color: d.exito ? '#a7f3d0' : '#fca5a5', marginBottom: '0.25rem' }}>
                      {d.exito ? '✓' : '✗'} {d.test}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', textAlign: 'center', padding: '1rem 0' }}>
                  Presiona el botón para ejecutar las aserciones automatizadas.
                </div>
              )}
            </div>
          </div>

          {/* Ficha didáctica de buenas prácticas */}
          <div className="didactic-box" style={{ marginTop: '2rem' }}>
            <strong>💡 Principio de Código Limpio y Testing (Ulysses):</strong>
            {" "}Las funciones puras son aquellas que para las mismas entradas siempre devuelven la misma salida y no tienen efectos secundarios. Al desacoplar la lógica de cálculo (funciones puras) de la presentación (componentes React), logramos una cobertura de tests predecible, robusta y libre de mocks innecesarios.
          </div>
        </div>
      )}
    </div>
  );
}
