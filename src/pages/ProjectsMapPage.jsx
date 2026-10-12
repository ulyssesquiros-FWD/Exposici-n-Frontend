import React, { useState } from 'react';
import { BookOpen, FolderGit2, CheckCircle, Search, Layers, Cpu, ShieldCheck } from 'lucide-react';

const PROYECTOS = [
  {
    id: 'loginmaster',
    nombre: 'LoginMaster',
    categoria: 'JS Vanilla / DOM',
    ruta: 'Frontend/HappyLab/loginmaster',
    conceptos: ['Validación con Regex', 'Manipulación directa del DOM', 'LocalStorage para sesiones', 'Alternancia de tema Light/Dark'],
    leccion: 'Demuestra cómo en JavaScript tradicional cada evento requiere sincronizar manualmente el árbol del DOM con querySelector y classList, originando propensión a desincronizaciones frente al modelo declarativo.',
    iconColor: '#f59e0b',
  },
  {
    id: 'gestor-gastos',
    nombre: 'Gestor de Gastos en React',
    categoria: 'React Fundamentos',
    ruta: 'Frontend/React/gestor-gastos-react',
    conceptos: ['Componentes atómicos (Button, ExpenseCard, Header)', 'Paso de props', 'Inmutabilidad de estado', 'Cálculo de balances'],
    leccion: 'Ilustra la separación estricta de responsabilidades: los componentes de presentación reciben datos y callbacks sin alterar directamente variables de cálculo globales.',
    iconColor: '#10b981',
  },
  {
    id: 'ternarios-labs',
    nombre: 'Laboratorios de React & Ternarios',
    categoria: 'React Fundamentos',
    ruta: 'Frontend/Ternarios/src/components/react-practice',
    conceptos: ['Métodos .map() y .filter()', 'Operadores ternarios en JSX', 'Keys estables', 'Renderizado de estados vacíos'],
    leccion: 'Ejemplifica la programación funcional aplicada a interfaces de usuario: una lista reactiva derivada del estado de búsqueda sin bucles for tradicionales ni inserciones appendChild.',
    iconColor: '#6366f1',
  },
  {
    id: 'rutas-priv',
    nombre: 'Prácticas de React Router & Rutas Privadas',
    categoria: 'Enrutamiento & Estado Global',
    ruta: 'Frontend/Rutas priv',
    conceptos: ['React Router 7', 'Guardas de navegación con PrivateRoutes', 'Contexto global AuthContext', 'Rutas hijas con Outlet'],
    leccion: 'Resuelve la protección de pantallas sensibles (Dashboard, Perfil, Usuarios) redirigiendo a los invitados hacia /login y manteniendo la URL previa para redirección post-autenticación.',
    iconColor: '#06b6d4',
  },
  {
    id: 'testing-calidad',
    nombre: 'Prácticas de Testing & Calidad',
    categoria: 'Testing & QA',
    ruta: 'Frontend/test 3, Proyecto Frontend',
    conceptos: ['Pruebas unitarias de funciones puras', 'Vitest y Jest', 'React Testing Library', 'Aserciones accesibles por rol'],
    leccion: 'Establece la regla de oro del testing moderno: probar el comportamiento del software desde la perspectiva del usuario final en lugar de testear detalles internos de implementación.',
    iconColor: '#ec4899',
  },
  {
    id: 'clima-auto',
    nombre: 'Automatización Climática',
    categoria: 'Hooks & Asincronía',
    ruta: 'Frontend/test 3 (useClimateAutomation, climateService)',
    conceptos: ['Custom Hooks desacoplados', 'Consumo de servicios asíncronos', 'Estados loading, error y data', 'Mitigación de riesgos de red'],
    leccion: 'Aísla la lógica de petición asíncrona dentro del hook useClimateAutomation, dejando el componente de interfaz libre de efectos secundarios y fácil de testear en aislamiento.',
    iconColor: '#8b5cf6',
  },
  {
    id: 'rick-morty',
    nombre: 'Rick and Morty API',
    categoria: 'APIs & Componentes',
    ruta: 'Frontend/Rick&Morty',
    conceptos: ['Consumo de REST API pública', 'Paginación reactiva', 'Búsqueda reactiva', 'Estado global de Favoritos'],
    leccion: 'Enfrenta los retos de asincronía en redes reales: debounce en inputs de búsqueda, visualización de spinners durante la carga y diseño de tarjetas interactivas.',
    iconColor: '#14b8a6',
  },
  {
    id: 'moka-canela',
    nombre: 'Moka & Canela (E-Commerce)',
    categoria: 'Estado Complejo & Negocio',
    ruta: 'Frontend/Moka/moka-canela-',
    conceptos: ['OrderContext para carrito global', 'Cálculo reactivo de subtotales', 'Catálogo categorizado', 'Flujo de checkout'],
    leccion: 'Muestra la sincronización de estado complejo entre múltiples páginas disjuntas (Catálogo, Resumen, Checkout) sin acoplamiento rígido de componentes.',
    iconColor: '#f97316',
  },
  {
    id: 'talentico',
    nombre: 'TalenTico',
    categoria: 'Proyecto Integrador',
    ruta: 'Frontend/Poyecto/TalenTico/talentico',
    conceptos: ['Arquitectura modular por carpetas', 'Formularios controlados', 'JSON Server', 'Control de calidad en equipo'],
    leccion: 'Consolida todas las disciplinas del curso en un producto de nivel empresarial: estandarización de contratos de datos, componentización visual y trabajo colaborativo.',
    iconColor: '#3b82f6',
  },
];

