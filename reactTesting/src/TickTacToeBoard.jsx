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
