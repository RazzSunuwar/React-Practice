import React, { useState, useEffect } from 'react';

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count]) /* Second parameter is the array of values that the effect depend on, 
    if the value don't change between renders the effect is simply not run so good 
    optimization technique to keep in mind */

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick= {() => setCount(count + 1)}>Click {count} times</button>
        </div>
    );
};

export default HookCounterOne;
// Note: useEffect runs after every render
// UseEffect is always keep inside functional component
