import React from 'react';
import ReactDOM from 'react-dom';

// Setup components
// stateless functional component
// always return JSX
// function Greating(){
//     return (
//         <h1>Hello World</h1>
//     )
// }
// three arguments element, propsObject, childern
function Greating(){
    return React.createElement("div", {}, "Hello World")    
}

ReactDOM.render(<Greating />, document.getElementById("root"));

// Note :
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.




