import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react/cjs/react.development'
import ItemDetail from '../Components/ItemDetail/ItemDetail';
import LoadingItemDetail from '../Components/ItemDetail/LoadingItemDetail';
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../Services/Firebase/Firebase'

const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([]);

    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'items', itemId)).then((QuerySnapshot) => {
            const product = {id: QuerySnapshot.id, ...QuerySnapshot.data()}
            setProduct(product)
        }).catch((error) => {
            console.log('Error buscando el item', error)
        }).finally(() => {
            setLoading(false);
        })

        return (
            setLoading(true)
        )
    }, [itemId, setLoading])

    return (
        <div className="container">
            {loading ? <LoadingItemDetail /> : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer
