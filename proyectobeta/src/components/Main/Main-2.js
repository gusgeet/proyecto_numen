import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import './Main-2.css';
import { shoppingInitialState, shoppingReducer } from '../../reducer/shoppingReducer'
import { TYPES } from '../../actions/shoppingActions';
import axios from "axios";
import { useAppContext } from '../../AppContext';

import Product from "./Product-card/Product";
import Card from './Card-descrip/Card';
import CartItem from '../shopping/cartItem';

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

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { cart } = state;

    const { viewCarrito } = useAppContext();

    const deleteFromCart = (id, all = false) => { // dar condicion en modal falta
        if(all){
            dispatch({type: TYPES.REMOVE_ALL, payload: id})
        } else {
            dispatch({type: TYPES.REMOVE_PRODUCT, payload: id})
        }
    }

    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})

    }

    const [products, setProducts] = useState([]);
    
    const baseURL = "http://localhost:3000/Productos";

    

    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setProducts(response.data);
          
        });
      }, []);
    
     const addToCart = (id, estadoModal1) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id})
        
     }

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
                            return <Product image={product.image} key={product.id} data={product} addToCart={() =>cambiarEstadoModal1(product, !estadoModal1)} />
                        })}
                        {console.log(cart)} {/* muestra por consola los productos agregados al carrito */}
                    </div>
                    <>
                        <Modal
                            estado={estadoModal1}
                            cambiarEstado={cambiarEstadoModal1}
                            products
                            >
                        <>
                            
                        </>
                        </Modal>
                    </>
                </section>
                
                <section>
                <h3>Carrito</h3>
                    <div className='box'>
                        {cart.map((item, index) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/>)}
                        {/* <button onClick={}>Eliminar carro</button> */}
                    </div>
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
                    <img className="imagen-cocina" src={cocineros} alt="img"/>
                </div>
            </Container2>
            {console.log(viewCarrito)} {/* muestra lo que trae de useAppContext() */}
            <div className={ viewCarrito === true ? 'modal modal-active' : 'modal'}>
                <div className="content-modal">
                    {cart.map(el => <CartItem data={el} deleteFromCart={deleteFromCart} clearCart={clearCart}/>)}
                </div>
            </div>
            </>
        
    )
    
}

export default Main2