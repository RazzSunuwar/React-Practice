import React from 'react';
import { Component } from 'react';
import LifecycleB from './LifecycleB';


class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Viswas'
        }
        console.log('LifecycleA constructor');
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    /*access to props and state */
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }   
    render(){
        console.log('LifecycleA render')
        return(
            <div>
                <div>LifecycleA</div> {/* Parent component */}
                <LifecycleB />  {/* Child component */}
            </div>
        )
    }
}

export default LifecycleA;