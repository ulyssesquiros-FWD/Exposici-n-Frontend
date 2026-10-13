# Guion Detallado de Diapositivas — Modo Presentación Guiada

**Proyecto:** Exposición Front End  
**Duración Total Estimada:** 9 minutos y 5 segundos (Rango requerido: 8 a 10 min)  
**Ruta en la aplicación:** `/presentacion`  
**Equipo:** Ulysses Quirós, Ana y Caleb  

---

## 🗺️ Mapa General de la Presentación

| # | Diapositiva | Expositor | Tiempo | Enfoque Principal |
|---|-------------|-----------|--------|-------------------|
| **1** | De la Estructura a la Interfaz Dinámica | **Ulysses** | `0:30` | Apertura, equipo y objetivo común |
| **2** | HTML Semántico, Accesibilidad y Formularios | **Caleb** | `1:10` | Semántica, A11y, formularios y validación |
| **3** | CSS: Selectores, Cascada y Box Model | **Ana** | `1:15` | Especificidad, reglas, 4 capas del Box Model |
| **4** | CSS: Flexbox, CSS Grid y Responsividad | **Ana** | `1:15` | Layouts 1D y 2D, media queries y foco |
| **5** | JavaScript: Variables, Funciones Puras y DOM | **Ulysses** | `1:20` | Sintaxis moderna, inmutabilidad y eventos |
| **6** | React: Componentes, Estado y Hooks | **Ulysses** | `1:10` | Modelo declarativo, .map(), ternarios y hooks |
| **7** | Consumo de APIs: Fetch(), JSON y Errores | **Caleb** | `1:25` | Estados asíncronos, response.ok y Postman |
| **8** | Buenas Prácticas y Reflexión Final | **Los Tres** | `1:00` | Aprendizajes, dificultades reales y cierre |

---

## 📽️ Detalle Diapositiva por Diapositiva

### Diapositiva 1: De la Estructura a la Interfaz Dinámica
* **Expositor:** Ulysses Quirós
* **Tiempo asignado:** `0:30 min`
* **Título en pantalla:** De la Estructura a la Interfaz Dinámica: Exposición Front End
* **Puntos a verbalizar:**
  - Saludo formal al profesor y compañeros.
  - Presentación del equipo y de las responsabilidades asignadas.
  - El concepto narrativo unificado: evolución natural de una aplicación web desde la estructura semántica inicial hasta una interfaz reactiva conectada a una API externa.
  - Tiempo total estimado de 9 minutos.
* **Código en pantalla:**
  ```javascript
  const WebApp = {
    estructura:   "HTML5 Semántico y Accesibilidad",
    estilos:      "CSS Moderno, Flexbox, Grid y Responsividad",
    logica:       "JavaScript ES6+, Funciones Puras e Inmutabilidad",
    reactividad:  "React 19, Componentes, Hooks y Estado",
    datos:        "Consumo Asíncrono de APIs REST con fetch()"
  };
  ```

---

### Diapositiva 2: HTML Semántico, Accesibilidad y Formularios Nativos
* **Expositor:** Caleb
* **Tiempo asignado:** `1:10 min`
* **Título en pantalla:** HTML Semántico, Accesibilidad y Formularios Nativos
* **Puntos a verbalizar:**
  - La diferencia entre colocar elementos visuales y asignarles **significado semántico**.
  - Un único `<h1>` por página, y el uso correcto de `<header>`, `<nav>`, `<main>`, `<section>` y `<article>`.
  - Accesibilidad real: vinculación de `<label>` con `<input>` mediante `htmlFor` e `id` para lectores de pantalla.
  - Validación nativa del navegador (`required`, `type="email"`, longitudes mínimas) combinada con pseudoclases CSS `:valid` e `:invalid`.
  - Seguridad: nunca inyectar contenido con `innerHTML` para prevenir vulnerabilidades XSS.
