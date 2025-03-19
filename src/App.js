import { useState } from "react";
//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="micontenedor">
        <div className="titulo">
            <h1>ALTA DE COLMENA</h1> 
            <img src="/imagenes/udgvirtual.png" alt="Imagen de la UDGVIRTUAL" />;
            <p>Proyecto II.</p>
            <p>Unidad 2.  </p>
            <p>Actividad 2. El sprint Shedule.</p>
            <p>Maestra:Patricia Rayón Villela. </p>
            <p>Estudiante: Salvador Castro Guzmán.</p>

        </div>
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
}
export default App;
