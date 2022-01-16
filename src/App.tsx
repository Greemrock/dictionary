import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home/Home';
import { ResultPage } from './pages/result/Result';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};
