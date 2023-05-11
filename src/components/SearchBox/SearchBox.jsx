import { useState, useEffect } from 'react'
import '../SearchBox/SearchBox.css'

const SearchBox = () => {

    const [camisetas, setCamisetas] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    
    const key_db = "AIzaSyC8SaS666PdpTuz0V11TKEcpd5SjCh6axY";

    useEffect(() => {
        fetch('tiendacasla-dc3cd.firebaseapp.com')
            .then(response => response.json())
            .then(data => {
                setCamisetas(data.Search);
            })
            .catch(error =>{
                console.log(error); 
            })    

    }, [busqueda])






    return (
        <div className='contenedorSearchBox'>
        <input className='SearchBox'/>
        <button className='btnSearch'>Buscar</button>
        </div>
    
    )
}

export default SearchBox