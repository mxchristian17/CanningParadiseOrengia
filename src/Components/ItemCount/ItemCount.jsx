import React, {useState} from 'react'

const ItemCount = (props) => {
    const [qty, setQty] = useState(parseInt(props.initial));

    const onAdd = () => {
        if(qty < props.stock) setQty(qty+1);
    }
    const onSub = () => {
        if(qty > 0) setQty(qty-1);
    }

    return (
        <div className="row">
            <div className="col-3 text-end"><button className="btn btn-primary btn-sm" onClick={() => onSub()}>-</button></div>
            <div className="col bg-white">{qty}</div>
            <div className="col-3 text-start"><button className="btn btn-primary btn-sm" onClick={() => onAdd()}>+</button></div>
        </div>
    )
}

export default ItemCount
