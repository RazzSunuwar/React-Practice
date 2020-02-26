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
        <React.Fragment>
            <div>
                <h1>Hello World</h1>
                <ul>
                    <li>
                        <a a href="#" alt="">Hello people</a>
                    </li>
                
                </ul>
            </div>
        
        </React.Fragment>
    )
}

ReactDOM.render(<Greating />, document.getElementById("root"));

// Note :
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.




