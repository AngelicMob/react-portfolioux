import './Button.scss'
import React from 'react'
const Button = (props) => {

    return(
        <button className={"base "+props.variants} onClick={props.action}>{props.children}</button>
    )
}

export default Button