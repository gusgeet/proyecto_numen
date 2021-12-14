import React, { Fragment, useState } from "react";
import styled from "styled-components";
import './Main-2.css';
import { shoppingInitialState, shoppingReducer } from '../../reducer/shoppingReducer'
import { TYPES } from '../../actions/shoppingActions';
import { useReducer } from 'react';

import Product from './Product-card/Product';
import Card from './Card-descrip/Card';
import Modal from "../../actions/shoppingConfirm";

import food01 from '../../images/products/food01.jpg';
import food02 from '../../images/products/food02.jpg';
import food03 from '../../images/products/food03.jpg';
import food04 from '../../images/products/food04.jpg';
import cocineros from '../../images/cocineros.jpg';

import {FaToiletPaper, FaChartPie, FaBalanceScale, FaAward, FaBell, FaCheckCircle} from 'react-icons/fa';

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

const Container2 = styled.div`
    
.container-resume{
    display: grid;
    grid-template-columns: repeat(2, 2fr);
}
`



export const Main2 = () => {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { product, cart } = state;

    const { cartProv } = state;

    // function aConfirmar (id) {
    //     dispatch({type: TYPES.A_CONFIRMAR, payload: id})
    //     cambiarEstadoModal1(!estadoModal1);
        
    // }
    const addToCart = (id) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id})
        console.log(cart)
    }

   
    const products = [
        {
            id: 1,
            image: food01,
            name: 'salad',
            price: 550.55,
            discount: 600.99
        },
        {
            id: 2,
            image: food02,
            name: 'hamburguesa',
            price: 800.99,
            discount: 890.99
        },
        {
            id: 3,
            image: food03,
            name: 'fruit salad',
            price: 330.99,
            discount: 450.99
        },
        {
            id: 4,
            image: food04,
            name: 'gourmet style',
            price: 1000.99,
            discount: 1100.99
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
        <>
            <Container>
                <section>
                    <p className="title-products">Latest <snap>Offers</snap></p>
                    <div className="product-contain">
                        {products.map((product) => {
                            return <Product image={product.image} data={product} addToCart={() => addToCart(product.id)} />
                        })}
                        <Modal 
                        estado={estadoModal1}
                        cambiarEstado={cambiarEstadoModal1}
                        titulo="Confirmar compra"
                        texto="¿Desea confirmar su compra?"
                        price={state.cartProv.price}
                        
                        // idCompra={ultimacompra}
                    >
                        {/* <Contenido>
                            <Boton onclick={() => cambiarEstadoModal1(!estadoModal1), addToCart={addToCart}}></Boton>
                        </Contenido> */}

                    </Modal>
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
            <Container2 className="container-resume">
            <div >
                <p className="texto-cocina">¿Querés conocer a <i className="cocineros-text">nuestros cocineros?</i></p>
                    <p className="texto-descripcion">Nuestra misión en la cocina, es demostrarte que no importa lo desagradable del plato: vas a amarlo igualmente. Razones:</p>
                    <ul className="lista-caracteristicas">
                        <li><FaCheckCircle className="icon-check"/> La cocina no es solo muestra: tambien es aroma. </li>
                        <br/>
                        <li><FaCheckCircle className="icon-check"/> Nuestros precios, para nada atractivos, van a hacer que te tengas que comer el plato </li>
                        <br/>
                        <li><FaCheckCircle className="icon-check"/> Los mozos, hacen su mejor trabajo y son traidos de los mejores rincones del planeta. No van a decepcionarte </li>
                        <br/>
                        <li><FaCheckCircle className="icon-check"/> La musica de ambiente te hara olvidar lo que pagaste cada plato, aunque lo recuerde en este li </li>
                        <br/>
                        <li><FaCheckCircle className="icon-check"/> Si necesitas mas razones, tendre que insistir con los puntos anteriores </li>
                    </ul>
                    <button>Descubre más</button>
                    </div>
                <div>        
                    <img className="imagen-cocina" src={cocineros}/>
                </div>
            </Container2>
            </>
        
    )
    
}

export default Main2