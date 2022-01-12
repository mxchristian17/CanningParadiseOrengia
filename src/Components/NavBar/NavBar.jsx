import React, { useContext, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import CartContext from '../../Context/CartContext'
import { getCategories } from '../../Services/Firebase/Firebase'


const Nav = () => {
    const { cart } = useContext(CartContext);
    const [listCategories, setListCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const showCategories = loading ?
    <li className="nav-item px-2">
        <div className="nav-link">Loading categories...</div>
    </li> :
    listCategories.map((cat) => {
        return cat.categories ? 
        <li key={cat.id} className="nav-item dropdown px-2">
            <a className="nav-link dropdown-toggle" href="../#" id="dispositivos" role="button" data-bs-toggle="dropdown" aria-expanded="false">{ cat.name }</a>
            <ul className="dropdown-menu" aria-labelledby="maquinas">
            { cat.categories.map((subCat, key) => { return <li key={key}>
                    <NavLink to={"/category/" + subCat.link } className="dropdown-item" activeClassName="text-primary">{ subCat.name }</NavLink>
                </li> }) }
            </ul>
        </li> :
        <li key={cat.id} className="nav-item px-2">
            <NavLink to={"/category/" + cat.link } className="nav-link" activeClassName="text-primary">{ cat.name }</NavLink>
        </li>
    })

    useEffect(() => {
        setLoading(true);
        getCategories().then(categories => {
            setListCategories(categories)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        return (
            setLoading(true)
        )
    }, [setLoading])

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
                            <NavLink to="../" className="nav-link">Inicio</NavLink>
                        </li>
                        { showCategories }
                    </ul>
                    {cart.length > 0 && <div className="d-flex"><CartWidget /></div>}
                </div>
            </div>
        </nav>
    )
}

export default Nav