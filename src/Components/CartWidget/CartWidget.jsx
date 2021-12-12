import React from 'react'

const CartWidget = (props) => {
    return (
        <div>
            <button type="button" className="btn mx-3">
                <img style={{width: 20}} src="../Images/shopping-cart.png" alt="CartWidgetIcon" />
                <span className="badge bg-danger mx-1">{props.badge}</span>
            </button>
        </div>
    )
}

export default CartWidget
