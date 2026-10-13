# Guion de Intervención Oral: Caleb

**Expositor:** Caleb  
**Temas:** HTML Semántico, Accesibilidad, Formularios Nativos y Consumo de APIs REST con Fetch  
**Duración Total Asignada en la Exposición Grupal:** ~2:55 minutos (dentro de los 9:05 min totales del trío)  
**Objetivo Pedagógico:** Demostrar dominio en la estructuración accesible de interfaces web y en la gestión asíncrona de datos externos mediante fetch() y React, vinculando la teoría con los proyectos del curso.

---

## ⏱️ Distribución Temporal en la Presentación Grupal

```text
[0:30 - 1:40]  Bloque 2: HTML Semántico, Accesibilidad y Formularios (1:10 min)
[6:40 - 8:05]  Bloque 7: Consumo de APIs con fetch() y Manejo de Errores (1:25 min)
[8:45 - 9:05]  Bloque 8: Buenas Prácticas, Dificultad Real y Cierre (0:20 min)
```

---

## 🎤 Intervenciones Palabra por Palabra

### [0:30 - 1:40] Bloque 2: HTML Semántico, Accesibilidad y Formularios Nativos
> *"Comenzamos por donde inicia todo proyecto web: el HTML semántico.
> 
> A menudo se comete el error de ver a HTML como un simple contenedor de etiquetas visuales. Pero en el desarrollo profesional, HTML es ante todo **significado y accesibilidad**. En nuestra aplicación respetamos rigurosamente el estándar HTML5: contamos con un único `<h1>` como encabezado principal y estructuramos las vistas utilizando `<header>`, `<nav>`, `<main>`, `<section>` y artículos autónomos con `<article>`.
> 
> Esta semántica tiene un impacto directo en la accesibilidad. Cuando implementamos formularios, vinculamos de manera obligatoria cada etiqueta `<label>` con su respectivo `<input>` mediante el atributo `htmlFor` e `id`. Esto permite que un usuario con discapacidad visual que utilice lectores de pantalla sepa con exactitud qué dato se espera recibir, aumentando además el área táctil de interacción.
> 
> Asimismo, aprovechamos la validación nativa del navegador con atributos como `required`, `type="email"` y longitudes mínimas, combinados con pseudoclases CSS `:valid` e `:invalid`, evitando librerías innecesarias y asegurando un manejo del DOM seguro sin `innerHTML` para prevenir vulnerabilidades XSS."*

---

### [6:40 - 8:05] Bloque 7: Consumo de APIs con fetch() y Manejo de Errores
> *"Ahora conectamos nuestra interfaz con el mundo exterior.
> 
> En este módulo nos comunicamos con una API REST real. Aplicamos separación de responsabilidades: aislamos las llamadas de red en el servicio `calebApiService.js`, dejando los componentes de React limpios y enfocados en la experiencia del usuario.
> 
> Cuando realizamos una petición asíncrona mediante `fetch()`, gobernamos con rigurosidad los tres estados indispensables de la interfaz:
> 1. **Cargando:** proyectando skeletons y spinners para que el usuario sepa que la aplicación está trabajando.
> 2. **Éxito:** parseando la respuesta JSON y presentándola en tarjetas declarativas.
> 3. **Error:** capturando fallos de red y mostrando alertas accesibles con opción de reintento.
> 
> Una lección técnica crucial fue comprender que **fetch() no rechaza la promesa ante un error HTTP 404 o 500**. Si el servidor responde con recurso no encontrado, para fetch la petición fue exitosa a nivel de transporte. Por ello, es mandatorio evaluar `if (!response.ok)` para lanzar explícitamente una excepción.
> 
> Esto contrasta con lo aprendido en **Postman**: mientras en Postman probamos endpoints de forma aislada sin usuarios, en React debemos prevenir fugas de memoria (*memory leaks*) utilizando `AbortController` para cancelar peticiones pendientes si el usuario cambia de página antes de recibir la respuesta."*

---

### [8:45 - 9:05] Bloque 8: Buenas Prácticas, Dificultad Real y Cierre
> *"Y en el consumo de APIs, el mayor reto fue **la gestión defensiva de la asincronía y el flujo colaborativo en Git**: entender `AbortController` y coordinar ramas con Pull Requests limpios en GitHub sin sobreescribir el trabajo de mis compañeros fue la clave para entregar esta plataforma unificada.
> 
> Muchas gracias profesor y compañeros por su atención. Estamos listos para responder sus preguntas."*

---

## 🧠 Banco de Preguntas del Profesor y Respuestas Sugeridas

### Pregunta 1: ¿Por qué la función nativa `fetch()` no lanza un error ante una respuesta HTTP 404 o 500?
**Respuesta sugerida:**  
> *"Porque a nivel de protocolo, una respuesta 404 o 500 es una transacción HTTP completada con éxito: el servidor recibió la solicitud y devolvió un mensaje. `fetch()` solo rechaza la promesa si ocurre un fallo de red a nivel de socket o transporte (como pérdida de conexión, error DNS o bloqueo CORS). Por eso en `calebApiService.js` siempre evaluamos `if (!response.ok)` para lanzar explícitamente una excepción y activar el bloque `catch` de la interfaz."*

---

### Pregunta 2: ¿Qué ventaja técnica aporta asociar un `<label>` con su `<input>` mediante `htmlFor` e `id`?
**Respuesta sugerida:**  
> *"Vincula programáticamente el nombre accesible en el Accessibility Tree para que un lector de pantalla anuncie el propósito del campo al recibir el foco, amplía la zona de interacción táctil al hacer clic sobre el texto del label y asegura el cumplimiento de las pautas WCAG 2.1 nivel A."*

---

### Pregunta 3: ¿Cuál es la diferencia entre probar una solicitud en Postman y consumirla con `fetch()` dentro de una aplicación React?
**Respuesta sugerida:**  
> *"Postman es un cliente HTTP para desarrolladores: prueba endpoints en un entorno aislado sin restricciones de CORS ni usuarios. En React debemos gobernar el ciclo de vida asíncrono en el navegador: manejar estados de carga, renderizar condicionalmente datos o mensajes de error amigables, evitar fugas de memoria con `AbortController` y garantizar renderizado seguro sin vulnerabilidades de inyección."*
