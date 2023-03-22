import React, { useState } from 'react';
import LogoMenu from "../assets/barra-menu.png";
import LogoBuscar from "../assets/search.png";
import { Producto } from "../components/producto";
import { Menu } from "../components/menu";

export function Propiedades() {
    const [clase, setClase] = useState('inactive');
    
    function toggleClass() {
        if (clase === 'inactive') {
            setClase('');
          } else {
            setClase('inactive');
          }
      }

    return(
        <main>
        <h1 className="title-propiedades">Propiedades</h1>
        <section className="section-search_container">
            <div id="search_container">
                <img id="menu-arrow_icon" onClick={toggleClass} src={LogoMenu} alt=""/>
                <input type="text" name="" id="" placeholder="Buscar"/>
                <img src={LogoBuscar} alt="buscar"/>
            </div>
            <Menu id={clase}/>
        </section>
        <section className="products-container">
            <h4>20 resultados</h4>
            <div className="cards-container">
                <Producto
                    precio="450.000.000"
                />
                <Producto
                    precio="380.000.000"
                />
                <Producto
                    precio="310.000.000"
                />
                <Producto
                    precio="120.000.000"
                />
                <Producto
                    precio="360.000.000"
                />
                <Producto
                    precio="350.000.000"
                />
                <Producto
                    precio="170.000.000"
                />
                <Producto
                    precio="300.000.000"
                />
                <Producto
                    precio="220.000.000"
                />
                <Producto
                    precio="250.000.000"
                />
                <Producto
                    precio="610.000.000"
                />
                <Producto
                    precio="510.000.000"
                />
                <Producto
                    precio="490.000.000"
                />
                <Producto
                    precio="500.000.000"
                />
                <Producto
                    precio="520.000.000"
                />
                <Producto
                    precio="600.000.000"
                />
                <Producto
                    precio="560.000.000"
                />
                <Producto
                    precio="580.000.000"
                />
                <Producto
                    precio="400.000.000"
                />
                <Producto
                    precio="480.000.000"
                />
            </div>
        </section>
    </main>
    );
}