import React, { useState } from "react";
import { MenuRecetas } from "./Dropdown-menu";
import './Dropdown.css';

function DropwdownRecetas() {
    const [ click, setClick] = useState(false)
    

    const handleClick  = () => setClick(!click);
    

    return(
        
        <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
        {MenuRecetas.map((item, index) => {
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

export default DropwdownRecetas