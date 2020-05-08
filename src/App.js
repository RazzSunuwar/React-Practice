import React from 'react';
// import People from './components/Props/myProps';
// import Message from './components/State/myState';
// import Counter from './components/State/Counter';
// import MyProps from './components/Destructuring/PropsFun';
// import PropsClass from './components/Destructuring/PropsClass';
// import FunctionEventH from './components/EventHandling/FunctionEventH';
// import ClassEventH from './components/EventHandling/ClassEventH';
// import LifecycleA from './components/LifecycleMethods/LifecycleA';
import Hero from './components/ErrorBoundary/Hero';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './index.css';

function App() {
    return (
        <div>
            {/* <People />  */}
            {/* <Message /> */}
            {/* <Counter /> */}
            {/* <MyProps name ="Ryan" heroname = "Superman" /> */}
            {/* <PropsClass name ="Bryan" heroname = "Spider man" /> */}
            {/* <FunctionEventH /> */}
            {/* <ClassEventH /> */}
            {/* <LifecycleA /> */}
            <ErrorBoundary>
                <Hero heroName = "Batman" />
            </ErrorBoundary> 

            <ErrorBoundary>
                <Hero heroName = "Superman" /> 
            </ErrorBoundary> 
             
            <ErrorBoundary>
                <Hero heroName = "Joker" />
            </ErrorBoundary>    
        </div>
    );
};

export default App;
