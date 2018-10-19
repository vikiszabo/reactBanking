import React, {Component} from 'react';
import './App.css';
import Example from "./Example/Example";
import Transactions from "./Transaction/Transactions";
import {Router} from "@reach/router";
import NewTransactionForm from "./Transaction/NewTransaction/NewTransactionForm";
import SavingsAccount from "./Accounts/SavingsAccount/SavingsAccounts";
import Navigation from "./UI/Navigation";
import AccountsPage from "./Accounts/AccountsPage";
import CurrentAccounts from "./Accounts/currentAccount/CurrentAccounts";


class App extends Component {
    render() {
        return (

                <Navigation>
                    <Router>
                        <Example text={"React banking"} path="/"/>
                        <NewTransactionForm path="/new-transaction"/>
                        <Transactions path="/transactions"/>
                        <SavingsAccount path="/savingsaccount" />
                        <CurrentAccounts path="/currentaccount" />
                        <AccountsPage path="accounts"/>
                    </Router>
                </Navigation>

        );
    }
}

export default App;
