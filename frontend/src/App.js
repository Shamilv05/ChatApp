import React, { Component } from 'react';
import './App.css'
import { connect, sendMessage } from './api/index';
import Header from './components/Header/Header'
import History from "./components/History/index";

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
                <Header />
                <History />
                {/*<button onClick={this.sendMessage}>Send</button>*/}
            </div>
        )
    }
}

export default App;
