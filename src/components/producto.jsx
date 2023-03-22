import React from "react";
import { Link } from "react-router-dom";

export function Producto(props) {
    return(
        <Link to= "/detalle">
            <span className="card">
                <p>{props.precio}</p>
            </span>
        </Link>
    );
}