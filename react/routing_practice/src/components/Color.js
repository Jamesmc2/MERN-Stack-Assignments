import React from 'react'


const Color = props => {
    
    const mystyle = {
        color : props.textColor,
        backgroundColor : props.bgColor
    }
    return (
        <div>
            <h1 style={mystyle} >Your word is: {props.word}</h1>
        </div>
        )
}

export default Color