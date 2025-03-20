import React from 'react';
import Menu from './Menu'; // Importa el componente Menu

const Apiario = () => {
  return (
    <div>
      <Menu />
      <h1>Componente Apiario.</h1>
      <div className="contenedor-huerto">
               <div className="titulo-huerto">
                         <h2>[4]  HUERTA DEL APIARIO</h2>
               </div>
               <div className="datos-huerto">
                         <label>ZONA:  </label>
                         <input type="text" placeholder="Describa la zona donde estará el Apirario" />
                         <label>HUERTA:  </label>
                         <input type="text" placeholder="Escriba el nombre de la huerta" />
                         <label> DIRECCIÓN: </label>
                         <input type="text" placeholder="Escriba la dirección completa" />
                         <label>PROPIETARIO:</label>
                         <input type="text" placeholder="Escriba el nombre del propietario" />
               </div>
               <div className="floracion-huerto">
                              <h5>PERIODO QUE DURA LA FLORACIÓN DEL HUERTO</h5>
                              <label>Tipo de Flor:  </label>
                              <input type="text" placeholder="Escriba el nombre de la flor" />
                              <label>Ciclo de vida de la flor:  </label>
                              <input type="text" placeholder="Describa el ciclo de vida de la flor" />
                              *<label>Fecha Inicial:  </label>
                              <input type="date"/>
                              <label>Fecha Final:  </label>
                              <input type="date" placeholder="Estado actual de la regilla" />
               </div>
               <button>Agregar</button>
               <div className="codigo-huerto-colmena">
                         <label>CÓDIGO DE HUERTO:  </label>
                         <input type="text" placeholder="Código de identificación huerto" />
                         <label>CÓDIGO DE COLMENA:  </label>
                         <input type="text" placeholder="Código de identificación de la colmena" />
               </div>
               <button>Guardar</button>
         </div>
    </div>
  );
};

export default Apiario;