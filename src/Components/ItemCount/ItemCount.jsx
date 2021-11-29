import React, {useState} from 'react'

const ItemCount = (props) => {
    const [qty, setQty] = useState(parseInt(props.initial));
    const [availableStock, setAvailableStock] = useState(props.stock);

    const add = () => {
        if(qty < availableStock) setQty(qty+1);
    }
    const sub = () => {
        if(qty > 0) setQty(qty-1);
    }
    const addToCart = () => {
        props.onAdd(props.item, qty);
        setAvailableStock(availableStock-qty);
        if(qty > availableStock-qty) setQty(availableStock-qty);
    }

    return (
        <div>
            <div className="row">
                <div className="col-3 text-end"><button className="btn btn-primary btn-sm" onClick={() => sub()}>-</button></div>
                <div className="col bg-white">{qty}</div>
                <div className="col-3 text-start"><button className="btn btn-primary btn-sm" onClick={() => add()}>+</button></div>
            </div>
            <div className="row">
                <div className="text-secondary"><small >{(props.stock>availableStock) ? props.stock-availableStock + ' en el carro de ' + props.stock + ' disponibles' : "\u00A0"}</small></div>
            </div>
            <div className="row my-2">
                <div className="col px-4"><button className="btn btn-outline-primary w-100" onClick={() => ((props.stock > 0 & qty > 0 & qty <= availableStock) ? addToCart() : undefined)}>Añadir al carrito</button></div>
            </div>
        </div>
    )
}

export default ItemCount
