import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Jokes from './Jokes.js';
let Api = "https://api.icndb.com/jokes/value";
const options = {
  method: 'GET',
  headers: {
    "Accept": 'application/json'
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      Jokes: []

    }//this.state
  }//constructor
  render() {
    return (
      <div className="App">
        <h1>Tabs wireflame</h1>
        <Navbar />
        <Jokes />

      </div>
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

}//class


export default App;
