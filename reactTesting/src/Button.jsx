import React from 'react'

const Button = () => {
  function handleclick() {
    alert('You clicked me')
  }


  return (
    <button onClick={handleclick}>
        Click me
    </button>
  )
}

export default Button