* **Código en pantalla:**
  ```html
  <form aria-labelledby="form-titulo">
    <h2 id="form-titulo">Registro de Publicación</h2>
    <label for="titulo-post">Título del artículo:</label>
    <input id="titulo-post" name="title" type="text" required minlength="5" />
  </form>
  ```

---

### Diapositiva 3: CSS: Selectores, Cascada, Especificidad y Box Model
* **Expositor:** Ana
* **Tiempo asignado:** `1:15 min`
* **Título en pantalla:** CSS: Selectores, Cascada, Especificidad y Box Model
* **Puntos a verbalizar:**
  - El rol de CSS: conectar la estructura de HTML con la presentación visual mediante reglas declarativas.
  - Los tres selectores primarios: elemento (`article`), clase (`.card`) e identificador (`#destacado`).
  - Resolución de conflictos en cascada: importancia > especificidad (ID > Clase > Etiqueta) > orden de aparición.
  - Herencia de propiedades: colores y fuentes se heredan del contenedor; márgenes y bordes no.
  - El Box Model en profundidad: contenido en el núcleo, `padding` como amortiguador interno, `border` como límite y `margin` como separación entre cajas.
* **Código en pantalla:**
  ```css
  article { color: #dbeafe; }       /* Elemento: (0,0,1) */
  .card { padding: 1.25rem; }        /* Clase:    (0,1,0) */
  #destacado { border: 2px solid; }  /* ID:       (1,0,0) */

  .card {
    margin: 1rem;       /* Espacio exterior */
    border: 1px solid;  /* Límite */
    padding: 1.25rem;   /* Relleno interno */
  }
  ```

---

### Diapositiva 4: CSS: Flexbox, CSS Grid y Diseño Responsivo
* **Expositor:** Ana
* **Tiempo asignado:** `1:15 min`
* **Título en pantalla:** CSS: Flexbox, CSS Grid y Diseño Responsivo
* **Puntos a verbalizar:**
  - Flexbox (unidimensional): ideal para alinear elementos en un solo eje (filas de navegación o tarjetas de producto con espaciado regular `gap`).
  - CSS Grid (bidimensional): control simultáneo de filas y columnas, óptimo para la estructura completa de páginas y paneles.
  - Responsividad con media queries (`@media`): adaptar el número de columnas a pantallas estrechas para evitar el desbordamiento horizontal (`overflow`).
  - Foco y accesibilidad visual: soporte obligatorio de `:focus-visible` para personas que navegan con teclado (`Tab` y `Shift+Tab`).
