import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, camisetas) => total + camisetas.cantidad, 0);

    const total = carrito.reduce((total, camisetas) => total + (camisetas.item.precio * camisetas.cantidad), 0);

    if (totalCantidad === 0) {
        return (
            <div className="sinProducto">
                <h2>No hay productos en el carrito </h2>
                <Link to='/' className="btnProducto"> Productos </Link>

            </div>
        )
    }

    return (
        <div className="compra">
            <h2>Resúmen de compra</h2>
            <div className="subCompra">
                {
                    carrito.map(camisetas => <CartItem key={camisetas.id} {...camisetas} />)
                }
            </div>
            <h3>Total: ${total} </h3>
            <button onClick={() => vaciarCarrito()} className="btnProducto"> Vaciar Carrito </button>
            <Link to='/checkout' className="btnProducto"> Finalizar Compra </Link>
        </div>
    )

}

export default Cart