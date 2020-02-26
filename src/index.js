import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'

// PROPS (PROPERTIES) = ARGUMENTS TO COMPONENTS

// Parameters and Arguments             //component in react are function
function sayName(name){
console.log(name);
}
sayName("Linus");

function People(){
    return(
        <section>
            <Person />
            <Person1 />
        </section>
    )
}

const Person = () => {
    return(
        <article>
            <h1>Lunus Trovald</h1>
            <p>Software Engineer, Linux Developer</p>
            <hr />
        </article>
    )
}

const Person1 = () => {
    return(
        <article>
            <h1>Ryan Dahl</h1>
            <p>Software Engineer</p>
            <hr />
        </article>
    )
}

ReactDOM.render(<People />, document.getElementById("root"));

// Note :   
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.



