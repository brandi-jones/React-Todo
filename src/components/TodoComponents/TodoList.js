// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo.js";

const TodoList = (props) => {
    return(
        <div className="todoList">
            {props.todosArray.map(item => {
                return (
                <Todo key={item.id} todoItem={item} toggleItem={props.toggleItem}/>
                )
            })}
        </div>
    );
}

export default TodoList;