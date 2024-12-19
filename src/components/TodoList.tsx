import React, { useState } from 'react'

const TodoList : React.FC = () => {

    const [todos,setTodos] = useState<string[]>([])

    const addTodo = (task : string) => {
        setTodos([...todos,task])
        // console.log(todos.length);
        console.log(todos)
        
    }

  return (
    <div>
      
    <button onClick={()=>addTodo("new task")}>Add Todo</button>

    {
        todos.map((task,index)=> (
            <div key={index}>
                {task}
            </div>
        ))
    }

    </div>
  )
}

export default TodoList
