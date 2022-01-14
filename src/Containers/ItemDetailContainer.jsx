import React from 'react'
import ItemDetail from '../Components/ItemDetail/ItemDetail';

const ItemDetailContainer = (props) => {
    
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 justify-content-center">
                <div className="col col-md col-lg-9 p-2">
                    <div className="w-100 border bg-light py-3 rounded justify-content-center">
                        <ItemDetail />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
