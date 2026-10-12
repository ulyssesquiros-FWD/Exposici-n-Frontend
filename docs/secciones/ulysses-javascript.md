# Documentación Técnica: JavaScript, Interactividad y React

**Expositor:** Ulysses Quirós  
**Módulo:** JavaScript, Interactividad y el Modelo Declarativo de React  
**Rama de Git:** `feature/ulysses-javascript`  
**Directorio de Código:** `src/modules/ulysses/`

---

## 📌 Introducción y Propósito

Este documento proporciona el marco conceptual, las bases matemáticas de la programación funcional y la justificación técnica de la sección de JavaScript e Interactividad. A lo largo del curso de Front End, el lenguaje evolucionó desde ser un intérprete de scripts para manipular elementos del DOM de forma imperativa hasta convertirse en el núcleo reactivo y declarativo que da vida a las aplicaciones de página única (SPA) con React.

---

## 1. Variables, Tipos de Datos, Operadores y Expresiones

### 1.1 Declaración y Alcance de Variables
JavaScript moderno (ES6+) descarta el uso de `var` debido a problemas de elevación (hoisting) y ámbito de función:
* `const`: Asignación inmutable de identificador. Obligatorio para funciones, componentes, referencias y valores que no deben reasignarse.
* `let`: Asignación reasignable con ámbito de bloque (`{ ... }`). Reservado para contadores o valores que cambian en bucles o algoritmos locales.

```javascript
// Ámbito de bloque y prevención de mutación accidental
const API_BASE_URL = 'https://rickandmortyapi.com/api';
let contadorIntentos = 0;
```

### 1.2 Tipos de Datos y Operadores
* **Primitivos:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`. Pasan por valor.
* **Compuestos:** `Object`, `Array`, `Function`. Pasan por referencia.
* **Operadores Clave:**
  * Igualdad estricta (`===` y `!==`): Evita la coerción implícita de tipos.
  * Operador de propagación (`...` - Spread Operator): Copias superficiales para garantizar inmutabilidad.
  * Encadenamiento opcional (`?.`): Acceso seguro a propiedades anidadas (`usuario?.perfil?.nombre`).
  * Coalescencia nula (`??`): Valores por defecto únicamente ante `null` o `undefined`.

---

## 2. Funciones, Parámetros, Retorno y Scope

### 2.1 Funciones Puras vs Impuras
* **Función Pura:** Para los mismos argumentos, siempre produce el mismo resultado y no produce efectos secundarios (sin modificar variables globales, sin llamadas a red, sin tocar el DOM).
```javascript
// Función pura: Altamente comprobable (testable)
export const calcularTotalGastos = (gastos) => {
  return gastos.reduce((acumulado, actual) => acumulado + actual.monto, 0);
};
```
* **Función Impura:** Depende del estado externo o altera variables fuera de su ámbito (mutaciones, `Date.now()`, `Math.random()`, llamadas fetch). En React, las impurezas deben aislarse estrictamente dentro del hook `useEffect`.

### 2.2 Closures y Funciones Flecha
Las funciones flecha (`() => {}`) heredan el contexto de `this` léxico de su entorno exterior, facilitando el paso de manejadores de eventos como props en componentes React sin requerir `.bind()`.

---

## 3. Estructuras de Datos: Condicionales, Arreglos y Objetos

En Front End contemporáneo, se evita la mutación directa de arreglos y objetos:
```javascript
// ❌ MALA PRÁCTICA (Mutación directa)
gastos.push(nuevoGasto); // Rompe la reactividad de React

