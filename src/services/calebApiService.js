/**
 * @file calebApiService.js
 * @description Servicio desacoplado para el consumo de APIs REST mediante fetch().
 * Gestiona peticiones HTTP, validación de estados de respuesta (response.ok),
 * cancelación limpia mediante AbortSignal y manejo estructurado de errores de red.
 * 
 * Proyecto: Exposición Front End - Módulo de Caleb
 * Responsabilidad: Acceso a datos independiente de la capa de presentación (React).
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Obtiene un listado de publicaciones desde JSONPlaceholder.
 * 
 * @param {number} [limit=5] - Cantidad máxima de publicaciones a solicitar.
 * @param {Object} [options={}] - Opciones adicionales de configuración.
 * @param {AbortSignal} [options.signal] - Señal para cancelar la solicitud al desmontar componentes.
 * @returns {Promise<Array<{id: number, userId: number, title: string, body: string}>>} Arreglo de publicaciones.
 * @throws {Error} Error estructurado con mensaje descriptivo si la petición falla o no es 2xx.
 */
export async function getPosts(limit = 5, options = {}) {
  const url = `${BASE_URL}/posts?_limit=${encodeURIComponent(limit)}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      signal: options.signal,
    });

    // En la Fetch API, respuestas 404 o 500 no arrojan excepción automáticamente.
    // Es imperativo validar response.ok (códigos HTTP en rango 200-299).
    if (!response.ok) {
      throw new Error(
        `Error HTTP ${response.status} (${response.statusText || 'Respuesta no satisfactoria'}). No fue posible obtener los datos de la API.`
      );
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('El formato de respuesta recibido de la API no es una lista válida.');
    }

    return data;
  } catch (error) {
    // Si la solicitud fue cancelada intencionalmente por AbortController, propagar el error de aborto
    if (error.name === 'AbortError') {
      const abortErr = new Error('La solicitud HTTP fue cancelada (desmontaje del componente o nueva petición).');
      abortErr.name = 'AbortError';
      throw abortErr;
    }

    // Errores de conexión física, DNS o servidor caído
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Fallo de red: No se pudo conectar con el servidor externo. Verifica tu conexión a internet.');
    }

    // Re-lanzar error con mensaje normalizado
    throw error;
  }
}

/**
 * Realiza una consulta a un endpoint intencionalmente inexistente para demostrar
 * el tratamiento defensivo de errores HTTP 404 en vivo frente al grupo.
 * 
 * @param {Object} [options={}] - Opciones de configuración y AbortSignal.
 * @returns {Promise<never>} Siempre arroja un error para fines pedagógicos.
 */
export async function getPostsSimulatingError(options = {}) {
  const url = `${BASE_URL}/posts-recurso-inexistente-error-404`;

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
    signal: options.signal,
  });

  if (!response.ok) {
    throw new Error(
      `Error HTTP ${response.status} (${response.statusText}): El recurso solicitado no existe en el servidor remoto (Prueba de resiliencia).`
    );
  }

  return await response.json();
}

/**
 * Envía una nueva publicación utilizando el método POST y cabeceras JSON.
 * Conecta directamente el formulario HTML semántico con una solicitud HTTP real.
 * 
 * @param {Object} postData - Datos del formulario.
 * @param {string} postData.title - Título del artículo.
 * @param {string} postData.body - Contenido del artículo.
 * @param {number} [postData.userId=1] - Identificador del autor.
 * @param {Object} [options={}] - Opciones adicionales de configuración.
 * @param {AbortSignal} [options.signal] - Señal de cancelación.
 * @returns {Promise<Object>} Recurso creado con ID generado por la API (HTTP 201 Created).
 */
export async function createPost(postData, options = {}) {
  const url = `${BASE_URL}/posts`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        title: postData.title,
        body: postData.body,
        userId: postData.userId || 1,
      }),
      signal: options.signal,
    });

    if (!response.ok) {
      throw new Error(
        `Error HTTP ${response.status}: No fue posible registrar la publicación en el servidor.`
      );
    }

    const createdPost = await response.json();
    return createdPost;
  } catch (error) {
    if (error.name === 'AbortError') {
      const abortErr = new Error('Envío cancelado.');
      abortErr.name = 'AbortError';
      throw abortErr;
    }
    throw error;
  }
}

export default {
  getPosts,
  getPostsSimulatingError,
  createPost,
};
