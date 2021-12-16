import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react/cjs/react.development'
import ItemDetail from '../Components/ItemDetail/ItemDetail';
import LoadingItemDetail from '../Components/ItemDetail/LoadingItemDetail';
import getItems from '../Global/getItems'

const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([]);

    const [Loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        // Esto sucede cuando ya se montó el componente
        const list = getItems();
        list.then(response => {
            response.map(i => {if(parseInt(i.id) === parseInt(itemId)){setProduct(i);}return i.id})
            setLoading(false)
        })

        return (
            setLoading(true)
        )
    }, [itemId, setLoading])

    return (
        <div className="container">
            {Loading ? <LoadingItemDetail /> : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer
