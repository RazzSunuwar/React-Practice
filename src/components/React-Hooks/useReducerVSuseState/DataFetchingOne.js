import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState('')  //Set Empty string for error
    const [ post, setPost ] = useState({})  //Set Empty object to hold post fetch from the API endpoint


    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        // three state transition
        .then(response => {
            setLoading(false)
            setPost(response.data)  //contain post object
            setError('')  //to clear previous any message if it all they are being displayed
        })
        .catch(error => {
            setLoading(false)
            setPost({})/*set empty object to hide any existing post that might display in the browser*/
            setError('Something went wrong!')
        })
    }, []) //Empty array for sideEffect

    return (
        <div>
            {loading ? 'Loading' : post.title }
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne;

/* Note: useEffect accept arrow function as first parameter and for second parameter accept empty 
dependency array to insure API is only call one time */
