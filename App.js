import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Acciones from './componentes/Acciones';
import PerfilPage from './componentes/PerfilPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/perfil">Perfil</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Acciones />} />
          <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;