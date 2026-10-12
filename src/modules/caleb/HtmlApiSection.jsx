import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Database,
  RefreshCw,
  Send,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  ExternalLink,
  Activity,
  Server,
  Shield,
  FileText,
  CheckCircle,
  XCircle,
  Info,
  Sparkles,
  Layers,
  Terminal,
  ArrowRight,
  Eye,
  Check,
  Copy,
  RotateCcw,
  Wifi,
  WifiOff
} from 'lucide-react';
import { getPosts, getPostsSimulatingError, createPost } from '../../services/calebApiService';
import './HtmlApiSection.css';

/**
 * Componente principal del módulo de Caleb
 * Demuestra:
 * 1. Estructura de documentos HTML y etiquetas semánticas con accesibilidad (A11y).
 * 2. Formularios nativos con validación accesible y conexión a solicitudes HTTP.
 * 3. Consumo en vivo de APIs REST externas mediante fetch() con gestión de estados (carga, éxito, error, vacío).
 * 4. Comparativa de contratos de datos del curso y flujo Postman vs fetch() vs React UI.
 */
export const HtmlApiSection = () => {
  // Pestaña activa
  const [activeTab, setActiveTab] = useState('html-structure');

  // --------------------------------------------------------------------------
  // ESTADOS PARA LA DEMOSTRACIÓN DE CONSUMO DE API (TAB 3)
  // --------------------------------------------------------------------------
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [requestStatus, setRequestStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [postLimit, setPostLimit] = useState(5);
  const [lastFetchTime, setLastFetchTime] = useState(null);
  const [isErrorSimulation, setIsErrorSimulation] = useState(false);

  // Referencia al AbortController para cancelar peticiones activas
  const abortControllerRef = useRef(null);

  // --------------------------------------------------------------------------
  // ESTADOS PARA EL FORMULARIO INTERACTIVO (TAB 2)
  // --------------------------------------------------------------------------
  const [formFields, setFormFields] = useState({
    title: '',
    body: '',
    category: 'desarrollo',
    authorEmail: '',
    notifyUser: true
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState(null);

  // --------------------------------------------------------------------------
  // ESTADO PARA LA DEMOSTRACIÓN VISUAL VS SEMÁNTICA (TAB 1)
  // --------------------------------------------------------------------------
  const [semanticMode, setSemanticMode] = useState('rendered'); // 'rendered' | 'wireframe'
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  // --------------------------------------------------------------------------
  // CONSUMO DE API: FUNCIÓN PRINCIPAL
  // --------------------------------------------------------------------------
  const handleFetchPosts = async (simulateError = false) => {
    // Si hay una petición previa en curso, cancelarla antes de iniciar la nueva
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setErrorMessage(null);
    setRequestStatus('loading');
    setIsErrorSimulation(simulateError);

    try {
      let data;
      if (simulateError) {
        data = await getPostsSimulatingError({ signal: controller.signal });
      } else {
        data = await getPosts(postLimit, { signal: controller.signal });
      }

      setPosts(data);
      setRequestStatus('success');
      setLastFetchTime(new Date().toLocaleTimeString());
    } catch (error) {
      if (error.name === 'AbortError') {
        // La petición fue cancelada intencionalmente, no actualizamos estado de error
        return;
      }
      setErrorMessage(error.message || 'Error desconocido al solicitar datos de la API.');
      setRequestStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  // Cargar datos automáticamente al montar el componente (con limpieza de desmontaje)
  useEffect(() => {
    handleFetchPosts(false);

    return () => {
      // Limpieza (cleanup): abortar cualquier petición pendiente al desmontar el componente
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [postLimit]);

  // --------------------------------------------------------------------------
  // MANEJADOR DEL FORMULARIO SEMÁNTICO
  // --------------------------------------------------------------------------
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormFeedback(null);

    try {
      // Envío real mediante el servicio a JSONPlaceholder
      const createdItem = await createPost({
        title: formFields.title,
        body: formFields.body,
        userId: 1
      });

      setFormFeedback({
        type: 'success',
        message: `¡Publicación creada exitosamente en JSONPlaceholder! (HTTP 201 Created — ID asignado: #${createdItem.id})`,
        data: createdItem
      });

      // Limpiar campos principales manteniendo buena experiencia
      setFormFields({
        title: '',
        body: '',
        category: 'desarrollo',
        authorEmail: formFields.authorEmail,
        notifyUser: true
      });
    } catch (error) {
      setFormFeedback({
        type: 'error',
        message: `No se pudo enviar el formulario: ${error.message}`
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  // --------------------------------------------------------------------------
  // UTILIDAD PARA COPIAR FRAGMENTOS DE CÓDIGO
  // --------------------------------------------------------------------------
  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="caleb-module" id="caleb-html-api-module">
      {/* -------------------------------------------------------------------- */}
      {/* CABECERA PRINCIPAL CON ETIQUETAS SEMÁNTICAS (HEADER) */}
      {/* -------------------------------------------------------------------- */}
      <header className="caleb-header card-glass" role="banner">
        <div className="caleb-badge-row">
          <span className="badge-author">
            <Sparkles size={14} aria-hidden="true" /> Expositor: Caleb
          </span>
          <span className="badge-topic">HTML Semántico & Consumo de APIs</span>
          <span className="badge-branch">Rama: feature/caleb-html-api</span>
        </div>

        <h1 className="caleb-title gradient-text">
          Estructura Semántica HTML5 & Consumo Profesional de APIs
        </h1>

        <p className="caleb-subtitle">
          Descubre cómo estructurar páginas web con significado, accesibilidad y formularios
          robustos, y cómo conectar la interfaz con el mundo exterior mediante solicitudes HTTP asíncronas seguras.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/* NAVEGACIÓN ENTRE SECCIONES (NAV + TABLIST ACCESIBLE) */}
        {/* ------------------------------------------------------------------ */}
        <nav
          className="caleb-nav"
          role="tablist"
          aria-label="Navegación de módulos de HTML y APIs"
        >
          <button
            type="button"
            role="tab"
            id="tab-structure"
            aria-selected={activeTab === 'html-structure'}
            aria-controls="panel-structure"
            className={`tab-btn ${activeTab === 'html-structure' ? 'active' : ''}`}
            onClick={() => setActiveTab('html-structure')}
          >
            <Layers size={18} aria-hidden="true" />
            <span>1. Estructura Semántica & A11y</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-forms"
            aria-selected={activeTab === 'forms'}
            aria-controls="panel-forms"
            className={`tab-btn ${activeTab === 'forms' ? 'active' : ''}`}
            onClick={() => setActiveTab('forms')}
          >
            <FileText size={18} aria-hidden="true" />
            <span>2. Formularios & Validación Nativa</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-api-demo"
            aria-selected={activeTab === 'api-demo'}
            aria-controls="panel-api-demo"
            className={`tab-btn ${activeTab === 'api-demo' ? 'active' : ''}`}
            onClick={() => setActiveTab('api-demo')}
          >
            <Globe size={18} aria-hidden="true" />
            <span>3. Demostración en Vivo: fetch()</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-history"
            aria-selected={activeTab === 'history'}
            aria-controls="panel-history"
            className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            <Activity size={18} aria-hidden="true" />
            <span>4. Postman vs Fetch & Aprendizaje</span>
          </button>
        </nav>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/* CONTENIDO PRINCIPAL (MAIN) */}
      {/* -------------------------------------------------------------------- */}
      <main className="caleb-main-content">
        {/* ================================================================== */}
        {/* PESTAÑA 1: ESTRUCTURA SEMÁNTICA, JERARQUÍA Y ACCESIBILIDAD */}
        {/* ================================================================== */}
        {activeTab === 'html-structure' && (
          <section
            id="panel-structure"
            role="tabpanel"
            aria-labelledby="tab-structure"
            className="tab-panel animate-fade-in"
          >
            <div className="section-intro card-glass">
              <div className="intro-badge">
                <BookOpen size={16} aria-hidden="true" /> Fundamento Clave
              </div>
              <h2>Estructura del Documento HTML y Etiquetas Semánticas</h2>
              <p>
                HTML no es solo código para pintar elementos en la pantalla. Su propósito fundamental
                es otorgar <strong>significado</strong> a cada fragmento de información. Un documento
                adecuadamente estructurado permite que lectores de pantalla, motores de búsqueda (SEO)
                y navegadores comprendan la jerarquía del contenido sin depender de clases CSS arbitrarias.
              </p>
            </div>

            {/* Alternador de Vista: Renderizado vs Esqueleto Semántico */}
            <div className="view-toggle-bar">
              <span className="toggle-label">
                <strong>Demostración de Concepto:</strong> Diferencia entre estructura HTML y estilos CSS
              </span>
              <div className="toggle-buttons" role="group" aria-label="Selector de visualización">
                <button
                  type="button"
                  className={`btn-toggle ${semanticMode === 'rendered' ? 'active' : ''}`}
                  onClick={() => setSemanticMode('rendered')}
                  aria-pressed={semanticMode === 'rendered'}
                >
                  <Eye size={16} aria-hidden="true" /> Vista Visual Estilizada
                </button>
                <button
                  type="button"
                  className={`btn-toggle ${semanticMode === 'wireframe' ? 'active' : ''}`}
                  onClick={() => setSemanticMode('wireframe')}
                  aria-pressed={semanticMode === 'wireframe'}
                >
                  <Terminal size={16} aria-hidden="true" /> Esqueleto Semántico Puro
                </button>
              </div>
            </div>

            {/* Maqueta Semántica Demostrativa */}
            <div className={`semantic-demo-container ${semanticMode}`}>
              <div className="semantic-tag-badge">&lt;header&gt;</div>
              <header className="demo-header">
                <div className="demo-brand">
                  <div className="semantic-tag-badge">&lt;h1&gt;</div>
                  <h1>Portal Educativo Front End</h1>
                </div>
                <div className="semantic-tag-badge">&lt;nav&gt;</div>
                <nav aria-label="Navegación de ejemplo">
                  <ul>
                    <li><a href="#inicio" onClick={(e) => e.preventDefault()}>Inicio</a></li>
                    <li><a href="#modulos" onClick={(e) => e.preventDefault()}>Módulos</a></li>
                    <li><a href="#contacto" onClick={(e) => e.preventDefault()}>Contacto</a></li>
                  </ul>
                </nav>
              </header>

              <div className="demo-layout">
                <div className="semantic-tag-badge">&lt;main&gt;</div>
                <main className="demo-main">
                  <div className="semantic-tag-badge">&lt;section&gt;</div>
                  <section className="demo-section">
                    <div className="semantic-tag-badge">&lt;h2&gt;</div>
                    <h2>Artículos Destacados del Curso</h2>

                    <div className="articles-grid">
                      <div className="semantic-tag-badge">&lt;article&gt;</div>
                      <article className="demo-article">
                        <div className="semantic-tag-badge">&lt;h3&gt;</div>
                        <h3>1. Accesibilidad Web (a11y)</h3>
                        <p>
                          Uso de atributos <code>alt</code> descriptivos, jerarquía estricta de
                          encabezados y navegación fluida con el teclado.
                        </p>
                        <footer>
                          <small>Publicado por Caleb • Categoría: HTML5</small>
                        </footer>
                      </article>

                      <div className="semantic-tag-badge">&lt;article&gt;</div>
                      <article className="demo-article">
                        <div className="semantic-tag-badge">&lt;h3&gt;</div>
                        <h3>2. Contratos de APIs y Fetch</h3>
                        <p>
                          Validación de códigos de estado HTTP y tratamiento seguro de JSON
                          sin insertar texto con <code>innerHTML</code>.
                        </p>
                        <footer>
                          <small>Publicado por Caleb • Categoría: HTTP</small>
                        </footer>
                      </article>
                    </div>
                  </section>
                </main>

                <div className="semantic-tag-badge">&lt;aside&gt;</div>
                <aside className="demo-aside">
                  <h3>Recursos Relacionados</h3>
                  <p>Notas al margen y enlaces a documentación técnica oficial.</p>
                </aside>
              </div>

              <div className="semantic-tag-badge">&lt;footer&gt;</div>
              <footer className="demo-footer">
                <p>© 2026 Plataforma Front End • Construida con HTML5 semántico estándar.</p>
              </footer>
            </div>

            {/* Tarjetas de conceptos esenciales */}
            <div className="concept-cards-grid">
              <div className="concept-card card-glass">
                <div className="concept-icon">
                  <Shield size={22} className="text-emerald" aria-hidden="true" />
                </div>
                <h3>Jerarquía de Encabezados</h3>
                <p>
                  Regla de oro: <strong>un único &lt;h1&gt;</strong> por vista lógica para definir el
                  tema principal. Los niveles &lt;h2&gt;, &lt;h3&gt; no deben saltarse (por ejemplo, nunca pasar
                  de &lt;h1&gt; directamente a &lt;h3&gt;), ya que los lectores de pantalla generan el índice de lectura a partir de ellos.
                </p>
              </div>

              <div className="concept-card card-glass">
                <div className="concept-icon">
                  <Eye size={22} className="text-cyan" aria-hidden="true" />
                </div>
                <h3>Estructura vs Estilos</h3>
                <p>
                  <strong>HTML define el contenido y su rol; CSS define cómo se ve.</strong> Un botón
                  debe ser un <code>&lt;button&gt;</code>, no un <code>&lt;div onClick&gt;</code>. Usar la
                  etiqueta correcta garantiza soporte nativo de teclado (Enter, Espacio) sin hacks de JavaScript.
                </p>
              </div>

              <div className="concept-card card-glass">
                <div className="concept-icon">
                  <Sparkles size={22} className="text-indigo" aria-hidden="true" />
                </div>
                <h3>HTML, JavaScript y React</h3>
                <p>
                  En React no escribimos HTML puro: escribimos <strong>JSX</strong>. Cada etiqueta JSX
                  es transformada por Babel/Vite en llamadas <code>React.createElement()</code> que construyen el
                  Virtual DOM, manteniendo sincronizado el DOM real de forma óptima.
                </p>
              </div>
            </div>

            {/* Fragmento de código listo para explicar */}
            <div className="code-snippet-box card-glass">
              <div className="snippet-header">
                <span className="snippet-title">
                  <Terminal size={16} aria-hidden="true" /> Anatomía Semántica Recomendada
                </span>
                <button
                  type="button"
                  className="btn-copy"
                  onClick={() =>
                    copyToClipboard(
                      `<!-- Estructura Semántica Accesible -->\n<header role="banner">\n  <h1>Título Principal Único</h1>\n  <nav aria-label="Navegación principal">...</nav>\n</header>\n<main role="main">\n  <section>\n    <h2>Sección Temática</h2>\n    <article>\n      <h3>Artículo Independiente</h3>\n      <p>Contenido estructurado...</p>\n    </article>\n  </section>\n</main>\n<footer role="contentinfo">\n  <small>&copy; 2026 Equipo Front End</small>\n</footer>`,
                      'snippet-semantic'
                    )
                  }
                  aria-label="Copiar fragmento de código semántico"
                >
                  {copiedSnippet === 'snippet-semantic' ? (
                    <>
                      <Check size={14} aria-hidden="true" /> Copiado
                    </>
                  ) : (
                    <>
                      <Copy size={14} aria-hidden="true" /> Copiar código
                    </>
                  )}
                </button>
              </div>
              <pre tabIndex={0}>
                <code>{`<!-- Estructura Semántica Accesible (HTML5 Estándar) -->
<header role="banner">
  <h1>Título Principal de la Vista</h1>
  <nav aria-label="Menú principal">
    <ul>
      <li><a href="#seccion1">Módulo 1</a></li>
    </ul>
  </nav>
</header>

<main role="main">
  <section aria-labelledby="sec-titulo">
    <h2 id="sec-titulo">Sección de Contenido</h2>
    <article>
      <h3>Entrada Autónoma o Noticia</h3>
      <p>Texto con significado estructural...</p>
    </article>
  </section>
</main>

<footer role="contentinfo">
  <small>© 2026 Proyecto Front End</small>
</footer>`}</code>
              </pre>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* PESTAÑA 2: FORMULARIOS, LABELS Y VALIDACIÓN NATIVA */}
        {/* ================================================================== */}
        {activeTab === 'forms' && (
          <section
            id="panel-forms"
            role="tabpanel"
            aria-labelledby="tab-forms"
            className="tab-panel animate-fade-in"
          >
            <div className="section-intro card-glass">
              <div className="intro-badge">
                <FileText size={16} aria-hidden="true" /> Interacción y Accesibilidad
              </div>
              <h2>Formularios, Vinculación de Etiquetas & Validación Nativa</h2>
              <p>
                Los formularios son el puente de entrada de datos del usuario hacia el sistema. Cada
                control debe estar vinculado explícitamente a su <code>&lt;label&gt;</code> mediante el
                atributo <code>htmlFor</code> en React (o <code>for</code> en HTML). Los navegadores
                cuentan con potentes motores de validación nativa que ahorran cientos de líneas de JavaScript.
              </p>
            </div>

            <div className="forms-layout-grid">
              {/* Formulario Accesible Interactivo */}
              <div className="form-container card-glass">
                <div className="form-header-badge">
                  <CheckCircle size={16} aria-hidden="true" /> Formulario Interactivo Accesible
                </div>

                <form
                  onSubmit={handleFormSubmit}
                  noValidate={false}
                  className="semantic-form"
                  aria-describedby="form-instructions"
                >
                  <p id="form-instructions" className="sr-only">
                    Todos los campos marcados con asterisco son obligatorios.
                  </p>

                  {/* Campo: Título de la Publicación */}
                  <div className="form-group">
                    <label htmlFor="post-title">
                      Título del Artículo <span className="required-mark" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="post-title"
                      name="title"
                      required
                      minLength={4}
                      maxLength={60}
                      placeholder="Ej. Consumo de APIs con Fetch"
                      value={formFields.title}
                      onChange={handleFormChange}
                      className="form-control"
                      aria-required="true"
                    />
                    <small className="field-hint">Mínimo 4 caracteres (Validación nativa minLength).</small>
                  </div>

                  {/* Campo: Correo Electrónico del Autor */}
                  <div className="form-group">
                    <label htmlFor="post-email">
                      Correo Electrónico del Autor <span className="required-mark" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="post-email"
                      name="authorEmail"
                      required
                      placeholder="caleb@ejemplo.com"
                      value={formFields.authorEmail}
                      onChange={handleFormChange}
                      className="form-control"
                      aria-required="true"
                    />
                    <small className="field-hint">
                      El navegador valida sintaxis de correo automáticamente con <code>type="email"</code>.
                    </small>
                  </div>

                  {/* Campo: Categoría (Select Semántico) */}
                  <div className="form-group">
                    <label htmlFor="post-category">Categoría Temática</label>
                    <select
                      id="post-category"
                      name="category"
                      value={formFields.category}
                      onChange={handleFormChange}
                      className="form-control"
                    >
                      <option value="desarrollo">Desarrollo Web & Frontend</option>
                      <option value="accesibilidad">Accesibilidad Web (A11y)</option>
                      <option value="apis">Consumo de APIs REST</option>
                      <option value="arquitectura">Arquitectura en React</option>
                    </select>
                  </div>

                  {/* Campo: Cuerpo del Mensaje */}
                  <div className="form-group">
                    <label htmlFor="post-body">
                      Cuerpo del Contenido <span className="required-mark" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="post-body"
                      name="body"
                      required
                      rows={3}
                      minLength={10}
                      maxLength={200}
                      placeholder="Escribe el resumen técnico que se enviará mediante POST..."
                      value={formFields.body}
                      onChange={handleFormChange}
                      className="form-control"
                      aria-required="true"
                    />
                    <div className="char-counter">
                      <span>{formFields.body.length} / 200 caracteres</span>
                    </div>
                  </div>

                  {/* Checkbox Accesible con Fieldset */}
                  <fieldset className="form-fieldset">
                    <legend className="fieldset-legend">Preferencias de Envío</legend>
                    <label className="checkbox-label" htmlFor="post-notify">
                      <input
                        type="checkbox"
                        id="post-notify"
                        name="notifyUser"
                        checked={formFields.notifyUser}
                        onChange={handleFormChange}
                      />
                      <span>Notificar confirmación de publicación en el navegador</span>
                    </label>
                  </fieldset>

                  {/* Botón de Envío y Botón de Reset */}
                  <div className="form-actions">
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="btn-primary"
                    >
                      {formSubmitting ? (
                        <>
                          <RefreshCw size={16} className="spin" aria-hidden="true" />
                          <span>Enviando solicitud POST...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} aria-hidden="true" />
                          <span>Enviar a JSONPlaceholder (POST)</span>
                        </>
                      )}
                    </button>

                    <button
                      type="reset"
                      onClick={() =>
                        setFormFields({
                          title: '',
                          body: '',
                          category: 'desarrollo',
                          authorEmail: '',
                          notifyUser: true
                        })
                      }
                      className="btn-secondary"
                    >
                      <RotateCcw size={16} aria-hidden="true" />
                      <span>Limpiar</span>
                    </button>
                  </div>
                </form>

                {/* Feedback del Envío en Tiempo Real */}
                {formFeedback && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className={`form-alert ${formFeedback.type === 'success' ? 'alert-success' : 'alert-error'} animate-fade-in`}
                  >
                    {formFeedback.type === 'success' ? (
                      <CheckCircle size={20} aria-hidden="true" />
                    ) : (
                      <AlertTriangle size={20} aria-hidden="true" />
                    )}
                    <div className="alert-content">
                      <strong>
                        {formFeedback.type === 'success' ? 'Solicitud Exitosa:' : 'Error en Solicitud:'}
                      </strong>
                      <p>{formFeedback.message}</p>
                      {formFeedback.data && (
                        <pre className="response-preview" tabIndex={0}>
                          <code>{JSON.stringify(formFeedback.data, null, 2)}</code>
                        </pre>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Panel Educativo sobre Buenas Prácticas */}
              <div className="form-theory card-glass">
                <h3>Pilares de Formularios Profesionales</h3>

                <ul className="theory-list">
                  <li>
                    <strong>Asociación Obligatoria &lt;label&gt; + id:</strong>
                    <p>
                      Hacer clic en el texto del label enfoca automáticamente el input. En lectores de pantalla,
                      indica exactamente al usuario qué debe escribir.
                    </p>
                  </li>
                  <li>
                    <strong>Validación Nativa sin Dependencias:</strong>
                    <p>
                      Atributos como <code>required</code>, <code>type="email"</code>, <code>min</code>,
                      <code>max</code> y <code>pattern</code> son procesados por el motor del navegador,
                      activando las pseudoclases CSS <code>:valid</code> e <code>:invalid</code>.
                    </p>
                  </li>
                  <li>
                    <strong>Manejo de Submit en React:</strong>
                    <p>
                      Siempre ejecutar <code>e.preventDefault()</code> para evitar la recarga completa
                      de la página y enviar los datos de forma asíncrona mediante <code>fetch()</code>.
                    </p>
                  </li>
                  <li>
                    <strong>Foco Visible y Accesibilidad:</strong>
                    <p>
                      Nunca remover el contorno de foco con <code>outline: none</code> sin proveer un reemplazo
                      visual con <code>:focus-visible</code> para usuarios de teclado.
                    </p>
                  </li>
                </ul>

                <div className="code-snippet-box mini">
                  <div className="snippet-header">
                    <span>Validación y Envío Seguro en React</span>
                  </div>
                  <pre tabIndex={0}>
                    <code>{`// Captura del submit sin recargar la página
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Solicitud POST real hacia el endpoint
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (!response.ok) throw new Error('Fallo al registrar');
  const nuevoRecurso = await response.json();
};`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* PESTAÑA 3: CONSUMO DE APIS EN VIVO (JSONPLACEHOLDER) */}
        {/* ================================================================== */}
        {activeTab === 'api-demo' && (
          <section
            id="panel-api-demo"
            role="tabpanel"
            aria-labelledby="tab-api-demo"
            className="tab-panel animate-fade-in"
          >
            <div className="section-intro card-glass">
              <div className="intro-badge">
                <Globe size={16} aria-hidden="true" /> Demostración en Tiempo Real
              </div>
              <h2>Consumo de APIs REST con Fetch y Gestión de Estados</h2>
              <p>
                Esta sección realiza solicitudes HTTP reales a la API pública de <strong>JSONPlaceholder</strong>
                (<code>https://jsonplaceholder.typicode.com/posts?_limit={postLimit}</code>).
                Demuestra el ciclo de vida completo: estado inicial, indicador de carga, renderizado seguro de datos,
                estados vacíos y captura de errores sin recargar la página.
              </p>
            </div>

            {/* Barra de Control de la Solicitud */}
            <div className="api-control-toolbar card-glass">
              <div className="toolbar-group">
                <label htmlFor="limit-select" className="toolbar-label">
                  Límite de publicaciones:
                </label>
                <select
                  id="limit-select"
                  value={postLimit}
                  onChange={(e) => setPostLimit(Number(e.target.value))}
                  disabled={isLoading}
                  className="toolbar-select"
                >
                  <option value={3}>3 publicaciones</option>
                  <option value={5}>5 publicaciones (Estándar)</option>
                  <option value={8}>8 publicaciones</option>
                  <option value={0}>0 publicaciones (Probar Estado Vacío)</option>
                </select>
              </div>

              <div className="toolbar-actions">
                <button
                  type="button"
                  onClick={() => handleFetchPosts(false)}
                  disabled={isLoading}
                  className="btn-primary"
                  aria-label="Volver a consultar los datos reales"
                >
                  <RefreshCw size={16} className={isLoading ? 'spin' : ''} aria-hidden="true" />
                  <span>{isLoading ? 'Consultando API...' : 'Volver a consultar datos'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleFetchPosts(true)}
                  disabled={isLoading}
                  className="btn-danger-outline"
                  aria-label="Simular error de solicitud 404 para probar resiliencia"
                >
                  <AlertTriangle size={16} aria-hidden="true" />
                  <span>Probar Escenario de Error (404)</span>
                </button>
              </div>

              <div className="toolbar-status">
                <span className="status-indicator">
                  {requestStatus === 'loading' && <span className="status-dot dot-loading"></span>}
                  {requestStatus === 'success' && <span className="status-dot dot-success"></span>}
                  {requestStatus === 'error' && <span className="status-dot dot-error"></span>}
                  Estado: <strong>{requestStatus.toUpperCase()}</strong>
                </span>
                {lastFetchTime && (
                  <span className="status-time">
                    Última respuesta: <time>{lastFetchTime}</time>
                  </span>
                )}
              </div>
            </div>

            {/* ÁREA DE CONTENIDO DINÁMICO SEGÚN ESTADO */}
            <div
              className="api-results-container"
              aria-live="polite"
              aria-busy={isLoading}
            >
              {/* 1. ESTADO DE CARGA (LOADING) */}
              {isLoading && (
                <div className="state-loading card-glass" role="status">
                  <div className="spinner-large" aria-hidden="true"></div>
                  <h3>Solicitando datos al servidor remoto...</h3>
                  <p>Ejecutando <code>fetch('https://jsonplaceholder.typicode.com/posts')</code></p>
                  
                  {/* Tarjetas Skeleton de Carga */}
                  <div className="skeleton-grid" aria-hidden="true">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="skeleton-card">
                        <div className="skeleton-line line-title"></div>
                        <div className="skeleton-line line-text"></div>
                        <div className="skeleton-line line-text short"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. ESTADO DE ERROR (ERROR) */}
              {!isLoading && requestStatus === 'error' && (
                <div className="state-error card-glass animate-fade-in" role="alert">
                  <div className="error-icon-wrapper">
                    <WifiOff size={40} className="text-rose" aria-hidden="true" />
                  </div>
                  <h3>Ocurrió un error al procesar la solicitud</h3>
                  <p className="error-description">{errorMessage}</p>
                  
                  <div className="error-explanation">
                    <p>
                      <strong>¿Por qué vemos este mensaje?</strong> En la arquitectura Front End,
                      las solicitudes a servidores externos pueden fallar por pérdida de conexión,
                      recursos inexistentes (404), o fallos del servidor remoto (500). Gracias a la
                      validación de <code>response.ok</code> y el bloque <code>catch</code>, la aplicación
                      no colapsa y le ofrece al usuario una salida clara.
                    </p>
                  </div>

                  <div className="error-actions">
                    <button
                      type="button"
                      onClick={() => handleFetchPosts(false)}
                      className="btn-primary"
                    >
                      <RotateCcw size={16} aria-hidden="true" />
                      <span>Reintentar con Endpoint Correcto</span>
                    </button>
                  </div>
                </div>
              )}

              {/* 3. ESTADO VACÍO (EMPTY STATE) */}
              {!isLoading && requestStatus === 'success' && posts.length === 0 && (
                <div className="state-empty card-glass animate-fade-in">
                  <Info size={40} className="text-amber" aria-hidden="true" />
                  <h3>No se encontraron publicaciones disponibles</h3>
                  <p>
                    La solicitud fue exitosa (HTTP 200), pero el servidor devolvió una lista vacía
                    (longitud 0). Este estado debe manejarse amigablemente para no dejar pantallas en blanco.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setPostLimit(5);
                    }}
                    className="btn-primary"
                  >
                    Restaurar límite a 5 publicaciones
                  </button>
                </div>
              )}

              {/* 4. ESTADO DE ÉXITO: LISTADO DE PUBLICACIONES REALES */}
              {!isLoading && requestStatus === 'success' && posts.length > 0 && (
                <div className="posts-results-section animate-fade-in">
                  <div className="results-header">
                    <h3>
                      Publicaciones Obtenidas ({posts.length} de JSONPlaceholder)
                    </h3>
                    <span className="badge-source">API Externa Verificada</span>
                  </div>

                  <div className="posts-grid" role="feed" aria-label="Lista de publicaciones obtenidas">
                    {posts.map((post) => (
                      <article
                        key={post.id}
                        className="post-card card-glass"
                        tabIndex={0}
                        aria-labelledby={`post-title-${post.id}`}
                      >
                        <div className="post-card-header">
                          <span className="post-id-badge">Post #{post.id}</span>
                          <span className="post-user-badge">Autor ID: {post.userId}</span>
                        </div>

                        <h4 id={`post-title-${post.id}`} className="post-title">
                          {post.title}
                        </h4>

                        <p className="post-body">
                          {post.body}
                        </p>

                        <div className="post-card-footer">
                          <small className="text-dim">Fuente: jsonplaceholder.typicode.com</small>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bloque técnico explicativo del Servicio */}
            <div className="api-service-explanation card-glass">
              <h3>
                <Server size={18} aria-hidden="true" /> Separación de Responsabilidades: Servicio vs Interfaz
              </h3>
              <div className="explanation-columns">
                <div className="column">
                  <h4>src/services/calebApiService.js</h4>
                  <p>
                    Contiene la lógica de red pura: construcción de URLs, configuración de headers,
                    comprobación de <code>response.ok</code>, parseo de JSON y captura de excepciones.
                    No sabe nada de React ni de la interfaz gráfica.
                  </p>
                </div>
                <div className="column">
                  <h4>src/modules/caleb/HtmlApiSection.jsx</h4>
                  <p>
                    Gestiona el estado visual con <code>useState</code> (carga, datos, error),
                    renderiza componentes JSX seguros sin utilizar <code>innerHTML</code>, y
                    cancela solicitudes huérfanas mediante <code>AbortController</code> al desmontar.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* PESTAÑA 4: CONEXIÓN HISTÓRICA, POSTMAN VS FETCH Y CONTRATOS */}
        {/* ================================================================== */}
        {activeTab === 'history' && (
          <section
            id="panel-history"
            role="tabpanel"
            aria-labelledby="tab-history"
            className="tab-panel animate-fade-in"
          >
            <div className="section-intro card-glass">
              <div className="intro-badge">
                <Activity size={16} aria-hidden="true" /> Conexión Curricular
              </div>
              <h2>De Postman a la Interfaz de Usuario: Lecciones del Curso</h2>
              <p>
                A lo largo de los proyectos del curso aprendimos que una API no es una entidad abstracta:
                es un contrato de datos entre servidores y clientes. Descubrimos las diferencias entre
                probar un endpoint en un cliente de pruebas y construir una experiencia de usuario resistente en producción.
              </p>
            </div>

            {/* Comparativa: Postman vs Fetch en Navegador vs React UI */}
            <div className="comparison-table-wrapper card-glass">
              <h3>Los Tres Momentos del Consumo de Datos</h3>

              <div className="moments-grid">
                <div className="moment-card">
                  <div className="moment-badge badge-postman">
                    <Terminal size={16} aria-hidden="true" /> 1. Postman (Pruebas de Aislamiento)
                  </div>
                  <h4>Entorno de Prueba Aislado</h4>
                  <ul>
                    <li>Prueba de endpoints, métodos (GET, POST, PUT, DELETE) y query params.</li>
                    <li>Inspección directa de códigos de estado HTTP (200, 201, 404, 500).</li>
                    <li>Verificación de cabeceras (Content-Type, Authorization, CORS).</li>
                    <li><strong>Límite:</strong> No evalúa cómo reacciona una persona si la red es lenta.</li>
                  </ul>
                </div>

                <div className="moment-card">
                  <div className="moment-badge badge-fetch">
                    <Globe size={16} aria-hidden="true" /> 2. fetch() en el Navegador
                  </div>
                  <h4>Mecanismo Asíncrono de Red</h4>
                  <ul>
                    <li>Ejecutado por el motor de JavaScript en el cliente.</li>
                    <li>Devuelve promesas y gestiona streaming de datos binarios a JSON.</li>
                    <li>Sujeto a políticas de seguridad CORS del navegador.</li>
                    <li><strong>Límite:</strong> Requiere verificar manualmente <code>response.ok</code>.</li>
                  </ul>
                </div>

                <div className="moment-card">
                  <div className="moment-badge badge-react">
                    <Sparkles size={16} aria-hidden="true" /> 3. Presentación en React UI
                  </div>
                  <h4>Experiencia de Usuario Declarativa</h4>
                  <ul>
                    <li>Traducción de datos asíncronos a estados de React (<code>loading</code>, <code>error</code>, <code>data</code>).</li>
                    <li>Renderizado condicional con ternarios y componentes atómicos.</li>
                    <li>Feedback visual accesible (spinners, skeletons, alertas con role="alert").</li>
                    <li>Prevención de memory leaks con <code>AbortController</code>.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Matriz de Contratos de Datos Reales del Curso */}
            <div className="contracts-section card-glass">
              <h3>Diversidad de Contratos de Datos en los Proyectos del Curso</h3>
              <p>
                No todas las APIs son iguales ni devuelven las mismas estructuras. Cada proyecto enfrentó
                un contrato de datos específico:
              </p>

              <div className="contracts-grid">
                <div className="contract-card">
                  <h4>JSONPlaceholder (Demostración Actual)</h4>
                  <span className="contract-tag">REST Plana</span>
                  <p>
                    Devuelve un array plano de objetos con claves idénticas:
                    <code>{`[{ id: 1, title: '...', body: '...' }]`}</code>.
                    Ideal para aprender solicitudes CRUD básicas.
                  </p>
                </div>

                <div className="contract-card">
                  <h4>Rick and Morty API (`Frontend/Rick&Morty`)</h4>
                  <span className="contract-tag">REST Paginada</span>
                  <p>
                    Devuelve un objeto envolvente con metadatos de paginación y lista de personajes:
                    <code>{`{ info: { count, pages, next }, results: [...] }`}</code>.
                    Exigió controlar números de página y filtros dinámicos.
                  </p>
                </div>

                <div className="contract-card">
                  <h4>Laboratorio Climático Open-Meteo (`test 3`)</h4>
                  <span className="contract-tag">API Científica Temporal</span>
                  <p>
                    Estructura basada en coordenadas geográficas, unidades meteorológicas y series
                    temporales numéricas: <code>{`{ current_weather: { temperature, windspeed } }`}</code>.
                    Exigió cálculos defensivos y tipado de números.
                  </p>
                </div>

                <div className="contract-card">
                  <h4>Moka & Canela (`Moka/moka-canela-`)</h4>
                  <span className="contract-tag">Catálogo & Carrito E-commerce</span>
                  <p>
                    Artículos categorizados con precios, inventario y mutación en carrito
                    mediante <code>OrderContext</code>. Conectó datos con cálculos de subtotales e impuestos.
                  </p>
                </div>
              </div>
            </div>

            {/* Advertencia de Resiliencia y Dependencias Externas */}
            <div className="resilience-notice card-glass">
              <div className="notice-icon">
                <Wifi size={24} className="text-amber" aria-hidden="true" />
              </div>
              <div className="notice-content">
                <h4>Principio de Resiliencia: La Dependencia del Servicio Externo</h4>
                <p>
                  Toda aplicación que consume una API pública depende de la conexión física a internet
                  y de la disponibilidad del servidor externo. Un desarrollador senior nunca asume que la API
                  siempre responderá 200 OK: implementa timeouts, estados de error comprensibles, botones
                  de reintento y políticas de respaldo defensivas.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* -------------------------------------------------------------------- */}
      {/* PIE DE PÁGINA DEL MÓDULO (FOOTER) */}
      {/* -------------------------------------------------------------------- */}
      <footer className="caleb-footer card-glass" role="contentinfo">
        <p>
          Módulo desarrollado por <strong>Caleb</strong> • Exposición de Front End •
          Rama <code>feature/caleb-html-api</code>
        </p>
        <small className="footer-links">
          <span>HTML5 Semántico</span> • <span>Accesibilidad WCAG</span> • <span>Fetch API</span> • <span>JSONPlaceholder</span>
        </small>
      </footer>
    </div>
  );
};

export default HtmlApiSection;
