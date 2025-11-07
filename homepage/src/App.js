import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Acciones from './componentes/Acciones.tsx';

function App() {
  return (
    <Router basename="/icc-ppw-u2-pages">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;