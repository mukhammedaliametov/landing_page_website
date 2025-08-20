import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Totop from './components/Totop';

const App = () => {
  return (
    <>
      <Header />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Totop />
      <Footer />
    </>
  );
};

export default App;
