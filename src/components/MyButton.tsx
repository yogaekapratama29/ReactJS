import React from 'react'

interface BtnProps {
    customonClick : (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const MyButton :React.FC<BtnProps> = ({customonClick}) => {
    const handleBtnClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    console.log(e);
    console.log("Button Clicked");
    }
  return (
    <button onClick={(e) => {
        customonClick(e)
    }}>
        Click Me
    </button>
  )
}

export default  MyButton
