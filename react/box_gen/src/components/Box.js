import React from 'react';

const Box = ({color})=> {
    const style = {
        height: '200px',
        width: '200px',
        backgroundColor: color
    }
    return (
        <div style={style}>

        </div>
    )
}
export default Box