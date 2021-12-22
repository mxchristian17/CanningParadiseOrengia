import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react/cjs/react.development'
import ItemDetail from '../Components/ItemDetail/ItemDetail';
import LoadingItemDetail from '../Components/ItemDetail/LoadingItemDetail';
//import getItems from '../Global/getItems'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../Services/Firebase/Firebase'

const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([]);

    const [Loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        // Esto sucede cuando ya se montó el componente
        /*const list = getItems();
        list.then(response => {
            response.map(i => {if(parseInt(i.id) === parseInt(itemId)){setProduct(i);}return i.id})
            setLoading(false)
        })*/
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
            {Loading ? <LoadingItemDetail /> : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer
