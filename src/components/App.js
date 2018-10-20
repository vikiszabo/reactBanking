import React, {Component} from 'react';
import './App.css';
import Example from "./Example/Example";
import Transactions from "./Transaction/Transactions";
import {Router} from "@reach/router";
import Navigation from "./UI/Navigation/Navigation";
import NewTransaction from "./Transaction/NewTransaction/NewTransaction";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost, faList, faPlus, } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost, faList, faPlus);

class App extends Component {
    render() {
        return (
            <Navigation>
                <Router>
                    <Example text={"React banking"} path="/"/>
                    <NewTransaction path="/new-transaction"/>
                    <Transactions path="/transactions"/>
                </Router>
            </Navigation>
        );
    }
}

export default App;
