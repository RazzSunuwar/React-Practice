import React, { useState } from 'react';

function HookCounterFour() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {       //make copy using spread operator
            id: items.length,       //append new item and pass it as argument to setItems function
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item => 
                    (<li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default HookCounterFour;

/*Note:
The useState hook lets you add state of functional components.
In class, the state is always object.
With the useState hook, the state doesn't have to be an object.
The useState hook returns an array with 2 elements.
The first element is the current value of the state, and the second element is a state
setter function.

New state value depends on the prevous state value? You can pass a function to the setter
function.

When dealing with objects or arrays, always make sure to spread your state variable and then
call the setter function */
