import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'

const CartWidget = () => {
    const { cart, badgeCounter } = useContext(CartContext);
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <div className="dropdown dropstart" onMouseEnter={()=>setShowDropDown(true)} onMouseLeave={()=>setShowDropDown(false)}>
            <Link to="/cart" className="btn mx-3" onClick={()=>setShowDropDown(false)}>
                <img style={{width: 20}} src="../Images/shopping-cart.png" alt="CartWidgetIcon" />
                <span className="badge bg-danger mx-1">{badgeCounter()}</span>
            </Link>
            {showDropDown && 
            <ul className="position-absolute end-0 list-group w-auto">
                {cart.map((el) => <li className="list-group-item w-auto" key={el.item}>{el.name} (x{el.qty})</li>)}
            </ul>
            }
        </div>
    )
}

export default CartWidget

