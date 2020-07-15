import React, { Component } from 'react';
import './Navbar.css';
// import Jokes from './Jokes1.js';

function Navbar(props) {
    console.log(props)
    return (
        <nav>
            <h1 className="Nav" onClick={props.click}>NAVBAR0</h1>
            <h1 className="Nav" onClick={props.click}>NAVBAR1</h1>
            <h1 className="Nav" onClick={props.click}>NAVBAR2</h1>
            <h1 className="Nav" onClick={props.click}>NAVBAR3</h1>
        </nav>
    )


}



export default Navbar;