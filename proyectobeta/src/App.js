import React from "react";
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Headers from "./components/Navbar/Header";
import Main1 from "./components/Main-1";
import Main2 from "./components/Main-2";
import { GlobalStyles } from "./global-styles";
import { FooterContainer } from "./container/footer"


function App() {
  return (
    <div className="App">
      <Headers />
      <Navbar />
      <Main1 />
      <Main2 />
      <>
      <GlobalStyles />
      <FooterContainer/>
      </>
      <div> Gus</div>
    </div>
    
  );
}


export default App;
