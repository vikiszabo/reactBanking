import React, {Component} from 'react';
import './App.css';
import Example from "./Example/Example";
import {Router} from "@reach/router";
import Navigation from "./UI/Navigation/Navigation";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost, faList, faPlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import TransactionsContainer from "../store/containers/TransactionsContainer/TransactionsContainer";
import NewTransactionContainer from "../store/containers/NewTransactionContainer/NewTransactionContainer";
import TransactionDetailContainer from "../store/containers/TransactionDetailContainer/TransactionDetailContainer";

library.add(faGhost, faList, faPlus, faCalendarAlt);

class App extends Component {
    render() {
        return (
            <Navigation>
                <Router>
                    <Example text={"React banking"} path="/"/>
                    <NewTransactionContainer path="/new-transaction"/>
                    <TransactionDetailContainer path="transactions/:id" />
                    <TransactionsContainer path="transactions">

                    </TransactionsContainer>
                </Router>
            </Navigation>
        );
    }
}

export default App;
