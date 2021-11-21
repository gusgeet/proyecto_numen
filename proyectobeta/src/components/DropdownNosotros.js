import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { MenuNosotros } from "./Dropdown-menu";
import './Dropdown.css';

function DropdownNosotros() {
    const [ click, setClick] = useState(false)
    

    const handleClick  = () => setClick(!click);
    

    return(
        
        <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
        {MenuNosotros.map((item, index) => {
            return(
                <Router>
                <li key={index}>
                    <Link
                        to='./'
                        className={item.cName}
                        onClick={() => setClick(false)}
                    ></Link>
                    {item.title}
                </li>
                </Router>
            )
        })}
        </ul>
        
    )
}

export default DropdownNosotros