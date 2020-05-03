import React, { Component } from 'react';

export class Message extends Component {
    constructor() {
        super()
        this.state = {
            Message: 'Welcome Visitor'
        }
    }
    render() {
        return (
            <div className = "App">
                <h1>{this.state.Message}</h1>
            </div>
        );
    };
};

export default Message;
