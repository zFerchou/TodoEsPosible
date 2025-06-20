import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Content from '../components/Content';

const About = () => (
  <main style={{ padding: '1rem', color: 'white' }}>
    <h2>Acerca de TodoEsPosible</h2>
    <p>Esta es una aplicación creada para demostrar rutas en React.</p>
  </main>
);

const AppRouter = () => {
  return (
    <Router basename="/TodoEsPosible">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="acerca" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
