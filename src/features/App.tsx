import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from './home/Home';
import { PageNotFound } from './notFound/pageNotFound';
import { ResultPage } from './result/Result';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path=":searchWord" element={<ResultPage />} />
      <Route path="404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};
