import React from 'react'

const ItemListContainer = (props) => {

    return (
        <div className="container">
            <h2 className="p-4">Bienvenido a {props.greeting}</h2>
            <div>{props.children}</div>
        </div>
    )
}

export default ItemListContainer
