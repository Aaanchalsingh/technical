import React from 'react';
import { Routes , Route } from "react-router-dom";
import Services from './Services';
import Contact from './Contact';
import Home from './Home';
import Footer from './footer';
import About from './About';

function app() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home title="Technicals"/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/services' element={<Services/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default app
