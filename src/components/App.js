import React, { Component } from 'react';
import './App.css';
import Example from "./Example/Example";
import Transactions from "./Transaction/Transactions";
import {Router} from "@reach/router";
import NewTransactionForm from "./Transaction/NewTransaction/NewTransactionForm";
import SavingsAccount from "./savingsAccount/SavingsAccount";

class App extends Component {
    render() {
        return (
            <Router>
                <Example text={"React banking"} path="/" />
                <Transactions path="transactions" />
                <NewTransactionForm  path="new-transaction"/>
                <SavingsAccount path="savingsaccount" />
            </Router>
        );
    }
}

export default App;
