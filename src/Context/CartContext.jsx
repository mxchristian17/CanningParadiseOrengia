import React, { useState } from 'react';

const CartContext = React.createContext()



export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const onAdd = (item, qty) => {
        //console.log(cart)
        let tempCart = cart;
        let found = false;
        tempCart.forEach((el)=> {if(el.item === item) {el.qty=el.qty+qty;found=true;}})
        if(!found)tempCart.push({item : item, qty : (qty)})
        setCart(tempCart)
    };
    const onRemove = (item) => {
        let filtered = cart.filter(function(el) { return el.item !== item.id; });
        setCart(filtered)
    }
    const badgeCounter = () => { return cart.map(n => n.qty).reduce((a, b) => a + b, 0);}
    return (
        <CartContext.Provider value={{cart : cart, badgeCounter, setCart, onAdd, onRemove}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext