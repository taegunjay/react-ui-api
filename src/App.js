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
    this.click = this.click.bind(this);
    this.state = {
      Jokes: [],
      currentTab: 0
    }//this.state
  }//constructor
  click(e) {
    console.dir(e.target)
    // this.setState({
    //   currentTab: navNumber
    // })

  }
  render() {
    // console.log(this.state);
    if (this.state.Jokes.length !== 0) {

      return (
        <div className="App">
          <h1 className="Header">Tabs wireflame</h1>
          <Navbar click={this.click} />
          <Jokes Tabs={this.state.currentTab} Jokes={this.state.Jokes} />

        </div>
      );//return
    }
    else { return null }
  }//render
  componentDidMount() {

    fetch(Api, options)
      .then(res => {

        return res.json()
      })//then

      .then(res => {
        // console.log(res.value);

        // this.button = (e) => {
        this.setState(
          {
            Jokes: res.value
          }
          //setStates
        )//this.setStates
      }//then(res)
        // }//button
      )//then
  }//componentDidMount

}//class


export default App;
