
import { useState } from "react";


function App() {
  const [todos,SetTodo] = useState([{
    title: "Go to gym",
    description : "Very necessary",
  },
{
  title: "Read Cases",
  description:"Mandatory task"
},
{
  title:"Beat Snehal Day And Night",
  description: "He is harami"
}])

  return(
    <div>

      {
        todos.map((key)=>{
          return(
            <Todo title ={key.title} description = {key.description}></Todo>
          )
          

        })
      }
      <button>Add Todo</button>
    </div>
    
  )



}

function Todo (props){

  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
  
}

export default App
