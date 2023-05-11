import './ItemCount.css';
import { useState } from "react"

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
    return (
        <>
            <div className='contador'>
                <button onClick={decrementar} className='btn'> - </button>
                <p> {contador} </p>
                <button onClick={incrementar} className='btn'> + </button>
            
                <button onClick={() => funcionAgregar(contador)}  className='btnAgregar'>Agregar al Carrito</button>
            </div>
        </>
    )
}

export default ItemCount