import React from 'react';
// import People from './components/Props/myProps';
// import Message from './components/State/myState';
// import Counter from './components/State/Counter';
import MyProps from './components/Destructuring/PropsFun';
import PropsClass from './components/Destructuring/PropsClass';
import './index.css';

function App() {
    return (
        <div>
            {/* <People />  */}
            {/* <Message /> */}
            {/* <Counter /> */}
            <MyProps name ="Ryan" heroname = "Superman" />
            <PropsClass name ="Bryan" heroname = "Spider man" />
        </div>
    );
};

export default App;
