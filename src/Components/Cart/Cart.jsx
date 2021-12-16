import React, {useState, useContext} from 'react'
import CartItem from '../CartItem/CartItem'
import { useEffect } from 'react/cjs/react.development'
import getItems from '../../Global/getItems'
import LoadingItemList from '../ItemList/LoadingItemList'
import { CartContext } from '../../App'

const Cart = (props) => {
    const { cart } = useContext(CartContext);
    const [listProduct, setListProduct] = useState([]); // Creo el estado de listProduct para que quede en memoria
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        // Esto sucede cuando ya se montó el componente
        const list = getItems();
        let Products = [];
        list.then(response => {
            response.map(i => {
                let state = cart.findIndex(x => x.item === i.id);
                if(state!== -1){
                    let id = cart[state].item;
                    i.cartQty = cart.map(n => id === n.item ? n.qty : 0).reduce((a, b) => a + b, 0);
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
    }, [setLoading, cart]) // el [] es para que renderice una sola vez y no cada vez que actualiza
        // Esto sucede cuando el componente se va a montar
        //console.log('montando...');
    return (
        Loading ? <LoadingItemList /> :
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
            {listProduct.map(i => <CartItem key={i.id} item={i} qty={i.qty} onAdd={props.onAdd} cart={cart} />)}
        </div>
    )
}

export default Cart
