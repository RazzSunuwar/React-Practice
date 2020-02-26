import React from 'react';
import ReactDOM from 'react-dom';

// ES6, Nested Components and React tools
function Books() {
    return(
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section> 
    );
};

const Book = () => {
    return (
        <article className="book">
            <CoverImage />
            <Title />
            <Author />
        </article>
    )
};

const CoverImage = () => <img width="200 " src="https://images-na.ssl-images-amazon.com/images/I/91jIv4bCU0L.
AC_UL200_SR200,200_.jpg" alt="coding" />

const Title = () => <h1>Coding</h1>
const Author = () => <p>by Michael Clark</p>


ReactDOM.render(<Books />, document.getElementById("root"));

// Note :   
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.



