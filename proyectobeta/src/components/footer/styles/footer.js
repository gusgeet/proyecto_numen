import styled from "styled-components";

export const Container = styled.div`
    padding: 30px 20px;
    background: radial-gradient(circle, rgba(92, 39, 251, 1) 0%, rgba(12, 71, 
    247, 1) 100%);
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 960px){
        max-width: 550px;
        
        .footerLogo{
            width: 150px;
            object-fit: cover;
            margin: 0 auto;
        }
        
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(150px, 1fr));
    grid-gap: 5px;

    @media (max-width: 960px){
        .navbar-logo{
            display: none;
        }
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        font-size: 8px
    }
`

export const Link = styled.div`
    color: #fff;
    margin-bottom: 20px;
    font-size: 16px;
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