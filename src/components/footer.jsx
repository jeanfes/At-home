import React from "react";

export function Footer() {
    return(
        <footer>
        <section className="footer-section_brand">
            <picture className="logo-footer_container">
                    <img src={require("../assets/logo.png")} alt="logo"/>
            </picture>
            <div className="social_container">
                <img src={require("../assets/facebook.png")} alt="facebook"/>
                <img src={require("../assets/instagram.png")} alt="instagram"/>
                <img src={require("../assets/linkedin.png")} alt="linkedin"/>
            </div>
        </section>
        <section className="footer-section_services">
            <div>
                <h3>Servicios</h3>
                <p>Vender</p>
                <p>Comprar</p>
                <p>Alquilar</p>
            </div>
            <div>
                <h3>Recursos</h3>
                <p>Politicas</p>
                <p>Novedades</p>
                <p>Nosotros</p>
            </div>
            <div>
                <h3>Soporte</h3>
                <p>Centro de Soporte</p>
                <p>Condiciones</p>
                <p>Email</p>
            </div>
        </section>
    </footer>
    );
}