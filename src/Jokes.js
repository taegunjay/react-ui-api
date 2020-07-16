import React, { Component } from 'react';
import './Jokes.css';
// import Jokes from './Jokes1.js';

function Jokes(props) {
    console.log(props.Jokes);
    console.log(props.Tabs);
    console.log(props.Jokes[props.Tabs]);
    console.log(props.Jokes[props.Tabs].joke);
    return (
        <div className="containerJoke">
            <h1 className="Printing">{props.Jokes[props.Tabs].joke}</h1>
        </div>
    )

}



export default Jokes;