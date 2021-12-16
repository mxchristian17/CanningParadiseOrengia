import React, {useState} from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react/cjs/react.development'
import getItems from '../../Global/getItems'
import Item from '../Item/Item'
import LoadingItemList from '../../Components/ItemList/LoadingItemList'

const ItemList = (props) => {
    
    const [listProduct, setListProduct] = useState([]); // Creo el estado de listProduct para que quede en memoria
    const [Loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        // Esto sucede cuando ya se montó el componente
        const list = getItems();
        let Products = [];
        list.then(response => {
            response.map(i => {
                if((i.categoryId === categoryId) || (typeof(categoryId) === 'undefined')){
                    Products = [...Products, i];
                }
                return i.id
            })
            setListProduct(Products)
            setLoading(false)
        })
        
        //console.log('montado');

        return (
            setLoading(true)
        )
    }, [setLoading, categoryId]) // el [] es para que renderice una sola vez y no cada vez que actualiza
        // Esto sucede cuando el componente se va a montar
        //console.log('montando...');

    return (
        Loading ? <LoadingItemList /> :
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
            {listProduct.map(i => <Item key={i.id} item={i} />)}
        </div>
    )
}

export default ItemList
