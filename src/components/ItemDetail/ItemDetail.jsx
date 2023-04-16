import './ItemDetail.css'
import Hooks from '../Hooks/Hooks'

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ea!</p>
            <img className='imgDetail' src= {img} alt= {nombre} />
            <Hooks/>
        </div>
    )
}

export default ItemDetail