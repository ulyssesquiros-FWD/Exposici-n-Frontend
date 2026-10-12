# Exposición Front End: De la Estructura Web a una Interfaz Dinámica con React y APIs

Plataforma interactiva digital unificada para la evaluación académica grupal del curso de Desarrollo Front End. Integra los aportes individuales de **Caleb**, **Ana** y **Ulysses Quirós** bajo un mismo hilo conductor técnico, estético y pedagógico.

---

## 🎯 Objetivo y Propósito Pedagógico

Demostrar de forma práctica, verificable y secuencial la evolución de una aplicación web moderna:
1. **HTML5 Semántico y Accesibilidad (Caleb):** Estructura con significado, jerarquía de encabezados, formularios y validación nativa.
2. **CSS Moderno y Diseño Responsivo (Ana):** Reglas, cascada, especificidad, Box Model, layouts con Flexbox (1D) y CSS Grid (2D), y adaptabilidad para dispositivos móviles.
3. **JavaScript e Interactividad Declarativa (Ulysses):** Sintaxis moderna, funciones puras, inmutabilidad, renderizado declarativo con React 19, `.map()`, `.filter()`, operadores ternarios y hooks (`useState`, `useEffect`, `useContext`).
4. **Consumo de APIs REST (Caleb):** Peticiones asíncronas con `fetch()`, validación defensiva con `response.ok`, tratamiento de errores de red y prevención de fugas de memoria con `AbortController`.
5. **Ingeniería Colaborativa y Buenas Prácticas (Equipo):** Separación de responsabilidades, arquitectura modular desacoplada y flujo de ramas en Git/GitHub.

---

## 👥 Integrantes y Responsabilidades Definitivas

| Expositor / Rol | Área Temática | Módulo en Código | Rama Original |
| :--- | :--- | :--- | :--- |
| **Caleb** | HTML Semántico, A11y, Formularios y Consumo de APIs REST | `src/modules/caleb/HtmlApiSection.jsx`<br>`src/services/calebApiService.js` | `feature/caleb-html-api` |
| **Ana** | CSS Moderno, Box Model, Flexbox, CSS Grid y Responsividad | `src/modules/ana/CssSection.jsx`<br>`src/modules/ana/CssSection.css` | `feature/ana-css` |
| **Ulysses Quirós** | JavaScript, Interactividad, React 19, Hooks, Testing e Integración | `src/modules/ulysses/JavaScriptSection.jsx`<br>`src/modules/ulysses/JavaScriptSection.css` | `feature/ulysses-javascript` |

---

## ⏱️ Cronograma y Orden de la Exposición (8 a 10 Minutos)

La exposición está calibrada exactamente en **9 minutos y 5 segundos** para cumplir el rango de 8 a 10 minutos asignado al equipo completo:

```text
[0:00 - 0:30]  1. Apertura y Objetivo Común                         — Ulysses (0:30 min)
[0:30 - 1:40]  2. HTML Semántico, Accesibilidad y Formularios       — Caleb   (1:10 min)
[1:40 - 2:55]  3. CSS: Selectores, Cascada y Box Model              — Ana     (1:15 min)
[2:55 - 4:10]  4. CSS: Flexbox, CSS Grid y Responsividad            — Ana     (1:15 min)
[4:10 - 5:30]  5. JavaScript: Variables, Funciones Puras y DOM      — Ulysses (1:20 min)
[5:30 - 6:40]  6. React: Componentes, Estado, .map() y Hooks        — Ulysses (1:10 min)
[6:40 - 8:05]  7. Consumo de APIs con fetch() y Manejo de Errores   — Caleb   (1:25 min)
[8:05 - 9:05]  8. Buenas Prácticas, Dificultades Reales y Cierre    — Los Tres (1:00 min)
```

---

## 🌐 Estructura de Navegación y Rutas

La aplicación cuenta con una barra de navegación accesible y rutas directas:
* `/`: **Portada principal:** Presentación de expositores, objetivos y resumen de módulos.
* `/presentacion`: **Modo Presentación Guiada:** Secuencia interactiva de 8 diapositivas con temporizador, transiciones verbales y widget de pipeline compartido en vivo.
* `/seccion/html-api`: **Módulo de Caleb:** Estructura semántica, formularios nativos y consumo en vivo de la API JSONPlaceholder con prueba de error 404.
* `/seccion/css`: **Módulo de Ana:** Selectores, cálculo de especificidad, box model interactivo, Flexbox vs Grid y vista previa responsiva para móviles.
* `/seccion/javascript`: **Módulo de Ulysses:** Taller interactivo de reactividad, filtrado `.filter()`, renderizado `.map()`, operadores ternarios, comparativa DOM vs React, hooks y pruebas unitarias.
* `/proyectos`: **Mapa de Aprendizajes:** Catálogo interactivo de los 9 proyectos reales desarrollados en el curso con buscador y filtros por dimensión técnica.
* `/documentacion`: **Centro de Documentación:** Visor con el guion grupal de 9 minutos, guiones individuales, guion de diapositivas y especificaciones técnicas.
* Aliases de compatibilidad: `/seccion/caleb` redirige a `/seccion/html-api`, y `/seccion/ana` redirige a `/seccion/css`.

---

## 🏗️ Arquitectura del Repositorio

