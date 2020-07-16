import React, { Component } from 'react';
import './Navbar.css';
// import Jokes from './Jokes1.js';

function Navbar(props) {
    console.log(props);
    console.log(props.click.bind(this))

    return (
        <nav>
            <h1 className="Nav" onClick={props.click.bind(this)}>JOKE01</h1>
            <h1 className="Nav" onClick={props.click.bind(this)}>JOKE02</h1>
            <h1 className="Nav" onClick={props.click.bind(this)}>JOKE03</h1>
            <h1 className="Nav" onClick={props.click.bind(this)}>JOKE04</h1>
        </nav>
    )


}



export default Navbar;