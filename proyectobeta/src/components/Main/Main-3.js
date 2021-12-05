import React, { Component } from "react";
import Banner from '../../images/midbanner.jpg';
import Logo from '../../images/logo.png';
import styled from "styled-components";
import './Main-3.css'

const Section = styled.section`
    background: url(${Banner}) center;
    height: 50vh;
    display: flexbox;
    justify-contents: center;
    align-items: center;

    @media screen and(max-width: 768px){
        height: 40vh;
    }
    
`

const Containner = styled.div` 

    display: flex;
    flex-flow: column wrap;
    align-items: center;
    color: #fff;

    

`

class Main3 extends Component{
    render(){
        return(
            <Section>
                <Containner>
                    <p className="texto-Main3">Hacénos propaganda y prometemos recompensarte.</p>
                    <div className="textMain3">
                        <img className="logoMain3" src={Logo} alt='logo'></img>
                    </div>
                    <button className="learnBtnMain3">Aprende mas sobre nosotros</button>
                </Containner>
            </Section>
        )
    }
}


export default Main3
