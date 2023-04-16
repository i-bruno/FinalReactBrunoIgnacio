import React from 'react'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <img className='logoCasla' src="../logo.png" alt="logo casla" />
            </Link>
            <nav className='NavBar'>
                <ul className='menu'>
                    <li>
                        <NavLink to={`/categoria/1`}>Camisetas</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/2`}>Shorts</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/3`}>Camperas</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/4`}>Buzos</NavLink>
                    </li>
                </ul>
            </nav>
        <CartWidget/>
        </header>

    )
}

export default NavBar