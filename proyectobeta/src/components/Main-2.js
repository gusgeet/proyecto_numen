import React, { Component } from "react";
import styled from "styled-components";
import './Main-1.css';
import { Container } from "./footer/styles/footer";

const Section = styled.section `
    background: #ffff;
    height:40vh;
    text-align: center;
   
    


    @media (max-width: 960px){
        height:40vh;
        width: auto;
    }
    
`

const Containner = styled.div` 
    
`

class Main2 extends Component{
    render(){
        return(
            <Section>
                <Containner>
                    <p>Ultimas ofertas</p>

                </Containner>
            </Section>

        )
    }
}

export default Main2