import React, { Component } from 'react';
import withComponent from './withCounter';

class ClickCounter extends Component {


    render() {
        const { count, incrementCount } = this.props
        return (
            <button onClick = {incrementCount}>
                {this.props.name}Clicked { count } times
            </button>
        )
    };
};

export default withComponent(ClickCounter, 5);
