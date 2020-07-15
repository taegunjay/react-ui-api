import React, { Component } from 'react';
import './Jokes.css';
// import Jokes from './Jokes1.js';

function Jokes(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.Jokes[props.Tabs].joke}</h1>
        </div>
    )

}



export default Jokes;