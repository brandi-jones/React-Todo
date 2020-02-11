import React from "react";

const Todo = (props) => {
    return (
        <div
        onClick={() => props.toggleItem(props.todoItem.id)}
        className={`item${props.todoItem.completed ? ' completed' : ''}`}
        >
            <p> ♥ {props.todoItem.task}</p>
        </div>
    );
};

export default Todo;