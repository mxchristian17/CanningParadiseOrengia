import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="../" className="navbar-brand px-1 mx-1" >
                    <img src="../logo192.png" alt="" height="24" />
                </Link>
                <Link to="../" className="navbar-brand">Canning Paradise</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                            <Link to="../" className="nav-link">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle" href="../#" id="maquinas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Máquinas
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="maquinas">
                                <li><Link to="/category/cerradoras" className="dropdown-item">Cerradoras</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/category/atmosfericas" className="dropdown-item">Llenadoras atmosféricas</Link></li>
                                <li><Link to="/category/isobaricas" className="dropdown-item">Llenadoras isobáricas</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/category/lineas" className="dropdown-item">Lineas de enlatado industriales</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle" href="../#" id="dispositivos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Equipos de medición
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dispositivos">
                                <li><Link to="/category/controlcarbonatacion" className="dropdown-item">Medidor de carbonatación</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/category/controlcierre" className="dropdown-item">Medidor de cierre automático</Link></li>
                                <li><Link to="/category/oximetros" className="dropdown-item">Medidor de oxígeno disuelto</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/category/controlpresion" className="dropdown-item">Medidor de presión</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/latas" className="nav-link">Latas</Link>
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