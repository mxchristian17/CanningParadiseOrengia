import React, { useState } from 'react';

const CartContext = React.createContext()



export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const onAdd = (item, qty) => {
        //let oldQty = cart.filter(function(el) { return el.item === item.id; });
        let oldQty = 0;
        cart.forEach((el)=> {if(el.item === item) oldQty=oldQty+el.qty;})
        let filtered = cart.filter(function(el) { return el.item !== item; });
        filtered.push({item : item, qty : (oldQty+qty)})
        setCart(filtered)
    };
    const onRemove = (item) => {
        let filtered = cart.filter(function(el) { return el.item !== item.id; });
        setCart(filtered)
    }


    return (
        <CartContext.Provider value={{cart : cart, setCart : setCart, onAdd : onAdd, onRemove : onRemove}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext