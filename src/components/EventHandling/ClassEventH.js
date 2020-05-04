import React, { Component } from 'react';

class ClassEventH extends Component {
    ClassEventH(){
        console.log('CLicked button')
    }
    render(){
        return(
            <div>
                <button onClick ={this.ClassEventH}>Click</button>
            </div>
        )
    }
}

export default ClassEventH;