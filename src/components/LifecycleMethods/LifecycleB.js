import React from 'react';
import { Component } from 'react';


class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Viswas'
        }
        console.log('LifecycleB constructor');
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    /*access to props and state */
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }   
    render(){
        console.log('LifecycleB render')
        return(
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB;