import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = (props) => {
    return (
        <div className="col col-md-6 col-lg-3 p-2">
            <div className="w-100 border bg-light py-3 rounded justify-content-center">
                <div className="row">
                    <h5>{props.name}</h5>
                </div>
                <ItemCount stock={props.stock} initial={props.initial} />
            </div>
        </div>
    )
}

export default Item
