import React from 'react';
// import People from './components/Props/myProps';
// import Message from './components/State/myState';
// import Counter from './components/State/Counter';
// import MyProps from './components/Destructuring/PropsFun';
// import PropsClass from './components/Destructuring/PropsClass';
// import FunctionEventH from './components/EventHandling/FunctionEventH';
// import ClassEventH from './components/EventHandling/ClassEventH';
// import LifecycleA from './components/LifecycleMethods/LifecycleA';
// import Hero from './components/ErrorBoundary/Hero';
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// import ClickCounter from './components/HOC/ClickCounter';
// import HoverCounter from './components/HOC/HoverCounter';
// import ClassCounter from './components/React-Hooks/useStateHook/ClassCounter';
// import HookCounter from './components/React-Hooks/useStateHook/HookCounter';
// import HookCOunterFour from './components/React-Hooks/useStateHook/HookCounterFour';
// import HookCounterOne from './components/React-Hooks/useEffectHooks/HookCounterOne';
// import HookMouse from './components/React-Hooks/useEffectHooks/HookMouse';
// import MouseCounter from './components/React-Hooks/useEffectHooks/MouseContainer';
// import IntervalHookCounter from './components/React-Hooks/useEffectHooks/IntervalHookCounter';
// import DataFecthing from './components/React-Hooks/DataFetching/DataFetching';
// import ComponentC from './components/React-Hooks/UseContextHooks/ComponentC';
// import CounterOne from './components/React-Hooks/useReducerHook/CounterOne';
// import CounterTwo from './components/React-Hooks/useReducerHook/CounterTwo';
import CounterThree from './components/React-Hooks/useReducerHook/CounterThree';


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
            {/* <ErrorBoundary>
                <Hero heroName = "Batman" />
            </ErrorBoundary> 

            <ErrorBoundary>
                <Hero heroName = "Superman" /> 
            </ErrorBoundary> 
             
            <ErrorBoundary>
                <Hero heroName = "Joker" />
            </ErrorBoundary>     */}

            {/* <ClickCounter name ="Linux" /> */}
            {/* <HoverCounter /> */}
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCOunterFour /> */}
            {/* <HookCounterOne /> */}
            {/* <HookMouse /> */}
            {/* <MouseCounter /> */}
            {/* <IntervalHookCounter /> */}
            {/* <DataFecthing/> */}
            {/* <CounterOne /> */}
            {/* <CounterTwo /> */}
            <CounterThree />
        </div>
    );
};



// // Use context
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// function App() {
//     return (
//         <div className="App">
//             <UserContext.Provider value={'React'} >
//                 <ChannelContext.Provider value={'JavaScript'}>
//                 <ComponentC />
//                 </ChannelContext.Provider>
//             </UserContext.Provider>
//         </div>
//     )
// }



export default App;
