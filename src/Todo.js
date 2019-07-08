import React from 'react';

export default function Todos({ todoList, markTodoComplete }) {

    return (
        <div className="todo-container">
            {todoList.map(todo => {
                const onMarkComplete = () => {
                    markTodoComplete(todo.id)
                }
                const markStyle = {
                    cursor: 'pointer',
                    textDecoration: todo.complete ? 'line-through' : 'none',
                    color: todo.complete ? ' #618685' : 'black',
                };

                return (
                    <div 
                        className="todoItem"
                        style={markStyle}
                        onClick={onMarkComplete}
                        key={todo.id}
                        >
                        {todo.task}
                    </div>
                )
            })}
        </div>
    )
}