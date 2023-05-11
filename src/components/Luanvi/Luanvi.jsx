import { useState, useEffect } from 'react'
import {collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../services/firebase/config';
import { Link } from 'react-router-dom'

const Luanvi = () => {
    const [camisetas, setCamisetas] = useState([]);

    useEffect(() => {

        const misCamisetas = query(collection(db, "camisetas"), where("marca", "==", "Luanvi"));

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
                    <h3> ID: {camisetas.id} </h3>
                    <img className='imgProducto' src={camisetas.img} alt={camisetas.nombre} />
                    <Link to={`/camisetas/${camisetas.id}`} className='btnProducto'> Ver Detalles </Link>
                </div>
            ))

        }
    </div>
    )
}

export default Luanvi