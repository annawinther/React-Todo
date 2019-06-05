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
                    color: todo.complete ? '#BC8F8F' : 'black',
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