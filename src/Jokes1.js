import React, { Component } from 'react';
import './Jokes.css';

let Api = "https://api.icndb.com/jokes/value";
const options = {
    method: 'GET',
    headers: {
        "Accept": 'application/json'
    }
};

class Jokes extends Component() {
    constructor(props) {
        super(props);
        this.state = {
            Jokes: ""

        }//this.state
    }//constructor

    render() {
        // console.log(this.state);
        return (

            <div className="Jokes">
                {/* <h2>{this.state}</h2> */}
            </div >
        );//return
    }
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







export default Jokes;