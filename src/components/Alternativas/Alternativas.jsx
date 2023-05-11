import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../services/firebase/config';
import { Link } from 'react-router-dom'
import './Alternativas.css';

const Alternativas = () => {
    const [camisetas, setCamisetas] = useState([]);

    useEffect(() => {

        const misCamisetas = query(collection(db, "camisetas"), where("titular", "==", false));

        getDocs(misCamisetas)
            .then((respuesta) => {
                setCamisetas(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
    }, []);

    return (
        <>
            <div className='textoAlt'>
                <h2>
                    Camisetas alternativas
                </h2>
                <p>
                    Denominamos camisetas alternativas o suplentes, a aquellas que se apartan del diseño original y tradicional de camisetas del club.
                </p>
            </div>
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
        </>
    )
}

export default Alternativas