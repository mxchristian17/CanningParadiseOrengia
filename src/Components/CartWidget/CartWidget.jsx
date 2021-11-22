import React from 'react'

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn mx-3">
                <img style={{width: 20}} src="Images/shopping-cart.png" alt="CartWidgetIcon" />
                <span className="badge bg-danger mx-1">2</span>
            </button>
        </div>
    )
}

export default CartWidget
