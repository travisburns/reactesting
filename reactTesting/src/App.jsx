import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './Component1'
import Product from './Product'
import Button from './Button'
import TickTacToeBoard from './TickTacToeBoard'

function App() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Component1 />
      <Product />
      <Button count={count} onClick={handleClick}/>
      <Button count={count} onClick={handleClick}/>
      <TickTacToeBoard />
    </>
  )
}

export default App
