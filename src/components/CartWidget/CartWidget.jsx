import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../carrito.png";
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="carrito" />
            <strong>9</strong>
        </div>
    )
}

export default CartWidget