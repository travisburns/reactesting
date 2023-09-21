import React from 'react'
import {useState} from 'react';


const Square = () => {
  const [value, setValue] = useState(null)  
  
  
  function handleClick() {
    setValue('X');
  }
  
  return  (
    <button 
    onClick={handleClick} 
    className='square'
    >
      {value}
   </button>  
      )
 

}


const TickTacToeBoard = () => {  
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  
    return (
        <>
        <div className='Board-row'>
        <Square />
        <Square  />   
        <Square />        
        </div>  
        <div className='Board-row'>
        <Square />
        <Square />
        <Square />    
        </div>  
        <div className='Board-row'>
        <Square />
        <Square />
        <Square />    
        </div>  
            
        </>
    
  )
}

export default TickTacToeBoard
