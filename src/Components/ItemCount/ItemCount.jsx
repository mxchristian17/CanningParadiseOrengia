import React, { useState, useContext } from 'react';
import CartContext from '../../Context/CartContext';

const ItemCount = (props) => {
    const { item, stock, initial, price, name } = props
    const { onModify } = useContext(CartContext);
    const startingQty = stock < initial ? stock : initial
    const [qty, setQty] = useState(startingQty);

    const add = () => { if(qty < stock) setQty(qty+1) }
    const sub = () => { if(qty > 0) setQty(qty-1); }
    const addToCart = () => { onModify(item, qty, stock, price, name, 1) }

    
    return (
        <div>
            <div className="row">
                <div className="col-3 text-end"><button className="btn btn-primary btn-sm" onClick={() => sub()}>-</button></div>
                <div className="col bg-white">{qty}</div>
                <div className="col-3 text-start"><button className="btn btn-primary btn-sm" onClick={() => add()}>+</button></div>
            </div>
            <div className="row">
                <div className="text-secondary"><small >Hay { stock } disponibles</small></div>
            </div>
            <div className="row my-2">
                <div className="col px-4"><button className="btn btn-outline-primary w-100" onClick={() => ((qty > 0 & qty <= stock) ? addToCart() : undefined)}>Añadir al carrito</button></div>
            </div>
        </div>
    )
}

export default ItemCount