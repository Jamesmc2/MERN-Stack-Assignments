import React from 'react'

const Todo = ({todo,handleCheck,handleDestroy,idx}) => {
    const style = {
        textDecoration: "line-through"
    }
    return(
        <div>
            <p style={todo.isClicked ? style: null} >{todo.task}</p>
            <input type="checkbox" checked={todo.isClicked} onClick={(e) => handleCheck(e,idx)} readOnly/>
            <button className="btn btn-danger" onClick={(e) => handleDestroy(e,idx)}>Delete</button>
        </div>
    );
}
export default Todo