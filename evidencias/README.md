# Evidencias Técnicas de la Exposición

Esta carpeta documenta las verificaciones ejecutadas y el catálogo de capturas de pantalla sugeridas para respaldar la exposición oral frente al docente evaluador.

---

## 📸 Catálogo de Capturas Recomendadas para la Defensa

Para documentar el funcionamiento real de la plataforma, se sugiere almacenar en esta carpeta las siguientes capturas tomadas directamente del navegador:

1. **`01_portada_integrada.png`:**
   - Vista de la portada (`/`) mostrando la presentación del trío (Caleb, Ana, Ulysses) con los tres módulos marcados como "Completado e Integrado".
2. **`02_modo_presentacion_slide1.png`:**
   - Vista del modo de exposición guiada (`/presentacion`) en la diapositiva inicial con la barra de progreso y el cronómetro orientativo.
3. **`03_modulo_caleb_api_exitosa.png`:**
   - Vista del módulo de Caleb (`/seccion/html-api`) en la pestaña de consumo de API mostrando la lista de publicaciones devuelta por JSONPlaceholder.
4. **`04_modulo_caleb_api_error_404.png`:**
   - Vista de la prueba de resiliencia ante error 404 en el módulo de Caleb mostrando la captura defensiva de la excepción y la alerta de reintento accesible.
5. **`05_modulo_ana_css_grid_flexbox.png`:**
   - Vista del módulo de Ana (`/seccion/css`) mostrando la comparativa entre Flexbox y CSS Grid.
6. **`06_modulo_ana_responsive_preview.png`:**
   - Vista del módulo de Ana con el toggle de vista móvil activado, demostrando el colapso responsivo de columnas sin desbordamiento.
7. **`07_modulo_ulysses_interactividad_map_filter.png`:**
   - Vista del módulo de Ulysses (`/seccion/javascript`) en el Taller 1 con el filtro de búsqueda dinámico activo y las tarjetas renderizadas con `.map()`.
8. **`08_modulo_ulysses_estado_vacio_ternario.png`:**
   - Vista del estado vacío renderizado condicionalmente mediante operador ternario al no coincidir ninguna búsqueda.
9. **`09_modulo_ulysses_testing_unitario.png`:**
   - Vista del simulador de pruebas unitarias en vivo mostrando `PASS: 2 de 2 pruebas superadas` para funciones puras.
10. **`10_compilacion_vite_build.png`:**
    - Captura de la terminal de comandos ejecutando `npm run build` con código de salida 0.

---

## 🛠️ Comprobaciones Técnicas Registradas

* **Entorno de ejecución:** Node.js v22.18.0 / npm 10.9.3.
* **Empaquetador:** Vite 6 / React 19 / React Router 7.
* **Compilación de producción:** `npm run build` exitosa (0 errores, 0 advertencias de dependencias rotas).
* **Consumo de API en vivo:** Comunicación exitosa con endpoint seguro `https://jsonplaceholder.typicode.com/posts`.
