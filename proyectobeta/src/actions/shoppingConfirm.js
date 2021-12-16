import React, { useReducer } from 'react';
import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';
import Button from '../components/Button';
import { TYPES } from './shoppingActions';
import { shoppingInitialState, shoppingReducer } from '../reducer/shoppingReducer';

const Modal = ({
    children, 
    estado, 
    cambiarEstado, 
    }) => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  /*   const { product, cartProv } = state; */

    const addToCart = () => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id})
    }

    const {id, name, price} = state


    return (
        <>
            {estado && 

            <Overlay>
                <Contenedor>
                    <BotonCerrar onClick={() => cambiarEstado(false)}>{FaWindowClose}</BotonCerrar>
                    {children}
                    <Encabezado>
                        <h3>Confirmar</h3>
                        <h4>{state.cartProv.name}</h4>
                        <h4>$ {state.cartProv.price}</h4>
                    </Encabezado>
                    <Button onClick={() => addToCart()}>Confirmar</Button>
                </Contenedor>
            </Overlay>
            }
        </>

    )
}

export default Modal;

const Overlay = styled.div `
    width: 100vw;
    height: 100vg;
    position: absolute;
    
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Contenedor = styled.div`
    width: 500px;
    min-height: 100%;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
     
`

const Encabezado = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        font-weight: 500;
        font-size: 12px;
        color: #1766DC;
    }
`

const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #000;

    FaWindowClose{
        color: #FFF;
    }

    &:hover {
        background: #f2f2f2;
    }
`

