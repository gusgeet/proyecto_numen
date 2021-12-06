import React, { useRef } from 'react';

// icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// styles
import './carousel.css';

// components
import Slide from './Slide';

// images
import carousel01 from '../../images/carousel/carousel01.jpg';
import carousel02 from '../../images/carousel/carousel02.jpg';
import carousel03 from '../../images/carousel/carousel03.jpg';
import carousel04 from '../../images/carousel/carousel04.jpg';
import carousel05 from '../../images/carousel/carousel05.jpg';
import carousel06 from '../../images/carousel/carousel06.jpg';
import carousel07 from '../../images/carousel/carousel01.jpg';
import carousel08 from '../../images/carousel/carousel02.jpg';

const images = [
    {
        id: 1,
        name: carousel01
    },
    {
        id: 2,
        name: carousel02
    },
    {
        id: 3,
        name: carousel03
    },
    {
        id: 4,
        name: carousel04
    },
    {
        id: 5,
        name: carousel05
    },
    {
        id: 6,
        name: carousel06
    },
    {
        id: 7,
        name: carousel07
    },
    {
        id: 8,
        name: carousel08
    },
]

const Carousel = () => {

    const slideshow = useRef(null); // Hook useRef siempre va dentro del componente, nos permite acceder a las referencias que determinemos y establecerlas
    const slideAuto = useRef(null);

    const next = () => {
        if (slideshow.current.children.length > 0) { // si el slideshow accediendo al current que nos devuelve la etiqueta y su contenido, tiene etiquetas hijas (es mayor a cero)
            
            const firstEl = slideshow.current.children[0]; // obtenemos primer elemento hijo
            
            slideshow.current.style.transition = `.4s ease-in-out all`; // establecemos transición para el slideshow

            const sizeSlide = slideshow.current.children[0].offsetWidth; // obtenemos el ancho del slide actual

            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`; // movemos el slideshow

            const transition = () => { // reiniciamos la posicion del slideshow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`; // que vuelva a su posicion original (regresa a 0 al contrario de la linea 18)

                slideshow.current.appendChild(firstEl); // tomamos el primer elemento y lo enviamos al final

                slideshow.current.removeEventListener('transitionend', transition);
            };

            slideshow.current.addEventListener('transitionend', transition); // eventListener para cuando termina la animacion que pasamos como parametro
            
        }
    }
    
    const prev = () => {
        if (slideshow.current.children.length > 0) { // si el slideshow accediendo al current que nos devuelve la etiqueta y su contenido, tiene etiquetas hijas (es mayor a cero)

            const index = slideshow.current.children.length - 1; // obtenemos la cantidad de elementos -1
            
            const lastEl = slideshow.current.children[index]; // obtenemos el ultimo elemento hijo

            slideshow.current.insertBefore(lastEl, slideshow.current.firstChild); // insertamos el ultimo elemento antes de
            
            slideshow.current.style.transition = 'none';
            const sizeSlide = slideshow.current.children[0].offsetWidth; // obtenemos el ancho del slide actual
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = '.4s ease-in-out all';
                slideshow.current.style.transform = `translateX(0)`; // movemos el slideshow
            }, 30)
            
        }
    }

    return (
        <>    
            <p className="instagram-cuenta">Seguinos en Instagram, en <span className="cuenta">@LaCarneria</span></p>
            <div className='contenedor-principal'>
                <div className="contenedor-slideshow" ref={slideshow}>
                    {images.map(el => <Slide className="slides" name={el.name} id={el.id} />)}
                </div>
                <div className='controles'>
                    <button onClick={prev}><FaChevronLeft/></button>
                    <button onClick={next}><FaChevronRight/></button>
                </div>
            </div>
        </>
    )
}

export default Carousel;
