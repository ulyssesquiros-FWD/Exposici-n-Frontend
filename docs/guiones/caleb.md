# Guion de Intervención Oral: Caleb

**Expositor:** Caleb  
**Tema:** HTML Semántico, Accesibilidad, Formularios y Consumo de APIs REST con Fetch  
**Duración Estimada:** 3:00 minutos exactos (con margen de preguntas)  
**Objetivo Pedagógico:** Demostrar dominio en la estructuración accesible de interfaces web y en la gestión asíncrona de datos externos mediante fetch() y React, vinculando la teoría con los proyectos reales del curso.

---

## ⏱️ Estructura Temporal de la Presentación (3:00 min)

```text
[0:00 - 0:40] Apertura: El Propósito de HTML Semántico y la Accesibilidad
[0:40 - 1:25] Demostración 1: Estructura, Formularios y Validación Nativa
[1:25 - 2:15] Demostración 2: Consumo en Vivo con Fetch() y Manejo de Estados
[2:15 - 2:45] Conexión Curricular: De Postman a la UI y Dificultad Real Superada
[2:45 - 3:00] Cierre y Apertura a Preguntas
```

---

## 🎤 Guion Palabra por Palabra

### [0:00 - 0:40] 1. Apertura: El Propósito de HTML Semántico y la Accesibilidad
> *"Buenos días profesor y compañeros. Mi nombre es Caleb, y hoy les expondré los dos pilares que conectan la estructura de una aplicación web con el mundo exterior: el HTML semántico accesible y el consumo profesional de APIs REST.*
> 
> *A menudo se cree que HTML es solo un lenguaje para colocar elementos visuales en pantalla, pero su verdadero valor es dar **significado**. Una página bien estructurada no solo se ve bien; es comprensible para lectores de pantalla, motores de búsqueda y navegadores. Además, cuando combinamos una estructura semántica con solicitudes HTTP asíncronas seguras, transformamos una interfaz estática en una aplicación viva y reactiva."*

---

### [0:40 - 1:25] 2. Demostración 1: Estructura, Formularios y Validación Nativa
*(Caleb muestra en pantalla la pestaña 1 "Estructura Semántica & A11y", activa la vista de "Esqueleto Semántico" y luego pasa a la pestaña 2 "Formularios & Validación Nativa").*

> *"Para evidenciar esto en la práctica, observemos nuestro módulo. Aquí utilizamos etiquetas semánticas del estándar HTML5: un único `<h1>` que define la vista, `<header>`, `<nav>`, `<main>`, `<section>`, y artículos autónomos con `<article>`. Al alternar a la vista de esqueleto, vemos cómo cada etiqueta cumple un rol estructural independiente de los estilos CSS.*
> 
> *En la sección de formularios, cada control está vinculado explícitamente a su etiqueta `<label>` mediante el atributo `htmlFor`. Esto no solo mejora el área de clic, sino que permite a un usuario invidente saber qué dato se solicita. Y en lugar de saturar el código con librerías pesadas, aprovechamos la validación nativa del navegador con `required`, `type="email"` y longitudes mínimas, combinadas con pseudoclases CSS `:valid` e `:invalid` para dar feedback inmediato al usuario."*

---

### [1:25 - 2:15] 3. Demostración 2: Consumo en Vivo con Fetch() y Manejo de Estados
*(Caleb cambia a la pestaña 3 "Demostración en Vivo: fetch()", hace clic en "Volver a consultar datos" y posteriormente hace clic en "Probar Escenario de Error (404)").*

> *"Ahora pasemos al consumo de datos. En esta demostración nos comunicamos en vivo con la API pública de **JSONPlaceholder**. Para mantener un código limpio y profesional, separamos responsabilidades: la lógica de red reside en el servicio desacoplado `calebApiService.js`, mientras que el componente React se enfoca en la experiencia del usuario.*
> 
> *Al presionar 'Consultar datos', el servicio ejecuta `fetch()`. Mientras la promesa se resuelve, React proyecta un estado de carga con un spinner y tarjetas skeleton marcadas con `aria-busy="true"`. Al completarse la respuesta, validamos rigurosamente `response.ok`, parseamos el JSON y renderizamos los datos con JSX seguro, sin usar `innerHTML`. Y si ocurre una falla —como al probar este escenario 404—, el bloque `try/catch` captura el error y despliega una alerta accesible con un botón de reintento, evitando que la aplicación se caiga."*

---

### [2:15 - 2:45] 4. Conexión Curricular: De Postman a la UI y Dificultad Real Superada
*(Caleb muestra brevemente la pestaña 4 "Postman vs Fetch & Aprendizaje").*