```text
expocision-frontend/
├── docs/
│   ├── historial-aprendizajes-frontend.md       # Mapa curricular y evidencia de los 9 proyectos del curso
│   ├── guiones/
│   │   ├── guion-grupal.md                      # Guion secuencial de 9:05 min con transiciones verbales
│   │   ├── ulysses.md                           # Guion individual de Ulysses con banco de preguntas
│   │   ├── ana.md                               # Guion individual de Ana con banco de preguntas
│   │   └── caleb.md                             # Guion individual de Caleb con banco de preguntas
│   └── secciones/
│       ├── ulysses-javascript.md                # Especificación técnica del módulo de JavaScript
│       ├── ana-css.md                           # Especificación técnica del módulo de CSS
│       └── caleb-html-api.md                    # Especificación técnica del módulo de HTML y APIs
├── presentacion/
│   ├── README.md                                # Tiempos oficiales de la exposición (8-10 min)
│   └── guion-diapos.md                          # Guion detallado de las 8 diapositivas guiadas
├── evidencias/
│   └── README.md                                # Catálogo de capturas sugeridas para la defensa técnica
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                           # Barra de navegación principal integrada
│   │   └── Footer.jsx                           # Pie de página con créditos institucionales
│   ├── modules/
│   │   ├── caleb/                               # Módulo de Caleb (HTML Semántico & APIs)
│   │   │   ├── HtmlApiSection.jsx
│   │   │   └── HtmlApiSection.css
│   │   ├── ana/                                 # Módulo de Ana (CSS & Layouts)
│   │   │   ├── CssSection.jsx
│   │   │   └── CssSection.css
│   │   └── ulysses/                             # Módulo de Ulysses (JS, React & Testing)
│   │       ├── JavaScriptSection.jsx
│   │       └── JavaScriptSection.css
│   ├── pages/
│   │   ├── HomePage.jsx                         # Portada interactiva
│   │   ├── PresentationPage.jsx                 # Modo de presentación de 8 diapositivas
│   │   ├── PresentationPage.css
│   │   ├── ProjectsMapPage.jsx                  # Catálogo de 9 proyectos del curso
│   │   └── DocsViewerPage.jsx                   # Visor de guiones y documentación
│   ├── routes/
│   │   └── AppRoutes.jsx                        # Configuración de rutas con React Router 7
│   ├── services/
│   │   └── calebApiService.js                   # Servicio desacoplado de consumo fetch() con AbortSignal
│   ├── styles/
│   │   ├── index.css                            # Tokens de diseño, fuentes y reset
│   │   └── theme.css                            # Glassmorphism, animaciones y gradientes
│   ├── App.jsx                                  # Shell principal
│   └── main.jsx                                 # Entrada React 19
├── index.html                                   # Plantilla HTML con tipografía Outfit & Inter
├── package.json                                 # Configuración y dependencias
└── vite.config.js                               # Empaquetador Vite
```

---

## 🚀 Comandos para Ejecutar el Proyecto

### 1. Clonar e instalar dependencias
```bash
git clone https://github.com/ulyssesquiros-FWD/Exposici-n-Frontend.git
cd Exposici-n-Frontend
npm install
```

### 2. Ejecutar servidor de desarrollo local
```bash
npm run dev
```
Abre en tu navegador: `http://localhost:5173`.

### 3. Compilar para producción (Validación técnica)
```bash
npm run build
```

### 4. Previsualizar la compilación de producción
```bash
npm run preview
```

---

## 🗺️ Mapa de Aprendizajes Basado en Proyectos Reales

La plataforma fundamenta sus conceptos teóricos en 9 proyectos reales verificados en el entorno de desarrollo:
1. **LoginMaster:** Formularios, validación con expresiones regulares, manipulación del DOM y persistencia en `localStorage`.
2. **Gestor de Gastos en React:** Componentes atómicos, paso de propiedades e inmutabilidad estricta en arreglos.
3. **Laboratorios de React / Ternarios:** Transformación funcional con `.map()`, filtrado con `.filter()` y renderizado condicional mediante operadores ternarios.
4. **Prácticas de React Router:** Rutas protegidas (`PrivateRoutes`), layouts anidados y contexto global de autenticación (`AuthContext`).
5. **Prácticas de Testing:** Pruebas unitarias de funciones puras y pruebas de componentes con React Testing Library y Vitest.
6. **Automatización Climática:** Custom Hooks desacoplados (`useClimateAutomation`), consumo asíncrono y mitigación de errores de red.
7. **Rick and Morty:** Consumo de APIs REST públicas, paginación reactiva y manejo de estados de carga.
8. **Moka & Canela:** Arquitectura de e-commerce con `OrderContext`, gestión de carrito y checkout.
9. **TalenTico:** Plataforma SPA integral con arquitectura por características, formularios y aseguramiento de calidad.

---

## 🛠️ Validaciones Técnicas Ejecutadas

* **Compilación de producción:** `npm run build` ejecutado exitosamente con 0 errores y 0 advertencias.
* **Integridad de importaciones:** Todos los módulos (`HtmlApiSection`, `CssSection`, `JavaScriptSection`, `PresentationPage`) resuelven limpiamente.
* **Consumo de datos en vivo:** Servicio `calebApiService.js` conectado a JSONPlaceholder con soporte de cancelación por `AbortSignal` y escenarios de fallo controlado (HTTP 404).
* **Navegación fluida:** React Router con soporte de enlaces directos, alias de compatibilidad y control por teclado (`←` y `→`) en el modo de presentación.
