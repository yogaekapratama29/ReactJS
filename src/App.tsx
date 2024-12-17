import React from 'react'
import Hello from './components/Hello'
import MyButton from './components/MyButton'
import User from './components/User'

interface User{
  id : string,
  name : string
}


// rafce
const App = () => {

  const handleBtnClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
    console.log("Button Clicked from the parent btn handler",e);
    
  }
 
  let isAdmin = true

  let users : User[] = [{id:"1",name:"Yoga"},{id:"2",name:"Eka"},{id:"3",name:"Pratama"}]

  return (
    <div>

      <User age = {21}id='01'name='Yoga'/>

      {/* <MyButton customonClick={handleBtnClick}/> */}
        {/* // if false : true
        // isAdmin ? <h1>Hello ADMIN</h1> : <h1>Heloo User</h1>
        // isAdmin ? <Hello/> : <h1>Heloo User</h1> */}

        {/* <h1>All Users</h1>
        <ul>
          {users.map((user)=>(<li key = {user.id}>{user.name}</li>))}
        </ul> */}
          
      {/* <Hello/> */}
        
    </div>
  )
}

export default App

// bisa langsung buat di bawah nya 

// const Hello = () => {
//   return(
//     <div>
//       <h1>Hello React!</h1>
//     </div>
//   )
// }
