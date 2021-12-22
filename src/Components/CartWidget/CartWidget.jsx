import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'

const CartWidget = () => {
    const { badgeCounter } = useContext(CartContext);
    return (
        <div>
            <Link to="/cart" className="btn mx-3">
                <img style={{width: 20}} src="../Images/shopping-cart.png" alt="CartWidgetIcon" />
                <span className="badge bg-danger mx-1">{badgeCounter()}</span>
            </Link>
        </div>
    )
}

export default CartWidget

