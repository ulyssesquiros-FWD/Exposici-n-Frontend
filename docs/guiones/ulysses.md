# Guion de Intervención Oral: Ulysses Quirós

**Expositor:** Ulysses Quirós  
**Temas:** Apertura Grupal, JavaScript e Interactividad, Modelo Declarativo de React y Cierre  
**Duración Total Asignada en la Exposición Grupal:** ~3:20 minutos (dentro de los 9:05 min totales del trío)  
**Objetivo Pedagógico:** Demostrar dominio conceptual y práctico de la interactividad en Front End conectando la teoría funcional con los 9 proyectos reales del curso.

---

## ⏱️ Distribución Temporal en la Presentación Grupal

```text
[0:00 - 0:30]  Bloque 1: Apertura y Objetivo Común del Equipo (0:30 min)
[4:10 - 5:30]  Bloque 5: JavaScript: Variables, Funciones Puras y DOM (1:20 min)
[5:30 - 6:40]  Bloque 6: React: Componentes, Estado, .map() y Hooks (1:10 min)
[8:05 - 8:25]  Bloque 8: Buenas Prácticas y Dificultad Real (0:20 min)
```

---

## 🎤 Intervenciones Palabra por Palabra

### [0:00 - 0:30] Bloque 1: Apertura y Objetivo Común
> *"Buenos días profesor y compañeros. Sean bienvenidos a la exposición integradora de Front End de nuestro equipo, conformado por Ana, Caleb y mi persona, Ulysses Quirós.*
> 
> *A lo largo de este curso no aprendimos tecnologías aisladas, sino los eslabones de una misma cadena: cómo partir de una estructura semántica accesible en HTML, transformarla en una interfaz visualmente armónica y responsiva con CSS, darle dinamismo reactivo con JavaScript y React, y finalmente conectarla al mundo real consumiendo APIs REST asíncronas.*
> 
> *Para comenzar con el cimiento estructural de cualquier aplicación web, le cedo la palabra a mi compañero Caleb."*

---

### [4:10 - 5:30] Bloque 5: JavaScript: Variables, Funciones Puras y DOM
*(Ulysses retoma la palabra tras la sección de CSS de Ana).*

> *"Muchas gracias, Ana. Llegamos al motor de la interactividad: JavaScript moderno.*
> 
> *Para construir aplicaciones sólidas, desterramos el uso de `var` y adoptamos `const` para referencias inmutables y `let` para bloques de alcance estricto. Pero el verdadero salto cualitativo ocurre al adoptar la **programación funcional**: trabajamos con funciones puras que, ante los mismos argumentos, siempre retornan la misma salida sin generar efectos secundarios.*
> 
> *La regla de oro es la **inmutabilidad**. En proyectos tempranos o en JavaScript tradicional, era común mutar arreglos directamente con `gastos.push(nuevo)`. En interfaces modernas esto es una mala práctica porque rompe la predictibilidad.*
> 
> *En lugar de manipular imperativamente el DOM buscando elementos con `document.getElementById` o alterando `textContent` a mano —como hacíamos al inicio en proyectos como **LoginMaster**—, aprendimos que la manipulación manual del DOM es frágil y costosa en rendimiento. Por eso dimos el paso definitivo hacia el paradigma declarativo de React."*

---

### [5:30 - 6:40] Bloque 6: React: Componentes, Estado, .map() y Hooks
> *"En React, la interfaz es una función matemática del estado: `UI = f(State)`. Nosotros no le decimos al navegador paso a paso qué nodo pintar; simplemente describimos la interfaz que corresponde al estado actual, y el algoritmo de reconciliación de React actualiza el Virtual DOM con máxima eficiencia.*
> 
> *Aquí la programación funcional brilla: utilizamos `.filter()` para búsquedas reactivas en tiempo real sin alterar los datos originales, y transformamos colecciones con `.map()`, asignando obligatoriamente una prop `key` única para que React identifique qué elemento cambió o se eliminó.*
> 
> *Si una búsqueda no arroja resultados, usamos operadores ternarios (`condicion ? <Exito /> : <Vacio />`) para renderizar estados vacíos amigables en lugar de pantallas rotas.*
> 
> *Y finalmente, gobernamos el ciclo de vida mediante hooks: `useState` para el estado local, `useEffect` para sincronizaciones asíncronas con funciones de limpieza, y `useContext` para compartir datos globales como la sesión de usuario o el carrito de compras, tal como comprobamos en el proyecto **Moka & Canela**.*
> 
> *Nuestra interfaz ya es reactiva, pero necesita nutrirse de información viva externa. Caleb nos mostrará cómo consumir una API REST en tiempo real mediante fetch()."*

---

### [8:05 - 8:25] Bloque 8: Buenas Prácticas y Dificultad Real Superada
> *"Para cerrar, queremos reflexionar sobre la ingeniería de software aplicada. Mi mayor dificultad técnica fue **desaprender la mutación directa de datos**: al inicio usábamos `.push()` y la pantalla no se actualizaba porque la referencia en memoria no cambiaba. Dominar la inmutabilidad con el operador spread transformó nuestra forma de pensar en React."*

---

## 🧠 Banco de Preguntas del Profesor y Respuestas Sugeridas

### Pregunta 1: ¿Por qué en React insistimos tanto en que el estado debe ser inmutable y qué pasa por debajo si hago `gastos.push(nuevoGasto)`?
**Respuesta Sugerida:**
> *"React utiliza comparaciones superficiales de referencia en memoria a través de `Object.is` para determinar si el estado ha cambiado. Si hacemos `gastos.push()`, modificamos el contenido del arreglo, pero su referencia en memoria sigue siendo la misma. React asume que no hubo ningún cambio y omite el re-renderizado. Con `[...gastos, nuevoGasto]`, creamos una nueva referencia en memoria, lo que dispara de inmediato la reconciliación del Virtual DOM."*

---

### Pregunta 2: ¿Por qué es obligatorio asignar una prop `key` al usar `.map()` y por qué no usar el índice numérico?
**Respuesta Sugerida:**
> *"La prop `key` le permite a React identificar qué nodo específico del árbol virtual fue añadido, eliminado o reordenado. Si usamos el índice numérico y filtramos o eliminamos un elemento intermedio, los índices de todos los elementos posteriores cambian, provocando que React conserve estados internos de componentes hijos o inputs en la posición equivocada. Siempre debemos usar identificadores únicos y estables, como un `id`."*

---

### Pregunta 3: ¿Cuál es la diferencia entre probar una función pura y probar un componente con React Testing Library?
**Respuesta Sugerida:**
> *"Una función pura se prueba con pruebas unitarias tradicionales (Vitest o Jest): verificamos que para ciertas entradas numéricas o de datos, la salida sea matemáticamente exacta. En React Testing Library probamos componentes simulando el comportamiento real del usuario: renderizamos en un DOM virtual y buscamos elementos por su rol accesible (`screen.getByRole('button')`) o texto visible, asegurando que si refactorizamos el código interno sin alterar lo que el usuario ve, el test siga pasando."*

---

### Pregunta 4: En el proyecto de Rutas Privadas, ¿qué problema de seguridad o experiencia resolvieron con `PrivateRoutes` y `AuthContext`?
**Respuesta Sugerida:**
> *"Evitamos exponer pantallas confidenciales a usuarios no autenticados interceptando la navegación antes de pintar la vista y redirigiendo hacia `/login`. Además, centralizar la sesión en `AuthContext` evita pasar el usuario a través de cada página intermedia por props ('prop drilling')."*
