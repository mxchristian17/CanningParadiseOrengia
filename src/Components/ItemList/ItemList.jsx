import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import getItems from '../../Global/getItems'
import Item from '../Item/Item'

const ItemList = () => {
    const [listProduct, setListProduct] = useState([]); // Creo el estado de listProduct para que quede en memoria


    useEffect(() => {
        // Esto sucede cuando ya se montó el componente
        const list = getItems();
        list.then(response => {
            setListProduct(response)
        })
        console.log('montado');
        //const loader = document.querySelector(".ItemListLoader");
        //const hideLoader = () => loader.classList.add('d-none');
        //hideLoader();
    }, []) // el [] es para que renderice una sola vez y no cada vez que actualiza
        // Esto sucede cuando el componente se va a montar
        console.log('montando...');

    return (
        //
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
            {listProduct.map(i => <Item key={i.id} name={i.name} stock={i.stock} initial ={i.initial} />)}
        </div>
    )
}

export default ItemList
