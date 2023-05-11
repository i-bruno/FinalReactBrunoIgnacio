import CartWidget from "../CartWidget/CartWidget"
import SearchBox from "../SearchBox/SearchBox";
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const imgCasla = "../logo.png";
    return (
        <header>
            <Link to={"/"}>
                <img className="imgCasla" src={imgCasla} alt="Logo CASLA" />
            </Link>
            <ul className="nav">
                <li>
                    <NavLink to={`/titulares`}>Titulares</NavLink>
                </li>

                <li>
                    <NavLink to={`/alternativas`} >Alternativas</NavLink>
                </li>
                <li>
                    <p>
                        Marcas
                    </p>
                    <ul className="collapse">
                        <li>
                            <NavLink to={`/jardin`} >El jardín de Oscar</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/nanque`} >Nanque</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/unisport`} >Unisport</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/topper`} >Topper</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/penalty`} >Penalty</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/umbro`} >Umbro</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/newbalance`} >New Balance</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/luanvi`} >Luanvi</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/mebal`} >Mebal</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/siqnia`} >Siqnia</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/lotto`} >Lotto</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/nike`} >Nike</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
            <SearchBox />
            <CartWidget />
        </header>
    )
}

export default NavBar