export const ProjectsMapPage = () => {
  const [termino, setTermino] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  const categorias = ['Todos', 'React Fundamentos', 'JS Vanilla / DOM', 'Enrutamiento & Estado Global', 'Testing & QA', 'Hooks & Asincronía', 'APIs & Componentes', 'Estado Complejo & Negocio', 'Proyecto Integrador'];

  const proyectosFiltrados = PROYECTOS.filter((p) => {
    const coincideTermino = p.nombre.toLowerCase().includes(termino.toLowerCase()) ||
      p.conceptos.some(c => c.toLowerCase().includes(termino.toLowerCase())) ||
      p.leccion.toLowerCase().includes(termino.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === 'Todos' || p.categoria === categoriaSeleccionada;
    return coincideTermino && coincideCategoria;
  });

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem 5rem 1.5rem' }}>
      {/* Encabezado */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
          <span className="badge badge-cyan" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={14} /> Evidencia Curricular
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          Mapa de Proyectos Reales del Curso
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem' }}>
          Exploración de las 9 bases de código verificadas en el entorno local de desarrollo. Cada proyecto demuestra conceptos específicos aplicados en la exposición.
        </p>
      </div>

      {/* Controles de Búsqueda y Filtrado */}
      <div className="card-glass" style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--bg-primary)',
            padding: '0.65rem 1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            flex: '1 1 300px'
          }}>
            <Search size={18} color="var(--text-dim)" />
            <input
              type="text"
              placeholder="Buscar por nombre, hook, técnica o concepto..."
              value={termino}
              onChange={(e) => setTermino(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-main)',
                width: '100%',
                fontSize: '0.9rem'
              }}
            />
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Mostrando <strong>{proyectosFiltrados.length}</strong> de <strong>{PROYECTOS.length}</strong> proyectos
          </div>
        </div>

        {/* Botones de categoría */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSeleccionada(cat)}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 500,
                backgroundColor: categoriaSeleccionada === cat ? 'var(--accent-primary)' : 'var(--bg-surface)',
                color: categoriaSeleccionada === cat ? '#ffffff' : 'var(--text-muted)',
                border: '1px solid',
                borderColor: categoriaSeleccionada === cat ? 'var(--accent-primary)' : 'var(--border-subtle)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Proyectos */}
      {proyectosFiltrados.length === 0 ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            No se encontraron proyectos que coincidan con "{termino}".
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {proyectosFiltrados.map((p) => (
            <div key={p.id} className="card-glass" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>
                  {p.nombre}
                </h3>
                <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: p.iconColor, borderColor: 'rgba(255,255,255,0.1)' }}>
                  {p.categoria}
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                color: 'var(--text-dim)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <FolderGit2 size={14} /> {p.ruta}
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Conceptos Técnicos Evaluados:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.conceptos.map((c, idx) => (
                    <span key={idx} style={{
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.2rem 0.5rem',
                      fontSize: '0.75rem',
                      color: '#d1d5db'
                    }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{
                marginTop: 'auto',
                backgroundColor: 'rgba(17, 24, 39, 0.5)',
                borderLeft: `3px solid ${p.iconColor}`,
                padding: '0.85rem',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5
              }}>
                <strong style={{ color: 'var(--text-main)' }}>Impacto en Front End: </strong>
                {p.leccion}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
