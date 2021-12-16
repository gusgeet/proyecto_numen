import React from "react";
import './Main-X.css';
import styled from "styled-components";
import Banner from '../../images/midbanner.jpg'
import facebook from '../../images/social/facebook.png'
import gmail from '../../images/social/gmail.png'
import instagram from '../../images/social/instagram.png'
import telegram from '../../images/social/telegram.png'
import twitter from '../../images/social/twitter.png'
import whatsapp from '../../images/social/whatsapp.png'



const MainX = () => {
    const Container = styled.div`
    background: url(${Banner}) center;
    height: 50vh;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;

    
    p {
        margin-bottom: 15px;
        color: white;
        text-align: center;
        font-size: 35px;
    }

    @media screen and (max-width: 562px) {
        p{
            font-size: 12px;
        }
    }


`
const logo = [
    {
        image: facebook,
        link: '#'
    },
    {
        image: instagram,
        link: '#'
    },
    {
        image: twitter,
        link: '#'
    },
    {
        image: whatsapp,
        link: '#'
    },
    {
        image: gmail,
        link: '#'
    },
    {
        image: telegram,
        link: '#'
    }
]

const Logos = (props) => {
    return (
        <div className='logos'>
            <img className="logo-image" alt="logo del local" src={props.image} />
           
        </div>
    )
}
    

    return(
        <section>
            <Container>
            <div>
                <p>Contáles a tus conocidos lo rico que som... Contáles de nosotros</p>
                </div>
            <div className="logo-contain">
                    {logo.map((el,index) => {
                    return <Logos image={el.image} src={el.link} key={index}/> 
                    })}
            </div>
            </Container>

        </section>
    )
}

export default MainX