import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const CartItem = (props) => {
    const price = Math.round(props.item.qty * props.item.price * 100)/100;
    return (
        <div className="row w-75 my-1 mx-0 p-1">
            <div className="col">
                <div className="d-flex border bg-light p-3 rounded">
                    <img src={"../Images/Products/" + props.item.img} alt={props.item.img} className="d-flex rounded-circle align-self-center" style={{height: "2.5em"}} />
                    <h5 className="d-flex px-4 my-0 align-self-center">{props.item.name}</h5>
                    <p className="d-flex px-2 my-0 flex-fill align-self-center text-secondary">{props.item.qty} en carrito</p>
                    <div className="text-success align-self-center self-align-end mx-4">${price}</div>
                    <div className="btn btn-outline-danger self-align-end mx-1" title="Quitar 1" onClick={() => (props.onModify(props.item.id, 1, props.item.stock, props.item.price, props.item.name, -1))}><FontAwesomeIcon icon={faMinus} /></div>
                    <div className="btn btn-outline-success self-align-end mx-1" title="Añadir 1" onClick={() => (props.onModify(props.item.id, 1, props.item.stock, props.item.price, props.item.name, 1))}><FontAwesomeIcon icon={faPlus} /></div>
                    <div className="btn btn-danger self-align-end mx-1" title="Remover item" onClick={() => (props.onModify(props.item.id, 1, props.item.stock, props.item.price, props.item.name, (-1*props.item.stock)))}><FontAwesomeIcon icon={faTrash} /></div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
