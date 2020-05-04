import React from 'react';

const FunctionEventH = () => {

    function enventHandler(){
        console.log('Button clicked');
    }
    return (
        <div>
            <button onClick = {enventHandler}>Click</button>
        </div>
    )
}

export default FunctionEventH;
