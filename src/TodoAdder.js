import React from 'react';

export default function TodoAdder({ newTodos, changeHandler, addTodos }) {
    return (
      <div className="todoAdder-container">
        <input 
          className="todo-input"
          value={newTodos}
          onChange={changeHandler}
          type="text"
          placeholder="...todo"
        />
        <button className="btn" onClick={addTodos}>Add Task</button>
      </div>
    )
  }