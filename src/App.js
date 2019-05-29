import React from 'react';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

function Todos ({todoList}){
  return(
    <div>
      {todoList.map(todo => {
        return (
          <div key={todo.id}>
            {todo.task}
          </div>  
        )
      })}
    </div>
  )
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (props) {
    super(props)
    this.state = {
      todoList: todoList,
      newTodos: '',
    }
  }
  changeHandler = (event) => {
      this.setState({
        newTodos: event.target.value,
      });
  }

  addTodos =() => {
    const newToDo ={
      id: Date.now(),
      task: this.state.newTodos,
      completed: false,
    };


    this.setState({
      todoList: this.state.todoList.concat(newToDo),
      newTodos: '',
     })
  }

  render(){
    return (
      <div>
        <h3>Todo List</h3>
        <Todos todoList={this.state.todoList} />
        <TodoAdder 
        newTodos={this.state.newTodos}
        changeHandler={this.changeHandler}
        addTodos={this.addTodos}
        />
       </div>
    )
  }
}

function TodoAdder({ newTodos, changeHandler, addTodos}) {
  return (
    <div>
      <input
        value={newTodos}
        onChange={changeHandler}
        type="text"
      />
      <button onClick={addTodos}>New Task!</button>
    </div>
  )
}

export default App;



// function Todos ({ todoList }){
//   return (
//     <div>
//     {todoList.map(todo => {
//       return (
//         <div>
//           {todo.task}
//         </div>
//       )
//     })}</div>
//   )
// }

// constructor( props ){
//   super(props)
//   this.state = {todoList}
// }

// render() {
//   return (
//     <div>
//       <Todos todoList={this.state.todoList}/>
//     </div>
//   );
// }