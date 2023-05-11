import { useState, useEffect } from 'react'
import {collection, getDocs} from "firebase/firestore";
import { db } from '../../services/firebase/config';
import { Link } from 'react-router-dom'
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [camisetas, setCamisetas] = useState([]);

    useEffect(() => {

        const misCamisetas = collection(db, "camisetas");
        getDocs(misCamisetas)
            .then((respuesta) => {
                setCamisetas(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
    }, []);

    return (
        <div className='listContainer'>
        {
            camisetas.map((camisetas) => (
                <div className='contenedorItem'>
                    <h2>Nombre: {camisetas.nombre} </h2>
                    <h3>Marca: {camisetas.marca} </h3>
                    <h3>Precio: $ {camisetas.precio} </h3>
                    <h3> ID: {camisetas.id} </h3>
                    <img className='imgCamisetas' src={camisetas.img} alt={camisetas.nombre} />
                    <Link to={`/camisetas/${camisetas.id}`}  className='verDetalle'> Ver Detalles </Link>
                </div>
            ))

        }
    </div>
    )
}

export default ItemListContainer