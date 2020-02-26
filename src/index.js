import React from 'react';
import ReactDOM from 'react-dom';

// Setup components
// stateless functional component
// always return JSX
function Greating(){
    return (
        <div>
        <h1>Hello World</h1>
        </div>
    )
}
// three arguments elements, propsObject, children
// function Greating(){
//     return React.createElement("div", {}, )
// }

ReactDOM.render(<Greating />, document.getElementById("root"));

// Note :
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.