> *"Esto conecta directamente con lo que aprendimos en el curso:
> * En la práctica de **Postman**, probábamos los endpoints de forma aislada para verificar códigos de estado HTTP y encabezados. Pero en el navegador, con `fetch()` y React, debemos gestionar la asincronía, los fallos de red y la experiencia del usuario.
> * Vimos que distintas APIs tienen diferentes contratos de datos: mientras **Rick and Morty** devuelve estructuras paginadas complejas y el laboratorio de **Open-Meteo** exige procesar series temporales climáticas, aquí en JSONPlaceholder consumimos colecciones REST planas.*
> 
> *El reto técnico más importante que superamos fue **comprender que fetch() no rechaza la promesa ante un error 404 o 500**. Tuvimos que implementar validación defensiva con `response.ok` y limpiar las solicitudes en el desmontaje con `AbortController` para prevenir fugas de memoria."*

---

### [2:45 - 3:00] 5. Cierre y Apertura a Preguntas
> *"En conclusión, una arquitectura Front End sólida une la semántica del HTML con la resiliencia en el consumo de datos externos para crear aplicaciones accesibles, rápidas y tolerantes a fallos.
> 
> Muchas gracias por su atención. Quedo a su disposición para responder cualquier pregunta."*

---

## 🧠 Banco de Preguntas del Profesor y Respuestas Sugeridas

### Pregunta 1: ¿Por qué la función nativa `fetch()` no lanza un error ante una respuesta HTTP 404 o 500?
**Respuesta sugerida:**  
> *"Porque a nivel de protocolo de red, una respuesta con código 404 o 500 es una transacción HTTP completada con éxito: el servidor recibió la solicitud y devolvió un mensaje. `fetch()` solo rechaza la promesa si ocurre un fallo de red a nivel de socket o transporte (como pérdida de señal de internet, error de DNS o bloqueo de políticas CORS). Por esta razón, en nuestro servicio `calebApiService.js` siempre evaluamos `if (!response.ok)` para lanzar explícitamente una excepción y activar el bloque `catch` de la interfaz."*

---

### Pregunta 2: ¿Qué ventaja técnica aporta asociar un `<label>` con su `<input>` mediante `htmlFor` e `id` en lugar de simplemente colocar texto al lado?
**Respuesta sugerida:**  
> *"Aporta tres ventajas fundamentales: primero, vincula programáticamente el nombre accesible en el árbol de accesibilidad (Accessibility Tree), de modo que un lector de pantalla anuncia 'Correo electrónico, campo de texto requerido' al recibir el foco. Segundo, amplía la zona de interacción táctil, permitiendo enfocar o marcar el campo haciendo clic directamente sobre el texto del label. Tercero, asegura el cumplimiento de las pautas internacionales de accesibilidad WCAG 2.1 nivel A."*

---

### Pregunta 3: ¿Cuál es la diferencia entre probar una solicitud en Postman y consumirla con `fetch()` dentro de una aplicación React?
**Respuesta sugerida:**  
> *"Postman es un cliente HTTP de pruebas para desarrolladores: ejecuta la petición en un entorno aislado sin restricciones de CORS, sin necesidad de renderizar nada y sin usuarios reales. En cambio, en React debemos gobernar el ciclo de vida asíncrono en el navegador del cliente: manejar estados de carga para evitar que la pantalla parezca congelada, renderizar condicionalmente los datos o mensajes de error amigables, proteger la aplicación contra fugas de memoria con `AbortController` si el usuario cambia de ruta, y garantizar que la información se renderice mediante JSX seguro."*

---

### Pregunta 4: ¿Cómo previene su código fugas de memoria (*memory leaks*) si el usuario cambia de página mientras una petición está pendiente?
**Respuesta sugerida:**  
> *"Implementamos la API nativa de `AbortController`. Al iniciar la solicitud, instanciamos un nuevo controlador y pasamos su propiedad `signal` en las opciones de `fetch()`. En el retorno de limpieza (*cleanup function*) del hook `useEffect`, ejecutamos `controller.abort()`. Si el componente se desmonta antes de que el servidor responda, la petición se cancela de inmediato y evitamos el clásico error de intentar actualizar el estado de un componente desmontado."*

---

### Pregunta 5: ¿Por qué nunca se deben insertar respuestas de una API externa directamente con `innerHTML`?
**Respuesta sugerida:**  
> *"Porque abre una brecha crítica de seguridad de tipo **XSS (Cross-Site Scripting)**. Si el contenido de la API proviene de fuentes no confiables o fue alterado, podría contener etiquetas `<script>` o manejadores de eventos maliciosos como `<img src=x onerror=...>` que se ejecutarían en el navegador del usuario. En React, interpolar variables dentro de JSX (`{post.title}`) escapa y sanitiza las cadenas automáticamente, garantizando que el texto se interprete únicamente como nodos de texto y nunca como código ejecutable."*
