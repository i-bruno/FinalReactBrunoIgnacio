import React from 'react'
import '../SearchBox/SearchBox.css'

const SearchBox = () => {
    return (
        <div className='contenedorSearchBox'>
        <input className='SearchBox'/>
        <button className='btnSearch'>Buscar</button>
        </div>
    
    )
}

export default SearchBox