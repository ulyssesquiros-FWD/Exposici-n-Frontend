# Documentación Técnica: HTML Semántico, Accesibilidad y Consumo de APIs

**Expositor:** Caleb  
**Módulo:** Estructura Semántica HTML5, Formularios y Consumo de APIs REST con Fetch  
**Rama de Git:** `feature/caleb-html-api`  
**Directorio de Código:** `src/modules/caleb/` y `src/services/`  
**Archivos Clave:**
* Componente de Interfaz: `src/modules/caleb/HtmlApiSection.jsx`
* Hoja de Estilos: `src/modules/caleb/HtmlApiSection.css`
* Servicio HTTP Desacoplado: `src/services/calebApiService.js`

---

## 📌 1. Introducción y Propósito Pedagógico

El desarrollo Front End contemporáneo no consiste únicamente en crear interfaces visualmente llamativas; se fundamenta en dos responsabilidades cardinales:
1. **Estructura y Significado (HTML Semántico & Accesibilidad):** Diseñar documentos comprensibles tanto para seres humanos como para agentes de usuario (navegadores, lectores de pantalla, motores de búsqueda y bots de indexación).
2. **Comunicación con el Mundo Exterior (Consumo de APIs):** Solicitar, recibir, transformar y presentar información proveniente de servidores remotos de forma asíncrona, robusta y tolerante a fallos.

Esta documentación detalla las bases teóricas, los estándares web internacionales del W3C/WHATWG y las implementaciones prácticas realizadas en el módulo interactivo de Caleb.

---

## 🏗️ 2. Anatomía de un Documento HTML5 y Estándares Semánticos

### 2.1 La Estructura Base de un Documento HTML5
Todo documento web moderno inicia con una declaración mínima que activa el modo de procesamiento estándar del navegador (*standards mode*):

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Plataforma de exposición de desarrollo Front End" />
    <title>Estructura Semántica y Consumo de APIs</title>
  </head>
  <body>
    <!-- Contenido perceptible y accesible -->
  </body>
</html>
```

* `<!DOCTYPE html>`: Notifica al motor de renderizado que aplique la especificación viva de HTML5, previniendo el comportamiento obsoleto (*quirks mode*).
* `<html lang="es">`: Atributo indispensable de accesibilidad (a11y). Informa a sintetizadores de voz y lectores de pantalla qué biblioteca fonética utilizar para pronunciar el contenido.
* `<meta name="viewport">`: Controla las dimensiones de la ventana gráfica en dispositivos móviles, habilitando el diseño responsivo sin escalado forzado.

---

### 2.2 Árbol de Etiquetas Semánticas y Roles Nativos

Antes de HTML5, los desarrolladores abusaban de divisiones genéricas (`<div id="header">`, `<div class="footer">`), las cuales carecen de significado semántico ante un lector de pantalla o un motor de búsqueda. HTML5 introdujo elementos estructurales que portan roles implícitos (*WAI-ARIA landmark roles*):

| Etiqueta Semántica | Rol ARIA Implícito | Propósito Técnico y Caso de Uso |
|---|---|---|
| `<header>` | `role="banner"` (si es raíz) | Cabecera introductoria de la página o de un `<article>`. Contiene logos, títulos y barras de estado. |
| `<nav>` | `role="navigation"` | Bloque que agrupa enlaces principales de navegación del sitio o módulo. |
| `<main>` | `role="main"` | Contenedor del contenido medular y único del documento. **Solo debe existir uno por página**. |
| `<section>` | `role="region"` | Agrupador temático de contenido que posee un encabezado identificador (`<h2>` - `<h6>`). |
| `<article>` | `role="article"` | Composición autónoma e independiente (noticia, publicación de blog, producto, tarjeta de comentario). |
| `<aside>` | `role="complementary"` | Información tangencialmente relacionada (glosarios, barras laterales, notas de apoyo). |
| `<footer>` | `role="contentinfo"` (si es raíz) | Pie de página con créditos, autoría, enlaces legales y derechos de autor. |

```html
<!-- Ejemplo de maquetación semántica limpia -->
<header>
  <h1>Portal Educativo Front End</h1>
  <nav aria-label="Menú principal">
    <ul>
      <li><a href="#html">HTML Semántico</a></li>
      <li><a href="#apis">Consumo de APIs</a></li>
    </ul>
  </nav>
