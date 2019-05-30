import React from 'react';




export default function Todos ({ todoList, markTodoComplete, id}){

    const onMarkCoplete = event => {
        markTodoComplete(todoList.id)
      }

    const markStyle = {
        color: todoList.completed ? 'green' : 'black',
     };

    return(
      <div>
        {todoList.map(todo => {
          return (
            <div
              style={markStyle} 
              key={todo.id}>
              {todo.task}
              <button onClick={onMarkCoplete}>Mark as Complete</button>
            </div>  
          )
        })}
      </div>
    )
  }