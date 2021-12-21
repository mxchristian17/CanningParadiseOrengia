import React from 'react'

const CartItem = (props) => {
    return (
        <div className="row w-75 my-1 mx-0 p-1">
            <div className="col">
                <div className="d-flex border bg-light p-3 rounded">
                    <img src={"../Images/Products/" + props.item.img} alt={props.item.img} className="d-flex rounded-circle" style={{height: "2em"}} />
                    <h6 className="d-flex px-2">{props.item.name}</h6>
                    <p className="d-flex px-2 flex-fill">{props.item.cartQty} en carrito</p>
                    <div className="btn btn-outline-success self-align-end mx-2" title="Añadir item" onClick={() => (props.onAdd(props.item.id, 1))}>+</div>
                    <div className="btn btn-danger self-align-end" title="Remover item" onClick={() => (props.onRemove(props.item))}>X</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
