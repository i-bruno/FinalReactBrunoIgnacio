import React from 'react'
import '../NavBarButton/NavBarButton.css'
const NavBarButton = (props) => {
    return (
        <li className='boton'>
            <a className='link' href="http://#">{props.btnTexto}</a>
        </li>
    )
}

export default NavBarButton