import React, { useState } from "react";
import { MenuContacto } from "./Dropdown-menu";
import './Dropdown.css';

function DropdownContacto() {
    const [ click, setClick] = useState(false)
    

    const handleClick  = () => setClick(!click);
    

    return(
        
        <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
        {MenuContacto.map((item, index) => {
            return(
                <li key={index}>
                    <link
                        className={item.cName} 
                        onClick={() => setClick(false)}
                    ></link>
                    {item.title}
                </li>
            )
        })}
        </ul>
        
    )
}

export default DropdownContacto