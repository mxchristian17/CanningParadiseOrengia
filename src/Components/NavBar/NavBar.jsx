import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#/">Canning Paradise</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page" href="#/">Inicio</a>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle" href="#/" id="maquinas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Máquinas
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="maquinas">
                                <li><a className="dropdown-item" href="#/">Cerradoras</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#/">Llenadoras atmosféricas</a></li>
                                <li><a className="dropdown-item" href="#/">Llenadoras isobáricas</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#/">Lineas de enlatado industriales</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle" href="#/" id="dispositivos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Equipos de medición
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dispositivos">
                                <li><a className="dropdown-item" href="#/">Medidor de carbonatación</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#/">Medidor de cierre automático</a></li>
                                <li><a className="dropdown-item" href="#/">Medidor de oxígeno disuelto</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#/">Medidor de presión</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Latas</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <CartWidget badge={props.badge}></CartWidget>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
