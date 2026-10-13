# Guion Grupal Integrado: Exposición de Front End

**Equipo:** Ulysses Quirós, Ana y Caleb  
**Duración Total Prevista:** 9 minutos y 5 segundos (Rango oficial: 8 a 10 minutos)  
**Modalidad:** Exposición interactiva guiada apoyada en la plataforma web (`/presentacion`)  
**Hilo Conductor:** *"De una estructura web a una interfaz dinámica que obtiene y presenta información"*

---

## ⏱️ Cronograma de Intervenciones

```text
[0:00 - 0:30]  1. Apertura y Objetivo Común                        — Ulysses (0:30)
[0:30 - 1:40]  2. HTML Semántico, Accesibilidad y Formularios      — Caleb   (1:10)
[1:40 - 2:55]  3. CSS: Selectores, Cascada y Box Model             — Ana     (1:15)
[2:55 - 4:10]  4. CSS: Flexbox, CSS Grid y Responsividad           — Ana     (1:15)
[4:10 - 5:30]  5. JavaScript: Variables, Funciones Puras y DOM     — Ulysses (1:20)
[5:30 - 6:40]  6. React: Componentes, Estado, .map() y Hooks       — Ulysses (1:10)
[6:40 - 8:05]  7. Consumo de APIs con fetch() y Manejo de Errores  — Caleb   (1:25)
[8:05 - 9:05]  8. Buenas Prácticas, Dificultades Reales y Cierre   — Los Tres (1:00)
```

---

## 🎤 Guion Completo Integrado

### [0:00 - 0:30] Bloque 1: Apertura y Objetivo Común (Ulysses)
> **Ulysses:**  
> *"Buenos días profesor y compañeros. Sean bienvenidos a la exposición integradora de Front End de nuestro equipo, conformado por Ana, Caleb y mi persona, Ulysses Quirós.*
> 
> *A lo largo de este curso no aprendimos tecnologías aisladas, sino los eslabones de una misma cadena: cómo partir de una estructura semántica accesible en HTML, transformarla en una interfaz visualmente armónica y responsiva con CSS, darle dinamismo reactivo con JavaScript y React, y finalmente conectarla al mundo real consumiendo APIs REST asíncronas."*

---

### [0:30 - 1:40] Bloque 2: HTML Semántico, Accesibilidad y Formularios (Caleb)
> **Caleb:**  
> *"Comenzamos por donde inicia todo proyecto web: el HTML semántico.*
> 
> *A menudo se comete el error de ver a HTML como un simple contenedor de etiquetas visuales. Pero en el desarrollo profesional, HTML es ante todo **significado y accesibilidad**. En nuestra aplicación respetamos rigurosamente el estándar HTML5: contamos con un único `<h1>` como encabezado principal y estructuramos las vistas utilizando `<header>`, `<nav>`, `<main>`, `<section>` y artículos autónomos con `<article>`.*
> 
> *Esta semántica tiene un impacto directo en la accesibilidad. Cuando implementamos formularios, vinculamos de manera obligatoria cada etiqueta `<label>` con su respectivo `<input>` mediante el atributo `htmlFor` e `id`. Esto permite que un usuario con discapacidad visual que utilice lectores de pantalla sepa con exactitud qué dato se espera recibir, aumentando además el área táctil de interacción.*
> 
> *Asimismo, aprovechamos la validación nativa del navegador con atributos como `required`, `type="email"` y longitudes mínimas, combinados con pseudoclases CSS `:valid` e `:invalid`, evitando librerías innecesarias y asegurando un manejo del DOM seguro sin `innerHTML` para prevenir vulnerabilidades XSS."*

---

### [1:40 - 2:55] Bloque 3: CSS: Selectores, Cascada, Especificidad y Box Model (Ana)
> **Ana:**  
> *"Si HTML define qué significa el contenido, CSS describe cómo se presenta, se distribuye y se percibe.*
> 
> *Para estilizar con calidad, primero comprendemos el cálculo de reglas. Utilizamos selectores de elemento como `article` para etiquetas base, clases como `.card` para componentes reutilizables, e identificadores con `#` solo cuando se requiere unicidad. Cuando múltiples reglas entran en conflicto, el navegador aplica la cascada resolviendo por orden de importancia, especificidad —donde un ID supera a una clase y una clase a un elemento— y finalmente el orden de aparición en la hoja.*
> 
> *También reconocemos la herencia: propiedades como la tipografía y el color se heredan del contenedor padre, pero márgenes y bordes no.*
> 
> *Esto nos lleva al corazón de la maquetación: el **Box Model**. Cada elemento es una caja compuesta por cuatro capas: el contenido en el centro, el `padding` que amortigua el espacio interno, el `border` que delimita la frontera y el `margin` que separa una caja de las demás. Usamos unidades escalables como `rem` y variables CSS para garantizar consistencia en colores y espaciados."*

---

### [2:55 - 4:10] Bloque 4: CSS: Flexbox, CSS Grid y Responsividad (Ana)
> **Ana (continuación):**  
> *"Una vez que dominamos las cajas individuales, debemos organizarlas en la pantalla. Aquí es donde combinamos Flexbox y CSS Grid:*
> * **Flexbox** trabaja en una sola dimensión —fila o columna—. Lo utilizamos para barras de navegación, botones de acción y listas que fluyen con espaciados regulares mediante `gap`.*
> * **CSS Grid** controla dos dimensiones en simultáneo —filas y columnas—. Es el estándar ideal para la estructura global de páginas, dashboards y cuadrículas complejas.*
> 
> *Y para garantizar que la interfaz se adapte a cualquier dispositivo, implementamos diseño responsivo con **media queries** (`@media`). Cuando el ancho de pantalla disminuye, nuestro layout colapsa de forma fluida a una sola columna, evitando desbordamientos horizontales de texto o controles.*
> 
> *Cuidamos especialmente la accesibilidad visual: no basta con el efecto `:hover` para quien usa mouse; implementamos un `:focus-visible` nítido para que cualquier usuario pueda navegar cómodamente usando el teclado con la tecla Tab."*

