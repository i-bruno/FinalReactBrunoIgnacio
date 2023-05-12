import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../../services/firebase/config"

const ItemDetail = ({ id, nombre, marca, precio, img, stock }) => {


    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }

    const [camisetas, setCamisetas] = useState([]);

    useEffect(() => {
        const misCamisetas = collection(db, "camisetas");
        getDocs(misCamisetas)
            .then((respuesta) => {
                setCamisetas(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
    }, []);


    return (
        <div>
            {
                camisetas.map((camisetas) => (
                    <div className='contenedorItem'>
                        <h2>Nombre: {camisetas.nombre} </h2>
                        <h3>Marca: {camisetas.marca} </h3>
                        <h3>Precio: $ {camisetas.precio} </h3>
                        <h3>ID: {camisetas.id} </h3>
                        <h3>Stock: {camisetas.stock}</h3>
                        <div className='textoDetalle'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis tempora unde! Quam commodi esse dicta odit nobis, enim, accusamus corrupti veritatis, excepturi aliquam laudantium? Veritatis ex sapiente deserunt.
                            </p>
                        </div>
                        <img className='imgCamiseta' src={camisetas.img} alt={camisetas.nombre} />

                        {
                            agregarCantidad > 0 ? (<Link to="/cart" className="btnProducto"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                        }

                    </div>
                ))

            }


        </div>

    )

}


export default ItemDetail