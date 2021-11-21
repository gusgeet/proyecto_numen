import React, { setState, useState } from "react";
import { Link } from "react-router-dom";

import { MenuItems } from "./MenuItems";
import './Navbar.css'

import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import DropdownNosotros from '../DropdownNosotros';
import DropdownServicios from '../DropdownServicios'
import DropwdownRecetas from '../DropdownRecetas'
import DropdownContacto from '../DropdownContacto'




function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown, setContacto] = useState(false);
    const [dropdown2, setServicios] = useState(false);
    const [dropdown3, setPreguntas] = useState(false);
    const [dropdown4, setRecetas] = useState(false);
    
    
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () =>{
        if(window.innerWidth < 960) {
            setContacto(false)
            setServicios(false)
            setPreguntas(false)
            setRecetas(false)
        } else if(window.innerWidth > 959) {
            setContacto(true)
            setServicios(true)
            setPreguntas(true)
            setRecetas(true)
        }
    }

    const onMouseLeave = () =>{
        if(window.innerWidth < 960) {
            setContacto(false)
            setServicios(false)
            setPreguntas(false)
            setRecetas(false)
        }  else if(window.innerWidth > 959) {
            setContacto(false)
            setServicios(false)
            setPreguntas(false)
            setRecetas(false)
        }
    }
    
            
        return(
            <div className="sticky-nav">
            <nav className="NavbarItems">
                
                <h1 className="navbar-logo"><i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <a className='nav-links' onClick={closeMobileMenu} >
                        Nosotros <i id="arrow" className='fas fa-caret-down'/>
                    </a>
                    {dropdown && <DropdownNosotros/>}
                </li>
                <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <a className='nav-links' onClick={closeMobileMenu} >
                        Servicios <i className='fas fa-caret-down'/>
                    </a>
                    {dropdown && <DropdownServicios/>}
                </li>
                <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <a className='nav-links' onClick={closeMobileMenu} >
                        Recetas <i className='fas fa-caret-down'/>
                    </a>
                    {dropdown && <DropwdownRecetas/>}
                </li>
                <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <a className='nav-links' onClick={closeMobileMenu} >
                        FAQ 
                    </a>
                    
                </li>


                <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <a className='nav-links' onClick={closeMobileMenu} >
                        Contacto <i className='fas fa-caret-down'/>
                    </a>
                    {dropdown && <DropdownContacto/>}
                </li>
       

                    {/* {MenuItems.map((item, index) =>{
                        return(
                            <li key={index} 
                            onMouseEnter={ onMouseEnter }
                            onMouseLeave={ onMouseLeave }
                            
                            >
                                <a className={item.cName} onClick={ closeMobileMenu} href={item.url} >
                                {item.title} 
                                
                                </a>
                                
                            </li>
                        )
                    })} */}
                </ul>


                <input className="form_show"></input>

                <button class="rounded-button" type="button">
                    <FaSearch className="buttonSearch" />
                </button>
                
                <button class="rounded-button" type="button">
                    <FaUserAlt className="buttonSearch" />
                </button>
                <button class="rounded-button" type="button">
                    <FaShoppingCart className="buttonSearch" />
                </button>
            </nav>
            </div>
        )
    }



export default Navbar