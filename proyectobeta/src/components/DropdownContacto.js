import React from "react";
import { MenuContacto } from "./Dropdown-menu";
import './Dropdown.css';

function DropdownContacto() {

    return(
        
        <ul>
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