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

function Todos ({ todoList }) {
  return (
    <div>
      {todoList.map(todo => {
        return (
          <div>
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
  constructor(props){
    super(props)
    this.state = {todoList}
    
  }
  
  render(){
    return (
      <div>
        <Todos todoList={this.state.todoList} />
      </div>
    )
  }
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