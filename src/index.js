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
    const friends = [
        {name:"Linus Trovald", job:"Software Engineer, Linux Developer", age: "45", company : "Linux"}, 
        {name:"Ryan Dahl", job:"Software Engineer", age : "39", company : "Google"},
        {name:"Brad Traversy", job:"Web Developer", age : "39", company : "Freelancing, Udemy" },
        {name:"Mosh", job:"React Developer", age : "39", company : "Youtube"},
        {name:"Beau", job:"React Developer",age : "39", company : "freecodecamp"}
    ]
    return(
        <section>
            <Person person={friends[0]}/>
            <Person person={friends[1]}/>
            <Person person={friends[2]}/>
            <Person person={friends[3]}/>
            <Person person={friends[4]}/>
        </section>
    )
}

const Person = props => {
    const{name,job,age,company}= props.person
    return(
        <article>
            <h1>{name}</h1>
            <p>{job}</p>
            <p>{age}</p>
            <p>{company}</p>
            <hr />
        </article>
    )
}

ReactDOM.render(<People />, document.getElementById("root"));

// Note :   
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.



