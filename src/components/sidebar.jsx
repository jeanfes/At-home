import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import IconCasaSide from "../assets/sidebarCasa.png";
import IconContactarSide from "../assets/sidebarContactar.png";

export function Sidebar() {
    return(
        <nav>
            <Link to="/propiedades">
                <button id="button-propiedades">
                    <img src={IconCasaSide} alt="propiedades"/>
                    <p>Propiedades</p>
                </button>
            </Link>
            <Link to="/contactar">
                <button id="button-contactar">
                    <img src={IconContactarSide} alt="contactae"/>
                    <p>Contactar</p>
                </button>
            </Link>
        </nav>
    );
}