import React from "react";
import CasaIcon from "../assets/icon-casa.png";
import LongitudIcon from "../assets/area.png";
import BañoIcon from "../assets/bathroom.png";
import CuartoIcon from "../assets/room.png";
import CarroIcon from "../assets/car.png";

export function HomeImagenes(props) {
    return(
    <section>
        <div className="detalle-img_container">
            <img src={require(`../assets/${props.imagenPropiedad}.png`)} alt=""/>
        </div> 
        <div className="gallery-img_container">
            <img src={require(`../assets/${props.cocina}.png`)} 
                 alt="cocina"/>
            <img src={require(`../assets/${props.sala}.png`)} 
                 alt="sala"/>
            <img src={require(`../assets/${props.cuarto}.png`)} 
                 alt="cuarto"/>
            <img src={require(`../assets/${props.baño}.png`)} 
                 alt="baño"/>
        </div>
    </section>
    );
}

export function HomeCaracteristicas(props) {
    return(
        <div className="texto_container">
            <div id="detalle_tipo">
                <img src={CasaIcon} alt=""/>
                <p>{props.tipoPropiedad}</p>
            </div>
            <div id="detalle_longitud">
                <img src={LongitudIcon} alt=""/>
                <p>{props.areaPropiedad}</p>
            </div>
            <div id="detalle_baño">
                <img src={BañoIcon} alt=""/>
                <p>{props.bañosPropiedad}</p>
            </div>
            <div id="detalle_habitaciones">
                <img src={CuartoIcon} alt=""/>
                <p>{props.cuartosPropiedad}</p>
            </div>
            <div id="detalle_estacionamiento">
                <img src={CarroIcon} alt=""/>
                <p>{props.estacionamientoPropiedad}</p>
            </div>
                <p id="description-text">
                   {props.descripcionPropiedad}
                </p>
            </div>
    );
}