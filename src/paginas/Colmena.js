import React from 'react';
import Menu from './Menu'; // Importa el componente Menu

const Colmena = () => {
  return (
    <div>
      <Menu />
      <h1>Componente Colmena.</h1>
      <div className="contenedor-piezas">
             <div className="titulo-piezas" >
                    <h2>[1] COMPONENTES DE COLMENA</h2>
             </div>
             
             <div className="base-piso">
                    <label><input type="checkbox" />Base:  </label>
                    <input type="text" placeholder="Estado actual de la base" />
                    <label><input type="checkbox" />Piso:  </label>
                    <input type="text" placeholder="Estado actual del piso" />
             </div>   
      
             <div className="regilla-trampa">
                 <label><input type="checkbox" />Regilla Excluidora:  </label>
                 <input type="text" placeholder="Estado actual de la regilla" />
                 <label><input type="checkbox" />Trampa para polen:  </label>
                 <input type="text" placeholder="Estado actual trampa de polen" />
             </div>
             <div className="techo">
                 <label><input type="checkbox" />Techo Colmena:  </label>
                 <input type="text" placeholder="Estado actual del techo" />
             </div>
             <button>Guardar</button>
        </div>
    </div>
  );
};

export default Colmena;