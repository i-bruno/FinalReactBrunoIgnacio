import React from 'react'
import { useContador, useFetch } from './customHooks'
import "./Hooks.css"

const Hooks = () => {
    const {contador, incrementar, decrementar} = useContador(1, 10);

    const data = useFetch()

    return (
        <div>
            <h2>Unidades</h2>
            <button onClick={decrementar} className='btn'>-</button>
            <strong> {contador} </strong>
            <button onClick={incrementar} className='btn'>+</button>
        </div>
    )
}

export default Hooks