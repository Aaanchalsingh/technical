import React from 'react'
import Header from "./header.jsx";
import Content from './content.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';

function Home(props) {
    return (
        <>
            <Header />
            <Content title={props.title} />
            <About/>
            <Services/>
            <Contact/>
        </>
    )
}

export default Home;
