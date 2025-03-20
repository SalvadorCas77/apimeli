//import { useState } from "react";
//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './paginas/Menu';
import Apiario from './paginas/Apiario';
import Colmena from './paginas/Colmena';
import CamaraCria from './paginas/CamaraCria';
import Alza from './paginas/Alza';
import Inicio from './paginas/Inicio';
import './App.css';

function App() {
  return (
      <>
          <Routes>
                  <Route path='/' element={<Inicio />} />
                  <Route path="/inicio" element={<Inicio />} />
                  <Route path="/alza" element={<Alza />} />
                  <Route path="/apiario" element={<Apiario />} />
                  <Route path="/camaracria" element={<CamaraCria />} />
                  <Route path="/colmena" element={<Colmena />} />
          </Routes>
      </>
  );
}
export default App;
