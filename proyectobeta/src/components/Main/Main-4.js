import React, { Component } from "react";
import styled from "styled-components";
import Banner from "../../images/platoservido.jpg";
import './Main-4.css';
import Button from "../Button";



class Main4 extends Component {
    render(){
        return(
           <>
            <div className="container">
                <div className="contenedor">
                    <img className="imagen" src={Banner}></img>
                    <div className="textos">
                        <p className="title-1">Sorprende a alguien de tu hogar</p>
                        <p className="title-2">con este plato que casi habla</p>
                        <br/>
                        <p className="infotext">Hablando de eso: ¿sabias que en los cortes integros, las bacterias se encuentran solamente en la superficie?
                            Por eso, la próxima vez que veas un plato asi, no te sorprendas: no es habitual verlo, pero es mas comun de lo que pensas.</p>
                        
                        <p className="infotext">Te invitamos a que conozcas mas sobre cómo cocinar </p>
                        <Button className="button">Más info</Button>
                    </div>
                </div>

            </div>
           </>
            
                
        )
    }
}

export default Main4