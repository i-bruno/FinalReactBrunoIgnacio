import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);

    const {idCat} = useParams();

    useEffect(()=>{

        const funcionProductos = idCat ? getProductosPorCategoria : getProductos;

        funcionProductos(idCat)
            .then(res=> setProductos(res))
            .catch(error => console.error(error))
    }, [idCat])
    
    
    
    
    return (
        <div>
            <h2>Productos</h2>
            <ItemList products={productos}/>
        </div>
    )
}

export default ItemListContainer