* **Código en pantalla:**
  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 48rem) {
    .grid-container {
      grid-template-columns: 1fr; /* Colapso responsivo */
    }
  }
  ```

---

### Diapositiva 5: JavaScript: Variables, Funciones Puras, Eventos y DOM
* **Expositor:** Ulysses Quirós
* **Tiempo asignado:** `1:20 min`
* **Título en pantalla:** JavaScript: Variables, Funciones Puras, Eventos y DOM
* **Puntos a verbalizar:**
  - JavaScript como motor de inteligencia en el cliente.
  - Variables con ámbito delimitado (`const` y `let`) evitando los problemas de `var`.
  - Funciones puras: entradas idénticas siempre retornan salidas idénticas sin tocar variables externas, fundamentales para pruebas confiables.
  - Inmutabilidad estricta: por qué nunca usamos `array.push()` y en su lugar usamos el operador spread `[...array, item]`.
  - Contraste con el DOM tradicional: en proyectos iniciales como *LoginMaster* buscábamos nodos manualmente con `querySelector`; en aplicaciones complejas esto causa desincronizaciones graves.
* **Código en pantalla:**
  ```javascript
  // ❌ Mala práctica: Mutación imperativa
  gastos.push(nuevoGasto);

  // ✅ Buena práctica: Función pura e inmutable
  export const agregarGastoInmutable = (gastos, nuevo) => {
    return [...gastos, nuevo];
  };
  ```

---

### Diapositiva 6: React: Componentes, Estado, .map(), Ternarios y Hooks
* **Expositor:** Ulysses Quirós
* **Tiempo asignado:** `1:10 min`
* **Título en pantalla:** React: Componentes, Estado, .map(), Ternarios y Hooks
* **Puntos a verbalizar:**
  - El paradigma declarativo: `UI = f(State)`. Nosotros describimos la interfaz según el estado actual; React reconcilia el Virtual DOM.
  - Proyección de listas con `.map()` exigiendo `keys` únicas y estables.
  - Renderizado condicional mediante operadores ternarios (`condicion ? <Exito /> : <Vacio />`), evitando caídas de la interfaz.
  - Hooks del ecosistema: `useState` para el estado local, `useEffect` para ciclos asíncronos y `useContext` para evitar *prop drilling* (como comprobamos en *Moka & Canela* con el carrito).
* **Código en pantalla:**
  ```jsx
  const filtrados = productos.filter(p => p.precio <= presupuesto);

  return (
    <div>
      {filtrados.length === 0 ? (
        <EstadoVacio mensaje="Sin coincidencias" />
      ) : (
        filtrados.map(item => <Tarjeta key={item.id} {...item} />)
      )}
    </div>
  );
  ```

---

### Diapositiva 7: Consumo de APIs: Fetch(), Respuestas JSON y Errores
* **Expositor:** Caleb
* **Tiempo asignado:** `1:25 min`
* **Título en pantalla:** Consumo de APIs: Fetch(), Respuestas JSON y Errores
* **Puntos a verbalizar:**
  - Desacoplamiento de capas: la lógica de comunicación reside en `calebApiService.js`, dejando el componente visual limpio.
  - Manejo de los tres estados asíncronos: carga (`loading`), éxito con datos (`success`) y errores de red (`error`).
  - La trampa de `fetch()`: no arroja error ante códigos HTTP 404 o 500; validamos obligatoriamente `response.ok`.
  - Prevención de fugas de memoria con `AbortController` si el usuario abandona la página antes de que termine la petición.
* **Código en pantalla:**
  ```javascript
  export async function getPosts(limit = 5, { signal } = {}) {
    const response = await fetch(`${URL}?_limit=${limit}`, { signal });
    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}: Respuesta fallida`);
    }
    return await response.json();
  }
  ```

---

### Diapositiva 8: Buenas Prácticas, Proyectos del Curso y Reflexión Final
* **Expositor:** Los Tres Integrantes (Ulysses, Ana y Caleb)
* **Tiempo asignado:** `1:00 min`
* **Título en pantalla:** Buenas Prácticas, Proyectos del Curso y Reflexión Final
* **Puntos a verbalizar:**
  - **Ulysses (0:20):** La arquitectura limpia: separar responsabilidades (HTML estructura, CSS viste, JS calcula, React reactiva y APIs alimentan). La dificultad de desaprender la mutación directa y dominar la inmutabilidad funcional.
  - **Ana (0:20):** Buenas prácticas de estilos: uso de variables para consistencia, diseño responsivo móvil primero y evitar colisiones de selectores aislando las clases por componente.
  - **Caleb (0:20):** Buenas prácticas de consumo: manejo defensivo de respuestas en `fetch()`, accesibilidad nativa desde el inicio y el flujo colaborativo en Git mediante Pull Requests limpios.
* **Código en pantalla:**
  ```javascript
  const LeccionesAprendidas = [
    "HTML Semántico: Accesibilidad nativa desde el diseño",
    "CSS Moderno: Variables y Grid eliminan redundancia",
    "JavaScript & React: La inmutabilidad garantiza predictibilidad",
    "APIs REST: Manejo defensivo de errores y cancelación",
    "Git Colaborativo: Arquitectura modular sin colisiones"
  ];
  ```
