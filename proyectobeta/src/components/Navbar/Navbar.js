import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { useAppContext } from "../../AppContext";
/* import {MenuGeneral} from './Dropdown-menu'; */
import './Navbar.css'
import { FaSearch, FaUserAlt, FaShoppingCart, FaSortDown } from "react-icons/fa";

const Navbar = () => {

    const { dispatch } = useAppContext();

    const [menuIcon, setMenuIcon] = useState(false);

    const [searchBar, setMenuBar] = useState(false);
    //console.log(state.viewCarrito); //me trae todo el contenido del reducer shoppingInitialState, agregando la dot notation puedo acceder a la prop del objeto

        return(
            <div className="sticky-nav">
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={() => setMenuIcon(!menuIcon)}>
                    <i className={menuIcon === true ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ menuIcon === true ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item) =>{
                        return(
                            <li key={item.id}>
                                <a className={item.cName} href={item.url}>
                                {item.title} 
                                </a>
                                {item.id !== 4 ? <FaSortDown/> : null}

                                {/* <ul>
                                    {MenuGeneral.map(el => {
                                        if (item.id === el.id) {
                                            el.title.map(name => <li><a href="/">{name}</a></li>)
                                        }
                                    })}
                                </ul> */}
                            </li>
                        )
                    })}
                </ul>
                <input className={searchBar === true ? 'form_notshow' : 'form_show'}></input>

                <button class="rounded-button" type="button">
                    <FaSearch className="buttonSearch" onClick={() => setMenuBar(!searchBar) } />
                </button>
                
                <button class="rounded-button" type="button">
                    <FaUserAlt className="buttonSearch" />
                </button>
                <button class="rounded-button" type="button">
                    <FaShoppingCart className="buttonSearch" onClick={ () => { dispatch({type: 'MOSTRAR_CARRITO'})}}/>
                </button>
            </nav>
            </div>
        )
    
}

export default Navbar