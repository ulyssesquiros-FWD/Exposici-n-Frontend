# Historial de Aprendizajes y Proyectos Front End

Este documento compila el mapa exhaustivo de conocimientos técnicos, habilidades prácticas y proyectos desarrollados durante el curso de Front End. Cada sección detalla los conceptos pedagógicos impartidos, su aplicación en código real verificado en el entorno de desarrollo y su relevancia para la exposición.

---

## 🗺️ Matriz de Competencias y Proyectos Reales

| # | Proyecto Verificado | Ruta Local en Entorno | Conceptos Clave Demostrados | Tecnologías & Patrones |
|---|---------------------|-----------------------|------------------------------|------------------------|
| **1** | **LoginMaster** | `Frontend/HappyLab/loginmaster` | Validación de credenciales, autenticación simulada, persistencia en `localStorage`, control de sesión y alternancia de temas (Light/Dark). | JavaScript Vanilla, DOM APIs, Web Storage API. |
| **2** | **Gestor de Gastos en React** | `Frontend/React/gestor-gastos-react` | Descomposición en componentes atómicos (`Button`, `ExpenseCard`, `Header`), separación de responsabilidades, operaciones aritméticas reactivas. | React, Props, `useState`, Inmutabilidad de arreglos. |
| **3** | **Laboratorios de React** | `Frontend/Ternarios`, `Frontend/Reto` | Métodos funcionales iterativos (`.map()`, `.filter()`), operadores ternarios para renderizado condicional, manejo de listas dinámicas con keys únicas. | React, JSX, Programación funcional, Event handlers. |
| **4** | **Prácticas de React Router** | `Frontend/Rutas priv` | Enrutamiento declarativo, layouts anidados, guardas de navegación (`PrivateRoutes`, `GuestRoutes`), contexto global de autenticación (`AuthContext`). | React Router 7, `useContext`, `Navigate`, `useLocation`. |
| **5** | **Prácticas de Testing** | `Frontend/test 3`, `Proyecto Frontend` | Pruebas unitarias de funciones puras, aserciones con Jest/Vitest, renderizado de componentes aislados y pruebas de interacción con React Testing Library. | Vitest / Jest, `@testing-library/react`, Aserciones de accesibilidad. |
| **6** | **Automatización Climática** | `Frontend/test 3` (`useClimateAutomation`, `climateService`) | Custom Hooks desacoplados, consumo de servicios asíncronos (`async/await`), gestión de triple estado (`loading`, `error`, `data`), mitigación de riesgos de red. | Custom Hooks, JavaScript Asíncrono, Manejo de errores defensivo. |
| **7** | **Rick and Morty** | `Frontend/Rick&Morty` | Consumo de API REST pública, paginación reactiva, filtros de búsqueda en tiempo real, gestión de favoritos con estado global y modularización visual. | Fetch API / Axios, `useEffect`, Modularización CSS, Custom Hooks. |
| **8** | **Moka & Canela** | `Frontend/Moka/moka-canela-` | Aplicación de comercio electrónico con carrito de compras, catálogo categorizado, cálculo reactivo de subtotal/impuestos y flujo completo de checkout. | React Context API, Reducer pattern, Componentes complejos de negocio. |
| **9** | **TalenTico** | `Frontend/Poyecto/TalenTico/talentico` | Plataforma colaborativa a escala completa, estandarización de UI, integración de múltiples vistas de usuario, formularios controlados y QA frontend. | React SPA, Vite, JSON Server, Arquitectura modular por capas. |

---

## 🔍 Análisis Detallado por Proyecto

### 1. LoginMaster (`HappyLab/loginmaster`)
* **Conceptos:** Interacción con formularios HTML, eventos `submit`, sanitización y validación de expresiones regulares en JavaScript vanilla.
* **Lección Técnica:** Manipulación manual del DOM con `querySelector` y persistencia de token o perfil en `localStorage.setItem('user', ...)`. Permite contrastar cómo la manipulación imperativa del DOM requiere sincronización manual frente al flujo unidireccional de React.

