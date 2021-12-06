import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import ItemDetail from '../Components/ItemDetail/ItemDetail';
import getItems from '../Global/getItems'

const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([]);

    const setLoadingItemDetails = props.setLoadingItemDetails;
    const LoadingItemDetails = props.LoadingItemDetails;
    const itemId = props.itemId;

    useEffect(() => {
        // Esto sucede cuando ya se montó el componente
        const list = getItems();
        list.then(response => {
            response.map(i => {if(parseInt(i.id) === parseInt(itemId)){setProduct(i);}return i.id})
            setLoadingItemDetails(false)
        })
    }, [itemId, setLoadingItemDetails])

    return (
        <div className="container">
            {!LoadingItemDetails && <ItemDetail product={product} onAdd={props.onAdd} />}
            {props.children}
        </div>
    )
}

export default ItemDetailContainer
