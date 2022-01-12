import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import CartContext from '../../Context/CartContext'


const Nav = () => {
    const { cart, category } = useContext(CartContext);

    const categoryLink = (categoryId, categoryName, dropdownItem = true) => {
        const definedClass = dropdownItem ? "dropdown-item" : "nav-link"
        if (categoryId === category) return <div className={definedClass + " text-primary"}>{ categoryName }</div>
        return <Link to={"/category/" + categoryId } className={ definedClass }>{ categoryName }</Link>
    }

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
                                <li>{categoryLink('cerradoras', 'Cerradoras')}</li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>{categoryLink('atmosfericas', 'Llenadoras atmosféricas')}</li>
                                <li>{categoryLink('isobaricas', 'Llenadoras isobáricas')}</li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>{categoryLink('lineas', 'Lineas de enlatado industriales')}</li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle" href="../#" id="dispositivos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Equipos de medición
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dispositivos">
                                <li>{categoryLink('controlcarbonatacion', 'Medidor de carbonatación')}</li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>{categoryLink('controlcierre', 'Medidor de cierre automático')}</li>
                                <li>{categoryLink('oximetros', 'Medidor de oxígeno disuelto')}</li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>{categoryLink('controlpresion', 'Medidor de presión')}</li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        {categoryLink('latas', 'Latas', false)}
                        </li>
                    </ul>
                    {cart.length > 0 && <div className="d-flex"><CartWidget /></div>}
                </div>
            </div>
        </nav>
    )
}

export default Nav