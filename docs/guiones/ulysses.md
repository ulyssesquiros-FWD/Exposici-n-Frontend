# Guion de Intervención Oral: Ulysses Quirós

**Expositor:** Ulysses Quirós  
**Tema:** JavaScript, Interactividad, el Modelo Declarativo de React e Integración  
**Duración Estimada:** 3:00 minutos exactos (con margen de preguntas)  
**Objetivo Pedagógico:** Demostrar dominio conceptual y práctico de la interactividad en Front End conectando la teoría con los 9 proyectos reales del curso.

---

## ⏱️ Estructura Temporal de la Presentación (3:00 min)

```text
[0:00 - 0:40] Apertura e Introducción a JavaScript
[0:40 - 1:40] Demostración en Vivo: De la Manipulación del DOM a React Declarativo
[1:40 - 2:30] Arquitectura en Proyectos Reales: Hooks, Rutas Protegidas y Pruebas
[2:30 - 3:00] Dificultad Real, Lección Aprendida y Cierre
```

---

## 🎤 Guion Palabra por Palabra

### [0:00 - 0:40] 1. Apertura e Introducción a JavaScript
> *"Buenos días profesor y compañeros. Mi nombre es Ulysses Quirós, y hoy les presentaré el corazón interactivo de nuestras aplicaciones: JavaScript y su transición hacia el modelo declarativo de React.*
> 
> *A lo largo del curso comprendimos que mientras HTML provee la estructura y CSS la estética, JavaScript es el motor que dota de inteligencia y reactividad a la interfaz. Sin embargo, escribir JavaScript moderno no significa simplemente añadir eventos dispersos; significa trabajar con inmutabilidad, funciones puras y arquitecturas predecibles que escalen sin romperse."*

---

### [0:40 - 1:40] 2. Demostración en Vivo: Del DOM Imperativo a React Declarativo
*(Ulysses navega en la pantalla a la pestaña 1 del Taller Interactivo y hace clic en "Disparar Interacción" y luego escribe en el filtro de búsqueda).*

> *"Para demostrar esto de manera tangible, observemos esta demostración en vivo. En JavaScript tradicional —como implementamos al inicio en el proyecto **LoginMaster**— cada cambio requería buscar manualmente un elemento con `querySelector`, modificar sus clases y sincronizar el DOM a mano. Esto genera errores frecuentes cuando la interfaz crece.*
> 
> *En cambio, aquí en React vemos el paradigma declarativo: no tocamos el DOM directamente. Cuando escribo en este buscador o presiono un botón, modifico un estado mediante `useState`. React toma esa nueva fotografía de los datos, aplica programación funcional con métodos inmutables como `.filter()` y proyecta los resultados con `.map()` utilizando `keys` únicas. Y si no hay coincidencias, un operador ternario renderiza instantáneamente un estado vacío amigable, sin necesidad de bucles tradicionales ni manipulaciones frágiles."*

---

### [1:40 - 2:30] 3. Arquitectura en Proyectos Reales: Hooks, Rutas y Testing
*(Ulysses muestra brevemente la pestaña 3 y 4 del taller).*

> *"Esta misma lógica fue la que aplicamos en los proyectos más avanzados del curso:*
> * En **Rick and Morty** y en la **Automatización climática**, encapsulamos llamadas asíncronas en hooks personalizados como `useClimateAutomation`, gestionando con elegancia los tres estados críticos: carga, error y datos.
> * En **Moka & Canela**, usamos `useContext` para mantener sincronizado el carrito de compras a lo largo de todo el flujo de compra sin 'prop drilling'.
> * En **Rutas priv**, diseñamos un componente guard `PrivateRoutes` que protege pantallas confidenciales redirigiendo al login si no existe una sesión válida en `localStorage`.
> * Y finalmente, aseguramos la calidad mediante pruebas unitarias en **test 3** con Vitest y React Testing Library, testeando el comportamiento del usuario mediante roles semánticos y no clases CSS."*

---

