import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, marca, precio, img, stock }) => {


    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }

    return (
        <div>
            <div className='contenedorItem'>
                <h2>Nombre: {nombre} </h2>
                <h3>Marca: {marca} </h3>
                <h3>Precio: $ {precio} </h3>
                <h3>ID: {id} </h3>
                <h3>Stock: {stock}</h3>
                <div className='textoDetalle'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis tempora unde! Quam commodi esse dicta odit nobis, enim, accusamus corrupti veritatis, excepturi aliquam laudantium? Veritatis ex sapiente deserunt.
                    </p>
                </div>
                <img className='imgCamiseta' src={img} alt={nombre} />
                {
                    agregarCantidad > 0 ? (<Link to="/cart" className="btnProducto"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }

                <Link to="/" className='btnProducto'>Seguir comprando</Link>
            </div>
        </div>
    )

}


export default ItemDetail