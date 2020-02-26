import React from 'react';
import ReactDOM from 'react-dom';

// Setup components
// return single element
// div / section / article
// use camelCase for html attribute 
// className instead of class 
// close every element
// formating
function Greating(){
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

ReactDOM.render(<Greating />, document.getElementById("root"));

// Note :
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.




