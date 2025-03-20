import React from 'react';
import Menu from './Menu'; // Importa el componente Menu

const CamaraCria = () => {
  return (
    <div>
      <Menu />
      <h1>Componente Camara de cría</h1>
      <div className="contenedor-camara">
             <h2>[2] CAMARA DE CRÍA</h2>
             {[...Array(10)].map((_, i) => (
                  <div key={i}>
                      <label>
                          <input type="checkbox" /> Bastidor  {i + 1}
                          <input type="text" placeholder="Estado del bastidor de Camara" />
                      </label>
                    </div>
              ))}

              <button>Agregar</button>
              
              <p> NOTA: El orden de los bastidores, es de izquierda a derecha. Viendo el cajón de frente a la piquera. De no poner un estado, el estado inicia es igual a: Nuevo u óptimo. </p>
        </div>
    </div>
  );
};

export default CamaraCria;