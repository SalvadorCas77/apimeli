import React from 'react';
import Menu from './Menu'; // Importa el componente Menu

const Alza = () => {
  return (
    <div>
      <Menu />
      <h1>Componente Alza</h1>
      <div className="contenedor-alza">
              <h2> [3]  ALZA MELARIA</h2>
              {[...Array(8)].map((_, i) => (
                   <div key={i}>
                      <label>
                        <input type="checkbox" /> Bastidor {i + 1}
                        <input type="text" placeholder="Estado del bastidor de Alza" />
                      </label>
                   </div>
              ))}
              <button>Agregar</button>
         </div>
    </div>
  );
};

export default Alza;