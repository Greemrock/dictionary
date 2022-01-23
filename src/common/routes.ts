import { HomePage } from '../features/home/Home';
import { PageNotFound } from '../features/pageNotFound/PageNotFound';
import { ResultPage } from './../features/result/Result';

export const routes = [
  { path: '/', Component: HomePage },
  { path: '/:searchWord', Component: ResultPage },
  { path: '/404', Component: PageNotFound },
  { path: '*', Component: PageNotFound },
];
