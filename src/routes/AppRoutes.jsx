import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ProjectsMapPage } from '../pages/ProjectsMapPage';
import { DocsViewerPage } from '../pages/DocsViewerPage';
import { SectionPlaceholder } from '../components/SectionPlaceholder';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Ruta para el módulo de Ulysses (Base inicial desacoplada) */}
      <Route
        path="/seccion/javascript"
        element={
          <SectionPlaceholder
            author="Ulysses Quirós"
            sectionTitle="JavaScript e Interactividad"
            expectedBranch="feature/ulysses-javascript"
            expectedModulePath="src/modules/ulysses/"
            description="Espacio reservado para el módulo de JavaScript, interactividad y React de Ulysses. Se desarrollará en la rama feature/ulysses-javascript."
            topics={[
              'Variables y Operadores',
              'Funciones y Scope',
              '.map(), .filter() y Ternarios',
              'DOM vs Virtual DOM',
              'React Hooks (useState, useEffect, useContext)',
              'Rutas Protegidas y LocalStorage',
              'Testing con React Testing Library'
            ]}
          />
        }
      />

      {/* Ruta para el módulo de Ana */}
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

      {/* Ruta para el módulo de Caleb */}
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
