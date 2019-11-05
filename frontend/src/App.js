import React, { Component } from 'react';
import './App.css'
import { connect, sendMessage } from './api/index';

class App extends Component {
    constructor(props) {
        super(props);
        connect();
    }

    sendMessage() {
        sendMessage('Hello, Shamil');
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}

export default App;
