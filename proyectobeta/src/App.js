import React, { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Main1 from "./components/Main-1";
import Main2 from "./components/Main/Main-2";
import Main3 from './components/Main/Main-3';
import Main4 from "./components/Main/Main-4";
import Carousel from "./components/Carousel/index";
import MainX from "./components/Main/Main-X";
import { GlobalStyles } from "./global-styles";
import { FooterContainer } from "./container/footer";
import { FaTimes } from "react-icons/fa";

function App() {

  const [publication, setPublication ] = useState(true);

  return (
    <div className="App">
      {
        publication === true ?
        <div className="header-text">
            <p>Delivery gratis en órdenes superiores a $50000. Regalo con su compra mayor a $75000</p>
            <div className="icon-close" onClick={ () => setPublication(!publication) }><FaTimes/></div>
        </div> :
        null
      }
      <Navbar />
      <Main1 />
      <Main2 />
      <Main3/>
      <Main4/>
      <Carousel/>
      <MainX/>
      <GlobalStyles />
      <FooterContainer/>
    </div>   
  );
}


export default App;
