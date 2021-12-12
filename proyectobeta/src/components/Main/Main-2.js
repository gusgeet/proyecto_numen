import React from "react";
import styled from "styled-components";
import './Main-2.css';

import Product from './Product-card/Product';
import Card from './Card-descrip/Card';

import food01 from '../../images/products/food01.jpg';
import food02 from '../../images/products/food02.jpg';
import food03 from '../../images/products/food03.jpg';
import food04 from '../../images/products/food04.jpg';

import {FaToiletPaper, FaChartPie, FaBalanceScale, FaAward, FaBell} from 'react-icons/fa';

const Container = styled.div`
    margin: 0 auto;

    @media screen and (min-width: 220px){
        .card-contain {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media screen and (min-width: 400px){
        .card-contain {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 576px) {
        width: 540px;
        .card-contain {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            
        }
    }

    @media screen and (min-width: 630px) {
        width: 85%;

        .card-contain {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            
        }
    }

    @media screen and (min-width: 900px) {
        width: 90%;

        .card-contain {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            
        }
    }



    @media screen and (min-width: 992px) {
        width: 93%;
        .card-contain {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            
        }
    }
`

const Main2 = () => {

    const data = [
        {
            image: food01,
            name: 'burguer',
            price: 550.55,
            discount: 600.99
        },
        {
            image: food02,
            name: 'soup',
            price: 800.99,
            discount: 890.99
        },
        {
            image: food03,
            name: 'pizza',
            price: 1000.99,
            discount: 1100.99
        },
        {
            image: food04,
            name: 'pasta italiana',
            price: 330.99,
            discount: 450.99
        }
    ]

    const cardData = [
        {
            icon: <FaBalanceScale/>,
            title: 'Lorem ipsum dolor sit amet consectetur',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium minima error adipisci, ducimus necessitatibus.'
        },
        {
            icon: <FaBell/>,
            title: 'Lorem ipsum dolor sit amet consectetur',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium minima error adipisci, ducimus necessitatibus.'
        },
        {
            icon: <FaChartPie/>,
            title: 'Lorem ipsum dolor sit amet consectetur',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium minima error adipisci, ducimus necessitatibus.'
        },
        {
            icon: <FaToiletPaper/>,
            title: 'Lorem ipsum dolor sit amet consectetur',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium minima error adipisci, ducimus necessitatibus.'
        },
        {
            icon: <FaAward/>,
            title: 'Lorem ipsum dolor sit amet consectetur',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium minima error adipisci, ducimus necessitatibus.'
        }
    ]

    return(
        <Container>
            <section>
                <p className="title-products">Latest <snap>Offers</snap></p>
                <div className="product-contain">
                    {data.map(product => {
                        return <Product image={product.image} name={product.name} price={product.price} discount={product.discount} key={product.name}/>
                    })}
                </div>
            </section>
            <section>
            <p className="title-products">Why Choose <snap>the Premium Bakery Quality</snap></p>
            <div className="card-contain">
                {cardData.map(el => {
                   return <Card icon={el.icon} title={el.title} text={el.text}/> 
                })}
            </div>
            </section>
        </Container>
    )
    
}

export default Main2