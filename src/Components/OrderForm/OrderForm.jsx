import React from 'react'

const OrderForm = (props) => {
    const { contact, setContact } = props
    return (
        <div className="container">
            <form className="mb-3" autoComplete="off">
                <div className="mb-3">
                    <input type="text" placeholder="Nombres y Apellido" className="form-control border-0 border-bottom" onChange={(event) => {setContact({...contact, name: event.target.value})}} id="name" aria-describedby="nameHelp" required />
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="E-mail" className="form-control border-0 border-bottom" onChange={(event) => {setContact({...contact, email: event.target.value})}} id="email" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <input type="number" placeholder="Teléfono" className="form-control border-0 border-bottom" onChange={(event) => {setContact({...contact, phone: event.target.value})}} id="phone" pattern="^\d{4}-\d{3}-\d{4}$" required />
                </div>
            </form>
        </div>
    )
}

export default OrderForm
