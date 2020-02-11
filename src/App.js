import React from 'react';
import ToDoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import './components/TodoComponents/Todo.css'
import { Card, CardTitle } from 'reactstrap'

const todos = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor () {
    super();
    this.state = {
      todos: todos
    };
  }

  //class method to update state on whether todos have been completed or not
  toggleItem = clickedId => {
    const newTodoList = this.state.todos.map(item => {
      if(item.id === clickedId) {
        //toggle completed
        return {
          ...item,
          completed: !item.completed
        }
      }
      else {
        return item;
      }
    });

    this.setState({
      todos: newTodoList
    })

    
  }

  //function to add a new item to the todos array above. pass this function down to TodoForm
  addNewItem = itemTask => {
    const newItem = {
      task: itemTask,
      id: Date.now(), 
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem]
    })
  };


  //function to remove completed items in the todo array
  removeComplete = () => {
    const newArray = this.state.todos.filter(item => item.completed === false)
    console.log(newArray)
    this.setState({
      todos: newArray
    })
  }


  render() {
    console.log('rendering app...')
    console.log("todos after toggleItem ran after onClick of item:", this.state.todos)
    return (
      <div className="cardContainer">
        <Card style={{backgroundImage: 'linear-gradient(to bottom right, #a0ffe6, #81f5ff)', border: "10px solid #a0ffe6"}} className="cardClass">
          <CardTitle className="cardTitle">To-Do Application</CardTitle>

          <ToDoList 
            todosArray={this.state.todos} 
            toggleItem={this.toggleItem}
          />

          <TodoForm 
            addNewItem={this.addNewItem} 
            removeComplete={this.removeComplete}
          />

        </Card>
      </div>
    );
  }
}

export default App;
