import React, { Component } from 'react';
import './History.scss';

class History extends Component {
    render() {
        const messages = this.props.history.map((msg, index) => {
            return <p key={index}>{msg.data}</p>
        });

        return (
            <div className="history">
                <h2>History of chats</h2>
                {messages}
            </div>
        );
    }
}

export default History;