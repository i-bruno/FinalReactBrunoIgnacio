import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    const imgCarrito = "../carrito.png";
    const { carrito } = useContext(CarritoContext);
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    return (
        <Link to='/cart' className='linkCarrito'>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
            {
                totalCantidad
            }
        </Link>
    )
}

export default CartWidget