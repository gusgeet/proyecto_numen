import React, { Component } from "react";
import './Main-1.css';
import Comidita from '../images/comidita.jpg';
import styled from "styled-components";



const Section = styled.section `
    background: url(${Comidita}) center;
    background-size: cover;
    background-repeat: no-repeat; 
    height:80vh;
    display: flex;
    justify-contents: flex-start;
    align-items: flex-start;
    


    @media (max-width: 960px){
        height:80vh;
        width: auto;
    }
    
`;

const Shadow = styled.div`
    background-color: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
`;

const Containner = styled.div` 


    color: #fff;
    h6 {
        font-size: 25px;
        
    }


    h1 {
        font-size: 65px;
        margin-left: 80px;
        padding-top: 90px;
    }

    p {
        font-size: clamp(1rem, 8vw, 2.5rem);
        
    }

    i{
        color: orange;
    }

    button{
        font-size: clamp(0.8rem, 4vw, 1.2rem);
        padding: 0.8rem 2rem;
        color: #000;
        background: #ffb347;
        background: linear-gradient(to right, #ffcc33, #ffb347);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
        margin-left: 80px;
    }

    button:hover{
        color: #fff;
        transition: 250ms ease-in;
    }


    
    @media (max-width: 1000px){
        h1 {
            font-size: 40px;
            margin-left: 50px;
            padding-top: 90px;
        }

        button {
            margin-left: 50px;
        }

        p {
            font-size: 24px;
        }
    
    }

`

class Main1 extends Component{
    render(){
        return(
            <Section>
                <Shadow>
                    <Containner>
                        <h1>Nunca probaste un plato <i>así</i><p>En serio. <i>Nunca</i></p></h1>
                    
                        <button>¡Quiero!</button>
                    </Containner>
                </Shadow>
            </Section>



        )
    }
}

export default Main1