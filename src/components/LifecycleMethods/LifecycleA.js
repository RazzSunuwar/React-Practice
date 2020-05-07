import React from 'react';
import { Component } from 'react';
import LifecycleB from './LifecycleB';


class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'JavaScript'
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
    
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'ReactJS'
        })
    }

    render(){
        console.log('LifecycleA render')
        return(
            <div>
                <div>LifecycleA</div> {/* Parent component */}
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />  {/* Child component */}
            </div>
        )
    }
}

export default LifecycleA;