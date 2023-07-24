import React from "react";
import Services from "./Services";
import Contact from "./Contact";
import Home from "./Home";
import Footer from "./footer";
import About from "./About";

function app() {
  return (
    <>
      <Home title="Technicals" />
      <About />
      <Services />
      <Contact />
      <Footer/>
    </>
  );
}

export default app;
