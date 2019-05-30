import React from 'react';




export default function Todos ({todoList, }){

    // const onMarkCoplete = event => {
    //     markTodoComplete(todo.id)
    //   }




    return(
      <div>
        {todoList.map(todo => {
          return (
            <div
            key={todo.id}>
              {todo.task}
              {/* <button onClick={onMarkCoplete} >Mark as Complete</button> */}
            </div>  
          )
        })}
      </div>
    )
  }