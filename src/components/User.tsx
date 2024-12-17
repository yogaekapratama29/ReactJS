import React from 'react'

interface User{
    id : string,
    name : string,
    age? : number 
}

const User : React.FC<User> = ({name,id,age = 20}) => {

    // console.log(props);
    
  return (
    <div>
      Hallo User{name}
      {age && <p>the age is {age}</p>}
    </div>
  )
}

export default User

