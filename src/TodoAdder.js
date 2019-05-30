import React from 'react';


export default function TodoAdder({ newTodos, changeHandler, addTodos }) {
    return (
      <div>
        <input
          value={newTodos}
          onChange={changeHandler}
          type="text"
          placeholder="...todo"
        />
        <button onClick={addTodos}>Add Task</button>
        
      </div>
    )
  }