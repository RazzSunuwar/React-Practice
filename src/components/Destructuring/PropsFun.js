import React from 'react';

// const MyProps = ({ name, heroname }) =>{
//     return(
//         <div>
//             <h1>
//                 Hello { name } a.k.a { heroname }
//             </h1>
//         </div>
//     )

// }

const MyProps = props =>{
    const { name, heroname } = props;
    return(
        <div>
            <h1>
                Hello { name } a.k.a { heroname }
            </h1>
        </div>
    )

}

export default MyProps;