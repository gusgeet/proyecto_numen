import React, { useState } from "react";
import { MenuServicios } from "./Dropdown-menu";
import './Dropdown.css';

function DropdownServicios() {
    const [ click, setClick] = useState(false)
    

    const handleClick  = () => setClick(!click);
    

    return(
        
        <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
        {MenuServicios.map((item, index) => {
            return(
                <li key={index}>
                    <link
                        className={item.cName}
                    ></link>
                    {item.title}
                </li>
            )
        })}
        </ul>
        
    )
}

export default DropdownServicios