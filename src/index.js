import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'

// PROPS (PROPERTIES) = ARGUMENTS TO COMPONENTS

// Parameters and Arguments             //component in react are function
// function sayName(name){
// console.log(name);
// }
// sayName("Linus");

function People(){
    return(
        <section>
            <Person name="Linus Trovald" job="Software Engineer, Linux Developer" />
            <Person name="Ryan Dahl" job="Software Engineer" age = "39" />
            <Person name="Brad Traversy" job="Web Developer" />
            <Person name="Mosh" job="React Developer" />
            <Person name="Beau" job="JavaScript Developer" />
        </section>
    )
}

const Person = props => {
    console.log(props);
    return(
        <article>
            <h1>{props.name}</h1>
            <p>{props.job}</p>
            {/* <p>{props.age}</p> */}
            <hr />
        </article>
    )
}

ReactDOM.render(<People />, document.getElementById("root"));

// Note :   
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.



