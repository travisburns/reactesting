import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './Component1'
import Product from './Product'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component1 />
      <Product />
      <Button />
    </>
  )
}

export default App
