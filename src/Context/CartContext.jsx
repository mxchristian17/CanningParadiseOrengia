import React, { useState } from 'react';

const CartContext = React.createContext()



export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState();
    const onModify = (item, qty, stock, price, name, addOrSubtract = 1) => {
        let tempCart = [...cart];
        const itemFound = Object.keys(tempCart).find(key => tempCart[key].item === item);
        if (itemFound == null) {
            if(qty > stock) qty = stock
            tempCart.push({item : item, qty : qty, price : price, name : name})
        } else {
            let newVal = tempCart[itemFound].qty+(qty*addOrSubtract)
            if(newVal > stock) newVal = stock;
            if(newVal > 0) { tempCart[itemFound].qty = newVal; }else{tempCart.splice(itemFound, 1)}
        }
        setCart(tempCart)
    };

    const badgeCounter = () => { return cart.reduce((a, b) => a + b.qty, 0);}

    const cartTotal = () => {
        let total = 0;
        cart.forEach((el) => { total = total + el.price * el.qty })
        return (Math.round(total * 100)/100);
    };

    const clearCart = () => { setCart([]); return; }

    const setCategoryId = (categoryId) => { setCategory(categoryId); return; }

    return (
        <CartContext.Provider value={{cart : cart, badgeCounter, setCart, onModify, cartTotal, clearCart, category : category, setCategoryId}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext