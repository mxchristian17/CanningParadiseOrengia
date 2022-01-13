import React, { useState, useContext } from 'react'
import CartContext from '../../Context/CartContext'

const OrderForm = (props) => {
    const { contact, setContact, confirmOrder } = props
    const { clearCart } = useContext(CartContext);
    const [errors, setErrors] = useState({name : null, email : null, phone : null})
    
    const validateName = (value, err) => {
        err = ({...err, name : undefined})
        if(value.length > 100) err = ({...err, name : "El nombre es demasiado largo"})
        if(value.length < 7) err = ({...err, name : "Por favor ingrese un Nombre y Apellido válidos"})
        if (typeof value !== "undefined") {
            if (!value.match(/^[a-zA-Z ]+$/)) {
                err = ({...err, name : "El nombre solo debe contener letras y espacios"})
            }
        }
        if(value.length === 0) err = ({...err, name : "Por favor ingrese un nombre"})
        return err
    }
    
    const validateEmail = (value, err) => {
        err = ({...err, email : undefined})
        if(value.length > 100) err = ({...err, email : "El email es demasiado largo"})
        if(value.length < 7) err = ({...err, email : "Por favor ingrese una dirección de email válida"})
        if (typeof value !== "undefined") {
            if (!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                err = ({...err, email : "El email debe tener un formato válido"})
            }
        }
        if(value.length === 0) err = ({...err, email : "Por favor ingrese una dirección de email"})
        return err
    }

    const validatePhone = (value, err) => {
        err = ({...err, phone : undefined})
        if(value.length > 100) err = ({...err, phone : "El teléfono es demasiado largo"})
        if(value.length < 10) err = ({...err, phone : "El teléfono es inválido"})
        if (typeof value !== "undefined") {
            if (!value.match(/^[0-9]*$/)) {
                err = ({...err, phone : "El teléfono debe tener un formato válido (solo números)"})
            }
        }
        if(value.length === 0) err = ({...err, phone : "Por favor ingrese un teléfono válido"})
        return err
    }

    const handleChange = (e) => {
        const field = e.target.id
        const value = e.target.value
        let err = {...errors}

        if(field === "name") err = validateName(value, err)
        if(field === "email") err = validateEmail(value, err)
        if(field === "phone") err = validatePhone(value, err)

        setErrors(err)
        
        setContact({...contact, [field] : value })
    }
    
    const submit = (e) => {
        e.preventDefault()
        let err = {...errors}

        err = validateName(e.target.elements.name.value, err)
        err = validateEmail(e.target.elements.email.value, err)
        err = validatePhone(e.target.elements.phone.value, err)
        
        if(!(typeof(err.name) !== "undefined" ||
        typeof(err.email) !== "undefined" ||
        typeof(err.phone) !== "undefined")) confirmOrder()
        setErrors(err)
    }

    return (
        <div className="container">
            <form className="mb-3" autoComplete="off" onSubmit={submit}>
                <div className="mb-3">
                    <input type="text" placeholder="Nombres y Apellido" className={"form-control border-0 border-bottom" + (errors.name ? " is-invalid" : "")} onChange={handleChange} id="name" />
                    { errors.name && <div className="invalid-feedback">{ errors.name }</div> }
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="E-mail" className={"form-control border-0 border-bottom" + (errors.email ? " is-invalid" : "")} onChange={handleChange} id="email" />
                    { errors.email && <div className="invalid-feedback">{ errors.email }</div> }
                </div>
                <div className="mb-3">
                    <input type="number" placeholder="Teléfono" className={"form-control border-0 border-bottom" + (errors.phone ? " is-invalid" : "")} onChange={handleChange} id="phone" />
                    { errors.phone && <div className="invalid-feedback">{ errors.phone }</div> }
                </div>
                <div className="btn-group pb-4" role="group" aria-label="Order buttons">
                    <button type="submit" className="btn btn-outline-primary">Confirmar compra</button>
                    <div className="btn btn-outline-danger" onClick={() => { clearCart() }}>Cancelar compra</div>
                </div>
            </form>
        </div>
    )
}

export default OrderForm
