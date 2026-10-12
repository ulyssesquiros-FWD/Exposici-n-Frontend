import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ProjectsMapPage } from '../pages/ProjectsMapPage';
import { DocsViewerPage } from '../pages/DocsViewerPage';
import JavaScriptSection from '../modules/ulysses/JavaScriptSection';
import { SectionPlaceholder } from '../components/SectionPlaceholder';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Módulo de Ulysses integrado activamente en su rama feature/ulysses-javascript */}
      <Route path="/seccion/javascript" element={<JavaScriptSection />} />

      {/* Marcador desacoplado para el módulo de Ana */}
      <Route
        path="/seccion/ana"
        element={
          <SectionPlaceholder
            author="Ana"
            sectionTitle="Estructura, Semántica & Experiencia de Usuario"
            expectedBranch="feature/ana-estructura"
            expectedModulePath="src/modules/ana/"
            description="Espacio reservado para el módulo de estructura y maquetación de Ana. Se integrará automáticamente a través de su Pull Request hacia main."
            topics={[
              'Semántica HTML5',
              'Accesibilidad Web (a11y)',
              'Layouts Flexbox y CSS Grid',
              'Diseño Responsivo',
              'Estándares de Maquetación'
            ]}
          />
        }
      />

      {/* Marcador desacoplado para el módulo de Caleb */}
      <Route
        path="/seccion/caleb"
        element={
          <SectionPlaceholder
            author="Caleb"
            sectionTitle="Control de Versiones, Arquitectura & Git"
            expectedBranch="feature/caleb-arquitectura"
            expectedModulePath="src/modules/caleb/"
            description="Espacio reservado para el módulo de arquitectura y flujos de Git de Caleb. Se integrará automáticamente a través de su Pull Request hacia main."
            topics={[
              'Estrategia de Ramas en Git',
              'Resolución de Conflictos',
              'Commits Convencionales',
              'Flujo de Pull Requests',
              'Automatización y Vite Build'
            ]}
          />
        }
      />

      {/* Rutas de apoyo y documentación */}
      <Route path="/proyectos" element={<ProjectsMapPage />} />
      <Route path="/documentacion" element={<DocsViewerPage />} />

      {/* Redirección por defecto */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
