import React from "react";

export function Menu(props){
  return(
  <div className="etiquetas_container" id={props.id}>
        <ul>
            <li>
                <h3>Tipo</h3>
            </li>
            <li>
                <input type="checkbox" name="" id=""/>
                <p>Casa</p>
            </li>
            <li>
                <input type="checkbox" name="" id=""/>
                <p>Departamento</p>
            </li>
        </ul>
        <ul>
            <li>
                <h3>Ciudad</h3>
            </li>
            <li>
                <input type="checkbox" name="" id=""/>
                <p>Barranquilla</p>
            </li>
            <li>
                <input type="checkbox" name="" id=""/>
                <p>Soledad</p>
            </li>
        </ul>
        <ul>
            <li>
                <h3>Barrio</h3>
            </li>
            <li>
                <input type="checkbox" name="" id=""/>
                <p>El Prado</p>
            </li>
            <li>
                <input type="checkbox" name="" id=""/>
                <p>Ciudadela 20 de Julio</p>
            </li>
            <li>
                <input type="checkbox" name="" id=""/>
                <p>7 de Abril</p>
            </li>
        </ul>
    </div>
  );
}