import React from 'react'
import { childProps } from '../utils/functions'
export default props =>
    <div>
        <h1>Família</h1>

        {childProps(props)}
        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, { ...props })
        })} */}
        {/* {React.cloneElement(props.children, { ...props })} */}
        {/* {React.cloneElement(props.children, props )} */}
        {/* { sobrenome: props.sobrenome } */}
        {/* {props.children} */}
    </div>