import React from 'react';
import ReactDOM from 'react-dom';

// ES6, Nested Components and React tools
function Greating(){
    return (
        <section>
            <Person />
            <Message />
        </section>
    );
};

const Person = () => <h2>Ryan Dahl</h2>;
const Message = () => <p> Hi ! its me Ryan Dahl, Creator of NodeJs </p>; 

ReactDOM.render(<Greating />, document.getElementById("root"));

// Note :   
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.




