import React from "react";
import Footer from "../components/footer"
import Logo from "../images/footerlogo.png"


export function FooterContainer() {
    return(
        <Footer>
           <Footer.Wrapper>
               <Footer.Row>
               <Footer.Column>
                           <img className="footerLogo" src={Logo}></img>
                   </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Nosotros</Footer.Title>
                    <Footer.Link href="#">Historia</Footer.Link>
                    <Footer.Link href="#">Clientes</Footer.Link>
                    <Footer.Link href="#">Testimonios</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Servicios</Footer.Title>
                    <Footer.Link href="#">Delivery</Footer.Link>
                    <Footer.Link href="#">Cociná con Nosotros</Footer.Link>
                    <Footer.Link href="#">Reservas</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Recetas</Footer.Title>
                    <Footer.Link href="#">La cocina</Footer.Link>
                    <Footer.Link href="#">Nuestros chefs</Footer.Link>
                    <Footer.Link href="#">Los ingredientes</Footer.Link>
                    <Footer.Link href="#">Nuestro secreto</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Preguntas Frecuentes</Footer.Title>
                    <Footer.Link href="#">¿Cómo surgimos?</Footer.Link>
                    <Footer.Link href="#">¿Cómo nos proyectamos?</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contacto</Footer.Title>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Twitter</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Contactános</Footer.Link>
                </Footer.Column>
               </Footer.Row>
           </Footer.Wrapper>
        </Footer>
    )
}