</header>

<main>
  <section aria-labelledby="sec-articulos">
    <h2 id="sec-articulos">Publicaciones Recientes</h2>
    <article>
      <h3>Consumo de APIs con Fetch</h3>
      <p>Explicación del tratamiento de promesas y validación de response.ok...</p>
    </article>
  </section>
</main>

<footer>
  <small>&copy; 2026 Equipo Front End. Todos los derechos reservados.</small>
</footer>
```

---

### 2.3 Jerarquía Estricta de Encabezados (`<h1>` a `<h6>`)
Los encabezados construyen el árbol de navegación del documento (*document outline*):
* **Regla del `<h1>` Único:** Cada página o vista lógica debe tener un único encabezado principal que describa el propósito global del recurso.
* **Prohibición de Salto de Niveles:** Un usuario que navega con lectores de pantalla (como NVDA o VoiceOver) usa atajos de teclado (`H` para avanzar por encabezados, `1`-`6` para filtrar por nivel). Si pasamos de un `<h2>` directamente a un `<h4>`, el usuario puede interpretar erróneamente que se perdió información intermedia.

---

### 2.4 Diferencia Fundamental: Estructura HTML vs Estilos CSS
* **HTML (Estructura y Significado):** Es el esqueleto ontológico. Dicta qué es cada elemento (un botón, un formulario, un encabezado). Si deshabilitamos completamente el CSS, la página debe seguir siendo 100% comprensible, navegable por teclado y legible.
* **CSS (Presentación y Estética):** Es la piel visual. Controla disposición espacial (Flexbox/Grid), paletas de color, tipografía decorativa y transiciones. **Nunca se debe usar CSS para simular interactividad de elementos nativos** (por ejemplo, estilar un `<div>` con borde azul para que parezca un botón sin darle comportamiento de teclado ni rol).

---

### 2.5 Relación entre HTML, JavaScript y React
1. **HTML:** Define la estructura declarativa estática.
2. **JavaScript Tradicional:** Manipula imperativamente los nodos creados por el navegador mediante métodos del DOM (`document.querySelector`, `element.appendChild`), lo cual es propenso a desincronizaciones si el estado crece.
3. **React y JSX:** Reemplaza la manipulación manual del DOM con una sintaxis declarativa llamada **JSX**. JSX no es HTML en el navegador: es azúcar sintáctico que el compilador (Vite/Babel) transforma en llamadas `React.createElement()`. React mantiene un **Virtual DOM** en memoria y calcula las mutaciones mínimas indispensables sobre el DOM real.

---

## 📝 3. Formularios Accesibles y Validación Nativa

### 3.1 Vinculación de Etiquetas `<label>` y Controles de Entrada
Una regla no negociable de accesibilidad web (WCAG 2.1) es que todo control interactivo debe poseer un nombre accesible:

```jsx
{/* Vinculación explícita mediante htmlFor (en React) e id (en HTML) */}
<div className="form-group">
  <label htmlFor="user-email">Correo Electrónico del Autor *</label>
  <input
    id="user-email"
    name="userEmail"
    type="email"
    required
    placeholder="autor@ejemplo.com"
  />
</div>
```

**Ventajas tangibles:**
1. Al hacer clic sobre el texto de la etiqueta, el foco se transfiere automáticamente al `<input>` (aumentando el área de toque en dispositivos táctiles).
2. Los lectores de pantalla anuncian el texto del label en cuanto el usuario enfoca el campo con la tecla `Tab`.

---

### 3.2 Validación Nativa del Navegador sin Librerías Pesadas
Los navegadores modernos incorporan validación semántica basada en atributos:
* `required`: Impide enviar el formulario si el campo está vacío.
* `type="email"`: Aplica validación léxica de formato de dirección de correo electrónico según RFC 5322.
* `minLength` y `maxLength`: Restricciones de longitud de cadena.
* `pattern="[0-9]{4}-[0-9]{4}"`: Validación mediante expresiones regulares nativas.

**Estilización mediante pseudoclases CSS:**
```css
/* Feedback visual sin necesidad de lógica extra de JavaScript */
.form-control:not(:placeholder-shown):valid {
  border-color: #10b981; /* Verde esmeralda */
}

