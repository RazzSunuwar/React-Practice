import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'

// ES6, Nested Components and React tools

const btnText = "big button";
function Person(){
    // const btn = "search button";
    const name = 'Jorden';
    const lastName = 'Walke';
    return(
        <section>
            {/* <button>search</button> */}
            {/* <button>{btn}</button> */}
            <button>{btnText}</button>
            {/* <h2>Jordan Walke</h2> */}
            <h2>{name + " " + lastName}</h2>

            <p>Info</p>
        </section>
    )
}

ReactDOM.render(<Person />, document.getElementById("root"));

// Note :   
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.



