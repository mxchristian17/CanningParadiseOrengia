import React from 'react'

const CartItem = (props) => {
    return (
        <div className="row w-75 my-1 mx-0 p-1">
            <div className="col">
                <div className="d-flex w-100 border bg-light p-3 rounded">
                    <img src={"../Images/Products/" + props.item.img} alt={props.item.img} className="d-flex rounded-circle" style={{height: "2em"}} />
                    <h6 className="d-flex px-2">{props.item.name}</h6>
                    <p className="d-flex px-2">{props.item.cartQty} en carrito</p>
                </div>
            </div>
        </div>
        /*<div className="col col-md-6 col-lg-3 p-2">
            <div className="w-100 border bg-light py-3 rounded justify-content-center">
                <div className="row">
                    <h5 style={{height: "3em"}}>{props.item.name}</h5>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={"../Images/Products/" + props.item.img} alt={props.item.img} className="w-50 mb-1 rounded-circle" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="text-success">${props.item.price.toFixed(2)} por unidad</span>
                    </div>
                </div>
                <ItemCount item={props.item.id} stock={props.item.stock} initial={props.item.initial} onAdd={props.onAdd} cart={props.cart} />
                <div className="row my-2">
                    <div className="col px-4">
                        <Link to={'/item/'+props.item.id} className="btn btn-outline-primary w-100" >Detalles</Link>
                    </div>
                </div>
            </div>
    </div>*/
    )
}

export default CartItem