.form-control:not(:placeholder-shown):invalid {
  border-color: #f43f5e; /* Rojo frambuesa */
}
```

---

### 3.3 Formularios Controlados y `event.preventDefault()` en React
En aplicaciones de página única (SPA), el comportamiento por defecto de un formulario (emitir una petición HTTP sincrónica que recarga toda la ventana) debe interceptarse:

```javascript
const handleFormSubmit = async (e) => {
  e.preventDefault(); // Detiene la recarga de la página

  // Construcción del payload y llamada al servicio desacoplado
  const response = await createPost({ title, body, userId: 1 });
};
```

---

## 🌐 4. Consumo Profesional de APIs REST con Fetch

### 4.1 La API `fetch()` y el Riesgo Oculto de las Promesas
A diferencia de librerías como Axios, la función nativa `fetch()` **no rechaza la promesa ante códigos de error HTTP como 404 (Not Found) o 500 (Internal Server Error)**. La promesa solo se rechaza ante fallas de conexión física, desconexión de red o bloqueo de CORS.

Por ello, es obligatorio inspeccionar la propiedad booleana `response.ok`:

```javascript
// Implementación defensiva en calebApiService.js
export async function getPosts(limit = 5, options = {}) {
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
    signal: options.signal, // Soporte para cancelación
  });

  // Si el servidor respondió con un código fuera del rango 200-299:
  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
