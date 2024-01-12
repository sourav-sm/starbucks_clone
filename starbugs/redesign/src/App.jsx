import { useState } from 'react'
import React from 'react'

function App() {
   const [Todos,setTodos]=useState([{
    title:"gym",
    description:"go to gym",
    completed:"false"
   },{
    title:"dsa",
    description:"practise dsa",
    completed:"false"
   }]);
    
  function Addtodo(){
    setTodos([...Todos,{
  // { if Todos={1,2} then [...Todos()]==>{1,2,3}
    title:"new todo",
    description:"desc of new todo"
   }])
  }

  return (
   <div>
     <button onClick={Addtodo}>Add a Todo</button>
     {Todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description}/>
     })}
   </div>
  )
};

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
  </div>
}
export default App;
 