---

### [4:10 - 5:30] Bloque 5: JavaScript: Variables, Funciones Puras y DOM (Ulysses)
> **Ulysses:**  
> *"Llegamos al motor de la interactividad: JavaScript moderno.*
> 
> *Para construir aplicaciones sólidas, desterramos el uso de `var` y adoptamos `const` para referencias inmutables y `let` para bloques de alcance estricto. Pero el verdadero salto cualitativo ocurre al adoptar la **programación funcional**: trabajamos con funciones puras que, ante los mismos argumentos, siempre retornan la misma salida sin generar efectos secundarios.*
> 
> *La regla de oro es la **inmutabilidad**. En proyectos tempranos o en JavaScript tradicional, era común mutar arreglos directamente con `gastos.push(nuevo)`. En interfaces modernas esto es una mala práctica porque rompe la predictibilidad.*
> 
> *En lugar de manipular imperativamente el DOM buscando elementos con `document.getElementById` o alterando `textContent` a mano —como hacíamos al inicio en proyectos como **LoginMaster**—, aprendimos que la manipulación manual del DOM es frágil y costosa en rendimiento. Por eso dimos el paso definitivo hacia el paradigma declarativo de React."*

---

### [5:30 - 6:40] Bloque 6: React: Componentes, Estado, .map() y Hooks (Ulysses)
> **Ulysses (continuación):**  
> *"En React, la interfaz es una función matemática del estado: `UI = f(State)`. Nosotros no le decimos al navegador paso a paso qué nodo pintar; simplemente describimos la interfaz que corresponde al estado actual, y el algoritmo de reconciliación de React actualiza el Virtual DOM con máxima eficiencia.*
> 
> *Aquí la programación funcional brilla: utilizamos `.filter()` para búsquedas reactivas en tiempo real sin alterar los datos originales, y transformamos colecciones con `.map()`, asignando obligatoriamente una prop `key` única para que React identifique qué elemento cambió o se eliminó.*
> 
> *Si una búsqueda no arroja resultados, usamos operadores ternarios (`condicion ? <Exito /> : <Vacio />`) para renderizar estados vacíos amigables en lugar de pantallas rotas.*
> 
> *Y finalmente, gobernamos el ciclo de vida mediante hooks: `useState` para el estado local, `useEffect` para sincronizaciones asíncronas con funciones de limpieza, y `useContext` para compartir datos globales como la sesión de usuario o el carrito de compras, tal como comprobamos en el proyecto **Moka & Canela**."*

---

### [6:40 - 8:05] Bloque 7: Consumo de APIs con fetch() y Manejo de Errores (Caleb)
> **Caleb:**  
> *"Ahora conectamos nuestra interfaz con el mundo exterior.*
> 
> *En este módulo nos comunicamos con una API REST real. Aplicamos separación de responsabilidades: aislamos las llamadas de red en el servicio `calebApiService.js`, dejando los componentes de React limpios y enfocados en la experiencia del usuario.*
> 
> *Cuando realizamos una petición asíncrona mediante `fetch()`, gobernamos con rigurosidad los tres estados indispensables de la interfaz:
> 1. **Cargando:** proyectando skeletons y spinners para que el usuario sepa que la aplicación está trabajando.
> 2. **Éxito:** parseando la respuesta JSON y presentándola en tarjetas declarativas.
> 3. **Error:** capturando fallos de red y mostrando alertas accesibles con opción de reintento.*
> 
> *Una lección técnica crucial fue comprender que **fetch() no rechaza la promesa ante un error HTTP 404 o 500**. Si el servidor responde con recurso no encontrado, para fetch la petición fue exitosa a nivel de transporte. Por ello, es mandatorio evaluar `if (!response.ok)` para lanzar explícitamente una excepción.*
> 
> *Esto contrasta con lo aprendido en **Postman**: mientras en Postman probamos endpoints de forma aislada sin usuarios, en React debemos prevenir fugas de memoria (*memory leaks*) utilizando `AbortController` para cancelar peticiones pendientes si el usuario cambia de página antes de recibir la respuesta."*

---

### [8:05 - 9:05] Bloque 8: Buenas Prácticas, Dificultades Reales y Cierre (Los Tres)
> **Ulysses (0:20):**  
> *"Para cerrar, queremos reflexionar sobre la ingeniería de software aplicada. Mi mayor dificultad técnica fue **desaprender la mutación directa de datos**: al inicio usábamos `.push()` y la pantalla no se actualizaba porque la referencia en memoria no cambiaba. Dominar la inmutabilidad con el operador spread transformó nuestra forma de pensar en React."*
> 
> **Ana (0:20):**  
> *"Por mi parte, la mayor dificultad fue **controlar la colisión de estilos globales**: cuando integramos varios módulos, una regla CSS genérica podía romper la apariencia de otro compañero. Aprendimos a aislar estilos mediante clases raíz y a utilizar variables CSS para mantener la armonía sin pisar el trabajo ajeno."*
> 
> **Caleb (0:20):**  
> *"Y en el consumo de APIs, el mayor reto fue **la gestión defensiva de la asincronía y el flujo colaborativo en Git**: entender `AbortController` y coordinar ramas con Pull Requests limpios en GitHub sin sobreescribir el trabajo de mis compañeros fue la clave para entregar esta plataforma unificada.*
> 
> *Muchas gracias profesor y compañeros por su atención. Estamos listos para responder sus preguntas."*
