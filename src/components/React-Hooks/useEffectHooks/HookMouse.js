import React, {useState, useEffect } from 'react';

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mouseover', logMousePosition)

            // cleanup function for MouseContainer
            return () => {
                console.log('Component unmounting code')
                window.removeEventListener('mouseover', logMousePosition)
            }
    }, [])  //this particular effect (empty array) doesn't depend on any prop or state


    return (
        <div>
            Hooks x - {x} Y - {y}
        </div>
    );
};

export default HookMouse;
