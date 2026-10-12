import { useState } from 'react';
import './CssSection.css';

const snippets = {
  selectors: `article { color: #dbeafe; }  /* elemento */
.card { padding: 1rem; }     /* clase */
#destacado { border-color: teal; } /* id */`,
  cascade: `p { color: slategray; }
.notice { color: skyblue; }
#important { color: white; }`,
  boxModel: `.card {
  margin: 1rem;
  padding: 1.25rem;
  border: 2px solid #38bdf8;
}`,
  flex: `.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}`,
  grid: `.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`,
  responsive: `/* El layout cambia cuando el viewport es estrecho */
@media (max-width: 38rem) {
  .ana-css__preview-cards { grid-template-columns: 1fr; }
}`,
};

const productCards = [
  { name: 'Café de origen', detail: 'Tarjeta de catálogo', price: '$8.50' },
  { name: 'Taza artesanal', detail: 'Contenido con otra longitud', price: '$12.00' },
  { name: 'Caja de regalo', detail: 'Información breve', price: '$18.00' },
];

const gridItems = [
  { name: 'Resumen', detail: 'Fila 1 · columna 1' },
  { name: 'Actividad', detail: 'Fila 1 · columna 2' },
  { name: 'Avisos', detail: 'Fila 1 · columna 3' },
  { name: 'Catálogo', detail: 'Fila 2 · columna 1' },
  { name: 'Inventario', detail: 'Fila 2 · columna 2' },
  { name: 'Reportes', detail: 'Fila 2 · columna 3' },
];

function CodeSample({ children }) {
  return <pre className="ana-css__code"><code>{children}</code></pre>;
}

