import React, {useState, useContext} from 'react'
import CartItem from '../CartItem/CartItem'
import { useEffect } from 'react/cjs/react.development'
import LoadingItemList from '../ItemList/LoadingItemList'
import CartContext from '../../Context/CartContext'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../Services/Firebase/Firebase'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, onRemove, onModify, cartTotal } = useContext(CartContext);
    const [listProduct, setListProduct] = useState([]); // Creo el estado de listProduct para que quede en memoria
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        // Esto sucede cuando ya se montó el componente
        setLoading(true)
        setListProduct([])
        let Products = [];
        cart.forEach((el, idx, array)=> {
            getDoc(doc(db, 'items', el.item)).then((QuerySnapshot) => {
                const product = {id: QuerySnapshot.id, qty: el.qty, ...QuerySnapshot.data()}
                Products.push(product)
            }).catch((error) => {
                console.log('Error buscando el item', error)
            }).finally(() => {
                if (idx === array.length - 1){setListProduct(Products);setLoading(false);}
            })
        })
        cart.length === 0 && setLoading(false);

    }, [setLoading, cart]) // el [] es para que renderice una sola vez y no cada vez que actualiza
        // Esto sucede cuando el componente se va a montar
        //console.log('montando...');
    return (
        Loading ? <LoadingItemList /> :
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
            {listProduct.length > 0 ?
                listProduct.map(i =><CartItem key={i.id} item={i} qty={i.qty} onRemove={onRemove} onModify={onModify} cart={cart} />)
                :
                <p className="my-4">Nada en la carta por el momento</p>
            }
            </div>
            {listProduct.length > 0 ?
                <p className="h6 text-success">Total: ${cartTotal()}</p>
                :
                <div className="row row-cols-3 justify-content-center my-1">
                    <div className="col px-4">
                        <Link to="/" className="btn btn-outline-secondary w-100">Busquemos lo que necesitas!</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart
