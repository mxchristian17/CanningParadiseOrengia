import React, {useState} from 'react'
import CartItem from '../CartItem/CartItem'
import { useEffect } from 'react/cjs/react.development'
import getItems from '../../Global/getItems'

const Cart = (props) => {
    const [listProduct, setListProduct] = useState([]); // Creo el estado de listProduct para que quede en memoria
    const setLoading = props.setLoading;
    const Loading = props.Loading;

    useEffect(() => {
        // Esto sucede cuando ya se montó el componente
        const list = getItems();
        let Products = [];
        list.then(response => {
            response.map(i => {
                let state = props.cart.findIndex(x => x.item === i.id);
                if(state!== -1){
                    let id = props.cart[state].item;
                    i.cartQty = props.cart.map(n => id === n.item ? n.qty : 0).reduce((a, b) => a + b, 0);
                    Products = [...Products, i];
                }
                return i.id
            })
            setListProduct(Products)
            setLoading(false)
        })

        return (
            setLoading(true)
        )
    }, [setLoading, props.cart]) // el [] es para que renderice una sola vez y no cada vez que actualiza
        // Esto sucede cuando el componente se va a montar
        //console.log('montando...');
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
            {!Loading && listProduct.map(i => <CartItem key={i.id} item={i} qty={i.qty} onAdd={props.onAdd} cart={props.cart} />)}
        </div>
    )
}

export default Cart
