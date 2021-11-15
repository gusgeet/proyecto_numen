import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;
    background: radial-gradient(circle, rgba(92, 39, 251, 1) 0%, rgba(12, 71, 
    247, 1) 100%);
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 1000px){
        max-width: 650px;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left; 60px
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px){
        .navbar-logo{
            display: none;
        }


        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        font-size: 8px
    }
`

export const Link = styled.div`
    color: #fff;
    margin-bottom: 20px;
    font-size: 12px;
    text-decoration: none;

    &:hover{
        color: #ff9c00;
        transition: 600ms ease-in;
        cursor: pointer;
    }
`

export const Title = styled.div`
    font-size: 16px;
    color: #ffF;
    margin-bottom: 40px;
    font-weight: bold;
`