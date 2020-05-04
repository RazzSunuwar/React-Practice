import React, { Component } from 'react';
class PropsClass extends Component{
    render(){
        const { name, heroname} = this.props;
        // const { state, setState} = this.state;
        return(
            <div>
            <h1>{ name } a.ka. { heroname }</h1>
        </div>
        )

    }
}
export default PropsClass;