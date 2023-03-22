import React from "react";
import { HomeImagenes } from "../components/homedetalle";
import { HomeCaracteristicas } from "../components/homedetalle";

export function Detalle() {
    return(
        <main className="main-detalle_container">
            <HomeImagenes
            imagenPropiedad = "casa"
            cocina="cocina"
            sala="sala"
            cuarto="cuarto"
            baño="baño"
            />
        <section>
            <span className="caracteristicas_container">
            <h1>Caracteristicas</h1>
            <HomeCaracteristicas
            tipoPropiedad="casa"
            areaPropiedad="90 m2"
            bañosPropiedad="2 baños"
            cuartosPropiedad="4 cuartos"
            estacionamientoPropiedad="1 estacionamiento"
            descripcionPropiedad="Casa en buen terreno, servicio de seguridad, cerca de centros comerciales y a pocos minutos de la playa."
            />
            </span>
            <span className="detalle-casa_container">
                <h3>Contacta al vendedor para recibir asesoracion</h3>
                <form action="">
                    <input type="text" name="" id="" placeholder="Nombre"/>
                    <input type="text" name="" id="" placeholder="Email"/>
                    <textarea placeholder="Mensaje" name="" id=""></textarea>
                    <input id="button-enviar" type="submit" value="Enviar"/>
                </form>
            </span>
        </section>
    </main>
    );
}