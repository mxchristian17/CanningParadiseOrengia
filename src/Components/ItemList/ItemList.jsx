import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react/cjs/react.development'
import Item from '../Item/Item'
import LoadingItemList from '../../Components/ItemList/LoadingItemList'
import { getProducts } from '../../Services/Firebase/Firebase'
import { Link } from 'react-router-dom';

const ItemList = (props) => {
    
    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts('categoryId', '==', categoryId).then(products => {
            products = products.filter(p => (p.stock > 0));
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
            {
            listProduct.length > 0 ? listProduct.map(i => i.stock > 0 && <Item key={i.id} item={i} />) :
            categoryId ? <div className="pb-4">
                            <div className="pb-3">Ésta categoría no tiene productos...</div>
                            <div className="col px-4">
                                <Link to="/" className="btn btn-outline-secondary w-100">Busquemos en otro lado!</Link>
                            </div>
                        </div> :
            <div className="pb-4">Lo sentimos<br />No hay productos para mostrar...</div>
            }
        </div>
    )
}

export default ItemList
