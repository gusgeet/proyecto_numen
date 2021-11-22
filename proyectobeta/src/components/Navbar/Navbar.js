import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import {MenuGeneral} from './Dropdown-menu';
import './Navbar.css'
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";

class Navbar extends Component{
    state = { clicked : false }

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <div className="sticky-nav">
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item) =>{
                        return(
                            <li key={item.id}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>

                                <ul>
                                    {MenuGeneral.map(el => {
                                        if (item.id === el.id) {
                                            return el.title.map(name => <li><a href="">{name}</a></li>)
                                        }
                                    })}
                                </ul>
                            </li>
                        )
                    })}
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
    
}

export default Navbar