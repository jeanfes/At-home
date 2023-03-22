import React from "react"
import ImagenPrincipal from "../assets/main.jpg";
import ImagenCasa from "../assets/main-casa.png";
import ImagenDepartamento from "../assets/main-departamento.png";

export function Inicio() {
    return(
        <main>
        <section className="main-img_container">
            <img src={ImagenPrincipal} alt=""/>
        </section>
        <section className="main-services_container">
            <div className="title-categoria_container">
                <h2>Categorias</h2>
                <p>Ver mas</p>
            </div>
            <div className="img-categoria_container">
                <div className="card-main_img">
                    <div className="border-top">
                    </div>
                    <div className="img">
                        <img src={ImagenDepartamento} alt=""/>
                    </div>
                        <button>Departamentos
                        </button>
                </div>
                <div className="card-main_img">
                    <div className="border-top">
                    </div>
                    <div className="img">
                        <img src={ImagenCasa} alt=""/>
                    </div>
                        <button>Casas
                        </button>
                </div>
            </div>
        </section>
        <section className="main-text_container">
            <div className="card" id="card1">
                <div className="number-container">
                    <p>1</p>
                </div>
                <div className="description-container">
                    <h3>Propiedades exclusivas</h3>
                    <p>Ofrecemos propiedades únicas y exclusivas, como lujosas mansiones, casas históricas y propiedades en ubicaciones privilegiadas, que no encontrarás en otros sitios web de venta de casas.</p>
                </div>
            </div>
            <div className="card" id="card2">
                <div className="number-container">
                    <p>2</p>
                </div>
                <div className="description-container">
                    <h3>Servicios adicionales</h3>
                    <p>Ofrecemos servicios adicionales, como ayuda con decoración, asesoramiento hipotecario y servicios de mudanza, para hacer tu experiencia de compra de casas más fácil y completa.</p>
                </div>
            </div>
            <div className="card" id="card3">
                <div className="number-container">
                    <p>3</p>
                </div>
                <div className="description-container">
                    <h3>Garantía de satisfacción</h3>
                    <p>Ofrecemos una garantía de satisfacción con devolución de dinero para todas las propiedades que vendemos, para que te sientas seguro y confiado al comprar una casa con nosotros.</p>
                </div>
            </div>
        </section>
    </main>
    );
}