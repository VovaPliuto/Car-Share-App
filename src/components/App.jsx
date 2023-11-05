import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Catalogue = lazy(() => import('../pages/Catalog/Catalog'));
const Favorite = lazy(() => import('../pages/Favorites/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="catalog" element={<Catalogue />} />
        <Route path="favorites" element={<Favorite />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes>
  );
};
