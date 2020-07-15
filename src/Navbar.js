import React, { Component } from 'react';
import './Navbar.css';
// import Jokes from './Jokes.js';

let Api = "https://api.icndb.com/jokes/value";
const options = {
    method: 'GET',
    headers: {
        "Accept": 'application/json'
    }
};
console.log(Api);

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            Jokes: ""

        }//this.state
    }//constructor
    render() {


        return (

            < div className="Navbar" >
                <button onClick={this.button}>Joke01</button>
                <button onClick={this.button}>Joke02</button>
                <button onClick={this.button}>Joke03</button>
                <button onClick={this.button}>Joke04</button>
            </div >
        );//return
    }//render
    componentDidMount() {

        fetch(Api, options)
            .then(res => {

                return res.json()
            })//then

            .then(res => {
                console.log(res.value[0].joke);
                // this.button = (e) => {
                this.setState(
                    {
                        Jokes: res.value[0].joke
                    }//setStates
                )//this.setStates
            }//then(res)
                // }//button
            )//then
    }//componentDidMount
    button = (e) => {
        // location.reload();
        fetch(Api, options)
            .then(res => {

                return res.json()
            })//then
            .then(res => {
                console.log(res.value[0].joke)
                this.setState(
                    {
                        Jokes: res.value[0].joke
                    }//setstate
                )//this.setstates
            })//then
    }//button

}//class











export default Navbar;