import React, {useState} from 'react'

const ItemCount = (props) => {
    const [qty, setQty] = useState(0);

    const onAdd = () => {
        if(qty < props.stock) setQty(qty+1);
    }
    const onSub = () => {
        if(qty > 0) setQty(qty-1);
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="col col-md-6 col-lg-3 border bg-light mb-3 py-3">
                <h5>Item de venta</h5>
                <div className="row">
                    <div className="col-3 text-end"><button className="btn btn-primary btn-sm" onClick={() => onSub()}>-</button></div>
                    <div className="col bg-white">{qty}</div>
                    <div className="col-3 text-start"><button className="btn btn-primary btn-sm" onClick={() => onAdd()}>+</button></div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
