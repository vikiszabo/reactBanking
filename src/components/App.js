import React, {Component} from 'react';
import './App.css';
import Example from "./Example/Example";
import Transactions from "./Transaction/Transactions";
import {Router} from "@reach/router";
import NewTransactionForm from "./Transaction/NewTransaction/NewTransactionForm";
import Navigation from "./UI/Navigation";

class App extends Component {
    render() {
        return (
            <Navigation>
                <Router>
                    <Example text={"React banking"} path="/"/>
                    <NewTransactionForm path="/new-transaction"/>
                    <Transactions path="/transactions"/>
                </Router>
            </Navigation>
        );
    }
}

export default App;