// ✅ BUENA PRÁCTICA (Inmutabilidad con Spread)
const nuevosGastos = [...gastos, nuevoGasto];
```

---

## 4. Programación Funcional: `.map()`, `.filter()` y Ternarios en JSX

En el modelo declarativo de interfaces, las listas y estados condicionales se expresan como transformaciones de datos:

### 4.1 Proyección con `.map()`
Transforma cada elemento de un arreglo en un nodo React JSX. Requiere obligatoriamente una propiedad `key` única y estable para que el algoritmo de reconciliación de React identifique qué elementos cambiaron, se agregaron o eliminaron:
```jsx
{productos.map((producto) => (
  <ProductCard key={producto.id} item={producto} onAdd={handleAddToCart} />
))}
```

### 4.2 Filtrado Reactivo con `.filter()`
Aísla elementos que cumplen un predicado booleano sin alterar la colección original:
```javascript
const productosFiltrados = productos.filter((p) => p.categoria === categoriaActiva);
```

### 4.3 Renderizado Condicional con Operador Ternario (`? :`)
Permite expresar ramificaciones visuales dentro de JSX sin salir a sentencias imperativas `if / else`:
```jsx
{cargando ? (
  <Spinner />
) : productosFiltrados.length === 0 ? (
  <EstadoVacio mensaje="No se encontraron coincidencias" />
) : (
  <ProductGrid items={productosFiltrados} />
)}
```

---

## 5. Eventos y Manipulación del DOM: Tradicional vs React

| Característica | JavaScript Tradicional (Vanilla) | React Declarativo |
| :--- | :--- | :--- |
| **Referencia al DOM** | `document.getElementById()`, `querySelector()` | Virtual DOM gestionado internamente por React |
| **Escucha de Eventos** | `addEventListener('click', handler)` | Prop sintética: `onClick={handler}` |
| **Sincronización** | Manual (`el.textContent = 'Nuevo'`) | Automática: React actualiza el nodo cuando el estado cambia |
| **Rendimiento** | Recálculo de layout y reflow frecuente | Algoritmo de Reconciliación por lotes (Batching) |
| **Proyecto de Referencia** | *LoginMaster* | *Gestor de Gastos en React* |

---

## 6. Arquitectura de Componentes y Hooks de React

### 6.1 `useState`
Gestiona el estado local del componente. La función despachadora (`setCount`) agenda un re-renderizado asíncrono y compara el valor previo con el nuevo mediante `Object.is`:
```javascript
const [conteo, setConteo] = useState(0);
```

### 6.2 `useEffect`
Permite sincronizar el componente con APIs externas, timers o suscripciones. Debe incluir un arreglo de dependencias explícito y una función de limpieza (cleanup function) para prevenir fugas de memoria:
```javascript
useEffect(() => {
  const controlador = new AbortController();
  
  async function cargarDatos() {
    try {
      const res = await fetch('/api/clima', { signal: controlador.signal });
      const datos = await res.json();
      setData(datos);
    } catch (err) {
      if (err.name !== 'AbortError') setError(err);
    }
  }

  cargarDatos();
  return () => controlador.abort(); // Función de limpieza
}, [ciudad]);
```

### 6.3 `useContext`
Elimina el problema del "prop drilling" permitiendo consumir datos globales como la sesión de usuario o el carrito de compras (ejemplo verificado en `OrderContext.jsx` del proyecto *Moka & Canela*).

---

## 7. Enrutamiento y Rutas Protegidas (`React Router`)

En el proyecto *Rutas priv*, la seguridad a nivel de interfaz se implementa mediante un componente envoltura (guard) que evalúa si existe un token o usuario en contexto antes de renderizar la vista:
```jsx
export const PrivateRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return <SessionLoading />;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
```
Esto garantiza que usuarios no autenticados sean redirigidos inmediatamente hacia el login sin renderizar datos confidenciales en memoria.

---

## 8. Persistencia con `localStorage` y Validación Defensiva

En proyectos como *LoginMaster* y *Rutas priv*, `localStorage` se utiliza para preservar la sesión del usuario entre recargas de página:
* Siempre debe envolverse en bloques `try / catch` para manejar entornos restringidos (modo incógnito, storage lleno).
* Los datos serializados en JSON deben validarse antes de consumirse para evitar excepciones por valores corruptos:
```javascript
export const obtenerUsuarioSesion = () => {
  try {
    const raw = localStorage.getItem('auth_user');
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error('Error al recuperar sesión de localStorage:', error);
    return null;
  }
};
```

---

## 9. Pruebas de Software (Testing): Vitest y React Testing Library

### 9.1 Filosofía de Testing
"Cuanto más se parezcan tus pruebas a la forma en que se usa tu software, más confianza te darán" (Kent C. Dodds).

### 9.2 Pruebas de Funciones Puras (Vitest / Jest)
Verifican algoritmos de negocio aislados sin necesidad de montar el DOM:
```javascript
test('debe calcular el monto acumulado correctamente', () => {
  const lista = [{ monto: 100 }, { monto: 250 }];
  expect(calcularTotalGastos(lista)).toBe(350);
});
```

### 9.3 Pruebas de Componentes (React Testing Library)
Comprobadas en `test 3/src/components/ClimateResult.test.jsx`. Se utilizan consultas semánticas accesibles por rol (`screen.getByRole`) en lugar de selectores CSS frágiles:
```javascript
test('muestra mensaje de alerta cuando el clima es de riesgo', () => {
  render(<ClimateResult riesgo="alto" temperatura={38} />);
  expect(screen.getByRole('alert')).toHaveTextContent(/alerta climática/i);
});
```

---

## 10. Buenas Prácticas y Código Limpio en Front End

1. **Principio de Responsabilidad Única (SRP):** Un componente solo debe encargarse de una tarea (un componente de presentación no realiza llamadas fetch directas).
2. **Nombres Semánticos e Intencionales:** Nombres descriptivos para funciones (`manejarFiltroPorCategoria` en vez de `f1`) y variables booleanas que inician con verbos (`isLoading`, `hasError`, `isAuthenticated`).
3. **Inmutabilidad Estricta:** Nunca mutar arreglos u objetos recibidos por props o estado.
4. **Desacoplamiento de Servicios:** Separar las llamadas a APIs en archivos de servicio (`services/rickMortyService.js`) para facilitar su mantenimiento y mocking en pruebas.