### 2. Gestor de Gastos en React (`React/gestor-gastos-react`)
* **Conceptos:** Creación de componentes reutilizables (`ExpenseCard.jsx`, `Button.jsx`, `Header.jsx`).
* **Lección Técnica:** Paso de propiedades (`props`), propagación de eventos hacia arriba mediante callbacks (`onDelete`, `onAdd`) y actualización inmutable del estado (`setGastos([...gastos, nuevoGasto])`). Demuestra la regla fundamental de evitar mutar arrays existentes directamente con `.push()`.

### 3. Laboratorios de React y Ternarios (`Ternarios/src/components/react-practice`)
* **Conceptos:** Filtrado interactivo en tiempo real con `StudentsFilter.jsx` y renderizado de colecciones mediante `StudentsList.jsx`.
* **Lección Técnica:** Utilización de expresiones JavaScript embebidas en JSX:
  ```jsx
  {estudiantes.filter(e => e.nombre.toLowerCase().includes(termino.toLowerCase()))
              .map(estudiante => (
                <TarjetaEstudiante key={estudiante.id} {...estudiante} />
              ))}
  ```
  Uso riguroso de operadores ternarios `condicion ? <ComponenteA /> : <ComponenteB />` y renderizado de estados vacíos cuando la colección filtrada no contiene resultados (`lista.length === 0`).

### 4. Rutas Privadas y Navegación (`Rutas priv`)
* **Conceptos:** Protección de áreas sensibles del sistema y gestión del ciclo de vida de la sesión.
* **Lección Técnica:** Implementación de `PrivateRoutes.jsx` envolviendo `<Outlet />` con una verificación de autenticación:
  ```jsx
  export const PrivateRoutes = () => {
    const { isAuthenticated, loading } = useAuth();
    if (loading) return <SessionLoading />;
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
  };
  ```
  Se combina con `AuthContext.jsx` para evitar el "prop drilling" de credenciales.

### 5. Prácticas de Testing y Calidad (`test 3`)
* **Conceptos:** Pirámide de pruebas en Frontend: funciones utilitarias puras y componentes de interfaz.
* **Lección Técnica:** Archivos verificados `climateService.test.js` y `ClimateResult.test.jsx`. Enfoque de prueba orientado al usuario: buscar elementos por rol (`screen.getByRole('button')`) o texto en lugar de selectores de clase CSS frágiles.

### 6. Automatización Climática (`test 3/src/hooks/useClimateAutomation.js`)
* **Conceptos:** Encapsulación de lógica asíncrona dentro de Custom Hooks.
* **Lección Técnica:** Manejo de estados de carga y errores de red en peticiones asíncronas:
  ```javascript
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  ```
  Prevención de fugas de memoria (memory leaks) si el componente se desmonta antes de resolver la promesa.

### 7. Rick and Morty (`Rick&Morty`)
* **Conceptos:** Integración con servicios externos REST, sincronización de parámetros de búsqueda y renderizado de grillas dinámicas.
* **Lección Técnica:** Desacoplamiento entre la capa de acceso a datos (`rickMortyService.js`) y los componentes de presentación (`CharacterGrid.jsx`, `CharacterCard.jsx`).

### 8. Moka & Canela (`Moka/moka-canela-`)
* **Conceptos:** Estado global complejo con múltiples acciones (agregar al carrito, ajustar cantidades, eliminar ítem, vaciar orden).
* **Lección Técnica:** Demuestra el valor de `OrderContext.jsx` para compartir el estado del carrito entre `ProductGrid.jsx`, `Navbar.jsx`, `OrderSummary.jsx` y `Checkout.jsx` sin necesidad de librerías externas pesadas como Redux.

### 9. TalenTico (`Poyecto/TalenTico/talentico`)
* **Conceptos:** Proyecto integrador a gran escala con múltiples módulos de negocio (vacantes, candidatos, filtros por habilidades).
* **Lección Técnica:** Arquitectura modular por características (feature-based structure), control estricto de calidad de código y diseño responsivo enfocado en accesibilidad.

---

## 🎯 Conclusión para la Exposición Oral
Este mapa demuestra que los temas abordados por Ulysses en la sección de JavaScript e Interactividad no son conceptos teóricos aislados, sino los cimientos sobre los cuales se construyeron los 9 proyectos reales del curso. Cada demostración en vivo se enlaza directamente con un reto técnico resuelto en el aula.
