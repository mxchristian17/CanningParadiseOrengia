import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = (props) => {
    return (
        <div>
            <Link to="/cart" className="btn mx-3">
                <img style={{width: 20}} src="../Images/shopping-cart.png" alt="CartWidgetIcon" />
                <span className="badge bg-danger mx-1">{props.badge}</span>
            </Link>
        </div>
    )
}

export default CartWidget

