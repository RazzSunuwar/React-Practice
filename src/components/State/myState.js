import React, { Component } from 'react';

export class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        };
    };

    changeMessage() {
        this.setState({
            message: 'Thank you for suscribing !'
        });
    };
    
    render() {
        return (
            <div className = "App">
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Suscribe</button>
            </div>
        );
    };
};

export default Message;
