import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// ES6, Nested Components and React tools
function Books() {
    return(
        <section className="books">
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

const Title = () => (
<h1 style={{ fontSize: "2rem", color: "purple" }}>Coding</h1>);
const authorStyle = {
    letterSpacing: "10px",
    color: "green"
};
const Author = () => <p style={{authorStyle}}>by Michael Clark</p>


ReactDOM.render(<Books />, document.getElementById("root"));

// Note :   
// 1st parameter that we're passing argument was what we gonna be rendering
// 2nd parameter is where is gonna be rendered.



