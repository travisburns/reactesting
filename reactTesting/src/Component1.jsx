import React from 'react'

// Make sure to use stored data whenever possible such in this case. It makes it more maintable and scalable code. Especially in the case that you wanted to map this fo simulair ui
// in the style attribute below, notice how it is double bracketed? It is a object being passed as data this is why. Styles in JSX are passed as objects. 

const user ={
    name: 'Hedy Lamarr',
    imageUrl: 'https://1fid.com/wp-content/uploads/2022/07/girl-anime-wallaper-25.jpg',
    imageSize: 90
}


const Component1 = () => {
   



  return (
    <div>
        <h1>{user.name}</h1>
      <button>I'm a button</button>
      <img 
        className='avatar' 
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style = {{
            width: user.imageSize,
            height: user.imageSize
        }}
      />
    </div>
  )
}

export default Component1
