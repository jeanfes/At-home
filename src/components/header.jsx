import React from "react";
import { Link } from "react-router-dom";
import imagenPerfil from "../assets/usuario.png";

export function Header() {
    return(
        <header>
        <section className="logo-header_container">
            <Link to="/">
                <picture id="principal_button">
                <img src={require("../assets/logo.png")} alt="logo"/>
                </picture>
            </Link>
        </section>
        <div className="perfil_container">
            <img src={imagenPerfil} alt="logo usuario"/>
            <div className="opciones_container">
                <Link to="/sesion">
                    <img id="icon-login" src={require("../assets/entrar.png")} alt="iniciar sesion"/>
                    <p>Inicar sesion</p>
                </Link>
            </div>
        </div>
        </header>
    );
}