import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './carousel.css';

// images
import img01 from '../../images/carousel/carousel01.jpg';
import img02 from '../../images/carousel/carousel02.jpg';
import img03 from '../../images/carousel/carousel03.jpg';
import img04 from '../../images/carousel/carousel04.jpg';
import img05 from '../../images/carousel/carousel05.jpg';
import img06 from '../../images/carousel/carousel06.jpg';
import img07 from '../../images/carousel/carousel07.jpg';
import img08 from '../../images/carousel/carousel08.jpg';

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={8}
      >
        <Slider className="slider"> 
          <Slide index={1}><Image src={img01} alt="img" /></Slide>
          <Slide index={2}><Image src={img02} alt="img" /></Slide>
          <Slide index={3}><Image src={img03} alt="img" /></Slide>
          <Slide index={4}><Image src={img04} alt="img" /></Slide>
          <Slide index={5}><Image src={img05} alt="img" /></Slide>
          <Slide index={6}><Image src={img06} alt="img" /></Slide>
          <Slide index={7}><Image src={img07} alt="img" /></Slide>
          <Slide index={8}><Image src={img08} alt="img" /></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}