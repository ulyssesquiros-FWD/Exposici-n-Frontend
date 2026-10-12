import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { PresentationPage } from '../pages/PresentationPage';
import { ProjectsMapPage } from '../pages/ProjectsMapPage';
import { DocsViewerPage } from '../pages/DocsViewerPage';
import HtmlApiSection from '../modules/caleb/HtmlApiSection';
import CssSection from '../modules/ana/CssSection';
import JavaScriptSection from '../modules/ulysses/JavaScriptSection';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. Portada de la exposición */}
      <Route path="/" element={<HomePage />} />

      {/* 2. Modo de exposición guiada (8-10 min) */}
      <Route path="/presentacion" element={<PresentationPage />} />

      {/* 3. Módulos individuales integrados */}
      <Route path="/seccion/html-api" element={<HtmlApiSection />} />
      <Route path="/seccion/css" element={<CssSection />} />
      <Route path="/seccion/javascript" element={<JavaScriptSection />} />

      {/* Rutas de alias para compatibilidad retroactiva */}
      <Route path="/seccion/caleb" element={<Navigate to="/seccion/html-api" replace />} />
      <Route path="/seccion/ana" element={<Navigate to="/seccion/css" replace />} />

      {/* 4. Mapa de aprendizajes del curso y documentación */}
      <Route path="/proyectos" element={<ProjectsMapPage />} />
      <Route path="/documentacion" element={<DocsViewerPage />} />

      {/* Redirección por defecto */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
