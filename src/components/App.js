import React, { Component } from 'react';
import './App.css';
import Example from "./Example/Example";
import Transaction from "./Transaction/Transaction";
import {Router} from "@reach/router";

class App extends Component {
    render() {
        return (
            <Router>
                <Example text={"React banking"} path="/" />
                <Transaction path="/transaction" />
            </Router>
        );
    }
}

export default App;
