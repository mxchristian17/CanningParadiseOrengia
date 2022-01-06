import React, {useState} from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react/cjs/react.development'
import Item from '../Item/Item'
import LoadingItemList from '../../Components/ItemList/LoadingItemList'
import { getProducts } from '../../Services/Firebase/Firebase'

const ItemList = (props) => {
    
    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts('category', '==', categoryId).then(products => {
            setListProduct(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        return (
            setLoading(true)
        )
    }, [setLoading, categoryId])

    return (
        loading ? <LoadingItemList /> :
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
            {listProduct.map(i => <Item key={i.id} item={i} />)}
        </div>
    )
}

export default ItemList
