import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '../common/routes';

export const App: React.FC = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
