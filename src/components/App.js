import React, { Component } from 'react';
import './App.css';
import Example from "./Example/Example";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Example text="React Banking" />
            </div>
        );
    }
}

export default App;
