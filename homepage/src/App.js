import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Acciones from './componentes/Acciones';
import PerfilPage from './componentes/PerfilPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acciones />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Routes>
    </Router>
  );
}

export default App;
