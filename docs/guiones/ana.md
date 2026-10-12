# Guion oral: CSS y diseño visual

**Duración estimada:** 3 minutos a ritmo pausado, incluyendo las demostraciones.

## Exposición

Hola. CSS convierte la estructura de HTML en una interfaz legible y adaptable.
HTML define el contenido; CSS decide cómo se presenta y organiza. La meta es
usar estilos reutilizables, no decorar cada elemento por separado.

Primero, el box model. El contenido está al centro; el padding lo separa del
borde; el border marca el límite y el margin separa cajas. Aquí distinguimos las
cuatro capas. Usamos unidades como rem, que escala con la tipografía base, y
variables CSS para compartir colores y espacios.

Los selectores determinan a qué elementos se aplica una regla: `article` apunta
a etiquetas, `.card` es una clase reutilizable y un ID identifica un elemento.
Cuando reglas compiten, actúan la cascada y la especificidad: un ID supera a
una clase, y una clase a una etiqueta. Algunas propiedades, como el color, se
heredan; márgenes y bordes no.

Comparemos dos distribuciones. Flexbox trabaja en una dimensión: fila o
columna. Las tarjetas de productos usan espacios regulares y pueden pasar a otra
línea. Lo usaría para acciones, navegación o contenido que fluye. Grid controla
filas y columnas en conjunto: aquí la cuadrícula de reportes muestra sus dos
dimensiones. Conviene cuando necesito alinear en ambos ejes. Puedo usar Grid
para la página y Flexbox dentro de cada tarjeta.

Para ver la responsividad, cambio el ancho de la vista. En pantallas estrechas,
una media query reorganiza las columnas y evita desbordamientos. También hay
que probar zoom, texto largo y teclado. El foco visible ayuda a ubicarnos;
hover no basta para quien no usa mouse. Revisamos además el contraste del texto
y los controles.

Esto se conecta con el curso: LoginMaster alterna temas claros y oscuros, y una
paleta coherente comunica el estado visual. Moka & Canela tiene catálogo y
compra, donde Flexbox o Grid pueden presentar productos. TalenTico buscó
consistencia entre vistas; variables y estilos por componente ayudan a lograrla.

Un aprendizaje concreto fue limitar estilos a una clase raíz. Como el proyecto
ya tiene estilos globales, una regla genérica podría afectar otras secciones.
La hoja propia mantiene el módulo aislado sin cambiar las rutas compartidas.

## Preguntas posibles

**¿Cuándo elegiría Grid sobre Flexbox?**

Grid cuando necesito controlar filas y columnas a la vez; Flexbox para alinear
elementos en una sola dirección.

**¿Qué selector suele ser más reutilizable?**

Una clase. Un ID debe ser único y tiene una especificidad mayor.

**¿Una media query es el único requisito para ser responsivo?**

No. También hace falta contenido flexible, tamaños adecuados, pruebas con zoom
y evitar desbordamientos.

**¿Cómo se navega la demostración sin mouse?**

Con Tab y Shift+Tab; el control enfocado muestra un contorno visible.
