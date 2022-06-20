import React, {useState} from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Palabras from "./Palabras";
import HomePage from "./HomePage";
function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/busqueda" exact key={"/busqueda"} element={<Palabras/>}/>
            <Route path="/" exact key={"/"} element={<HomePage/>}/>
            <Route path="/frontendaprendelds" exact key={"/frontendaprendelds"} 
              element={<HomePage setTerminoBusqueda={setTerminoBusqueda} terminoBusqueda={terminoBusqueda}
            />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
