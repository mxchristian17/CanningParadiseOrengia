import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import CartContext from '../../Context/CartContext';

const ItemDetail = (props) => {
    const { cart } = useContext(CartContext);
    const [shopped, setShopped] = useState(0);
    const { product } = props;
    useEffect(() => {
        let inCart = 0;
        cart.filter(i => i.item === product.id).map(i => inCart = inCart+i.qty);
        setShopped(inCart);
    }, [setShopped, cart, product.id]);
    return (
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 justify-content-center">
            <div className="col col-md col-lg-9 p-2">
                <div className="w-100 border bg-light py-3 rounded justify-content-center">
                    <div className="row">
                        <div className=".d-md-none .d-lg-block col-1">
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col justify-content-center">
                                    <img src={"../Images/Products/" + product?.img} alt={product?.img} className="w-100 rounded p-2" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 px-4">
                            <div className="row">
                                <div className="col">
                                    <div className="text-secondary text-start"><small>{product?.sold} vendidos</small></div>
                                    <h3 className="text-start">Detalle de {product?.name}</h3>
                                </div>
                            </div>
                            <div className="row" style={{height: 1 + "em"}}>
                                <div className="col">
                                    <div className="position-relative">
                                        <div className="d-flex px-0 position-absolute top-0 start-0 opacity-25">
                                            <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                                            <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                                            <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                                            <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                                            <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                                        </div>
                                        <div className="d-flex px-0 position-absolute top-0 start-0 text-primary" style={{maxWidth: 0.99*parseFloat(product?.rateAverage) + "em", overflow: "hidden"}}>
                                            <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                                            <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                                            <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                                            <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                                            <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-start">
                                    <small className="text-secondary">{product?.reviews} opiniones</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-start">
                                    <span className="text-success h3">${product?.price?.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-start py-2">
                                    {product?.description}
                                </div>
                            </div>
                            {shopped === 0 & typeof(product?.id) !== 'undefined' ?
                                <div className="row">
                                    <div className="col">
                                        <ItemCount item={product?.id} stock={product?.stock} initial={product?.initial} />
                                    </div>
                                </div>
                            :
                                <div>
                                    <div className="row">
                                        <div className="text-secondary"><small >{shopped} en el carro de {product?.stock} disponibles</small></div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col px-4">
                                            <Link to="/cart" className="btn btn-outline-secondary w-100">Finalizar compra</Link>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="row my-2">
                                <div className="col px-4">
                                    <Link to="/" className="btn btn-outline-secondary w-100">Volver</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