export default function CssSection() {
  const [mobilePreview, setMobilePreview] = useState(false);

  return (
    <main className="ana-css">
      <div className="ana-css__inner">
        <header className="ana-css__hero">
          <p className="ana-css__eyebrow">Fundamentos visuales · CSS</p>
          <h1>De la estructura a una interfaz clara</h1>
          <p className="ana-css__lead">
            HTML organiza el contenido; CSS describe cómo se presenta, distribuye
            y adapta. Cambia el ancho de la demostración para observar el diseño
            responsivo.
          </p>
        </header>

        <section className="ana-css__lesson" aria-labelledby="ana-css-basics">
          <div className="ana-css__section-heading">
            <div>
              <p className="ana-css__eyebrow">01 · Reglas y prioridades</p>
              <h2 id="ana-css-basics">CSS conecta estructura y presentación</h2>
            </div>
            <p>Una regla elige elementos y les asigna declaraciones.</p>
          </div>

          <div className="ana-css__two-column">
            <article className="ana-css__panel">
              <h3>Selectores</h3>
              <p>
                El elemento <code>article</code> elige etiquetas; <code>.card</code>,
                clases reutilizables; <code>#destacado</code>, un identificador
                único. En interfaces, las clases suelen ser la opción reutilizable.
              </p>
              <CodeSample>{snippets.selectors}</CodeSample>
            </article>

            <article className="ana-css__panel">
              <h3>Cascada, especificidad y herencia</h3>
              <p>
                Para una propiedad en conflicto, primero importa la importancia
                declarada; después, la especificidad y el orden. Un ID supera a
                una clase, que supera a un elemento. Propiedades como color y fuente
                suelen heredarse; margen y borde no.
              </p>
              <CodeSample>{snippets.cascade}</CodeSample>
              <p className="ana-css__note">
                En el ejemplo, <code>#important</code> gana el color; sin conflicto,
                el texto puede heredar la fuente del contenedor.
              </p>
            </article>
          </div>
        </section>

        <section className="ana-css__lesson" aria-labelledby="ana-css-box">
          <div className="ana-css__section-heading">
            <div>
              <p className="ana-css__eyebrow">02 · Espacio y escala</p>
              <h2 id="ana-css-box">El box model, a simple vista</h2>
            </div>
            <p>Todo elemento de bloque ocupa una caja.</p>
          </div>

          <div className="ana-css__box-layout">
            <div className="ana-css__box-demo" aria-label="Diagrama del box model">
              <div className="ana-css__box-margin">
                <span className="ana-css__box-label">margin · espacio exterior</span>
                <div className="ana-css__box-border">
                  <span className="ana-css__box-label">border · borde</span>
                  <div className="ana-css__box-padding">
                    <span className="ana-css__box-label">padding · espacio interior</span>
                    <div className="ana-css__box-content">
                      <strong>Contenido</strong>
                      <span>Texto con tipografía Inter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <article className="ana-css__box-explanation">
              <h3>De adentro hacia afuera</h3>
              <p>
                El contenido ocupa el centro; <code>padding</code> separa el texto
                del borde, <code>border</code> dibuja el límite y <code>margin</code>
                separa la tarjeta de sus vecinas.
              </p>
              <p>
                Usa <code>rem</code> para tamaños ligados a la fuente, <code>%</code>
                para proporciones y <code>vw</code>/<code>vh</code> con moderación
                para la ventana. Las variables guardan decisiones reutilizables.
              </p>
              <CodeSample>{snippets.boxModel}{'\n\n'}:root {'{'} --space: 1rem; {'}'}</CodeSample>
            </article>
          </div>
        </section>

        <section className="ana-css__lesson" aria-labelledby="ana-css-layout">
          <div className="ana-css__section-heading">
            <div>
              <p className="ana-css__eyebrow">03 · Sistemas de distribución</p>
              <h2 id="ana-css-layout">Flexbox o Grid: elige según la tarea</h2>
            </div>
            <p>Una dimensión para fluir; dos dimensiones para estructurar.</p>
          </div>

          <div className="ana-css__layout-comparison">
            <article className="ana-css__panel">
              <div className="ana-css__panel-title">
                <div>
                  <h3>Flexbox · una dimensión</h3>
                  <p>Reparte tarjetas en una fila y permite que pasen a otra.</p>
                </div>
                <span className="ana-css__tag">Fila / columna</span>
              </div>
              <div className="ana-css__flex-demo">
                {productCards.map((product) => (
                  <article className="ana-css__product-card" key={product.name}>
                    <span className="ana-css__product-mark" aria-hidden="true">✳</span>
                    <h4>{product.name}</h4>
                    <p>{product.detail}</p>
                    <strong>{product.price}</strong>
                  </article>
                ))}
              </div>
              <CodeSample>{snippets.flex}</CodeSample>
              <p className="ana-css__note">
                Úsalo para navegación, acciones o tarjetas que fluyen en una sola
                dirección con espacios consistentes.
              </p>
            </article>

            <article className="ana-css__panel">
              <div className="ana-css__panel-title">
                <div>
                  <h3>Grid · dos dimensiones</h3>
                  <p>Relaciona columnas y filas para formar una estructura.</p>
                </div>
                <span className="ana-css__tag">Filas + columnas</span>
              </div>
              <div className="ana-css__grid-demo">
                {gridItems.map((item) => (
                  <div className="ana-css__grid-cell" key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </div>
                ))}
              </div>
              <CodeSample>{snippets.grid}</CodeSample>
              <p className="ana-css__note">
                Úsalo para dashboards o galerías donde importa la alineación en
                ambos ejes; Flexbox y Grid también pueden combinarse.
              </p>
            </article>
          </div>
        </section>

        <section className="ana-css__lesson" aria-labelledby="ana-css-responsive">
          <div className="ana-css__section-heading">
            <div>
              <p className="ana-css__eyebrow">04 · Adaptación y acceso</p>
              <h2 id="ana-css-responsive">Una interfaz, distintos anchos</h2>
            </div>
            <p>El contenido se reorganiza; no se encoge sin límite.</p>
          </div>

          <div className="ana-css__responsive-panel">
            <div className="ana-css__responsive-copy">
              <h3>Prueba el ancho disponible</h3>
              <p>
                Cambia la previsualización de escritorio a móvil. La media query
                del componente reorganiza la grilla cuando el viewport es
                estrecho; en la página, las columnas también responden al ancho
                real de la pantalla.
              </p>
              <CodeSample>{snippets.responsive}</CodeSample>
              <p className="ana-css__note">
                Usa el teclado: el control muestra un foco visible. Hover aporta
                realimentación, pero no reemplaza el foco; texto, bordes y estados
                mantienen contraste sobre el fondo oscuro.
              </p>
              <div className="ana-css__preview-controls" role="group" aria-label="Ancho de demostración">
                <button
                  className="ana-css__control"
                  type="button"
                  aria-pressed={!mobilePreview}
                  onClick={() => setMobilePreview(false)}
                >
                  Escritorio
                </button>
                <button
                  className="ana-css__control"
                  type="button"
                  aria-pressed={mobilePreview}
                  onClick={() => setMobilePreview(true)}
                >
                  Móvil
                </button>
              </div>
            </div>

            <div
              className={`ana-css__preview${mobilePreview ? ' ana-css__preview--mobile' : ''}`}
              aria-label={mobilePreview ? 'Vista móvil' : 'Vista de escritorio'}
            >
              <div className="ana-css__preview-bar">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <strong>{mobilePreview ? '360 px' : 'Ancho flexible'}</strong>
              </div>
              <div className="ana-css__preview-cards">
                <article className="ana-css__preview-card">
                  <span>01</span>
                  <strong>Leer</strong>
                  <p>Texto cómodo, sin zoom.</p>
                </article>
                <article className="ana-css__preview-card">
                  <span>02</span>
                  <strong>Explorar</strong>
                  <p>Tarjetas reordenadas.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <footer className="ana-css__takeaway">
          <span className="ana-css__takeaway-mark" aria-hidden="true">CSS</span>
          <p>
            Organiza estilos por componente, reutiliza variables y evita reglas
            globales que alteren secciones ajenas. En esta exposición, todas las
            clases viven bajo <code>.ana-css</code>.
          </p>
        </footer>
      </div>
    </main>
  );
}
