# Exposición Front End: JavaScript, Interactividad, React e Integración Colaborativa

Plataforma interactiva digital desarrollada para la exposición académica del curso de Front End, integrando fundamentos de JavaScript moderno, el paradigma declarativo de React, gestión de estado, pruebas unitarias y de componentes, junto con un flujo colaborativo profesional en GitHub.

---

## 🎯 Objetivo de la Exposición

Demostrar de forma didáctica, práctica y verificable la evolución técnica del desarrollo Front End a lo largo del curso:
1. **JavaScript e Interactividad (Sección Ulysses):** Fundamentos sintácticos, funciones puras, inmutabilidad, manipulación del DOM vs. Virtual DOM, reactividad, hooks de React (`useState`, `useEffect`, `useContext`), enrutamiento protegido y pruebas con testing library.
2. **Estructura y Semántica Web (Sección Ana):** Maquetación responsiva, accesibilidad y experiencia de usuario.
3. **Control de Versiones y Arquitectura (Sección Caleb):** Flujo de trabajo en Git/GitHub, branching strategy y despliegue continuo.
4. **Integración del Proyecto:** Conectar armónicamente los módulos sin acoplamiento destructivo ni conflictos de código.

---

## 🏗️ Arquitectura del Proyecto

El proyecto está construido con **React 19**, **Vite** y **Vanilla CSS modular**, priorizando rendimiento, legibilidad y diseño de nivel profesional:

```text
expocision-frontend/
├── docs/
│   ├── historial-aprendizajes-frontend.md   # Mapa curricular y evidencia de proyectos del curso
│   ├── guiones/
│   │   └── ulysses.md                       # Guion técnico y oratoria (3 minutos)
│   └── secciones/
│       └── ulysses-javascript.md             # Documentación exhaustiva del módulo de JavaScript
├── presentacion/                            # Recursos y diapositivas conceptuales
│   └── README.md
├── evidencias/                              # Capturas, métricas y validaciones
│   └── README.md
├── src/
│   ├── components/                          # Componentes globales compartidos
│   │   ├── Navbar.jsx                       # Barra de navegación principal
│   │   ├── Footer.jsx                       # Pie de página institucional
│   │   └── SectionPlaceholder.jsx           # Marcador desacoplado para módulos de compañeros
│   ├── modules/
│   │   └── ulysses/                         # Módulo autónomo de Ulysses
│   │       ├── JavaScriptSection.jsx        # Componente interactivo y taller de JS/React
│   │       └── JavaScriptSection.css        # Estilos específicos del módulo
│   ├── pages/                               # Vistas de la aplicación
│   │   ├── HomePage.jsx                     # Portada y presentación del equipo
│   │   ├── ProjectsMapPage.jsx              # Mapa de proyectos del curso
│   │   └── DocsViewerPage.jsx               # Visor integrado de documentación
│   ├── routes/
│   │   └── AppRoutes.jsx                    # Definición de rutas con React Router
│   ├── styles/
│   │   ├── index.css                        # Variables globales, reset y tema
│   │   └── theme.css                        # Tokens de diseño y microinteracciones
│   ├── App.jsx                              # Shell principal de la aplicación
│   └── main.jsx                             # Punto de entrada de ReactDOM
├── index.html                               # Plantilla HTML con tipografía optimizada
├── package.json                             # Dependencias y scripts
└── vite.config.js                           # Configuración del empaquetador Vite
```

---

## 🚀 Comandos para Ejecutar el Proyecto

### 1. Clonar e instalar dependencias
```bash
git clone https://github.com/ulyssesquiros-FWD/Exposici-n-Frontend.git
cd "Exposici-n-Frontend"
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```
Accede en tu navegador a `http://localhost:5173`.

### 3. Compilar para producción
```bash
npm run build
```

### 4. Previsualizar compilación de producción
```bash
npm run preview
```

---

## 🤝 Flujo de Colaboración en GitHub

Para garantizar un desarrollo ordenado y libre de colisiones entre Ulysses, Ana y Caleb:

1. **Rama Base (`main`):**
   - Contiene la arquitectura compartida, rutas base, diseño global y marcadores de sección (`SectionPlaceholder`).
   - Ningún integrante debe realizar push directo con código inestable a `main`.

2. **Ramas de Trabajo (Feature Branches):**
   - Cada expositor desarrolla exclusivamente en su rama y en su carpeta asignada:
     - Ulysses: `feature/ulysses-javascript` en `src/modules/ulysses/` y `docs/secciones/ulysses-javascript.md`
     - Ana: `feature/ana-estructura` en `src/modules/ana/`
     - Caleb: `feature/caleb-arquitectura` en `src/modules/caleb/`

3. **Revisión e Integración mediante Pull Requests:**
   - Cada integrante publica su rama en el repositorio remoto.
   - Se abre un **Pull Request** hacia `main`.
   - Se realiza revisión de código (Code Review), verificando:
     - No existan importaciones rotas.
     - `npm run build` ejecute con código de salida 0.
     - Ninguna rama sobrescriba archivos ajenos.
   - Una vez aprobado, se integra con `Squash and merge` o `Rebase and merge`.
