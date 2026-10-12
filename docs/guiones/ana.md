# Guion de Intervención Oral: Ana

**Expositora:** Ana  
**Temas:** CSS Fundamentos, Selectores, Box Model, Flexbox, CSS Grid y Responsividad  
**Duración Total Asignada en la Exposición Grupal:** ~2:50 minutos (dentro de los 9:05 min totales del trío)  
**Objetivo Pedagógico:** Demostrar dominio en la maquetación visual, el modelo de cajas y la adaptabilidad responsiva accesible, conectando con los proyectos del curso.

---

## ⏱️ Distribución Temporal en la Presentación Grupal

```text
[1:40 - 2:55]  Bloque 3: CSS: Selectores, Cascada, Especificidad y Box Model (1:15 min)
[2:55 - 4:10]  Bloque 4: CSS: Flexbox, CSS Grid y Diseño Responsivo (1:15 min)
[8:25 - 8:45]  Bloque 8: Buenas Prácticas y Dificultad Real (0:20 min)
```

---

## 🎤 Intervenciones Palabra por Palabra

### [1:40 - 2:55] Bloque 3: CSS: Selectores, Cascada, Especificidad y Box Model
*(Ana toma la palabra tras la sección de HTML y formularios de Caleb).*

> *"Gracias, Caleb. Si HTML define qué significa el contenido, CSS describe cómo se presenta, se distribuye y se percibe.
> 
> Para estilizar con calidad, primero comprendemos el cálculo de reglas. Utilizamos selectores de elemento como `article` para etiquetas base, clases como `.card` para componentes reutilizables, e identificadores con `#` solo cuando se requiere unicidad. Cuando múltiples reglas entran en conflicto, el navegador aplica la cascada resolviendo por orden de importancia, especificidad —donde un ID supera a una clase y una clase a un elemento— y finalmente el orden de aparición en la hoja.
> 
> También reconocemos la herencia: propiedades como la tipografía y el color se heredan del contenedor padre, pero márgenes y bordes no.
> 
> Esto nos lleva al corazón de la maquetación: el **Box Model**. Cada elemento es una caja compuesta por cuatro capas: el contenido en el centro, el `padding` que amortigua el espacio interno, el `border` que delimita la frontera y el `margin` que separa una caja de las demás. Usamos unidades escalables como `rem` y variables CSS para garantizar consistencia en colores y espaciados."*

---

### [2:55 - 4:10] Bloque 4: CSS: Flexbox, CSS Grid y Responsividad
> *"Una vez que dominamos las cajas individuales, debemos organizarlas en la pantalla. Aquí es donde combinamos Flexbox y CSS Grid:
> * **Flexbox** trabaja en una sola dimensión —fila o columna—. Lo utilizamos para barras de navegación, botones de acción y listas que fluyen con espaciados regulares mediante `gap`.
> * **CSS Grid** controla dos dimensiones en simultáneo —filas y columnas—. Es el estándar ideal para la estructura global de páginas, dashboards y cuadrículas complejas.
> 
> Y para garantizar que la interfaz se adapte a cualquier dispositivo, implementamos diseño responsivo con **media queries** (`@media`). Cuando el ancho de pantalla disminuye, nuestro layout colapsa de forma fluida a una sola columna, evitando desbordamientos horizontales de texto o controles.
> 
> Cuidamos especialmente la accesibilidad visual: no basta con el efecto `:hover` para quien usa mouse; implementamos un `:focus-visible` nítido para que cualquier usuario pueda navegar cómodamente usando el teclado con la tecla Tab.
> 
> Con la interfaz maquetada con elegancia y responsividad, Ulysses nos explicará cómo JavaScript y React dan dinamismo e interactividad a la aplicación frente a las acciones del usuario."*

---

### [8:25 - 8:45] Bloque 8: Buenas Prácticas y Dificultad Real Superada
> *"Por mi parte, la mayor dificultad fue **controlar la colisión de estilos globales**: cuando integramos varios módulos, una regla CSS genérica podía romper la apariencia de otro compañero. Aprendimos a aislar estilos mediante clases raíz y a utilizar variables CSS para mantener la armonía sin pisar el trabajo ajeno."*

---

## 🧠 Banco de Preguntas del Profesor y Respuestas Sugeridas

### Pregunta 1: ¿Cuándo elegirías CSS Grid en lugar de Flexbox?
**Respuesta Sugerida:**
> *"Elegimos CSS Grid cuando necesitamos controlar simultáneamente filas y columnas (dos dimensiones), como en la cuadrícula de reportes o la distribución general de la página. Elegimos Flexbox cuando los elementos se alinean a lo largo de un solo eje (una dimensión), como en una barra de navegación o los botones dentro de una tarjeta."*

---

### Pregunta 2: ¿Por qué las clases (`.clase`) son preferibles sobre los IDs (`#id`) al estructurar CSS?
**Respuesta Sugerida:**
> *"Porque las clases son reutilizables en múltiples componentes y poseen una especificidad equilibrada (0,1,0). Un ID está restringido a un único elemento por documento y tiene una especificidad muy alta (1,0,0), lo que dificulta sobreescribir estilos más adelante sin recurrir a malas prácticas como `!important`."*

---

### Pregunta 3: ¿Una media query es suficiente por sí sola para garantizar un diseño responsivo?
**Respuesta Sugerida:**
> *"No, la media query es solo una herramienta de cambio de puntos de quiebre (breakpoints). El diseño responsivo real exige contenido fluido con porcentajes o `fr`, imágenes flexibles con `max-width: 100%`, tipografía relativa en `rem` y pruebas rigurosas de accesibilidad con zoom del navegador al 200% para evitar pérdida de contenido."*
