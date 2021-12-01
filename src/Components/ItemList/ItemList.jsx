import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import getItems from '../../Global/getItems'
import Item from '../Item/Item'

const ItemList = (props) => {
    const [listProduct, setListProduct] = useState([]); // Creo el estado de listProduct para que quede en memoria

    const setLoading = props.setLoading;

    useEffect(() => {
        // Esto sucede cuando ya se montó el componente
        const list = getItems();
        list.then(response => {
            setListProduct(response)
            setLoading(false)
        })

        console.log('montado');
    }, [setLoading]) // el [] es para que renderice una sola vez y no cada vez que actualiza
        // Esto sucede cuando el componente se va a montar
        console.log('montando...');

    return (
        // 
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
            {listProduct.map(i => <Item key={i.id} item={i} onAdd={props.onAdd} />)}
        </div>
    )
}

export default ItemList
