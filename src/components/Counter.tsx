import React, { useState } from 'react'

const Counter : React.FC = () => {

    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount(count-1);
        console.log(count); 
    }

    const increment = () => {
        setCount(count+1);
        console.log(count); 
    }

  return (
    <div>
      
    <button onClick={decrement}>decrement</button>
    <p>{count}</p>
    <button onClick={increment}>increment</button>

    </div>
  )
}

export default Counter
