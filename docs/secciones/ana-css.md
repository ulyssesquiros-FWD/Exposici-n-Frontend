# CSS moderno y diseño visual

## Propósito

La sección de Ana muestra cómo CSS presenta y distribuye el contenido descrito
por HTML. El módulo React es autónomo: se exporta por defecto desde
`src/modules/ana/CssSection.jsx` y carga su propia hoja
`src/modules/ana/CssSection.css`. No modifica la ruta principal ni los estilos
globales. Todas las reglas visuales pertenecen a la raíz `.ana-css`.

## Conceptos con ejemplos

### Selectores

Un selector de elemento, como `article`, apunta a todas las etiquetas de ese
tipo. Una clase, como `.card`, se puede reutilizar en varios componentes. Un
identificador, como `#destacado`, debe ser único en el documento. Para
componentes reutilizables es preferible una convención de clases clara.

```css
article { color: #dbeafe; }
.card { padding: 1rem; }
#destacado { border-color: teal; }
```

### Cascada, especificidad y herencia

Cuando hay declaraciones que compiten por una propiedad, se consideran las
reglas de importancia, especificidad y orden de origen. Sin cambiar la
importancia, un selector ID tiene mayor especificidad que uno de clase y este
supera a uno de elemento. Si la especificidad empata, la declaración posterior
puede prevalecer. Propiedades como `color` y `font-family` suelen heredarse;
`border` y `margin` no. Conviene evitar recurrir a `!important` como solución
general: suele ocultar conflictos de especificidad.

```css
p { color: slategray; }
.notice { color: skyblue; }
#important { color: white; }
```

Para el mismo elemento con los tres selectores, gana el ID para `color`. Si una
declaración lleva `!important`, se comparan primero las declaraciones
importantes de la cascada; no es correcto describir la especificidad como la
única prioridad.

### Box model

El contenido forma el centro de la caja; `padding` crea espacio interior;
`border` dibuja el límite; `margin` separa la caja de otros elementos. La
demostración muestra cada capa alrededor de una tarjeta con borde, separación y
tipografía.

```css
.card {
  margin: 1rem;
  padding: 1.25rem;
  border: 2px solid #38bdf8;
}
```

En esta aplicación, el reset global ya aplica `box-sizing: border-box`. En un
proyecto nuevo conviene decidir de forma explícita cómo se calcula el tamaño de
los elementos y documentar esa convención.

### Unidades y variables

- `rem` escala con el tamaño raíz y es apropiado para espaciado y tipografía
  escalable.
- `%` expresa una dimensión relativa al contexto de diseño.
- `vw` y `vh` se relacionan con la ventana; deben usarse con criterio para que
  texto y contenido no dependan de una medida de viewport frágil.
- `px` es útil para detalles como bordes finos.

Las propiedades personalizadas permiten compartir valores y ajustarlos desde
un punto. En el módulo se definen tokens en `.ana-css`, no en `:root`, para
mantener la personalización en el componente.

```css
.ana-css {
  --ana-space: 1rem;
  --ana-accent: #67e8f9;
}
```

### Flexbox y Grid: cuándo usar cada uno

**Flexbox** resuelve distribución en una dimensión: una fila o una columna.
Resulta útil para navegación, grupos de botones y tarjetas que fluyen y pueden
envolverse cuando falta espacio. En el ejemplo de catálogo, `flex-wrap` permite
que las tarjetas salten a otra línea, y `gap` mantiene una separación regular.

```css
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
```

**CSS Grid** resuelve una estructura en dos dimensiones, definiendo filas y
columnas a la vez. Es apropiado para una cuadrícula de reportes, una galería o
un dashboard en el que se busca alinear elementos en ambos ejes.

```css
.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

No son alternativas excluyentes: Grid puede organizar las áreas principales de
una página y Flexbox alinear los controles dentro de cada área.

### Media queries y diseño responsivo

Una media query aplica reglas según condiciones como el ancho del viewport.
Primero se construye una base que funciona con contenido fluido y después se
ajusta la composición en puntos donde el contenido lo requiere. La
demostración incluye un control para comparar una vista compacta con una más
ancha; la hoja de estilos también reorganiza automáticamente la sección y el
Grid en pantallas pequeñas.

```css
@media (max-width: 38rem) {
  .ana-css__preview-cards { grid-template-columns: 1fr; }
}
```

En una interfaz real, se debe probar con texto largo, zoom, orientación y
teclado, no solo con una captura a un ancho predeterminado.

### Estados, contraste y accesibilidad visual

`hover` aporta una señal para dispositivos con puntero; `focus-visible` hace
visible el elemento que recibe foco al navegar con teclado. El foco no debe
eliminarse ni quedar oculto y las instrucciones no deben depender únicamente
del color. En la demo los controles tienen un contorno visible y se distinguen
del fondo oscuro; la animación respeta la preferencia del sistema para reducir
movimiento.

### Organización y reutilización

Separar `CssSection.jsx` de `CssSection.css` mantiene el contenido y la
presentación próximos al módulo sin mezclar responsabilidades. El prefijo
`.ana-css__` evita colisiones con clases globales o secciones de otros
integrantes. Variables, clases con nombres semánticos y `gap` permiten
reutilizar decisiones visuales sin añadir selectores globales.

## Conexión con proyectos anteriores

El historial del curso identifica a LoginMaster y confirma que incluía
alternancia de temas claros y oscuros; por tanto, es un ejemplo de cómo una
paleta y estados visuales coherentes comunican el tema activo. No atribuye a
LoginMaster una tipografía Inter, un dashboard ni tarjetas administrativas.
Moka & Canela está descrito como un comercio electrónico con catálogo
categorizado y flujo de carrito/checkout: sus productos se prestan a tarjetas
Flexbox o a una cuadrícula Grid según el tipo de alineación buscado. Para
TalenTico, el historial confirma la búsqueda de estandarización visual entre
vistas: tokens compartidos y estilos por componente ayudan a mantener esa
consistencia. Son relaciones entre necesidades verificadas y herramientas CSS,
no afirmaciones sobre el código visual exacto de esos proyectos.

## Integración

El módulo tiene exportación por defecto, importa su CSS local y no requiere
dependencias nuevas. Para integrarlo, importar `CssSection` desde
`src/modules/ana/CssSection.jsx` en el punto de entrada de ruta elegido por la
persona responsable de integración. Este cambio no altera rutas, `App.jsx`,
`main.jsx` ni componentes compartidos.
