import React from "react"
import "../styles/sesion.css";
import LogoSesion from "../assets/logo.png";
import { Link } from "react-router-dom";

export function Sesion() {
    return (
        <main className="principal-login_container">
            <div className="login-main_container">
                <div className="logo">
                    <img src={LogoSesion} alt="logo principal" />
                    <h1>At Home</h1>
                </div>
                <section className="section-main-container">
                    <div className="log-in-container_email">
                        <div className="log-in-title_email">
                            <p>Iniciar sesión</p>
                            <p>para continuar</p>
                        </div>
                        <div id="log-in-input_email">
                            <input type="text" name="input_email" id="input_email" placeholder="Correo" />
                        </div>
                        <div id="log-in-input_password">
                            <input type="password" name="input_password" id="input_password" placeholder="Contraseña" />
                        </div>
                        <div className="log-in-help">
                            <div className="signin_link">
                                <p>No tienes cuenta?</p>
                                <Link to="/registrarse">
                                    <p>Crea una</p>
                                </Link>
                            </div>
                            <div className="contraseña_recuperacion">
                                <a href="/">Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                        <button id="button-entrar">Entrar</button>
                    </div>
                </section>
            </div>
        </main>
    );
}