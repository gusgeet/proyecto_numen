import React, { Component } from "react";
import '../Navbar/Header.css'
import { Button } from '../Button'

class Headers extends Component
{
    render(){
        return (
            <div className="headerText">
                <div className="topText">
                    <p>Delivery gratis en órdenes superiores a $50000. Regalo con su compra mayor a $75000</p>
                </div>
            </div>
            
            
        )
    }
}

export default Headers