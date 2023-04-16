import React from 'react'
import './ProductInfo.css'

const ProductInfo = (props) => {
    return (
        <div className="product-info">
            <h1>{props.titulo}</h1>
            <p>Presentamos la nueva Camiseta Infantil Nike Titular San Lorenzo 2021/22. Para que lleves tu amor por el Ciclón vayas donde vayas y puedas lucirte en la cancha con los colores más lindos.</p>
            <p>17.499,00</p>
        </div>
    )
}

export default ProductInfo