### [2:30 - 3:00] 4. Dificultad Real, Lección Aprendida y Cierre
> *"Si debo destacar una dificultad técnica real que enfrentamos, fue **desaprender la mutación directa de datos**. Al principio, la costumbre nos llevaba a usar `array.push()` o reasignar propiedades de objetos. En React, mutar el estado directamente rompe el algoritmo de comparación de referencias y la interfaz no se actualiza.*
> 
> *Aprender a utilizar el operador spread `[...array, nuevo]` y métodos funcionales puros no solo corrigió los bugs, sino que transformó nuestra mentalidad como ingenieros front end.*
> 
> *Muchas gracias. Quedo atento a las preguntas que deseen realizar."*

---

## 🧠 Banco de Preguntas del Profesor y Respuestas Sugeridas

### Pregunta 1:
**Profesor:** *¿Por qué en React insistimos tanto en que el estado debe ser inmutable y qué pasa por debajo si hago `gastos.push(nuevoGasto)`?*

**Respuesta Sugerida:**
> *"Excelente pregunta, profesor. React utiliza comparaciones superficiales de referencia en memoria a través de `Object.is` para determinar si el estado ha cambiado. Si hacemos `gastos.push()`, modificamos el contenido del arreglo, pero la referencia en memoria del arreglo sigue siendo exactamente la misma. Por lo tanto, React asume que no hubo ningún cambio y omite el ciclo de re-renderizado, dejando la interfaz congelada con datos desactualizados. Al usar `[...gastos, nuevoGasto]`, creamos una nueva referencia en memoria, lo que dispara de inmediato la reconciliación del Virtual DOM."*

---

### Pregunta 2:
**Profesor:** *¿Por qué es obligatorio asignar una prop `key` al usar `.map()` y por qué no es recomendable usar el índice (`index`) del arreglo como key si la lista cambia?*

**Respuesta Sugerida:**
> *"La prop `key` es la etiqueta que le permite al algoritmo de reconciliación de React (Fiber) identificar qué nodo específico del árbol virtual fue añadido, eliminado o reordenado. Si usamos el índice numérico `index` y filtramos o eliminamos un elemento intermedio de la lista, los índices de todos los elementos posteriores cambian. Esto confunde a React, causando que preserve estados internos de componentes hijos o inputs en la posición equivocada. Siempre debemos usar identificadores únicos y estables, como un `id` proveniente de la base de datos o de la API."*

---

### Pregunta 3:
**Profesor:** *¿Cuál es la diferencia entre probar una función pura y probar un componente con React Testing Library, tal como hicieron en el proyecto de Automatización Climática?*

**Respuesta Sugerida:**
> *"Una función pura —como el cálculo de balances o un filtro de datos— se prueba con pruebas unitarias tradicionales con Vitest o Jest: le pasamos datos de entrada y afirmamos con `expect().toBe()` que la salida matemática sea exacta, sin requerir navegador ni DOM.  
> Por el contrario, en React Testing Library probamos componentes simulando el comportamiento real del usuario: renderizamos el componente en un DOM virtual con JSDOM y buscamos elementos por su rol accesible (`screen.getByRole('button')` o `screen.getByText()`), disparando eventos con `fireEvent` o `userEvent`. De este modo, si refactorizamos el código interno pero el usuario sigue viendo y haciendo lo mismo, el test sigue pasando sin romperse."*

---

### Pregunta 4:
**Profesor:** *En el proyecto de Rutas Privadas, ¿qué problema de seguridad o de experiencia de usuario resolvieron con `PrivateRoutes` y `AuthContext`?*

**Respuesta Sugerida:**
> *"Resolvimos dos problemas clave:  
> Primero, la experiencia de usuario y seguridad: evitamos que un usuario no autenticado vea pantallas o datos que no le corresponden, interceptando la navegación antes de pintar la vista y redirigiéndolo con `<Navigate to="/login" replace />`.  
> Segundo, la arquitectura de datos: al centralizar la sesión en `AuthContext`, evitamos tener que pasar el estado de autenticación manualmente a través de cada página o componente intermedio por props ('prop drilling'), haciendo el código mucho más limpio y mantenible."*
