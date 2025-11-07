import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PerfilPage from './componentes/perfilpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PerfilPage />} />
      </Routes>
    </Router>
  );
}

export default App;

   // <div className="App">
     // <PerfilPage />
    //</div>
  //);
//}

//export default App;