```

---

### 4.2 El Ciclo de Vida del Consumo de Datos en React
Toda solicitud asíncrona dentro de una interfaz de usuario atraviesa cuatro estados fundamentales:
1. **Estado Inicial (`idle`):** Antes de iniciar la primera llamada.
2. **Estado de Carga (`loading`):** Se activa un indicador de espera (`spinner`, skeleton screens) y se notifica a tecnologías asistivas con `aria-busy="true"`.
3. **Estado de Éxito (`success`):** Se reciben los datos y se verifica si la lista contiene elementos o si corresponde un **Estado Vacío (`empty`)**.
4. **Estado de Error (`error`):** Si la red falla o el servidor responde 4xx/5xx, se atrapa la excepción y se despliega un mensaje amigable con `role="alert"` y la posibilidad de reintentar.

```jsx
// Gestión declarativa con hooks
const [posts, setPosts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState(null);

const handleFetch = async () => {
  setIsLoading(true);
  setErrorMessage(null);

  try {
    const data = await getPosts(5);
    setPosts(data);
  } catch (error) {
    setErrorMessage(error.message);
  } finally {
    setIsLoading(false); // Siempre se ejecuta, garantizando el apagado del spinner
  }
};
```

---

### 4.3 Prevención de Fugas de Memoria con `AbortController`
Si un usuario navega a otra sección mientras una solicitud `fetch()` aún está viajando por la red, la promesa intentará actualizar el estado de un componente que ya fue desmontado del DOM.

Para prevenir esto, se enlaza un `AbortController` con la función de limpieza del hook `useEffect`:

```javascript
useEffect(() => {
  const controller = new AbortController();

  const ejecutarConsulta = async () => {
    try {
      const data = await getPosts(5, { signal: controller.signal });
      setPosts(data);
    } catch (error) {
      if (error.name === 'AbortError') {
        // Petición cancelada limpiamente al desmontar el componente; ignorar
        return;
      }
      setErrorMessage(error.message);
    }
  };

  ejecutarConsulta();

  // Función de limpieza de React
  return () => {
    controller.abort();
  };
}, []);
```

---

### 4.4 Renderizado Seguro sin `innerHTML`
Para mitigar vulnerabilidades de inyección de código malicioso (**Cross-Site Scripting - XSS**), los datos provenientes de APIs externas jamás deben inyectarse mediante `element.innerHTML` o la propiedad de React `dangerouslySetInnerHTML`. React sanitiza y escapa automáticamente todo contenido interpolado en JSX (`{post.title}`).

---

## 🧭 5. Conexión Curricular: De Postman a la Interfaz de Usuario

### 5.1 Los Tres Momentos del Flujo de Datos

```text
[1. POSTMAN]                [2. FETCH EN NAVEGADOR]           [3. REACT UI]
Ambiente de Pruebas          Llamada Asíncrona en Runtime      Experiencia de Usuario
- Inspección de status codes - Promesas y streaming de red     - Renderizado condicional
- Headers brutos y payloads  - Validación de response.ok       - Manejo de spinners/skeletons
- Validación de contratos    - Sujeto a CORS y latencia        - Accesibilidad y reintentos
```

1. **Postman:** Es una herramienta para desarrolladores y QA. Permite probar el endpoint de forma aislada, verificar si responde `200 OK`, qué cabeceras envía y cómo luce el JSON en crudo. Sin embargo, Postman no interactúa con el usuario final ni experimenta los problemas de desmontaje de componentes en una SPA.
2. **`fetch()` en el Navegador:** Es la tubería nativa de comunicación del cliente. Opera dentro del motor de JavaScript de la máquina del usuario, sujeta a restricciones de seguridad del navegador como la política de mismo origen (CORS) y desconexiones físicas.
3. **Presentación en React:** Es la traducción del dato abstracto a elementos visuales accesibles. Aquí entran en juego los estados (`useState`), la reactividad y la experiencia de usuario (evitar parpadeos, mensajes de error constructivos y persistencia).

---

### 5.2 Análisis de Contratos de Datos Reales del Curso

Durante el curso de Front End interactuamos con diversos servicios, demostrando que **no existe una única estructura para todas las APIs**:

| Proyecto del Curso | Tipo de API / Proveedor | Estructura del Contrato de Datos | Reto Técnico Resuelto |
|---|---|---|---|
| **JSONPlaceholder (Módulo Caleb)** | REST Pública Simulado | Array plano de objetos: `[{ id, userId, title, body }]` | Desacoplamiento de servicios y manejo de ciclo de vida básico. |
| **Rick and Morty (`Rick&Morty`)** | REST Pública Paginada | Objeto envolvente: `{ info: { count, pages, next }, results: [...] }` | Manejo de paginación reactiva, filtros de búsqueda y modelos anidados (`character.location.name`). |
| **Laboratorio Climático (`test 3`)** | Open-Meteo (API Meteorológica) | Series temporales y mediciones: `{ current_weather: { temperature, windspeed } }` | Integración en custom hook `useClimateAutomation`, tipado defensivo y validación numérica. |
| **Moka & Canela (`moka-canela-`)** | Catálogo E-commerce Local | Objetos complejos de inventario y pedidos con cálculo reactivo | Manejo de compras y sincronización global mediante `OrderContext`. |

---

### 5.3 Resiliencia y Dependencias Externas
Una API pública reside en servidores que pueden sufrir cortes de suministro, latencia geográfica o cuotas de consumo (*rate limits*). El código Front End debe asumir que **la red es inherentemente impredecible** y brindar alternativas visuales claras (botones de reintento, estados cacheados o mensajes de diagnóstico).

---

## 🛠️ 6. Fragmentos de Código de Apoyo para la Exposición

### Fragmento 1: Servicio Desacoplado con AbortController (`src/services/calebApiService.js`)
```javascript
export async function getPosts(limit = 5, options = {}) {
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
    signal: options.signal,
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
  }

  return await response.json();
}
```

### Fragmento 2: Formulario con Validación Nativa y Envío Controlado
```jsx
<form onSubmit={handleFormSubmit}>
  <div className="form-group">
    <label htmlFor="post-title">Título del Artículo *</label>
    <input
      id="post-title"
      type="text"
      required
      minLength={4}
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </div>
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? 'Enviando...' : 'Publicar'}
  </button>
</form>
```

### Fragmento 3: Renderizado Condicional de los Cuatro Estados
```jsx
{isLoading && <LoadingSpinner />}
{errorMessage && <ErrorAlert message={errorMessage} onRetry={handleRetry} />}
{!isLoading && !errorMessage && posts.length === 0 && <EmptyState />}
{!isLoading && !errorMessage && posts.length > 0 && <PostsGrid posts={posts} />}
```
